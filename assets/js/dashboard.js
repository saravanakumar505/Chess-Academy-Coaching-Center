/**
 * Student Dashboard System
 * Handles sidebar toggling, notification dropdown, profile editing,
 * mock learning progress charts, and tournament interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Sidebar Toggle
  const sidebar = document.getElementById('dashboard-sidebar');
  const sidebarToggleBtn = document.getElementById('dashboard-sidebar-toggle');
  const sidebarCloseBtn = document.getElementById('dashboard-sidebar-close');
  const sidebarOverlay = document.getElementById('dashboard-sidebar-overlay');

  function openSidebar() {
    if (sidebar) sidebar.classList.remove('-translate-x-full', 'rtl:translate-x-full');
    if (sidebarOverlay) sidebarOverlay.classList.remove('hidden');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.add('-translate-x-full', 'rtl:translate-x-full');
    if (sidebarOverlay) sidebarOverlay.classList.add('hidden');
  }

  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', openSidebar);
  }
  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeSidebar);
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Dashboard Notifications Toggle
  const notifBtn = document.getElementById('notif-menu-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
        notifDropdown.classList.add('hidden');
      }
    });
  }

  // Mark all notifications as read
  const markReadBtn = document.getElementById('mark-all-read-btn');
  if (markReadBtn) {
    markReadBtn.addEventListener('click', () => {
      document.querySelectorAll('.unread-dot').forEach(dot => dot.remove());
      const badge = document.getElementById('notif-badge-count');
      if (badge) badge.classList.add('hidden');
      if (window.showToast) window.showToast('All notifications marked as read.', 'info');
    });
  }

  // Profile Edit Simulation
  const profileForm = document.getElementById('profile-edit-form');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (window.showToast) {
        window.showToast('Profile information successfully updated! (Demo)', 'success');
      }
    });
  }

  // Certificate Download Action
  document.querySelectorAll('.download-cert-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const certName = btn.dataset.cert || 'Certificate';
      if (window.showToast) {
        window.showToast(`Generating & downloading PDF for ${certName}...`, 'success');
      }
    });
  });

  // Payment Receipt Download
  document.querySelectorAll('.download-receipt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const invoiceId = btn.dataset.invoice || 'INV-001';
      if (window.showToast) {
        window.showToast(`Receipt for ${invoiceId} downloaded.`, 'success');
      }
    });
  });

  // Render SVG Charts in Progress page if canvas/chart-container exists
  renderMockCharts();
});

function renderMockCharts() {
  const chartEl = document.getElementById('progress-bar-chart');
  if (chartEl) {
    // Generate simple responsive SVG rating progression chart
    chartEl.innerHTML = `
      <div class="w-full h-44 flex items-end justify-between gap-3 pt-4 pb-1 px-2">
        <div class="flex-1 flex flex-col items-center gap-1.5">
          <span class="text-[11px] font-semibold text-slate-500">1200</span>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t h-12 transition-all hover:bg-[#D6A84F]"></div>
          <span class="text-[11px] text-slate-400">Jan</span>
        </div>
        <div class="flex-1 flex flex-col items-center gap-1.5">
          <span class="text-[11px] font-semibold text-slate-500">1280</span>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t h-16 transition-all hover:bg-[#D6A84F]"></div>
          <span class="text-[11px] text-slate-400">Feb</span>
        </div>
        <div class="flex-1 flex flex-col items-center gap-1.5">
          <span class="text-[11px] font-semibold text-slate-500">1350</span>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t h-20 transition-all hover:bg-[#D6A84F]"></div>
          <span class="text-[11px] text-slate-400">Mar</span>
        </div>
        <div class="flex-1 flex flex-col items-center gap-1.5">
          <span class="text-[11px] font-semibold text-slate-500">1420</span>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-t h-24 transition-all hover:bg-[#D6A84F]"></div>
          <span class="text-[11px] text-slate-400">Apr</span>
        </div>
        <div class="flex-1 flex flex-col items-center gap-1.5">
          <span class="text-[11px] font-bold text-blue-500">1510</span>
          <div class="w-full bg-blue-600 rounded-t h-28 transition-all hover:bg-[#D6A84F]"></div>
          <span class="text-[11px] font-bold text-blue-500">May</span>
        </div>
      </div>
    `;
  }
}

