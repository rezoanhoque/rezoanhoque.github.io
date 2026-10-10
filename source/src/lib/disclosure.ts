export const VERSION = '1.0.0';
export const LIMIT = 200_000;
export type Category = 'positive' | 'negative' | 'uncertainty';
export type Lexicon = Record<Category, string[]>;
export const categories: Category[] = ['positive', 'negative', 'uncertainty'];
// Small original illustrative lists, not the Loughran–McDonald dictionary.
export const starter: Lexicon = {
  positive: 'improve improved improving improvement improvements strong stronger strength strengths growth profitable profitability success successful benefit benefits beneficial opportunity opportunities favorable confidence confident'.split(' '),
  negative: 'decline declined declining loss losses weak weaker weakness weaknesses adverse deterioration deteriorated deteriorating default defaults bankruptcy impairment impairments litigation disruption disruptions unfavorable failure failures'.split(' '),
  uncertainty: 'uncertain uncertainty uncertainties may might could possible possibly potential potentially risk risks contingent contingencies unpredictable variability fluctuate fluctuations depends'.split(' '),
};
export function words(text: string): string[] { return text.normalize('NFKC').toLowerCase().match(/[a-z]+(?:['’][a-z]+)?|\d+(?:[.,]\d+)*/g) ?? []; }
export function normalizeList(text: string): string[] {
  const list = text.toLowerCase().split(/[\s,;]+/).filter(Boolean);
  if(list.some(w => !/^[a-z]+(?:['’][a-z]+)?$/.test(w))) throw new Error('Word lists must contain individual English words separated by commas or spaces.');
  return [...new Set(list)].sort();
}
export function analyze(text: string, lexicon: Lexicon) {
  if(text.length > LIMIT) throw new Error('Each disclosure must be 200,000 characters or fewer.');
  const tokens=words(text);
  if(!tokens.some(t=>/[a-z]/.test(t))) throw new Error('Enter English prose in both disclosure boxes.');
  const counts = new Map<string,number>(); tokens.forEach(t=>counts.set(t,(counts.get(t)??0)+1));
  const hits = Object.fromEntries(categories.map(cat => [cat, [...new Set(lexicon[cat])].filter(w=>counts.has(w)).map(word=>({word,count:counts.get(word)!})).sort((a,b)=>b.count-a.count||a.word.localeCompare(b.word))])) as Record<Category, {word:string;count:number}[]>;
  const totals=Object.fromEntries(categories.map(cat=>[cat,hits[cat].reduce((a,b)=>a+b.count,0)])) as Record<Category,number>;
  const rates=Object.fromEntries(categories.map(cat=>[cat,100*totals[cat]/tokens.length])) as Record<Category,number>;
  const segmenter = new Intl.Segmenter('en',{granularity:'sentence'});
  const sentences=[...segmenter.segment(text)].filter(s=>words(s.segment).length).length || 1;
  const characters=tokens.reduce((sum,t)=>sum+(t.match(/[a-z0-9]/g)?.length??0),0);
  return { words:tokens.length,sentences,characters,averageSentenceLength:tokens.length/sentences,ari:4.71*characters/tokens.length+0.5*tokens.length/sentences-21.43,totals,rates,netTone:rates.positive-rates.negative,hits };
}
export function compare(a:string,b:string,lexicon:Lexicon) {
  const A=analyze(a,lexicon), B=analyze(b,lexicon);
  return {A,B,gaps:{netTone:A.netTone-B.netTone,positive:A.rates.positive-B.rates.positive,negative:A.rates.negative-B.rates.negative,uncertainty:A.rates.uncertainty-B.rates.uncertainty,averageSentenceLength:A.averageSentenceLength-B.averageSentenceLength,ari:A.ari-B.ari}};
}
export function parseLM(csv:string):Lexicon {
  // RFC-style quoted cells, escaped quotes, CRLF, and embedded line breaks.
  const rows:string[][]=[]; let row:string[]=[],cell='',quoted=false;
  for(let i=0;i<csv.length;i++) { const c=csv[i];
    if(c==='"') { if(quoted&&csv[i+1]==='"'){cell+='"';i++;}else quoted=!quoted; }
    else if(!quoted&&(c===','||c==='\n')){row.push(cell.replace(/\r$/,''));cell='';if(c==='\n'){rows.push(row);row=[];}}
    else cell+=c;
  }
  if(quoted) throw new Error('CSV has an unclosed quoted cell.');
  if(cell||row.length){row.push(cell.replace(/\r$/,''));rows.push(row);}
  const header=rows.shift()?.map(x=>x.replace(/^\uFEFF/,'').trim().toLowerCase())??[];
  const wi=header.indexOf('word'), indexes=categories.map(c=>header.indexOf(c));
  if(wi<0||indexes.some(i=>i<0)) throw new Error('Use the official LM CSV with Word, Positive, Negative, and Uncertainty columns.');
  const result:Lexicon={positive:[],negative:[],uncertainty:[]};
  for(const r of rows){ const word=r[wi]?.trim().toLowerCase(); if(!word||!/^[a-z]+$/.test(word)) continue;
    categories.forEach((cat,i)=>{if(Number(r[indexes[i]])>0) result[cat].push(word);});
  }
  if(categories.some(c=>!result[c].length)) throw new Error('The CSV must contain active words in all three categories.');
  categories.forEach(c=>result[c]=[...new Set(result[c])].sort()); return result;
}
