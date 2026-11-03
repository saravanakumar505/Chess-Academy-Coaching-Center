/**
 * Animations, Lightbox, & Interactive UI components
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Gallery Lightbox
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        const caption = item.dataset.caption || img?.alt || 'Academy Training';
        
        if (img) {
          lightboxImg.src = img.src;
          if (lightboxCaption) lightboxCaption.textContent = caption;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 2. FAQ Accordion
  document.querySelectorAll('.faq-accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close other accordions in the same group if requested
      const parentGroup = btn.closest('.faq-group');
      if (parentGroup) {
        parentGroup.querySelectorAll('.faq-accordion-btn').forEach(otherBtn => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherPanel = otherBtn.nextElementSibling;
            const otherIcon = otherBtn.querySelector('.faq-icon');
            if (otherPanel) otherPanel.classList.add('hidden');
            if (otherIcon) otherIcon.classList.remove('rotate-180');
          }
        });
      }

      btn.setAttribute('aria-expanded', !isExpanded);
      if (panel) {
        panel.classList.toggle('hidden');
      }
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  });

  // 3. Stats Counter Animation
  const counters = document.querySelectorAll('.counter-value');
  if ('IntersectionObserver' in window && counters.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.dataset.target || 0;
          let count = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              entry.target.textContent = target + (entry.target.dataset.suffix || '');
              clearInterval(timer);
            } else {
              entry.target.textContent = count + (entry.target.dataset.suffix || '');
            }
          }, 30);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  } else {
    counters.forEach(c => {
      c.textContent = (c.dataset.target || '0') + (c.dataset.suffix || '');
    });
  }
});

