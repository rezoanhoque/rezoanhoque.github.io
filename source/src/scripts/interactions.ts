const root = document.documentElement;
const search = document.querySelector<HTMLDialogElement>('.search-dialog');
const searchInput = document.querySelector<HTMLInputElement>('#page-search');
document.querySelector('.search-trigger')?.addEventListener('click', () => { search?.showModal(); searchInput?.focus(); });
document.addEventListener('keydown', e => {
  if((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k') { e.preventDefault(); if(search?.open) search.close(); else { search?.showModal(); searchInput?.focus(); } }
});
search?.querySelector('button')?.addEventListener('click', () => search.close());
search?.addEventListener('click', e => { if(e.target===search) search.close(); });
searchInput?.addEventListener('input', () => {
  let count=0;
  search?.querySelectorAll<HTMLAnchorElement>('nav a').forEach(link => { link.hidden=!link.textContent?.toLowerCase().includes(searchInput.value.toLowerCase().trim()); if(!link.hidden) count++; });
  const empty = search?.querySelector<HTMLElement>('.search-empty'); if(empty) empty.hidden=count>0;
});
searchInput?.addEventListener('keydown', e => { if(e.key==='Enter') search?.querySelector<HTMLAnchorElement>('nav a:not([hidden])')?.click(); });
document.querySelector('#theme')?.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  if(dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
});
const menu = document.querySelector<HTMLButtonElement>('#menu');
const closeMenu = () => { document.body.classList.remove('nav-open'); menu?.setAttribute('aria-expanded','false'); };
menu?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open ? 'Close menu' : 'Open menu');
});
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click',closeMenu));
const dialog = document.querySelector<HTMLDialogElement>('.photo-dialog');
document.querySelectorAll<HTMLAnchorElement>('a.zoom').forEach(link => link.addEventListener('click', e => {
  if(!dialog) return;
  e.preventDefault();
  const img = dialog.querySelector('img')!;
  img.src = link.href; img.alt = link.querySelector('img')?.alt ?? '';
  dialog.querySelector('figcaption')!.textContent = link.dataset.caption ?? img.alt;
  dialog.showModal(); document.body.classList.add('lb-open');
}));
dialog?.querySelector('button')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => { if(e.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => document.body.classList.remove('lb-open'));
document.querySelectorAll<HTMLButtonElement>('[data-audio]').forEach(button => {
  const audio = new Audio(button.dataset.audio);
  const reset = () => { button.classList.remove('playing'); button.setAttribute('aria-pressed','false'); };
  audio.addEventListener('ended',reset); audio.addEventListener('error',reset);
  button.addEventListener('click', async () => {
    if(!audio.paused) { audio.pause(); reset(); return; }
    try { await audio.play(); button.classList.add('playing'); button.setAttribute('aria-pressed','true'); }
    catch { reset(); button.title='Audio could not be played. Please try again.'; }
  });
});
