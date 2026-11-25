(function () {
  const targets = document.querySelectorAll(
    'section[id] h2, section[id] .eyebrow, section[id] > .container > p, .info-card, .reel-card, .chips span, #process li, #clients a, .highlight, .hero-copy > *'
  );
  targets.forEach((el, index) => {
    el.style.setProperty('--reveal-delay', `${Math.min(index, 8) * 0.08}s`);
    el.classList.add('reveal');
  });
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach((el) => io.observe(el));
})();
