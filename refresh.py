#!/usr/bin/env python3
"""Rebuild the public review manifest from recorded accounting and artifacts."""
import json,pathlib,datetime
ROOT=pathlib.Path(__file__).resolve().parent
SPECS=[
('deepseek-raw-none','DeepSeek / thinking off','Terminal','One API response. No tools. Thinking disabled.',[]),
('deepseek-raw-low','DeepSeek / low','Terminal','One API response. No tools. Low effort.',[]),
('deepseek-raw-high-64k','DeepSeek / high','Terminal','One API response. No tools. High effort, 64K cap.',[]),
('deepseek-raw-max-64k','DeepSeek / max','Terminal','One API response. No tools. Max effort, 64K cap.',[]),
('deepseek-native-high','DeepSeek in Codex / high','Codex','Codex file and shell tools. High effort.',[]),
('deepseek-native-max','DeepSeek in Codex / max','Codex','Codex file and shell tools. Max effort.',[]),
('astra-raw-high-64k','Astra / direct','Astra','One API response. No tools. High effort, 64K cap.',[]),
('astra-codex-high','Astra in Codex / high','Astra','Codex file and shell tools. High effort.',[]),
('deepastra-plan-64k','Astra plan → DeepSeek','Hybrid','One Astra plan. DeepSeek implements.', ['astra-plan']),
('deepseek-loop-1','DeepSeek self-review / round 1','Loop','DeepSeek critiques its screenshot and rebuilds.', ['deepseek-raw-high-64k']),
('deepseek-loop-2','DeepSeek self-review / round 2','Loop','A second independent DeepSeek visual critique.', ['deepseek-raw-high-64k','deepseek-loop-1']),
('astra-critic-1','Astra critic / round 1','Hybrid','Astra reviews the screenshot. DeepSeek rebuilds.', ['deepseek-raw-high-64k']),
('astra-critic-2','Astra critic / round 2','Hybrid','Astra reviews again. DeepSeek rebuilds again.', ['deepseek-raw-high-64k','astra-critic-1']),
('deepastra-loop-1','DeepAstra / self-review 1','DeepAstra','Astra plan, then DeepSeek builder and critic.', ['astra-plan','deepastra-plan-64k']),
('deepastra-loop-2','DeepAstra / self-review 2','DeepAstra','Astra plan, then two DeepSeek review cycles.', ['astra-plan','deepastra-plan-64k','deepastra-loop-1']),
('deepastra-final','DeepAstra / late Astra review','DeepAstra','Astra plan, two cheap loops, then Astra + mobile QA.', ['astra-plan','deepastra-plan-64k','deepastra-loop-1','deepastra-loop-2']),
('deepastra-mobile-ds','DeepAstra / cheap mobile repair','DeepAstra','Same final diagnostics, with a DeepSeek critic.', ['astra-plan','deepastra-plan-64k','deepastra-loop-1','deepastra-loop-2']),
]
def rows(name):
 p=ROOT/'results'/name/'usage.jsonl'
 return [json.loads(l) for l in p.read_text().splitlines()] if p.exists() else []
def usage(rs):
 total=0;seconds=0;calls=0;pt=ct=rt=0
 for r in rs:
  u=r.get('usage') or {}
  if u:
   calls+=1;total+=u.get('cost') or 0;seconds+=r.get('seconds',0)
   pt+=u.get('prompt_tokens',u.get('input_tokens',0)) or 0;ct+=u.get('completion_tokens',u.get('output_tokens',0)) or 0
   rt+=(u.get('completion_tokens_details') or u.get('output_tokens_details') or {}).get('reasoning_tokens',0) or 0
 return {'total_cost':round(total,8),'calls':calls,'seconds':round(seconds,2),'input_tokens':pt,'output_tokens':ct,'reasoning_tokens':rt}
def build():
 runs=[]
 for ident,name,category,description,ancestors in SPECS:
  p=ROOT/'results'/ident;rs=rows(ident);allrows=sum([rows(x) for x in ancestors],[])+rs
  meta=json.loads((p/'meta.json').read_text()) if (p/'meta.json').exists() else {}
  note='Workflow cost includes every named ancestor and the current run. Shared architecture is charged once per workflow. Research and harness development in the parent Codex task are excluded. One sample per condition.'
  if ident=='astra-codex-high':note+=' This run includes a paid continuation after a transport failure.'
  if ident.startswith('deepseek-native-'):note+=' Timed out after 15 minutes. High left a website; max left none. The sessions overlapped during timeout cleanup. Their combined bill is $1.31438; individual cost allocation is unavailable. The runner now terminates the whole process group.'
  if category in ['Loop','Hybrid','DeepAstra']:note+=' Critics use low effort; rebuilds use high effort. Critics received reference and rendered screenshots, plus source code.'
  if (p/'notes.txt').exists():note+=' '+(p/'notes.txt').read_text()
  mobile=json.loads((p/'qa-mobile.json').read_text()) if (p/'qa-mobile.json').exists() else {}
  state='Captured' if (p/'desktop.png').exists() else 'Awaiting render' if (p/'index.html').exists() else 'No website: timed out' if meta.get('timed_out') else 'No completed website' if (ROOT/'COMPLETE').exists() else 'Running / not yet complete'
  runs.append({'cost_available':meta.get('cost_available',True),'mobile_overflow':mobile.get('scrollWidth',0)-mobile.get('width',0) if mobile else None,'id':ident,'name':name,'category':category,'description':description,'ancestors':ancestors,'ready':(p/'index.html').exists(),'screenshot':(p/'desktop.png').exists(),'state':state,'note':note,'meta':meta,**usage(allrows),'own_cost':usage(rs)['total_cost']})
 allrows=[]
 for p in (ROOT/'results').glob('*/usage.jsonl'):allrows+=rows(p.parent.name)
 manifest={'updated':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'Experiments in progress','total_cost':usage(allrows)['total_cost'],'runs':runs,'accounting_note':'Per-workflow totals reuse ancestors. Global total counts each actual call once. Failed setup trials are included in the global total, not allocated to clean 64K runs.'}
 if (ROOT/'COMPLETE').exists():manifest['status']='17 conditions complete · 16 websites · 1 timeout without HTML'
 manifest['accounting_note']+=' Native Codex high/max share a combined bill because their timeout windows overlapped. Main-task Codex usage is excluded.'
 (ROOT/'manifest.json').write_text(json.dumps(manifest,indent=2));return manifest
if __name__=='__main__':
 m=build();print(f"{sum(r['ready'] for r in m['runs'])}/{len(m['runs'])} websites, recorded inference ${m['total_cost']:.4f}")
