/**
 * RTL / LTR Layout Manager
 * Handles dynamic direction switching, layout mirroring,
 * localStorage persistence, and event delegation.
 */

(function () {
  const RTL_KEY = 'chess_academy_direction';

  function getSavedDirection() {
    return localStorage.getItem(RTL_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    const root = document.documentElement;
    root.setAttribute('dir', dir);
    if (dir === 'rtl') {
      root.classList.add('rtl-mode');
    } else {
      root.classList.remove('rtl-mode');
    }
    updateRtlToggles(dir);
  }

  function updateRtlToggles(dir) {
    const currentDir = dir || document.documentElement.getAttribute('dir') || 'ltr';
    const toggles = document.querySelectorAll('.rtl-toggle-btn');
    toggles.forEach(btn => {
      const label = btn.querySelector('.rtl-label');
      if (label) {
        label.textContent = currentDir === 'rtl' ? 'LTR' : 'RTL';
      }
      btn.setAttribute('title', currentDir === 'rtl' ? 'Switch to Left-to-Right (LTR)' : 'Switch to Right-to-Left (RTL)');
    });
  }

  // Instant apply
  applyDirection(getSavedDirection());

  window.toggleDirection = function () {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    localStorage.setItem(RTL_KEY, newDir);
    applyDirection(newDir);
  };

  window.updateRtlUI = function () {
    updateRtlToggles(getSavedDirection());
  };

  // Robust Global Event Delegation for Clicks
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.rtl-toggle-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      window.toggleDirection();
    }
  });

  // Sync on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    applyDirection(getSavedDirection());
  });
})();
