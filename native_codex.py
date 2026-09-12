#!/usr/bin/env python3
"""Run the documented direct Codex/OpenRouter integration, without a proxy.

Run this alone when using key-delta accounting. Other use of the same key would
contaminate the cost measurement. No user-level Codex configuration is changed.
"""
import argparse,json,os,shutil,subprocess,time,signal
import deepastra as d

def native(run,effort):
    p=d.runpath(run)
    if any(p.iterdir()):raise RuntimeError('Run already contains evidence. Use a new prefix.')
    d.budget_check();scratch=d.WORK/'native'/run;scratch.mkdir(parents=True,exist_ok=True)
    for src,dst in [('DESIGN.md','DESIGN.md'),('TASK.md','TASK.md'),('authkit-reference.jpg','reference.jpg')]:shutil.copy(d.ROOT/'reference'/src,scratch/dst)
    prompt=d.read(d.ROOT/'reference'/'TASK.md')+'\n\nRead DESIGN.md and implement index.html in this working directory using the Codex file and shell tools. Reference.jpg is attached and also available locally. Use static file/syntax checks only; browser evaluation is performed separately. Do not read files outside this working directory, use external models, spawn agents, fetch original website source or operate a browser through shell tools. Build all requested sections and local interactions, then finish. You have one task: deliver the complete website.'
    (p/'codex-prompt.md').write_text(prompt)
    opts={'model_provider':'openrouter','model_reasoning_effort':effort,'model_providers.openrouter.name':'openrouter','model_providers.openrouter.base_url':'https://openrouter.ai/api/v1','model_providers.openrouter.auth.command':'sh','model_providers.openrouter.auth.args':['-c','printf %s "$OPENROUTER_API_KEY"'],'model_providers.openrouter.request_max_retries':3,'model_providers.openrouter.stream_max_retries':2,'project_doc_max_bytes':0,'approval_policy':'never'}
    cmd=['codex','exec','--ignore-user-config','--ephemeral','--skip-git-repo-check','--json','-C',str(scratch),'-s','workspace-write','-m',d.DS,'-i',str(scratch/'reference.jpg')]
    for k,v in opts.items():cmd+=['-c',k+'='+json.dumps(v)]
    cmd+=['-'];before=json.load(d.request('/key'))['data'];start=time.monotonic();log=d.WORK/(run+'-native.jsonl')
    with log.open('w') as f:
        code=d.run_bounded(cmd,prompt,f,900)
    elapsed=time.monotonic()-start;after=json.load(d.request('/key'))['data'];cost=after['usage_monthly']-before['usage_monthly']
    tokens={};tool_events=[]
    for l in log.read_text().splitlines():
        try:row=json.loads(l)
        except ValueError:continue
        if row.get('type')=='turn.completed':tokens=row.get('usage',{})
        item=row.get('item',{})
        if row.get('type')=='item.completed' and item.get('type') in ['command_execution','file_change']:tool_events.append({'type':item.get('type'),'exit_code':item.get('exit_code')})
    usage={'cost':cost,'input_tokens':tokens.get('input_tokens'),'output_tokens':tokens.get('output_tokens'),'input_tokens_details':{'cached_tokens':tokens.get('cached_input_tokens')}}
    d.record(run,{'role':'native-codex-session','requested_model':d.DS,'effort':effort,'seconds':round(elapsed,3),'usage':usage,'accounting':'isolated API key usage delta; all other task inference paused','key_monthly_usage_before':before['usage_monthly'],'key_monthly_usage_after':after['usage_monthly'],'exit_code':code,'model_call_count':None})
    if (scratch/'index.html').exists():shutil.copy(scratch/'index.html',p/'index.html')
    d.write_json(p/'meta.json',{'run':run,'model':d.DS,'effort':effort,'harness':'Native Codex CLI 0.154.0 direct to OpenRouter, documented command-auth integration','provider':'OpenRouter automatic provider routing; individual host not captured','exit_code':code,'seconds':round(elapsed,3),'accounting':'key usage delta','call_count_known':False,'tool_events':len(tool_events),'has_html':(p/'index.html').exists(),'completed':d.stamp()})
    print(run,'READY' if (p/'index.html').exists() else 'NO HTML','exit',code,'cost',round(cost,6),flush=True)
if __name__=='__main__':
    a=argparse.ArgumentParser(description=__doc__);a.add_argument('prefix',help='Fresh run prefix, for example codex-test-2');v=a.parse_args()
    native(v.prefix+'-high','high')
    native(v.prefix+'-max','max')
