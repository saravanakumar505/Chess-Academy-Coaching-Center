/**
 * Programs Filtering & Interactive Catalog
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.program-filter-btn');
  const programCards = document.querySelectorAll('.program-card');
  const searchInput = document.getElementById('program-search');

  // URL query parameter check (e.g. ?level=intermediate)
  const urlParams = new URLSearchParams(window.location.search);
  const initialLevel = urlParams.get('level');

  function filterPrograms(category) {
    programCards.forEach(card => {
      const cardLevel = card.dataset.level?.toLowerCase() || '';
      if (category === 'all' || cardLevel === category) {
        card.classList.remove('hidden');
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.opacity = '1';
        }, 50);
      } else {
        card.classList.add('hidden');
      }
    });

    filterBtns.forEach(btn => {
      if (btn.dataset.filter === category) {
        btn.classList.add('bg-[#D6A84F]', 'text-slate-900', 'font-bold', 'shadow-md');
        btn.classList.remove('bg-white', 'dark:bg-[#131C2E]', 'text-slate-700', 'dark:text-slate-300');
      } else {
        btn.classList.remove('bg-[#D6A84F]', 'text-slate-900', 'font-bold', 'shadow-md');
        btn.classList.add('bg-white', 'dark:bg-[#131C2E]', 'text-slate-700', 'dark:text-slate-300');
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterPrograms(filter);
    });
  });

  if (initialLevel) {
    filterPrograms(initialLevel.toLowerCase());
  }

  // Live Title Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      programCards.forEach(card => {
        const title = card.querySelector('.program-title')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.program-desc')?.textContent.toLowerCase() || '';
        if (title.includes(query) || desc.includes(query)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  }
});

