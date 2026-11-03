# Chess Academy & Coaching Center

> **"Think Ahead. Play Smart. Master Chess."**

A modern, responsive, and multi-page **Chess Academy & Coaching Center Website** featuring two distinct homepages, public academy portals, and a student learning dashboard.

---

## 1. Technology Stack

- **HTML5:** Semantic markup, accessible labels, clean heading hierarchy, and meta configurations.
- **Tailwind CSS CDN:** Modern utility-first responsive styling without complex Node.js build pipelines.
- **Vanilla JavaScript:** Fast, modular, zero-dependency client-side scripting.
- **FontAwesome 6 Icons CDN:** Vector chess pieces, trophies, clocks, UI controls, and badges.
- **No Build Tools Required:** Pure static frontend runnable directly via VS Code Live Server or any static web host.

---

## 2. Project Folder Structure

```text
chess-academy/
│
├── index.html                           # Home 1 — Main Academy Homepage
│
├── pages/
│   ├── home-2.html                      # Home 2 — Alternative Competitive Hub
│   ├── about.html                       # About Academy & Heritage
│   ├── programs.html                    # Coaching Programs Catalog & Level Filter
│   ├── program-details.html             # Detailed Course Curriculum & Enrollment
│   ├── coaches.html                     # Grandmasters & Coaching Faculty
│   ├── coach-details.html               # Coach Biography, Experience & Batches
│   ├── tournaments.html                 # Tournaments Listing (Upcoming, Live, Completed)
│   ├── tournament-details.html          # Tournament Regulations, Prize Fund & Entry
│   ├── schedule.html                    # Weekly Academic Timetable
│   ├── gallery.html                     # Photo Gallery with Lightbox Modal
│   ├── blog.html                        # Chess Articles & Theory Guides
│   ├── blog-details.html                # Formatted Article with Analysis Diagrams
│   ├── contact.html                     # Campus Address, Inquiries & Map Embed
│   ├── login.html                       # Student Authentication Sign-In
│   ├── register.html                    # Student Account Creation
│   ├── forgot-password.html             # Password Reset Form
│   ├── 404.html                         # Custom "Checkmate" Error Page
│   ├── coming-soon.html                 # Feature Announcement Page
│   │
│   ├── partials/
│   │   ├── navbar.html                  # Shared Public Header Component
│   │   └── footer.html                  # Shared Public Footer Component
│   │
│   └── dashboard/
│       ├── index.html                   # Student Dashboard Overview
│       ├── my-batches.html              # Enrolled Batches List
│       ├── batch-details.html           # Classroom Topics & Study PGNs
│       ├── schedule.html                # Personal Coaching Calendar
│       ├── tournaments.html             # Tournament Records & Entries
│       ├── tournament-registration.html # Competitor Pass Generator
│       ├── progress.html                # Elo Rating & Performance Analytics
│       ├── certificates.html            # Accredited PDF Certificates
│       ├── payments.html                # Billing Invoices & Receipts
│       ├── profile.html                 # Student Profile & Settings
│       └── notifications.html           # Alerts & Announcements Center
│
├── assets/
│   ├── css/
│   │   └── style.css                    # Custom Chessboard Patterns, KaTeX, & Animations
│   │
│   ├── js/
│   │   ├── main.js                      # Global Orchestrator & Smooth Scroll
│   │   ├── navigation.js                # Sticky Navbar, Mobile Drawer & Relative Link Resolution
│   │   ├── theme.js                     # Light / Dark Mode & Instant Flash Prevention
│   │   ├── rtl.js                       # RTL / LTR Layout Switch & Persistence
│   │   ├── forms.js                     # Validation, Password Toggle & Feedback Toasts
│   │   ├── programs.js                  # Level Filter (Beginner, Intermediate, Advanced) & Search
│   │   ├── tournaments.js               # Tournament Status Filter (Upcoming, Ongoing, Completed)
│   │   ├── dashboard.js                 # Sidebar Drawer, Mini Chart Generation & Alerts
│   │   └── animations.js                # Lightbox Modal, FAQ Accordions, & Number Counters
│   │
│   └── images/                          # Curated High-Resolution Local Photographs
│       ├── logo/                        # Academy Crest Logos (Light & Dark Variants)
│       ├── hero/                        # Page-Specific Hero Background Images
│       ├── about/                       # Training Halls & Student Mentorship
│       ├── programs/                    # Level-Specific Chessboard Photography
│       ├── coaches/                     # Realistic Grandmaster & Master Portraits
│       ├── tournaments/                 # Championship Arenas & Award Ceremonies
│       ├── gallery/                     # Interactive Photo Moments
│       ├── blog/                        # Strategy & Tactical Guides
│       └── dashboard/                   # Student Avatars & Training Visuals
│
└── README.md
```

---

## 3. Key Pages & Features

### Public Academy
1. **Home 1 (`index.html`):** Classic academy homepage featuring Grandmaster mentorship, 4-pillar learning cycle, student testimonials, achievement stats counters, and full curriculum showcase.
2. **Home 2 (`pages/home-2.html`):** Competitive arena and tournament hub layout featuring live tournament ticker, current leaderboard standings, format specializations (Classical, Rapid, Blitz), and Hall of Fame records.
3. **Working Home Dropdown:** Easily toggle between Home 1 and Home 2 directly from the navigation bar.
4. **Programs Catalog (`pages/programs.html`):** Filter by skill level (Beginner, Intermediate, Advanced) or search live by keyword.
5. **Program Details (`pages/program-details.html`):** Module-by-module breakdown, skills developed, instructor bio, FAQs, and tuition enrollment card.
6. **Coaches Directory (`pages/coaches.html`):** Roster of active FIDE Grandmasters, Woman Grandmasters, and International Masters with ratings, titles, and bios.
7. **Coach Profile (`pages/coach-details.html`):** Complete competitive biography, career milestones, available training batches, and student reviews.
8. **Tournaments (`pages/tournaments.html`):** Filter upcoming, ongoing live broadcasts, and past championship archives.
9. **Gallery (`pages/gallery.html`):** Category-filtered gallery with a full-screen Lightbox modal interaction.
10. **Articles & Blog (`pages/blog.html` & `pages/blog-details.html`):** Grandmaster strategy insights, opening theories, and clock psychology guides.
11. **Contact Us (`pages/contact.html`):** Academy campus location, phone, email, and interactive inquiry form.

### Student Dashboard
- **Overview (`pages/dashboard/index.html`):** Quick metrics, current cohort status, rating trajectory chart, and next class reminder.
- **My Batches & Classroom (`my-batches.html`, `batch-details.html`):** Download PGN files, review chess topics, and check attendance.
- **Schedule (`schedule.html`):** Calendar view of weekly sessions, sparring bouts, and GM masterclasses.
- **Tournaments & Pass (`tournaments.html`, `tournament-registration.html`):** Generate competition entry passes and view pairings.
- **Progress & Ratings (`progress.html`):** Track FIDE Elo rating climb, tactics accuracy, and coach post-mortem notes.
- **Certificates (`certificates.html`):** Download official accredited PDF completion certificates.
- **Billing (`payments.html`):** View payment ledger, transaction records, and invoice receipts.
- **Profile & Notifications (`profile.html`, `notifications.html`):** Update student goals, bio, and review real-time alerts.

---

## 4. Mandatory Global Features

### Light & Dark Mode
- Toggle button available in both public navbar and student dashboard.
- Defaults to a sleek, modern dark aesthetic (`#0B1220`).
- Seamlessly switches to crisp light mode (`#F8FAFC`).
- Preference persisted in `localStorage` to eliminate page load flash.

### RTL / LTR Bidirectional Support
- Visible `RTL/LTR` button in navbar and dashboard header.
- Dynamically switches document `dir` attribute between `ltr` and `rtl`.
- Correctly mirrors navigation, icons, drawers, and form alignments.
- Preference persisted in `localStorage`.

### Responsive Layouts Tested
- Full responsiveness across `320px`, `360px`, `375px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, and `1440px`.
- Mobile navigation drawer for public pages and responsive drawer sidebar for the student dashboard.

---

## 5. How to Run the Project

1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension by *Ritwick Dey* (if not already installed).
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The website will open at `http://127.0.0.1:5500/index.html`.
5. You can navigate between all public pages and the student dashboard directly.

> **Note on Direct File Opening (`file://`):**
> All public and dashboard pages use relative asset paths (`./`, `../`, `../../`) and will render styles, images, and functionality whether launched through an HTTP server or inspected locally.

---

## 6. Frontend Demo Limitations & Backend Requirements

- **Authentication:** Login and registration forms validate inputs and simulate successful authorization by navigating to the student dashboard. In production, this requires a secure server with bcrypt/Argon2 hashing, session tokens (JWT/cookies), and a database (e.g. PostgreSQL).
- **Payments:** Payment receipts and invoice buttons trigger interactive confirmation toasts. Real tuition processing requires Stripe, PayPal, or Razorpay API integration with webhook listeners.
- **Chessboard Analysis:** Live digital practice board launches simulate interactive sessions. In production, embed Stockfish WebAssembly (`stockfish.js`) or Chessground for browser-side move validation.

