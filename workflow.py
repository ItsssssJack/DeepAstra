#!/usr/bin/env python3
"""A bounded architect → builder → visual critic loop with a capture queue.

Codex supplies browser captures through its own browser tools. The loop does not
give the cheaper builder shell access, private files or API credentials.
"""
import argparse,json,pathlib,time,subprocess
import deepastra as d

def recorded_cost(ids):
    total=0.0
    for ident in set(ids):
        p=d.ROOT/'results'/ident/'usage.jsonl'
        if p.exists():
            for l in p.read_text().splitlines():total+=(json.loads(l).get('usage') or {}).get('cost',0) or 0
    return total

def upper_cost(model,prompt,images,max_tokens):
    # Deliberately conservative: up to one token per UTF-8 byte, plus 20K
    # input tokens per image. Rates include Astra's cache-write premium.
    # Refresh these public rates before reusing this estimate after a price change.
    input_rate,output_rate=(12.5e-6,50e-6) if model==d.ASTRA else (.3e-6,1.2e-6)
    return (len(prompt.encode('utf-8'))+20000*len(images))*input_rate+max_tokens*output_rate

def capture_queue(run,base_url,timeout):
    p=d.runpath(run)
    req={'run':run,'url':base_url.rstrip('/')+'/results/'+run+'/index.html','desktop':{'width':1600,'height':1000,'file':'desktop.png'},'mobile':{'width':390,'height':844,'file':'mobile.png'},'diagnostics':'qa-mobile.json','complete_marker':'capture.done.json','status':'waiting for Codex browser capture'}
    d.write_json(p/'capture-request.json',req)
    print(json.dumps(req),flush=True)
    deadline=time.monotonic()+timeout
    while time.monotonic()<deadline:
        if (p/'capture.done.json').exists():
            for name in ['desktop.png','mobile.png','qa-mobile.json']:
                if not (p/name).is_file():raise RuntimeError('Capture marker exists but '+name+' is missing')
            qa=json.loads(d.read(p/'qa-mobile.json'))
            if qa.get('width')!=390 or qa.get('height')!=844:raise RuntimeError('Capture has the wrong mobile viewport')
            return
        time.sleep(.5)
    raise TimeoutError('Capture pending. Use Codex browser tools to complete '+str(p/'capture-request.json'))

def capture_playwright(run,base_url,timeout):
    subprocess.run(['node',str(d.ROOT/'capture.mjs'),run,base_url],cwd=d.ROOT,check=True,timeout=timeout)
    p=d.runpath(run)
    qa=json.loads(d.read(p/'qa-mobile.json'))
    if qa.get('width')!=390 or qa.get('height')!=844:raise RuntimeError('Wrong mobile capture viewport')

def run_workflow(name,with_plan=False,rounds=2,final_critic='none',budget=5,base_url='http://127.0.0.1:8765',capture_timeout=600,capturer=capture_queue):
    d.runpath(name)
    if not 0<=rounds<=5:raise ValueError('Choose zero to five review rounds.')
    if budget<=0:raise ValueError('Budget must be positive.')
    manifest=d.ROOT/'results'/name/'workflow.json'
    if manifest.exists():raise RuntimeError('Workflow name already exists. Choose a fresh name to preserve its evidence.')
    if any((d.ROOT/'results').glob(name+'-*')):raise RuntimeError('A child stage already exists. Choose a fresh workflow name to preserve its evidence.')
    ids=[];stages=[];real_completion=d.completion
    def bounded(run,model,prompt,images=(),effort='high',max_tokens=64000,role='builder'):
        if run not in ids:ids.append(run)
        worst=upper_cost(model,prompt,images,max_tokens)
        if recorded_cost(ids)+worst>budget:raise RuntimeError(f'Budget gate: next call reserves ${worst:.3f}, exceeding the ${budget:.2f} workflow cap. No call was sent.')
        return real_completion(run,model,prompt,images,effort,max_tokens,role)
    d.completion=bounded
    state={'name':name,'budget':budget,'rounds':rounds,'with_plan':with_plan,'final_critic':final_critic,'status':'running','stages':stages,'started':d.stamp()}
    d.write_json(manifest,state)
    try:
        planfile=None
        if with_plan:
            ident=name+'-plan';d.plan(ident);ids.append(ident);stages.append({'run':ident,'role':'architect'});planfile=d.ROOT/'results'/ident/'architect-answer.txt'
        current=name+'-build';d.raw(current,plan=planfile);ids.append(current);stages.append({'run':current,'role':'builder'})
        for n in range(1,rounds+1):
            capturer(current,base_url,capture_timeout)
            nxt=name+f'-review-{n}';d.revise(nxt,d.ROOT/'results'/current,d.DS,planfile,n);ids.append(nxt);stages.append({'run':nxt,'role':'DeepSeek critic + builder','source':current});current=nxt
        if final_critic!='none':
            capturer(current,base_url,capture_timeout)
            nxt=name+'-final';model=d.ASTRA if final_critic=='astra' else d.DS;d.revise(nxt,d.ROOT/'results'/current,model,planfile,rounds+1);ids.append(nxt);stages.append({'run':nxt,'role':final_critic+' critic + DeepSeek builder','source':current});current=nxt
        capturer(current,base_url,capture_timeout)
        state.update(status='complete',result=current,cost=recorded_cost(ids),completed=d.stamp())
        return state
    except Exception as err:
        state.update(status='stopped',error=str(err),cost=recorded_cost(ids));raise
    finally:
        d.completion=real_completion;d.write_json(manifest,state)

if __name__=='__main__':
    a=argparse.ArgumentParser(description=__doc__);a.add_argument('name');a.add_argument('--with-astra-plan',action='store_true');a.add_argument('--rounds',type=int,default=2);a.add_argument('--final-critic',choices=['none','deepseek','astra'],default='none');a.add_argument('--budget',type=float,default=5);a.add_argument('--base-url',default='http://127.0.0.1:8765');a.add_argument('--capture-timeout',type=int,default=600);a.add_argument('--capture-mode',choices=['codex','playwright'],default='codex');v=a.parse_args()
    print(json.dumps(run_workflow(v.name,v.with_astra_plan,v.rounds,v.final_critic,v.budget,v.base_url,v.capture_timeout,capture_playwright if v.capture_mode=='playwright' else capture_queue),indent=2))
