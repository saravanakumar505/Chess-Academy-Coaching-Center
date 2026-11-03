/**
 * Tournaments Manager
 * Filter upcoming, ongoing, and completed chess tournaments,
 * plus handle tournament registration dialogs.
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.tournament-filter-btn');
  const tournamentCards = document.querySelectorAll('.tournament-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const status = btn.dataset.status;

      filterBtns.forEach(b => {
        if (b === btn) {
          b.className = 'tournament-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#D6A84F] text-slate-900 shadow-md transition-all';
        } else {
          b.className = 'tournament-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-[#131C2E] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all';
        }
      });

      tournamentCards.forEach(card => {
        const cardStatus = card.dataset.status;
        if (status === 'all' || cardStatus === status) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Handle Register Quick Action
  document.querySelectorAll('.register-tournament-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tournamentName = btn.dataset.title || 'Selected Tournament';
      if (window.showToast) {
        window.showToast(`Opening registration portal for "${tournamentName}"...`, 'info');
      }
    });
  });
});

