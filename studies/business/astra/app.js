'use strict';
const $ = selector => document.querySelector(selector);
const usd = cents => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2,maximumFractionDigits:2}).format(cents/100);
const compact = cents => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',notation:'compact',minimumFractionDigits:2,maximumFractionDigits:2}).format(cents/100);
const number = value => new Intl.NumberFormat('en-US').format(value);
const percentage = value => `${value.toFixed(2)}%`;
const countryNames = {US:'United States',UK:'United Kingdom',UAE:'United Arab Emirates',DE:'Germany',AU:'Australia',CA:'Canada'};
const months = ['2025-07','2025-08','2025-09','2025-10','2025-11','2025-12'];
const monthNames = ['Jul','Aug','Sep','Oct','Nov','Dec'];
let data, metric='net_cents', currentSelection=[], toastTimer;
function setText(selector,text){$(selector).textContent=text}
function total(rows,key){return rows.reduce((sum,row)=>sum+row[key],0)}
function notify(text){setText('#toast',text);$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2500)}
function money(selector,value,short=true){const element=$(selector);element.textContent=short?compact(value):usd(value);element.title=usd(value);element.setAttribute('aria-label',usd(value))}
function initialise(){
 const r=data.results;
 money('#total-net',data.totals.net_cents);
 money('#total-contribution',data.totals.contribution_cents);
 setText('#total-orders',number(r.counts.paid_orders));
 setText('#total-net-note',`${usd(data.totals.net_cents)} · refunds already deducted`);
 setText('#orders-note',`${number(data.source.nonpaid_orders_excluded)} unpaid orders excluded · ${number(r.counts.duplicates_removed)} duplicates removed`);
 for(const name of [...new Set(data.grain.map(row=>row.country))].sort()){
  const option=document.createElement('option');option.value=name;option.textContent=countryNames[name]||name;$('#country-filter').append(option);
 }
 for(const name of [...new Set(data.grain.map(row=>row.channel))].sort()){
  const option=document.createElement('option');option.value=name;option.textContent=name;$('#channel-filter').append(option);
 }
 const q=r.quarter;
 setText('#quarter-growth',`${q.growth_pct>0?'+':''}${percentage(q.growth_pct)}`);
 $('.insight-card h3').textContent=q.change_cents<0?'Q4 revenue softened.':'Q4 revenue grew.';
 const quarterMaximum=Math.max(q.q3_net_cents,q.q4_net_cents);
 $('#quarter-bars').innerHTML=[['Q3',q.q3_net_cents],['Q4',q.q4_net_cents]].map(([label,value])=>`<div class="q-row"><span>${label}</span><div class="q-track"><div class="q-fill" style="width:${value/quarterMaximum*100}%"></div></div><span class="q-value" title="${usd(value)}">${compact(value)}</span></div>`).join('');
 setText('#quarter-evidence',`${usd(q.q4_net_cents)} in Q4 vs ${usd(q.q3_net_cents)} in Q3. A ${usd(Math.abs(q.change_cents))} ${q.change_cents<0?'decline':'increase'} in net revenue.`);
 money('#country-value',r.country.contribution_cents);
 setText('#country-headline',`${r.country.name} leads total contribution.`);
 setText('#country-margin',percentage(r.country.margin_pct));
 $('#meter-progress').style.strokeDasharray=`${188.4956*r.country.margin_pct/100} 188.4956`;
 $('.contribution-meter svg').setAttribute('aria-label',`${r.country.name} contribution margin ${percentage(r.country.margin_pct)}`);
 setText('#country-evidence',`${usd(r.country.contribution_cents)} contribution on ${usd(r.country.net_cents)} net revenue. Ranked by dollars, not by margin alone.`);
 setText('#channel-roas',`${r.channel.roas.toFixed(2)}×`);
 setText('#channel-headline',`${r.channel.name} leads attributed ROAS.`);
 setText('#roas-output',`$${r.channel.roas.toFixed(2)}`);
 setText('#channel-evidence',`${usd(r.channel.net_cents)} net revenue ÷ ${usd(r.channel.spend_cents)} recorded ad spend across the full period.`);
 const countRows=[['Raw order rows',r.counts.raw_orders],['Unique orders',r.counts.unique_orders],['Paid orders included',r.counts.paid_orders],['Duplicate rows removed',r.counts.duplicates_removed],['Unpaid orders excluded',data.source.nonpaid_orders_excluded],['Refund source rows',r.counts.refund_rows],['Unmatched refund rows',data.source.unmatched_refund_rows],['Ad spend source rows',data.source.ad_spend_rows]];
 $('#source-counts').innerHTML=countRows.map(([name,value])=>`<div><dt>${name}</dt><dd>${number(value)}</dd></div>`).join('');
 $('#country-filter').addEventListener('change',renderExplorer);
 $('#channel-filter').addEventListener('change',renderExplorer);
 $('#reset-filters').addEventListener('click',()=>{$('#country-filter').value='all';$('#channel-filter').value='all';renderExplorer();notify('Explorer filters reset')});
 document.querySelectorAll('[data-metric]').forEach(button=>button.addEventListener('click',()=>{metric=button.dataset.metric;document.querySelectorAll('[data-metric]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))});renderExplorer()}));
 $('#export-selection').addEventListener('click',exportSelection);
 const fullMonths=months.map(month=>total(data.grain.filter(row=>row.month===month),'net_cents'));
 const sparkMax=Math.max(...fullMonths),sparkMin=Math.min(...fullMonths);
 $('.kpi-spark path').setAttribute('d',fullMonths.map((v,i)=>`${i?'L':'M'}${i*40} ${50-(v-sparkMin)/(sparkMax-sparkMin||1)*40}`).join(' '));
 renderExplorer();
}
function renderExplorer(){
 const country=$('#country-filter').value,channel=$('#channel-filter').value;
 currentSelection=data.grain.filter(row=>(country==='all'||row.country===country)&&(channel==='all'||row.channel===channel));
 const scope=`${country==='all'?'All countries':countryNames[country]||country} · ${channel==='all'?'All channels':channel}`;
 setText('#scope-label',scope);
 money('#filtered-value',total(currentSelection,metric));
 setText('#filtered-orders',`${number(total(currentSelection,'orders'))} paid orders`);
 setText('#metric-caption',metric==='net_cents'?'Net revenue':'Contribution');
 const values=months.map(month=>total(currentSelection.filter(row=>row.month===month),metric));
 renderChart(values,scope);
 const byCountry=[...new Set(currentSelection.map(row=>row.country))].map(name=>({name,value:total(currentSelection.filter(row=>row.country===name),'contribution_cents')})).sort((a,b)=>b.value-a.value);
 const max=Math.max(...byCountry.map(row=>row.value),1);
 $('#country-ranking').innerHTML=byCountry.map(row=>`<div class="rank-row"><div class="rank-row-top"><span class="country-name"><span class="country-code">${row.name==='Germany'?'DE':row.name}</span>${countryNames[row.name]||row.name}</span><span class="rank-amount" title="${usd(row.value)}">${compact(row.value)}</span></div><div class="rank-track"><div class="rank-fill" style="width:${row.value/max*100}%"></div></div></div>`).join('');
}
function renderChart(values,scope){
 const width=780,height=255,left=60,right=25,top=28,bottom=35,plotWidth=width-left-right,plotHeight=height-top-bottom;
 const maximum=Math.max(...values)*1.25||1;
 const y=value=>top+plotHeight-(value/maximum)*plotHeight;
 const x=index=>left+index*plotWidth/5;
 const points=values.map((value,index)=>[x(index),y(value)]);
 const line=points.map(([px,py],i)=>`${i?'L':'M'}${px.toFixed(2)} ${py.toFixed(2)}`).join(' ');
 const area=`${line} L${x(5)} ${height-bottom} L${left} ${height-bottom} Z`;
 const grid=Array.from({length:5},(_,index)=>{const value=maximum*index/4,py=y(value);return `<line x1="${left}" x2="${width-right}" y1="${py}" y2="${py}" stroke="#27344a" stroke-opacity="${index===0?.8:.45}" ${index?'stroke-dasharray="3 5"':''}/><text x="${left-12}" y="${py+4}" text-anchor="end">${new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:1}).format(value/100)}</text>`}).join('');
 const nodes=points.map(([px,py],index)=>`<g><text class="month-value" x="${px}" y="${py-15}" text-anchor="middle">${compact(values[index])}</text><circle tabindex="0" role="img" aria-label="${monthNames[index]} ${usd(values[index])}" class="month-dot" cx="${px}" cy="${py}" r="4"><title>${monthNames[index]} 2025: ${usd(values[index])}</title></circle><text x="${px}" y="${height-7}" text-anchor="middle">${monthNames[index]}</text></g>`).join('');
 const label=metric==='net_cents'?'Net revenue':'Contribution';
 $('#chart').innerHTML=`<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${label} by month, ${scope}. Zero baseline."><title>${label} by original order month</title><desc>${values.map((v,i)=>`${monthNames[i]} ${usd(v)}`).join('; ')}</desc><defs><linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4d8cff" stop-opacity=".24"/><stop offset="1" stop-color="#4d8cff" stop-opacity="0"/></linearGradient></defs>${grid}<path d="${area}" fill="url(#area-fill)"/><path d="${line}" fill="none" stroke="#6a9eff" stroke-width="2.5" stroke-linejoin="round"/>${nodes}</svg>`;
}
function exportSelection(){
 const header=['month','country','channel','net_cents','contribution_cents','paid_orders','refund_cents'];
 const csv=[header.join(','),...currentSelection.map(row=>[row.month,row.country,row.channel,row.net_cents,row.contribution_cents,row.orders,row.refund_cents].join(','))].join('\n');
 const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
 const link=document.createElement('a');link.href=url;link.download=`atlas-${$('#country-filter').value}-${$('#channel-filter').value}.csv`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify(`${number(currentSelection.length)} aggregated records exported`);
}
fetch('report-data.json').then(response=>{if(!response.ok)throw new Error(`Report data unavailable (${response.status})`);return response.json()}).then(report=>{data=report;initialise()}).catch(error=>{setText('#total-net-note','Report data could not load. Serve this folder through localhost.');notify(error.message);console.error(error)});
