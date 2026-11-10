// Sample dataset for 200+ rose varieties
const roseVarieties = [
  { name: "Double Delight", type: "Hybrid Tea", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Black Lady", type: "Hybrid Tea", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Lal Kolkata", type: "Desi Rose", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Iceberg", type: "Floribunda", fragrant: false, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Angel Face", type: "Floribunda", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Miniature Red", type: "Miniature", fragrant: false, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Eden Climber", type: "Climber", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Knock Out", type: "Shrub", fragrant: false, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Flower Carpet Pink", type: "Ground Cover", fragrant: false, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Queen Elizabeth", type: "Grandiflora", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Abraham Darby", type: "Fragrant Roses", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" },
  { name: "Blue Moon", type: "Hybrid Tea", fragrant: true, channelUrl: "https://youtube.com/@yourchannel" }
];

let filteredData = [...roseVarieties];
let visibleCount = 10;
let currentFilterType = "type";
let currentFilterVal = "All";

// Toggle navigation menu
function toggleMenu() {
  const links = document.getElementById("navLinks");
  links.classList.toggle("show");
}

// Toggle accordions
function toggleAccordion(id) {
  const content = document.getElementById(id);
  content.classList.toggle("show");
}

// Filter catalog by type or alphabet
function filterCatalog(filterCategory, value, element) {
  const parent = element.parentElement;
  parent.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  currentFilterType = filterCategory;
  currentFilterVal = value;

  if (value === 'All') {
    filteredData = [...roseVarieties];
  } else if (filterCategory === 'type') {
    if (value === 'Fragrant Roses') {
      filteredData = roseVarieties.filter(item => item.fragrant);
    } else {
      filteredData = roseVarieties.filter(item => item.type === value);
    }
  } else if (filterCategory === 'alpha') {
    filteredData = roseVarieties.filter(item => item.name.toUpperCase().startsWith(value));
  }

  visibleCount = 10;
  renderCatalog();
}

// Render Rose Catalog Cards with WhatsApp Order & Channel Links
function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  grid.innerHTML = "";

  const itemsToDisplay = filteredData.slice(0, visibleCount);

  if (itemsToDisplay.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--muted);">No varieties found matching criteria.</p>`;
    document.getElementById("viewMoreBtn").style.display = "none";
    return;
  }

  itemsToDisplay.forEach(rose => {
    const card = document.createElement("div");
    card.className = "card";

    const isFragrantBadge = rose.fragrant 
      ? `<span class="badge fragrant">✨ Fragrant</span>`
      : `<span class="badge">${rose.type}</span>`;

    // WhatsApp Direct Order Link with pre-filled message
    const whatsappMessage = encodeURIComponent(`Hello, I want to order the rose variety: ${rose.name} (${rose.type}). Please share details.`);
    const whatsappUrl = `https://wa.me/916290488309?text=${whatsappMessage}`;

    card.innerHTML = `
      <div class="img-placeholder">Photos Coming Soon</div>
      <div class="card-body">
        ${isFragrantBadge}
        <h3>${rose.name}</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
          <a href="${whatsappUrl}" target="_blank" class="btn btn-primary" style="flex: 1; text-align: center; font-size: 0.85rem; padding: 0.5rem;">
            🛒 Order on WhatsApp
          </a>
          <a href="${rose.channelUrl}" target="_blank" class="btn btn-secondary" style="flex: 1; text-align: center; font-size: 0.85rem; padding: 0.5rem;">
            📺 Watch Channel
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  const viewMoreBtn = document.getElementById("viewMoreBtn");
  if (visibleCount >= filteredData.length) {
    viewMoreBtn.style.display = "none";
  } else {
    viewMoreBtn.style.display = "inline-block";
  }
}

// Load 10 more items
function loadMore() {
  visibleCount += 10;
  renderCatalog();
}

// Map Fallback Trigger
function showMapFallback() {
  document.getElementById("mapFallback").classList.add("show");
}

// Scroll Hiding Observer for Major Sections
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('scroll-hidden');
      } else {
        if (entry.boundingClientRect.top < 0) {
          entry.target.classList.add('scroll-hidden');
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-section').forEach(section => {
    observer.observe(section);
  });
}

// Initialise page
window.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  initScrollObserver();
});
