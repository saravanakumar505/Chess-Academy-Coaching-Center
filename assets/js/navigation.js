/**
 * Navigation Manager
 * Handles sticky navbar (all pages), responsive alignment at 1024px+,
 * Home dropdown, mobile drawer, Light/Dark mode, and RTL toggles.
 */

function getBasePath() {
  const path = window.location.pathname.replace(/\\/g, '/');
  if (path.includes('/pages/dashboard/')) {
    return '../../';
  } else if (path.includes('/pages/')) {
    return '../';
  }
  return './';
}

function renderPublicNavbar(activePage = '') {
  const base = getBasePath();
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <nav class="relative w-full bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300" id="main-nav">
      <div class="w-full max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-8">
        <div class="flex items-center justify-between h-16 lg:h-[68px]">

          <!-- ── Logo ── -->
          <a href="${base}index.html" class="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#D6A84F] rounded-lg p-1 shrink-0 min-w-0">
            <div class="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-gradient-to-br from-[#14213D] to-[#2563EB] dark:from-[#2563EB] dark:to-[#14213D] flex items-center justify-center text-[#D6A84F] shadow-md border border-[#D6A84F]/30 group-hover:scale-105 transition-transform shrink-0">
              <i class="fa-solid fa-chess-knight text-sm lg:text-base"></i>
            </div>
            <div class="flex flex-col leading-none">
              <span class="font-serif-title text-sm lg:text-[15px] xl:text-lg font-bold tracking-wider text-slate-900 dark:text-white whitespace-nowrap">
                CHESS <span class="text-[#D6A84F]">ACADEMY</span>
              </span>
              <span class="text-[8px] tracking-widest uppercase font-semibold text-slate-500 dark:text-slate-400 hidden sm:block">Master Your Mind</span>
            </div>
          </a>

          <!-- ── Desktop Nav Links — visible lg (1024px+) ── -->
          <div class="hidden lg:flex items-center flex-1 justify-center px-2 xl:px-4">
            <div class="flex items-center gap-0 xl:gap-0.5 font-medium text-[11px] xl:text-xs text-slate-700 dark:text-slate-200">

              <!-- Home Dropdown -->
              <div class="relative group" id="home-dropdown-container">
                <button type="button"
                  class="nav-item flex items-center gap-0.5 px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${['home-1','home-2'].includes(activePage) ? 'text-[#D6A84F] font-bold' : ''}"
                  id="home-dropdown-btn">
                  <span>Home</span>
                  <i class="fa-solid fa-chevron-down text-[9px] transition-transform duration-200 group-hover:rotate-180"></i>
                </button>
                <div class="absolute left-0 rtl:left-auto rtl:right-0 top-full mt-1 w-60 rounded-2xl bg-white dark:bg-[#131C2E] border border-slate-200 dark:border-slate-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-left rtl:origin-top-right z-50 p-2" id="home-dropdown-menu">
                  <a href="${base}index.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group/sub ${activePage === 'home-1' ? 'bg-[#D6A84F]/10 text-[#D6A84F]' : ''}">
                    <div class="w-8 h-8 rounded-lg bg-amber-500/10 text-[#D6A84F] flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:scale-110 transition-transform">
                      <i class="fa-solid fa-chess-king"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-slate-900 dark:text-white group-hover/sub:text-[#D6A84F] text-xs">Home 1 — Main Academy</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400">Classic academy showcase &amp; curriculum</div>
                    </div>
                  </a>
                  <a href="${base}pages/home-2.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group/sub mt-1 ${activePage === 'home-2' ? 'bg-[#D6A84F]/10 text-[#D6A84F]' : ''}">
                    <div class="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mt-0.5 group-hover/sub:scale-110 transition-transform">
                      <i class="fa-solid fa-trophy"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-slate-900 dark:text-white group-hover/sub:text-[#D6A84F] text-xs">Home 2 — Competitive Hub</div>
                      <div class="text-[11px] text-slate-500 dark:text-slate-400">Tournament focus &amp; elite training layout</div>
                    </div>
                  </a>
                </div>
              </div>

              <a href="${base}pages/about.html"       class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='about'       ? 'text-[#D6A84F] font-bold':''}" >About</a>
              <a href="${base}pages/programs.html"    class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='programs'    ? 'text-[#D6A84F] font-bold':''}" >Programs</a>
              <a href="${base}pages/coaches.html"     class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='coaches'     ? 'text-[#D6A84F] font-bold':''}" >Coaches</a>
              <a href="${base}pages/tournaments.html" class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='tournaments' ? 'text-[#D6A84F] font-bold':''}" >Tournaments</a>
              <a href="${base}pages/schedule.html"    class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='schedule'    ? 'text-[#D6A84F] font-bold':''}" >Schedule</a>
              <a href="${base}pages/gallery.html"     class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='gallery'     ? 'text-[#D6A84F] font-bold':''}" >Gallery</a>
              <a href="${base}pages/blog.html"        class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='blog'        ? 'text-[#D6A84F] font-bold':''}" >Blog</a>
              <a href="${base}pages/contact.html"     class="nav-item px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg hover:text-[#D6A84F] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors whitespace-nowrap ${activePage==='contact'     ? 'text-[#D6A84F] font-bold':''}" >Contact</a>
            </div>
          </div>

          <!-- ── Desktop Utility Controls — visible lg (1024px+) ── -->
          <div class="hidden lg:flex items-center gap-1.5 xl:gap-2 shrink-0">
            <!-- RTL Toggle -->
            <button type="button" class="rtl-toggle-btn flex items-center gap-1 px-1.5 xl:px-2.5 py-1.5 text-[10px] xl:text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#D6A84F] text-slate-700 dark:text-slate-300 transition-colors whitespace-nowrap" title="Toggle RTL/LTR">
              <i class="fa-solid fa-globe text-[#D6A84F] text-[10px]"></i>
              <span class="rtl-label">RTL</span>
            </button>

            <!-- Theme Toggle -->
            <button type="button" class="theme-toggle-btn w-8 h-8 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 hover:border-[#D6A84F] text-slate-700 dark:text-slate-300 transition-colors" title="Toggle Theme">
              <i class="fa-solid fa-sun text-[#D6A84F] text-xs theme-sun-icon hidden"></i>
              <i class="fa-solid fa-moon text-blue-400 text-xs theme-moon-icon"></i>
            </button>

            <!-- Login -->
            <a href="${base}pages/login.html" class="px-2 xl:px-3 py-1.5 text-[11px] xl:text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] transition-colors whitespace-nowrap">Login</a>

            <!-- Dashboard -->
            <a href="${base}pages/dashboard/index.html" class="flex items-center gap-1.5 px-2.5 xl:px-4 py-1.5 xl:py-2 text-[11px] xl:text-xs font-semibold text-white bg-gradient-to-r from-[#14213D] via-[#2563EB] to-[#14213D] hover:from-[#1E3A8A] hover:to-[#2563EB] rounded-xl shadow-md hover:shadow-lg transition-all border border-[#D6A84F]/40 whitespace-nowrap">
              <i class="fa-solid fa-graduation-cap text-[#D6A84F] text-[10px]"></i>
              <span>Dashboard</span>
            </a>
          </div>

          <!-- ── Mobile / Tablet Controls — hidden at lg (1024px+) ── -->
          <div class="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <!-- Theme Toggle -->
            <button type="button" class="theme-toggle-btn w-8 h-8 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300" title="Toggle Theme">
              <i class="fa-solid fa-sun text-[#D6A84F] text-xs theme-sun-icon hidden"></i>
              <i class="fa-solid fa-moon text-blue-400 text-xs theme-moon-icon"></i>
            </button>

            <!-- RTL Toggle -->
            <button type="button" class="rtl-toggle-btn px-2 py-1 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300" title="Toggle RTL/LTR">
              <span class="rtl-label">RTL</span>
            </button>

            <!-- Dashboard (sm+) -->
            <a href="${base}pages/dashboard/index.html" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <i class="fa-solid fa-graduation-cap text-[#D6A84F]"></i>
              <span>Dashboard</span>
            </a>

            <!-- Hamburger -->
            <button type="button" id="mobile-menu-btn" class="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#D6A84F]" aria-label="Toggle Menu">
              <i class="fa-solid fa-bars text-lg" id="mobile-menu-icon"></i>
            </button>
          </div>

        </div>
      </div>

      <!-- ── Mobile & Tablet Navigation Drawer (< 1024px) ── -->
      <div class="lg:hidden hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#0B1220]/98 backdrop-blur-xl px-4 sm:px-6 pt-4 pb-8 max-h-[85vh] overflow-y-auto shadow-2xl" id="mobile-menu-drawer">
        <div class="space-y-1 text-sm font-medium">

          <!-- Mobile Home Accordion -->
          <div class="border-b border-slate-100 dark:border-slate-800/80 pb-2">
            <button type="button" id="mobile-home-toggle" class="w-full flex items-center justify-between py-2.5 text-slate-800 dark:text-slate-100 font-bold">
              <span class="flex items-center gap-2.5"><i class="fa-solid fa-chess text-[#D6A84F]"></i> Home Pages</span>
              <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200" id="mobile-home-icon"></i>
            </button>
            <div class="hidden pl-7 pr-2 py-2 space-y-2 rtl:pr-7 rtl:pl-2" id="mobile-home-sub">
              <a href="${base}index.html"            class="block py-2 text-xs font-semibold ${activePage==='home-1' ? 'text-[#D6A84F]':'text-slate-600 dark:text-slate-400'}">Home 1 — Main Academy</a>
              <a href="${base}pages/home-2.html"     class="block py-2 text-xs font-semibold ${activePage==='home-2' ? 'text-[#D6A84F]':'text-slate-600 dark:text-slate-400'}">Home 2 — Competitive Hub</a>
            </div>
          </div>

          <a href="${base}pages/about.html"       class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] border-b border-slate-100 dark:border-slate-800/60">About Us</a>
          <a href="${base}pages/programs.html"    class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] border-b border-slate-100 dark:border-slate-800/60">Coaching Programs</a>
          <a href="${base}pages/coaches.html"     class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] border-b border-slate-100 dark:border-slate-800/60">Our Grandmasters</a>
          <a href="${base}pages/tournaments.html" class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] border-b border-slate-100 dark:border-slate-800/60">Tournaments &amp; Opens</a>
          <a href="${base}pages/schedule.html"    class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] border-b border-slate-100 dark:border-slate-800/60">Weekly Schedule</a>
          <a href="${base}pages/gallery.html"     class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] border-b border-slate-100 dark:border-slate-800/60">Photo Gallery</a>
          <a href="${base}pages/blog.html"        class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F] border-b border-slate-100 dark:border-slate-800/60">Chess Articles &amp; Blog</a>
          <a href="${base}pages/contact.html"     class="block py-2.5 text-slate-700 dark:text-slate-200 hover:text-[#D6A84F]">Contact Academy</a>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
          <a href="${base}pages/login.html" class="w-full text-center py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-xs hover:border-[#D6A84F]">
            Sign In to Account
          </a>
          <a href="${base}pages/dashboard/index.html" class="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#14213D] via-[#2563EB] to-[#14213D] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2">
            <i class="fa-solid fa-graduation-cap text-[#D6A84F]"></i>
            Student Dashboard
          </a>
        </div>
      </div>
    </nav>
  `;

  initNavbarInteractions();

  // Sync theme & RTL buttons immediately after navbar render
  if (window.updateThemeUI) window.updateThemeUI();
  if (window.updateRtlUI)   window.updateRtlUI();
}

function initNavbarInteractions() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const drawer    = document.getElementById('mobile-menu-drawer');
  const icon      = document.getElementById('mobile-menu-icon');

  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
      if (icon) {
        icon.className = drawer.classList.contains('hidden')
          ? 'fa-solid fa-bars text-lg'
          : 'fa-solid fa-xmark text-lg';
      }
    });
  }

  const mobileHomeToggle = document.getElementById('mobile-home-toggle');
  const mobileHomeSub    = document.getElementById('mobile-home-sub');
  const mobileHomeIcon   = document.getElementById('mobile-home-icon');
  if (mobileHomeToggle && mobileHomeSub) {
    mobileHomeToggle.addEventListener('click', () => {
      mobileHomeSub.classList.toggle('hidden');
      if (mobileHomeIcon) mobileHomeIcon.classList.toggle('rotate-180');
    });
  }

  // Close drawer when any link inside it is clicked
  if (drawer) {
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
        if (icon) icon.className = 'fa-solid fa-bars text-lg';
      });
    });
  }
}

function renderPublicFooter() {
  const base = getBasePath();
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="bg-[#0B1220] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <!-- Subtle Chess Background Watermark -->
      <div class="absolute -right-16 -bottom-16 text-white/[0.02] text-[280px] pointer-events-none select-none">
        <i class="fa-solid fa-chess-king"></i>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          <!-- Column 1: Brand Info -->
          <div class="lg:col-span-2">
            <a href="${base}index.html" class="flex items-center gap-3 group mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#14213D] to-[#2563EB] flex items-center justify-center text-[#D6A84F] text-xl shadow-md border border-[#D6A84F]/30">
                <i class="fa-solid fa-chess-knight"></i>
              </div>
              <span class="font-serif-title text-xl font-bold tracking-wider text-white">
                CHESS <span class="text-[#D6A84F]">ACADEMY</span>
              </span>
            </a>
            <p class="text-sm text-slate-400 mb-6 leading-relaxed max-w-sm">
              Think Ahead. Play Smart. Master Chess. Premier chess training academy developing sharp, strategic, and resilient minds through FIDE-certified mentorship.
            </p>
            <div class="flex items-center gap-3">
              <a href="#" class="w-9 h-9 rounded-lg bg-slate-800/90 text-slate-300 hover:text-[#D6A84F] hover:bg-slate-700 transition-colors flex items-center justify-center" aria-label="Facebook"><i class="fa-brands fa-facebook-f text-sm"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-slate-800/90 text-slate-300 hover:text-[#D6A84F] hover:bg-slate-700 transition-colors flex items-center justify-center" aria-label="Twitter"><i class="fa-brands fa-x-twitter text-sm"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-slate-800/90 text-slate-300 hover:text-[#D6A84F] hover:bg-slate-700 transition-colors flex items-center justify-center" aria-label="Instagram"><i class="fa-brands fa-instagram text-sm"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-slate-800/90 text-slate-300 hover:text-[#D6A84F] hover:bg-slate-700 transition-colors flex items-center justify-center" aria-label="YouTube"><i class="fa-brands fa-youtube text-sm"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-slate-800/90 text-slate-300 hover:text-[#D6A84F] hover:bg-slate-700 transition-colors flex items-center justify-center" aria-label="Discord"><i class="fa-brands fa-discord text-sm"></i></a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#D6A84F] pl-2.5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2.5">Explore</h3>
            <ul class="space-y-2.5 text-sm">
              <li><a href="${base}index.html"            class="hover:text-[#D6A84F] transition-colors">Home (Classic)</a></li>
              <li><a href="${base}pages/home-2.html"     class="hover:text-[#D6A84F] transition-colors">Home 2 (Competitive)</a></li>
              <li><a href="${base}pages/about.html"      class="hover:text-[#D6A84F] transition-colors">About Academy</a></li>
              <li><a href="${base}pages/coaches.html"    class="hover:text-[#D6A84F] transition-colors">Our Grandmasters</a></li>
              <li><a href="${base}pages/tournaments.html" class="hover:text-[#D6A84F] transition-colors">Tournaments &amp; Open</a></li>
              <li><a href="${base}pages/schedule.html"   class="hover:text-[#D6A84F] transition-colors">Weekly Batches</a></li>
              <li><a href="${base}pages/gallery.html"    class="hover:text-[#D6A84F] transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          <!-- Column 3: Coaching Programs -->
          <div>
            <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#2563EB] pl-2.5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2.5">Programs</h3>
            <ul class="space-y-2.5 text-sm">
              <li><a href="${base}pages/programs.html?level=beginner"     class="hover:text-[#D6A84F] transition-colors">Beginner Foundations</a></li>
              <li><a href="${base}pages/programs.html?level=intermediate" class="hover:text-[#D6A84F] transition-colors">Intermediate Tactics</a></li>
              <li><a href="${base}pages/programs.html?level=advanced"     class="hover:text-[#D6A84F] transition-colors">Advanced Masterclass</a></li>
              <li><a href="${base}pages/programs.html"                    class="hover:text-[#D6A84F] transition-colors">Opening Repertoire</a></li>
              <li><a href="${base}pages/programs.html"                    class="hover:text-[#D6A84F] transition-colors">Endgame Mastery</a></li>
              <li><a href="${base}pages/program-details.html"             class="hover:text-[#D6A84F] transition-colors">Program Details Demo</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact & Academy Info -->
          <div>
            <h3 class="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#D6A84F] pl-2.5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-2.5">Headquarters</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-location-dot text-[#D6A84F] mt-1 shrink-0"></i>
                <span>450 Grandmaster Way, Chess Square, Suite 800, New York, NY 10001</span>
              </li>
              <li class="flex items-center gap-2.5">
                <i class="fa-solid fa-phone text-[#D6A84F] shrink-0"></i>
                <span>+1 (800) 555-CHESS (Demo)</span>
              </li>
              <li class="flex items-center gap-2.5">
                <i class="fa-solid fa-envelope text-[#D6A84F] shrink-0"></i>
                <span>info@chessacademy-demo.com</span>
              </li>
              <li class="flex items-center gap-2.5">
                <i class="fa-solid fa-clock text-[#D6A84F] shrink-0"></i>
                <span>Mon - Sun: 08:00 AM - 08:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>&copy; 2026 Chess Academy &amp; Coaching Center. All rights reserved.</div>
          <div class="flex items-center gap-6">
            <a href="${base}pages/contact.html"      class="hover:text-slate-400">Support</a>
            <a href="${base}pages/coming-soon.html"  class="hover:text-slate-400">Privacy Policy</a>
            <a href="${base}pages/coming-soon.html"  class="hover:text-slate-400">Terms of Service</a>
            <a href="${base}pages/404.html"          class="hover:text-slate-400">404 Error Page</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Auto-run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const activePage = document.body.dataset.page || '';
  renderPublicNavbar(activePage);
  renderPublicFooter();
});
