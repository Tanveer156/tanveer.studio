// ===== EDITABLE CONFIGURATION =====

const profile = {
  name: "YOUR NAME",
  email: "your-email@gmail.com",
  reddit: "https://www.reddit.com/user/Extra_Mode656",
  discord: "https://discord.com/users/1551385427888578580"
};

// ===== PORTFOLIO DATA =====
const portfolio = [
  // --- SPORTS FLYERS ---
  {
    title: "Football Match Poster",
    category: "Sports Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/sports/football.png",
    description: "Professional matchday promotional design.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    title: "Basketball Championship",
    category: "Sports Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/sports/Basketball.png",
    description: "Tournament announcement visual.",
    tools: ["Photoshop"]
  },
  {
    title: "Cricket League Poster",
    category: "Sports Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/sports/Cricket%20Match%20Poster.png",
    description: "Matchday promotional flyer.",
    tools: ["Illustrator"]
  },
  {
    title: "Tennis Open Graphic",
    category: "Sports Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/sports/Tennis%20Junior%20Camp%20Poster.png",
    description: "Grand tournament social banner.",
    tools: ["Photoshop"]
  },

  // --- FOOD FLYERS ---
  {
    title: "Fresh Menu Campaign",
    category: "Food Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/food/Fresh%20Food%20Menu%20Flyer.png",
    description: "Bold promotional graphics for a food brand.",
    tools: ["Photoshop", "Figma"]
  },
  {
    title: "Burger Special Promo",
    category: "Food Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/food/Burger%20Special.png",
    description: "Delicious deal flyer design.",
    tools: ["Photoshop"]
  },
  {
    title: "Artisan Coffee Menu",
    category: "Food Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/food/Brown%20and%20Beige%20Minimalist%20Coffee%20Shop%20Grand%20Opening%20Poster.png",
    description: "Rustic cafe menu flyer layout.",
    tools: ["Illustrator", "InDesign"]
  },
  {
    title: "Pizza Weekend Combo",
    category: "Food Flyers",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/food/Brown%20and%20Orange%20Modern%20Pizza%20Combo%20Instagram%20Post.png",
    description: "Vibrant fast-food deal poster.",
    tools: ["Photoshop"]
  },

  // --- EVENT POSTERS ---
  {
    title: "Night Culture",
    category: "Event Posters",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/event/Night%20Poster.png",
    description: "A modern visual identity for a live event.",
    tools: ["Illustrator", "Photoshop"]
  },
  {
    title: "Summer Music Festival",
    category: "Event Posters",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/event/Festival%20Poster.png",
    description: "Vibrant outdoor concert promo banner.",
    tools: ["Photoshop"]
  },
  {
    title: "Tech Conference 2026",
    category: "Event Posters",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/event/Tech%20Conference%20Poster.png",
    description: "Futuristic typography and event poster.",
    tools: ["Figma", "Illustrator"]
  },
  {
    title: "Indie Art Exhibition",
    category: "Event Posters",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/event/White%20Minimalist%20Art%20Exhibition%20Poster.png",
    description: "Minimal gallery show promo design.",
    tools: ["InDesign", "Photoshop"]
  },

  // --- LOGO DESIGN ---
  {
    title: "Brand Mark Study",
    category: "Logo Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/logo/1.jpg",
    description: "A clean and memorable logo concept.",
    tools: ["Illustrator"]
  },
  {
    title: "Apex Tech Emblem",
    category: "Logo Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/logo/2.png",
    description: "Geometric monogram for a SaaS platform.",
    tools: ["Illustrator", "Figma"]
  },
  {
    title: "Lumina Cafe Branding",
    category: "Logo Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/logo/Generated%20Image%20September%2021,%202026%20-%201_49PM.png",
    description: "Elegant wordmark and icon identity.",
    tools: ["Illustrator"]
  },
  {
    title: "Pulse Fitness Badge",
    category: "Logo Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/logo/Generated%20Image%20September%2021,%202026%20-%201_50PM.png",
    description: "Dynamic athletic crest design.",
    tools: ["Illustrator", "Photoshop"]
  },

  // --- WEB DESIGN ---
  {
    title: "Digital Launch",
    category: "Web Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/web/Generated%20Image%20September%2021,%202026%20-%201_52PM.png",
    description: "Responsive landing page visual direction.",
    tools: ["Figma", "Web Design"]
  },
  {
    title: "E-Commerce Storefront",
    category: "Web Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/web/Generated%20Image%20September%2021,%202026%20-%201_54PM.png",
    description: "Modern UI/UX shopping experience layout.",
    tools: ["Figma"]
  },
  {
    title: "SaaS Dashboard Interface",
    category: "Web Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/web/Generated%20Image%20September%2021,%202026%20-%201_57PM.png",
    description: "Dark-themed analytics dashboard layout.",
    tools: ["Figma", "Illustrator"]
  },
  {
    title: "Creative Agency Portfolio",
    category: "Web Design",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/web/Generated%20Image%20September%2021,%202026%20-%201_55PM.png",
    description: "Interactive showcase website design.",
    tools: ["Figma", "Webflow"]
  },

  // --- SOCIAL MEDIA ---
  {
    title: "Social Campaign",
    category: "Social Media",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/social/Brown%20and%20Beige%20Minimalist%20Interior%20Design%20Mobile%20First%20Presentation.png",
    description: "Social-first promotional design system.",
    tools: ["Photoshop", "Illustrator"]
  },
  {
    title: "Product Launch Carousel",
    category: "Social Media",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/social/Beige%20and%20Brown%20Modern%20Cosmetic%20Product%20Launch%20Instagram%20Post.png",
    description: "Multi-slide Instagram story pack.",
    tools: ["Figma", "Photoshop"]
  },
  {
    title: "Fitness Brand Ad Set",
    category: "Social Media",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/social/Brown%20and%20White%20Simple%20Gym%20Fitness%20Instagram%20Post.png",
    description: "High-converting social ad creatives.",
    tools: ["Photoshop"]
  },
  {
    title: "Podcast Promo Kit",
    category: "Social Media",
    image: "https://iithqcwzmrwojuqkwarr.supabase.co/storage/v1/object/public/portfolio/social/White%20&%20Purple%20Minimalist%20Podcast%20Instagram%20Post.png",
    description: "Episode highlight banners and audio wave graphics.",
    tools: ["Photoshop", "Illustrator"]
  }
];

const services = [
  ['✦', 'Poster Design', 'Creative promotional and advertising posters.'],
  ['◒', 'Food Flyer Design', 'Modern promotional graphics for restaurants, cafés, and food businesses.'],
  ['◈', 'Sports Design', 'Matchday posters, player graphics, tournament graphics, and sports promotions.'],
  ['✧', 'Event Poster Design', 'Professional designs for concerts, programs, campaigns, parties, and events.'],
  ['◇', 'Logo Design', 'Clean and memorable logos for brands and businesses.'],
  ['▣', 'Social Media Design', 'Professional posts, banners, advertisements, and promotional graphics.'],
  ['⌘', 'Frontend Website Design', 'Modern responsive landing pages and portfolio websites.'],
  ['❂', 'Brand Identity Design', 'Complete visual branding solutions and style guides for businesses.']
];

const payments = [
  ['Binance', 'Available', false],
  ['Payoneer', 'Available', false],
  ['G Pay/Paypal', 'Coming Soon', true],
  ['Elevate Pay', 'Coming Soon', true]
];

const categories = ['All', ...new Set(portfolio.map(x => x.category))];
let selected = 'All';

// ===== HELPERS =====

const $ = s => document.querySelector(s);

const esc = s => String(s).replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
}[c]));

// ===== RENDERING =====

function renderFilters() {
  const filtersEl = $('#filters');
  if (!filtersEl) return;

  filtersEl.innerHTML = categories
    .map(c => `<button class="filter ${c === selected ? 'active' : ''}" data-filter="${esc(c)}">${esc(c)}</button>`)
    .join('');

  document.querySelectorAll('.filter').forEach(b => {
    b.onclick = () => {
      selected = b.dataset.filter;
      renderFilters();
      renderPortfolio();
    };
  });
}

function renderPortfolio() {
  const gridEl = $('#portfolio-grid');
  if (!gridEl) return;

  let items = [];

  if (selected === 'All') {
    // Shows 1 item per category as a summary preview
    const seenCategories = new Set();
    items = portfolio.filter(item => {
      if (!seenCategories.has(item.category)) {
        seenCategories.add(item.category);
        return true;
      }
      return false;
    });
    // NOTE: To show ALL items when 'All' is selected, replace above lines with: items = portfolio;
  } else {
    items = portfolio.filter(x => x.category === selected);
  }

  gridEl.innerHTML = items.map((x) => {
    const originalIndex = portfolio.indexOf(x);
    return `
      <article class="portfolio-card reveal" data-index="${originalIndex}">
        <img src="${x.image}" alt="${esc(x.title)}">
        <div class="card-info">
          <h3>${esc(x.title)}</h3>
          <p>${esc(x.category)}</p>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.portfolio-card').forEach(c => {
    c.onclick = () => {
      const idx = parseInt(c.dataset.index, 10);
      if (!isNaN(idx) && portfolio[idx]) {
        openModal(portfolio[idx]);
      }
    };
  });

  observe();
}

function renderServices() {
  const gridEl = $('#services-grid');
  if (!gridEl) return;

  gridEl.innerHTML = services.map(x => `
    <article class="service-card reveal">
      <div class="service-icon">${x[0]}</div>
      <h3>${esc(x[1])}</h3>
      <p>${esc(x[2])}</p>
    </article>
  `).join('');

  observe();
}

function renderPayments() {
  const paymentsEl = $('#payments');
  if (!paymentsEl) return;

  paymentsEl.innerHTML = payments.map(x => `
    <div class="payment-card">
      <strong>${esc(x[0])}</strong>
      <span class="status ${x[2] ? 'soon' : ''}">${esc(x[1])}</span>
    </div>
  `).join('');
}

// ===== MODAL =====

function openModal(x) {
  const modal = $('#project-modal');
  if (!modal) return;

  const imgEl = $('#modal-image');
  const titleEl = $('#modal-title');
  const categoryEl = $('#modal-category');
  const descEl = $('#modal-description');
  const toolsEl = $('#modal-tools');

  if (imgEl) { imgEl.src = x.image; imgEl.alt = x.title; }
  if (titleEl) titleEl.textContent = x.title;
  if (categoryEl) categoryEl.textContent = x.category;
  if (descEl) descEl.textContent = x.description;
  if (toolsEl) toolsEl.textContent = x.tools.join(' · ');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = $('#project-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

// ===== FORMSPREE CONTACT FORM SUBMISSION (AJAX) =====

const contactForm = $('#contact-form');
if (contactForm) {
  contactForm.onsubmit = async function(e) {
    e.preventDefault();
    const statusEl = $('#contact-form-status');
    const submitBtn = $('#contact-submit-btn') || contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);

    if (statusEl) {
      statusEl.textContent = 'Sending message...';
      statusEl.style.color = '#fff';
    }
    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        if (statusEl) {
          statusEl.textContent = 'Thank you! Your message has been sent successfully.';
          statusEl.style.color = '#4caf50';
        }
        contactForm.reset();
      } else {
        const data = await response.json();
        if (statusEl) {
          statusEl.style.color = '#f44336';
          if (data.errors) {
            statusEl.textContent = data.errors.map(err => err.message).join(', ');
          } else {
            statusEl.textContent = 'Oops! There was a problem submitting your form.';
          }
        }
      }
    } catch (error) {
      if (statusEl) {
        statusEl.textContent = 'Oops! Network error. Please try again later.';
        statusEl.style.color = '#f44336';
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  };
}

// ===== NAV / MODAL / MISC WIRING =====

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.onclick = () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('open');
  };
}

document.querySelectorAll('.nav a').forEach(a => a.onclick = () => {
  const nav = document.querySelector('.nav');
  if (nav) nav.classList.remove('open');
});

const modalCloseBtn = $('.modal-close');
if (modalCloseBtn) modalCloseBtn.onclick = closeModal;

const modalBg = $('#project-modal');
if (modalBg) {
  modalBg.onclick = e => {
    if (e.target.id === 'project-modal') closeModal();
  };
}

// Escape Key to Close Modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

const emailLink = $('#email-link');
if (emailLink) emailLink.href = `mailto:${profile.email}`;

const redditLink = $('#reddit-link');
if (redditLink) redditLink.href = profile.reddit;

const discordLink = $('#discord-link');
if (discordLink) discordLink.href = profile.discord;

const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== SCROLL REVEAL =====

function observe() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }), { threshold: 0.08 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(x => io.observe(x));
}

// ===== INIT =====

renderFilters();
renderPortfolio();
renderServices();
renderPayments();
observe();