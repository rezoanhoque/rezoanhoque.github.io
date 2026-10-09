(function(){
  var lb=document.getElementById('lb'), im=lb.querySelector('img');
  document.querySelectorAll('a.zoom').forEach(function(a){a.addEventListener('click',function(ev){ev.preventDefault();im.src=a.getAttribute('href');lb.hidden=false;});});
  lb.addEventListener('click',function(){lb.hidden=true;});
  document.addEventListener('keydown',function(ev){if(ev.key==='Escape')lb.hidden=true;});
  document.querySelectorAll('.say-btn').forEach(function(b){b.addEventListener('click',function(){var a=new Audio(b.dataset.audio);a.play().catch(function(){b.title='Recording coming soon';b.classList.add('nope');setTimeout(function(){b.classList.remove('nope')},900);});});});
  var links=document.querySelectorAll('[data-spy]');
  if(links.length&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+en.target.id);});}});},{rootMargin:'-40% 0px -55% 0px'});
    document.querySelectorAll('.group, #about').forEach(function(s){io.observe(s);});}
})();
