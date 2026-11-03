/**
 * Chess Academy - Main Script
 * Orchestrates components and global interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Add subtle parallax or chess piece hover effects
  document.querySelectorAll('.interactive-chess-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-2xl', 'transform', '-translate-y-1');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-2xl', 'transform', '-translate-y-1');
    });
  });

  // Smooth scroll for anchor tags
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  console.log('Chess Academy frontend initialized successfully.');
});

