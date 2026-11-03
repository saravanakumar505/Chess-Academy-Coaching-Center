/**
 * Theme Manager (Light / Dark mode)
 * Handles instant initialization, localStorage persistence,
 * and robust event delegation for both static and dynamically injected navbars.
 */

(function () {
  const THEME_KEY = 'chess_academy_theme';

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || 'dark'; // Default to dark
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    updateThemeToggles(theme);
  }

  function updateThemeToggles(theme) {
    const currentTheme = theme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    
    toggles.forEach(btn => {
      const sunIcon = btn.querySelector('.theme-sun-icon');
      const moonIcon = btn.querySelector('.theme-moon-icon');
      const label = btn.querySelector('.theme-label');

      if (currentTheme === 'dark') {
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
        if (label) label.textContent = 'Light Mode';
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
        if (label) label.textContent = 'Dark Mode';
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }

  // Instant apply on load
  applyTheme(getSavedTheme());

  window.toggleTheme = function () {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  };

  window.updateThemeUI = function () {
    updateThemeToggles(getSavedTheme());
  };

  // Robust Global Event Delegation for Clicks (Works on ANY button anywhere, anytime!)
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.theme-toggle-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      window.toggleTheme();
    }
  });

  // Also sync on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getSavedTheme());
  });
})();
