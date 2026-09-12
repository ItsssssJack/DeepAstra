#!/usr/bin/env python3
"""Reproduce the Astra condition from the shared CSV source files. Integer cents throughout."""
from pathlib import Path
import csv, json
from collections import defaultdict
from datetime import datetime

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT.parent / 'shared'

def rows(name):
    with (SOURCE / name).open(newline='') as handle:
        return list(csv.DictReader(handle))

raw = rows('orders.csv')
refund_rows = rows('refunds.csv')
ad_rows = rows('ad_spend.csv')
orders = {}
for row in raw:
    if row['order_id'] in orders:
        assert row == orders[row['order_id']], 'Conflicting duplicate order'
    orders[row['order_id']] = row
refunds = defaultdict(int)
for row in refund_rows:
    refunds[row['order_id']] += int(row['amount_cents'])
paid = [row for row in orders.values() if row['status'] == 'paid']
country = defaultdict(lambda: {'net_cents': 0, 'contribution_cents': 0, 'orders': 0})
channel = defaultdict(lambda: {'net_cents': 0, 'spend_cents': 0, 'orders': 0})
quarters = defaultdict(int)
grain = defaultdict(lambda: {'net_cents':0,'contribution_cents':0,'orders':0,'refund_cents':0})
for row in paid:
    date = datetime.strptime(row['date'], '%Y-%m-%d')
    assert date.year == 2025 and 7 <= date.month <= 12, 'Unexpected reporting period'
    net = int(row['gross_cents']) - int(row['discount_cents']) - refunds[row['order_id']]
    contribution = net - int(row['cogs_cents']) - int(row['fulfilment_cents'])
    quarters['q3' if date.month < 10 else 'q4'] += net
    country[row['country']]['net_cents'] += net
    country[row['country']]['contribution_cents'] += contribution
    country[row['country']]['orders'] += 1
    channel[row['channel']]['net_cents'] += net
    channel[row['channel']]['orders'] += 1
    metric = grain[(row['date'][:7],row['country'],row['channel'])]
    metric['net_cents'] += net
    metric['contribution_cents'] += contribution
    metric['orders'] += 1
    metric['refund_cents'] += refunds[row['order_id']]
spend_grain = defaultdict(int)
for row in ad_rows:
    channel[row['channel']]['spend_cents'] += int(row['spend_cents'])
    spend_grain[(row['date'][:7],row['channel'])] += int(row['spend_cents'])
for metric in channel.values():
    metric['roas'] = metric['net_cents'] / metric['spend_cents'] if metric['spend_cents'] else None
best_country = max(country, key=lambda name: country[name]['contribution_cents'])
best_channel = max(channel, key=lambda name: channel[name]['roas'] if channel[name]['roas'] is not None else float('-inf'))
q3, q4 = quarters['q3'], quarters['q4']
growth = (q4 - q3) / q3 * 100
c = country[best_country]
ch = channel[best_channel]
usd = lambda cents: f'{"-" if cents < 0 else ""}${abs(cents) / 100:,.2f}'
results = {
    'counts': {'raw_orders':len(raw),'unique_orders':len(orders),'paid_orders':len(paid),'duplicates_removed':len(raw)-len(orders),'refund_rows':len(refund_rows)},
    'quarter': {'q3_net_cents':q3,'q4_net_cents':q4,'change_cents':q4-q3,'growth_pct':growth},
    'country': {'name':best_country,'net_cents':c['net_cents'],'contribution_cents':c['contribution_cents'],'margin_pct':c['contribution_cents']/c['net_cents']*100},
    'channel': {'name':best_channel,'net_cents':ch['net_cents'],'spend_cents':ch['spend_cents'],'roas':ch['roas']},
    'insights': [
        f'Q4 net revenue of {usd(q4)} versus {usd(q3)} in Q3 changed by {usd(q4-q3)} ({growth:.2f}%). Plan inventory and fulfilment against observed Q4 demand, without extrapolating beyond this period.',
        f'{best_country} generated the highest total contribution: {usd(c["contribution_cents"])} from {usd(c["net_cents"])} net revenue, a {c["contribution_cents"]/c["net_cents"]*100:.2f}% contribution margin. Protect fulfilment capacity in this market; contribution excludes ad spend and is not final profit.',
        f'{best_channel} had the highest net-revenue ROAS: {ch["roas"]:.2f}x, from {usd(ch["net_cents"])} net revenue and {usd(ch["spend_cents"])} ad spend. Validate incrementality before increasing budget: attribution is not causation and ROAS is not profit.'
    ]
}
assert sum(x['net_cents'] for x in country.values()) == q3+q4 == sum(x['net_cents'] for x in channel.values())
assert sum(x['orders'] for x in grain.values()) == len(paid)
report = {
    'results':results,
    'totals':{'net_cents':q3+q4,'contribution_cents':sum(x['contribution_cents'] for x in country.values()),'ad_spend_cents':sum(int(x['spend_cents']) for x in ad_rows),'refund_cents':sum(refunds[x['order_id']] for x in paid)},
    'countries':[{'name':name,**metric} for name,metric in sorted(country.items(),key=lambda kv:kv[1]['contribution_cents'],reverse=True)],
    'channels':[{'name':name,**metric} for name,metric in sorted(channel.items(),key=lambda kv:kv[1]['roas'] or 0,reverse=True)],
    'grain':[{'month':key[0],'country':key[1],'channel':key[2],**metric} for key,metric in sorted(grain.items())],
    'spend_grain':[{'month':key[0],'channel':key[1],'spend_cents':value} for key,value in sorted(spend_grain.items())],
    'source':{'period':'1 July – 31 December 2025','ad_spend_rows':len(ad_rows),'unmatched_refund_rows':sum(row['order_id'] not in orders for row in refund_rows),'nonpaid_orders_excluded':len(orders)-len(paid)}
}
(ROOT/'results.json').write_text(json.dumps(results,indent=2)+'\n')
(ROOT/'report-data.json').write_text(json.dumps(report,separators=(',',':'))+'\n')
print(json.dumps(results,indent=2))
