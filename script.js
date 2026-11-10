// Sample dataset for 200+ rose varieties
const roseVarieties = [
  { name: "Double Delight", type: "Hybrid Tea", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Black Lady", type: "Hybrid Tea", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Lal Kolkata", type: "Desi Rose", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Iceberg", type: "Floribunda", fragrant: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Angel Face", type: "Floribunda", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Miniature Red", type: "Miniature", fragrant: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Eden Climber", type: "Climber", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Knock Out", type: "Shrub", fragrant: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Flower Carpet Pink", type: "Ground Cover", fragrant: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Queen Elizabeth", type: "Grandiflora", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Abraham Darby", type: "Fragrant Roses", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { name: "Blue Moon", type: "Hybrid Tea", fragrant: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
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
  // Update active state on buttons
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

// Render Rose Catalog Cards
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

    card.innerHTML = `
      <div class="img-placeholder">Photos Coming Soon</div>
      <div class="card-body">
        ${isFragrantBadge}
        <h3>${rose.name}</h3>
        <button class="btn btn-secondary" onclick="openVideoModal('${rose.videoUrl}', '${rose.name}')">
          🎬 Watch Video
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  // Toggle View More button
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

// Video Modal controls
function openVideoModal(videoUrl, title) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("videoIframe").src = videoUrl;
  document.getElementById("videoModal").classList.add("show");
}

function closeVideoModal() {
  document.getElementById("videoModal").classList.remove("show");
  document.getElementById("videoIframe").src = "";
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
        // Hide only when scrolling down past the top boundary
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
