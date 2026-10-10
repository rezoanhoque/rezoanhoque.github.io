import { cp, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const source = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(source,'dist');
const repo = path.dirname(source);
await stat(path.join(dist,'index.html'));
for(const entry of await readdir(dist)) await cp(path.join(dist,entry),path.join(repo,entry),{recursive:true});
console.log('Copied the verified static build to the repository root. No files were deleted.');
