window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
});

function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
  }
}

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 70);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

document.querySelectorAll('.features-grid .feature-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
});

document.querySelectorAll('.screenshots-grid .ss-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.06}s`;
});

window.addEventListener('scroll', () => {
  let currentSection = '';

  document.querySelectorAll('section[id]').forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection = section.id;
    }
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentSection}`;
    link.style.color = isActive ? 'var(--teal)' : '';
    link.style.fontWeight = isActive ? '600' : '';
  });
});

