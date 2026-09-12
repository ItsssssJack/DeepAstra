#!/usr/bin/env python3
"""
Business intelligence analysis for the synthetic commerce dataset.

Inputs (integer cents): orders.csv, refunds.csv, ad_spend.csv
Outputs: results.json (schema per TASK.txt), report_data.json (embedded into index.html)

Accounting rules implemented (see methodology.txt):
  * Deduplicate orders by order_id (duplicate rows are identical in this dataset).
  * Only status == "paid" orders count toward revenue, contribution and ROAS.
  * Net revenue = gross_cents - discount_cents - sum(matched refund amounts).
  * Refunds are attributed to the ORIGINAL ORDER's date/country/channel.
  * Contribution = net revenue - cogs_cents - fulfilment_cents.
  * ROAS = net revenue / ad spend. Ad spend is counted for every date in the period.
  * Q3 = 2025-07-01..2025-09-30, Q4 = 2025-10-01..2025-12-31. No extrapolation.
"""

import csv
import json
import os
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
SHARED = os.path.normpath(os.path.join(HERE, "..", "shared"))
if not os.path.exists(os.path.join(SHARED, "orders.csv")):
    SHARED = HERE  # fall back to a local copy of the inputs if present


def path(name):
    return os.path.join(SHARED, name)


def load(name):
    with open(path(name), newline="") as fh:
        return list(csv.DictReader(fh))


# ---------------------------------------------------------------- load
raw_orders = load("orders.csv")
refund_rows = load("refunds.csv")
ad_rows = load("ad_spend.csv")

raw_order_count = len(raw_orders)
refund_row_count = len(refund_rows)


# ---------------------------------------------------------------- dedupe + filter
def dedupe(rows):
    """Duplicate order_id rows are byte-identical; keep one row per order_id."""
    seen = {}
    order = []
    for row in rows:
        oid = row["order_id"]
        if oid in seen:
            continue
        seen[oid] = row
        order.append(row)
    return order


unique_orders = dedupe(raw_orders)
duplicates_removed = raw_order_count - len(unique_orders)
paid_orders = [r for r in unique_orders if r["status"] == "paid"]

paid_ids = {r["order_id"] for r in paid_orders}

# refunds matched to a paid order_id, keyed for attribution to the order's dimensions
refund_by_order = defaultdict(int)
matched_refund_rows = 0
refunds_on_unpaid = 0
for row in refund_rows:
    oid = row["order_id"]
    if oid in paid_ids:
        refund_by_order[oid] += int(row["amount_cents"])
        matched_refund_rows += 1
    else:
        refunds_on_unpaid += 1

# ---------------------------------------------------------------- order-level facts
orders = []
for r in paid_orders:
    gross = int(r["gross_cents"])
    discount = int(r["discount_cents"])
    cogs = int(r["cogs_cents"])
    fulfil = int(r["fulfilment_cents"])
    refund = refund_by_order.get(r["order_id"], 0)
    net = gross - discount - refund
    orders.append(
        {
            "order_id": r["order_id"],
            "date": r["date"],
            "month": r["date"][:7],
            "quarter": "Q3" if r["date"] < "2025-10-01" else "Q4",
            "country": r["country"],
            "channel": r["channel"],
            "gross": gross,
            "discount": discount,
            "refund": refund,
            "net": net,
            "contribution": net - cogs - fulfil,
        }
    )

# ---------------------------------------------------------------- aggregation helper
def aggregate(rows, key):
    out = defaultdict(lambda: {"net": 0, "contribution": 0, "orders": 0, "refund": 0})
    for o in rows:
        b = out[o[key]]
        b["net"] += o["net"]
        b["contribution"] += o["contribution"]
        b["refund"] += o["refund"]
        b["orders"] += 1
    return out


by_quarter = aggregate(orders, "quarter")
by_country = aggregate(orders, "country")
by_month = aggregate(orders, "month")

q3_net = by_quarter["Q3"]["net"]
q4_net = by_quarter["Q4"]["net"]
change_cents = q4_net - q3_net
growth_pct = (change_cents / q3_net * 100.0) if q3_net else 0.0

# ---------------------------------------------------------------- insight 2: country contribution
country_ranked = sorted(
    by_country.items(), key=lambda kv: kv[1]["contribution"], reverse=True
)
top_country, top_country_stats = country_ranked[0]
country_margin_pct = (
    top_country_stats["contribution"] / top_country_stats["net"] * 100.0
    if top_country_stats["net"]
    else 0.0
)

# ---------------------------------------------------------------- insight 3: channel ROAS
spend_total = 0
spend_by_channel = defaultdict(int)
spend_by_date = defaultdict(int)
for r in ad_rows:
    c = int(r["spend_cents"])
    spend_total += c
    spend_by_channel[r["channel"]] += c
    spend_by_date[r["date"]] += c

by_channel = aggregate(orders, "channel")
channel_roas = {}
for name, stats in by_channel.items():
    spend = spend_by_channel.get(name, 0)
    channel_roas[name] = (stats["net"] / spend) if spend else 0.0

top_channel = max(channel_roas, key=lambda n: channel_roas[n])
channel_stats = by_channel[top_channel]
channel_roas_value = channel_roas[top_channel]

# ---------------------------------------------------------------- compact cube for the UI
# Grain: date x country x channel (paid orders only) -> filterable in the browser.
cube = defaultdict(lambda: {"net": 0, "gross": 0, "discount": 0, "refund": 0, "cogs": 0,
                            "fulfilment": 0, "contribution": 0, "orders": 0})
for r, o in zip(paid_orders, orders):
    k = (o["date"], o["country"], o["channel"])
    b = cube[k]
    b["net"] += o["net"]
    b["gross"] += o["gross"]
    b["discount"] += o["discount"]
    b["refund"] += o["refund"]
    b["cogs"] += int(r["cogs_cents"])
    b["fulfilment"] += int(r["fulfilment_cents"])
    b["contribution"] += o["contribution"]
    b["orders"] += 1

cube_rows = [
    [d, co, ch, v["orders"], v["gross"], v["discount"], v["refund"], v["net"],
     v["cogs"], v["fulfilment"], v["contribution"]]
    for (d, co, ch), v in sorted(cube.items())
]

report_data = {
    "generated_from": ["orders.csv", "refunds.csv", "ad_spend.csv"],
    "period": {"start": "2025-07-01", "end": "2025-12-31"},
    "quarter_bounds": {"Q3": ["2025-07-01", "2025-09-30"], "Q4": ["2025-10-01", "2025-12-31"]},
    "cube_columns": ["date", "country", "channel", "orders", "gross", "discount",
                     "refund", "net", "cogs", "fulfilment", "contribution"],
    "cube": cube_rows,
    "spend": [[d, ch, v] for (d, ch), v in sorted(
        ((k, spend_by_channel_date) for k, spend_by_channel_date in
         defaultdict(int, {}).items()))],
}
# build spend rows properly: date x channel
spend_rows = defaultdict(int)
for r in ad_rows:
    spend_rows[(r["date"], r["channel"])] += int(r["spend_cents"])
report_data["spend"] = [[d, ch, v] for (d, ch), v in sorted(spend_rows.items())]

report_data["totals"] = {
    "net_cents": sum(o["net"] for o in orders),
    "contribution_cents": sum(o["contribution"] for o in orders),
    "gross_cents": sum(o["gross"] for o in orders),
    "discount_cents": sum(o["discount"] for o in orders),
    "refund_cents": sum(o["refund"] for o in orders),
    "spend_cents": spend_total,
    "paid_orders": len(orders),
}
report_data["by_month"] = {k: {"net": v["net"], "contribution": v["contribution"], "orders": v["orders"]}
                           for k, v in sorted(by_month.items())}
report_data["by_country"] = {k: {"net": v["net"], "contribution": v["contribution"], "orders": v["orders"]}
                             for k, v in sorted(by_country.items())}
report_data["by_channel"] = {k: {"net": v["net"], "contribution": v["contribution"], "orders": v["orders"],
                                 "spend": spend_by_channel.get(k, 0), "roas": channel_roas[k]}
                             for k, v in sorted(by_channel.items())}
report_data["refunds_on_unpaid_orders_excluded"] = refunds_on_unpaid
report_data["matched_refund_rows"] = matched_refund_rows
report_data["counts"] = {
    "raw_orders": raw_order_count,
    "unique_orders": len(unique_orders),
    "paid_orders": len(paid_orders),
    "duplicates_removed": duplicates_removed,
    "refund_rows": refund_row_count,
    "matched_refund_rows": matched_refund_rows,
    "refunds_on_unpaid_orders": refunds_on_unpaid,
}
report_data["quarter_detail"] = {
    q: {
        "net": by_quarter[q]["net"],
        "contribution": by_quarter[q]["contribution"],
        "orders": by_quarter[q]["orders"],
        "refunds": by_quarter[q]["refund"],
        "aov": (by_quarter[q]["net"] / by_quarter[q]["orders"]) if by_quarter[q]["orders"] else 0,
    }
    for q in ("Q3", "Q4")
}
report_data["drivers"] = {
    "orders_delta": by_quarter["Q4"]["orders"] - by_quarter["Q3"]["orders"],
    "orders_delta_pct": (by_quarter["Q4"]["orders"] - by_quarter["Q3"]["orders"]) / by_quarter["Q3"]["orders"] * 100.0,
    "refund_delta": by_quarter["Q4"]["refund"] - by_quarter["Q3"]["refund"],
    "refund_delta_pct": (by_quarter["Q4"]["refund"] - by_quarter["Q3"]["refund"]) / by_quarter["Q3"]["refund"] * 100.0,
    "aov_q3": by_quarter["Q3"]["net"] / by_quarter["Q3"]["orders"],
    "aov_q4": by_quarter["Q4"]["net"] / by_quarter["Q4"]["orders"],
}
report_data["country_runner_up"] = (
    country_ranked[1][0] if len(country_ranked) > 1 else None
)
report_data["country_lead_cents"] = (
    top_country_stats["contribution"] - country_ranked[1][1]["contribution"]
    if len(country_ranked) > 1 else 0
)
report_data["channel_runner_up"] = sorted(channel_roas.items(), key=lambda kv: -kv[1])[1][0]
report_data["channel_runner_up_roas"] = sorted(channel_roas.items(), key=lambda kv: -kv[1])[1][1]

# ---------------------------------------------------------------- insights (exactly three)
direction = "up" if change_cents >= 0 else "down"
insights = [
    "Q4 net revenue came in at ${q4:,.0f}, {dir} ${abs_change:,.0f} ({sign}{growth:.1f}%) versus Q3. It is not a pricing problem: net AOV was flat at ${aov4:,.0f} versus ${aov3:,.0f}, while paid orders fell by {orders_delta:,} and refunds rose ${refund_delta:,.0f}. Action: audit the Q4 refund spike and the channel that lost order volume before locking Q1 targets.".format(
        q4=q4_net / 100,
        dir=direction,
        abs_change=abs(change_cents) / 100,
        sign="+" if growth_pct >= 0 else "",
        growth=growth_pct,
        aov4=by_quarter["Q4"]["net"] / by_quarter["Q4"]["orders"] / 100,
        aov3=by_quarter["Q3"]["net"] / by_quarter["Q3"]["orders"] / 100,
        orders_delta=abs(by_quarter["Q4"]["orders"] - by_quarter["Q3"]["orders"]),
        refund_delta=by_quarter["Q4"]["refund"] / 100 - by_quarter["Q3"]["refund"] / 100,
    ),
    "{country} is the largest contribution market at ${contrib:,.0f} on ${net:,.0f} net revenue, a {margin:.1f}% contribution margin. The lead is thin at ${lead:,.0f} over {runner_up}, so treat it as a defend-and-grow market rather than a safe one. Action: protect {country} retention spend and lift its share of the next budget cycle.".format(
        country=top_country,
        contrib=top_country_stats["contribution"] / 100,
        net=top_country_stats["net"] / 100,
        margin=country_margin_pct,
        lead=report_data["country_lead_cents"] / 100,
        runner_up=report_data["country_runner_up"],
    ),
    "{channel} posts the highest net-revenue ROAS at {roas:.2f}x (${net:,.0f} net revenue on ${spend:,.0f} ad spend). {runner_up} is second at {runner_up_roas:.2f}x. Action: run a controlled incremental-spend test on {channel} before scaling; ROAS here is net revenue over spend from a small base and is not proof of incremental lift.".format(
        channel=top_channel,
        roas=channel_roas_value,
        net=channel_stats["net"] / 100,
        spend=spend_by_channel.get(top_channel, 0) / 100,
        runner_up=report_data["channel_runner_up"],
        runner_up_roas=report_data["channel_runner_up_roas"],
    ),
]

results = {
    "counts": {
        "raw_orders": raw_order_count,
        "unique_orders": len(unique_orders),
        "paid_orders": len(paid_orders),
        "duplicates_removed": duplicates_removed,
        "refund_rows": refund_row_count,
    },
    "quarter": {
        "q3_net_cents": q3_net,
        "q4_net_cents": q4_net,
        "change_cents": change_cents,
        "growth_pct": growth_pct,
    },
    "country": {
        "name": top_country,
        "net_cents": top_country_stats["net"],
        "contribution_cents": top_country_stats["contribution"],
        "margin_pct": country_margin_pct,
    },
    "channel": {
        "name": top_channel,
        "net_cents": channel_stats["net"],
        "spend_cents": spend_by_channel.get(top_channel, 0),
        "roas": channel_roas_value,
    },
    "insights": insights,
}

with open(os.path.join(HERE, "results.json"), "w") as fh:
    json.dump(results, fh, indent=2)
    fh.write("\n")

with open(os.path.join(HERE, "report_data.json"), "w") as fh:
    json.dump(report_data, fh, separators=(",", ":"))
    fh.write("\n")

# ---------------------------------------------------------------- self-checks
assert change_cents == q4_net - q3_net
assert abs(growth_pct - (change_cents / q3_net * 100.0)) < 1e-9
assert len(unique_orders) == raw_order_count - duplicates_removed
assert results["counts"]["paid_orders"] == len(orders)
assert report_data["totals"]["net_cents"] == sum(v["net"] for v in by_country.values())
assert sum(v["net"] for v in by_country.values()) == sum(v["net"] for v in by_channel.values())
assert sum(v["net"] for v in by_country.values()) == sum(v["net"] for v in by_quarter.values())
assert report_data["totals"]["contribution_cents"] == sum(v["contribution"] for v in by_country.values())
assert all(o["net"] == o["gross"] - o["discount"] - o["refund"] for o in orders)
assert len(insights) == 3


# ---------------------------------------------------------------- build report
TEMPLATE = os.path.join(HERE, "report_template.html")
if os.path.exists(TEMPLATE):
    with open(TEMPLATE) as fh:
        html = fh.read()
    html = html.replace("__REPORT_DATA__", json.dumps(report_data, separators=(",", ":")))
    html = html.replace("__RESULTS__", json.dumps(results, separators=(",", ":")))
    with open(os.path.join(HERE, "index.html"), "w") as fh:
        fh.write(html)
    print("wrote index.html from report_template.html (%d bytes)" % len(html))

print(json.dumps(results, indent=2))
print("\nchecks passed | refunds on unpaid orders excluded:", refunds_on_unpaid)
print("cube rows:", len(cube_rows), "| spend rows:", len(report_data["spend"]))
