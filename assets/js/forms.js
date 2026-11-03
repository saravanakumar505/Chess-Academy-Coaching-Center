/**
 * Forms & Validation Handler
 * Handles validation, show/hide password, and user feedback toasts.
 */

// Global Toast Notification Helper
window.showToast = function (message, type = 'success') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-5 right-5 rtl:right-auto rtl:left-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600' : type === 'error' ? 'bg-rose-600' : 'bg-[#14213D] border border-[#D6A84F]';
  const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle';

  toast.className = `${bg} text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 text-sm font-medium transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto`;
  toast.innerHTML = `
    <i class="fa-solid ${icon} text-lg"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Remove after 4 seconds
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

document.addEventListener('DOMContentLoaded', () => {
  // Password Visibility Toggles
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      const icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        if (icon) icon.className = 'fa-solid fa-eye-slash text-slate-400 hover:text-slate-600 dark:hover:text-slate-200';
      } else {
        input.type = 'password';
        if (icon) icon.className = 'fa-solid fa-eye text-slate-400 hover:text-slate-600 dark:hover:text-slate-200';
      }
    });
  });

  // Login Form Demo Submission
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email')?.value.trim();
      const password = document.getElementById('login-password')?.value;

      if (!email || !password) {
        window.showToast('Please enter both your email/username and password.', 'error');
        return;
      }

      window.showToast('Signing in to student dashboard...', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard/index.html';
      }, 1200);
    });
  }

  // Register Form Demo Submission
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value.trim();
      const email = document.getElementById('reg-email')?.value.trim();
      const pass = document.getElementById('reg-password')?.value;
      const confirmPass = document.getElementById('reg-confirm-password')?.value;
      const terms = document.getElementById('reg-terms')?.checked;

      if (!name || !email || !pass) {
        window.showToast('Please fill out all required fields.', 'error');
        return;
      }
      if (pass !== confirmPass) {
        window.showToast('Passwords do not match. Please verify.', 'error');
        return;
      }
      if (!terms) {
        window.showToast('You must accept the terms and conditions.', 'error');
        return;
      }

      window.showToast('Account created successfully! Redirecting to student dashboard...', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard/index.html';
      }, 1500);
    });
  }

  // Forgot Password Demo Submission
  const forgotForm = document.getElementById('forgot-form');
  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('forgot-email')?.value.trim();
      if (!email) {
        window.showToast('Please enter your registered email.', 'error');
        return;
      }
      window.showToast(`Password reset link sent to ${email} (Demo)`, 'success');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    });
  }

  // Contact Form Demo Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        window.showToast('Please complete all contact fields.', 'error');
        return;
      }

      window.showToast('Thank you! Your message has been sent to our academy team.', 'success');
      contactForm.reset();
    });
  }
});

