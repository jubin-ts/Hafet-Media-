/* ============================================================
   Hafet Media Solutions — Particles & Animations
   ============================================================ */

(function() {
  'use strict';

  // ─── Navbar Scroll Behavior ───────────────────────────────
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active nav link
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 100;
      if (window.scrollY >= top) current = s.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ─── Mobile Nav ──────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Scroll Reveal ───────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  // ─── Animated Counter ────────────────────────────────────
  function animateCounter(el, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';

    function update() {
      start = Math.min(start + increment, target);
      el.textContent = prefix + Math.floor(start).toLocaleString() + suffix;
      if (start < target) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          animateCounter(el, target, 1800);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counterEls.forEach(el => counterObserver.observe(el));

  // ─── Canvas Particles ─────────────────────────────────────
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: -(Math.random() * 0.5 + 0.15),
        alpha: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.6 ? '201,162,39' : '160,130,220',
      };
    }

    function initParticles(count = 80) {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.0015;

        if (p.alpha <= 0 || p.y < -10) {
          Object.assign(p, createParticle(), { y: canvas.height + 10, alpha: Math.random() * 0.6 + 0.1 });
        }
      });
      animFrame = requestAnimationFrame(drawParticles);
    }

    resize();
    initParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });
  }

  // ─── Smooth Anchor Scroll ─────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── Stagger children reveal ──────────────────────────────
  document.querySelectorAll('.stagger-children').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
      child.classList.add('reveal');
    });
  });

  // Re-observe staggered children
  document.querySelectorAll('.stagger-children .reveal').forEach(el => {
    revealObserver.observe(el);
  });

})();
