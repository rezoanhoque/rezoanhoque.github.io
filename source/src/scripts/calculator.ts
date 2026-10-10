import { starter, categories, normalizeList, compare, parseLM, LIMIT, VERSION, type Lexicon } from '../lib/disclosure';
const el = <T extends HTMLElement>(id:string) => document.getElementById(id) as T;
const inputs = ['A','B'].map(s=>el<HTMLTextAreaElement>(`text-${s}`));
const lists=categories.map(c=>el<HTMLTextAreaElement>(`lexicon-${c}`));
let dictionaryName='Illustrative starter lists (not LM)', exported:object|null=null;
const message=(text:string)=>{el('error').textContent=text;el('error').hidden=!text;};
function invalidate(){el('results').hidden=true;exported=null;message('');inputs.forEach((input,i)=>el(`count-${'AB'[i]}`).textContent=`${input.value.length.toLocaleString()} / 200,000 characters`);}
function setLists(lexicon:Lexicon,name:string){categories.forEach((c,i)=>lists[i].value=lexicon[c].join(', '));dictionaryName=name;el('dictionary-label').textContent=name;invalidate();}
setLists(starter,dictionaryName);
inputs.forEach(input=>input.addEventListener('input',invalidate));
lists.forEach(input=>input.addEventListener('input',()=>{dictionaryName='Custom word lists';el('dictionary-label').textContent=dictionaryName;invalidate();}));
el('reset-dictionary').addEventListener('click',()=>setLists(starter,'Illustrative starter lists (not LM)'));
el('example').addEventListener('click',()=>{inputs[0].value='We delivered strong growth and improved profitability this quarter. Our teams see opportunities to improve customer service and build on these strengths. We are confident in our strategy, although demand may fluctuate and supply disruptions could affect delivery. The outlook remains uncertain in several markets.';inputs[1].value='Revenue declined in several markets and impairment losses increased. We face risks from supply disruptions and potential litigation. Future demand is uncertain and could deteriorate. Our ability to return to profitable operations depends on improvements in execution. Management expects benefits from the revised service strategy.';invalidate();});
el('swap').addEventListener('click',()=>{[inputs[0].value,inputs[1].value]=[inputs[1].value,inputs[0].value];invalidate();});
el('clear').addEventListener('click',()=>{inputs.forEach(i=>i.value='');document.querySelectorAll<HTMLInputElement>('#calculator-form input[type=file]').forEach(i=>i.value='');invalidate();inputs[0].focus();});
['A','B'].forEach((side,i)=>el<HTMLInputElement>(`file-${side}`).addEventListener('change',async e=>{
  const input=e.target as HTMLInputElement,file=input.files?.[0]; if(!file)return;
  try{if(file.size>1_000_000)throw new Error('Text files must be smaller than 1 MB.');const text=await file.text();if(text.length>LIMIT)throw new Error('Each disclosure must be 200,000 characters or fewer.');inputs[i].value=text;invalidate();}catch(err){message((err as Error).message);}finally{input.value='';}
}));
el<HTMLInputElement>('dictionary-file').addEventListener('change',async e=>{
 const input=e.target as HTMLInputElement,file=input.files?.[0];if(!file)return;
 try{if(file.size>25_000_000)throw new Error('Dictionary CSV must be smaller than 25 MB.');setLists(parseLM(await file.text()),`LM import: ${file.name}`);}catch(err){message((err as Error).message);}finally{input.value='';}
});
const format=(n:number)=>n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const signed=(n:number)=>(n>0?'+':'')+format(n);
function node(tag:string,text:string,parent:HTMLElement){const n=document.createElement(tag);n.textContent=text;parent.append(n);return n;}
el('calculator-form').addEventListener('submit',async e=>{
 e.preventDefault(); invalidate();
 try{
  const lexicon=Object.fromEntries(categories.map((c,i)=>[c,normalizeList(lists[i].value)])) as Lexicon;
  if(categories.some(c=>!lexicon[c].length))throw new Error('Each word list must contain at least one word.');
  const texts=inputs.map(i=>i.value);const result=compare(texts[0],texts[1],lexicon),{A,B,gaps}=result;
  const metrics=el('metrics');metrics.replaceChildren();
  for(const [label,value,unit] of [['Net tone gap',gaps.netTone,'percentage points'],['Uncertainty gap',gaps.uncertainty,'percentage points'],['Readability gap',gaps.ari,'ARI points']] as const){const card=node('div','',metrics);card.className='metric';node('h3',label,card);node('strong',signed(value),card);node('span',unit,card);}
  el('result-note').textContent=`${dictionaryName}. ${A.words<100||B.words<100?'Short passage: at least one disclosure has fewer than 100 words. Interpret rates cautiously. ':''}Positive gaps mean A is higher; they do not establish a contradiction or causation.`;
  const body=el('measurements');body.replaceChildren();
  const rows:[string,number,number][]=[['Words',A.words,B.words],['Sentences',A.sentences,B.sentences],['Positive matches',A.totals.positive,B.totals.positive],['Negative matches',A.totals.negative,B.totals.negative],['Uncertainty matches',A.totals.uncertainty,B.totals.uncertainty],['Positive words / 100 words',A.rates.positive,B.rates.positive],['Negative words / 100 words',A.rates.negative,B.rates.negative],['Uncertainty words / 100 words',A.rates.uncertainty,B.rates.uncertainty],['Net tone (percentage points)',A.netTone,B.netTone],['Words per sentence',A.averageSentenceLength,B.averageSentenceLength],['ARI (raw estimate)',A.ari,B.ari]];
  rows.forEach(([label,a,b])=>{const tr=node('tr','',body);const th=node('th',label,tr);th.setAttribute('scope','row');node('td',format(a),tr);node('td',format(b),tr);node('td',signed(a-b),tr);});
  [A,B].forEach((r,i)=>{const box=el(`matches-${'AB'[i]}`);box.replaceChildren();categories.forEach(c=>{node('h4',c,box);node('p',r.hits[c].map(h=>`${h.word} (${h.count})`).join(' · ')||'No matches',box);});});
  exported={version:VERSION,createdAt:new Date().toISOString(),dictionary:dictionaryName,lexicon,direction:'A minus B',tokenization:'English NFKC lowercase; apostrophes retained; numbers included; Intl.Segmenter sentences',...result};
  // Show the synchronous result before hashing; input edits invalidate this snapshot.
  const snapshot=exported;
  el('results').hidden=false;el('results').focus({preventScroll:true});el('results').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  const hash=async(text:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))).map(b=>b.toString(16).padStart(2,'0')).join('');
  el<HTMLButtonElement>('download').disabled=true;
  try{const hashes=await Promise.all(texts.map(hash));if(exported===snapshot)exported={...snapshot,inputSHA256:{A:hashes[0],B:hashes[1]}};}
  catch{if(exported===snapshot)exported={...snapshot,inputSHA256:null,hashNote:'SHA-256 unavailable in this browser context.'};}
  finally{el<HTMLButtonElement>('download').disabled=false;}
 }catch(err){message((err as Error).message);}
});
el('download').addEventListener('click',()=>{if(!exported)return;const url=URL.createObjectURL(new Blob([JSON.stringify(exported,null,2)],{type:'application/json'}));const link=document.createElement('a');link.href=url;link.download='disclosure-gap-v1.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
