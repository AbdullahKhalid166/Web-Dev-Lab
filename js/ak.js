// Small scroll animation helper using IntersectionObserver
(function(){
  const opts = { root: null, rootMargin: '0px', threshold: 0.12 };
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
      }
    });
  }, opts);

  document.querySelectorAll('[data-animate]').forEach(el=> io.observe(el));

  // smooth scroll for anchor links
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a');
    if(!a) return;
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
    }
  });
})();
