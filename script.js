// Aliya Rose Nursery – Catalog Logic

let filteredData = [];
let visibleCount = 12;
let currentFilters = {
  type: "All",
  fragrant: "All",
  alpha: "All",
  search: ""
};

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".sticky-nav");
  if (nav && !nav.contains(e.target)) {
    document.getElementById("navLinks")?.classList.remove("show");
  }
});

function applyFilters() {
  const searchVal = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  currentFilters.search = searchVal;

  filteredData = roseVarieties.filter(rose => {
    // Type
    if (currentFilters.type !== "All" && rose.type !== currentFilters.type) return false;

    // Fragrant
    if (currentFilters.fragrant === "true" && !rose.fragrant) return false;
    if (currentFilters.fragrant === "false" && rose.fragrant) return false;

    // Alphabet
    if (currentFilters.alpha !== "All") {
      if (!rose.name.toUpperCase().startsWith(currentFilters.alpha)) return false;
    }

    // Search
    if (searchVal) {
      const haystack = [
        rose.name,
        rose.code,
        rose.origin,
        rose.color,
        rose.type,
        rose.description
      ].join(" ").toLowerCase();
      if (!haystack.includes(searchVal)) return false;
    }

    return true;
  });

  visibleCount = 12;
  renderCatalog();
  updateCount();
}

function setFilter(category, value, element) {
  // Update active chip in the same group
  const parent = element.closest(".filter-chips");
  parent.querySelectorAll(".filter-chip").forEach(btn => btn.classList.remove("active"));
  element.classList.add("active");

  currentFilters[category] = value;
  applyFilters();
}

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  grid.innerHTML = "";
  const items = filteredData.slice(0, visibleCount);

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p style="font-size:1.2rem; margin-bottom:0.5rem;">No varieties found</p>
        <p>Try changing filters or search terms.</p>
      </div>`;
    document.getElementById("viewMoreBtn").style.display = "none";
    return;
  }

  items.forEach(rose => {
    const card = document.createElement("div");
    card.className = "card";

    const fragrantBadge = rose.fragrant
      ? `<span class="badge fragrant">✨ Fragrant</span>`
      : "";

    card.innerHTML = `
      <div class="img-placeholder">
        <span>🌹</span>
        <span class="code-tag">${rose.code}</span>
      </div>
      <div class="card-body">
        <div style="display:flex; gap:0.35rem; flex-wrap:wrap;">
          <span class="badge type">${rose.type}</span>
          ${fragrantBadge}
        </div>
        <h3>${rose.name}</h3>
        <div class="meta">
          <span>${rose.origin}</span>
          <span>•</span>
          <span>${rose.color}</span>
        </div>
        <p class="text-sm text-muted" style="flex-grow:1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
          ${rose.description}
        </p>
        <div class="card-actions">
          <a href="variety.html?code=${encodeURIComponent(rose.code)}" class="btn btn-primary btn-sm">View Details</a>
          <a href="order.html?code=${encodeURIComponent(rose.code)}&name=${encodeURIComponent(rose.name)}" class="btn btn-secondary btn-sm">Order</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  const btn = document.getElementById("viewMoreBtn");
  if (btn) {
    btn.style.display = visibleCount >= filteredData.length ? "none" : "inline-flex";
  }
}

function loadMore() {
  visibleCount += 12;
  renderCatalog();
}

function updateCount() {
  const el = document.getElementById("totalCount");
  if (el) el.textContent = filteredData.length;
}

function openVideoModal(url, title) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("videoIframe").src = url;
  document.getElementById("videoModal").classList.add("show");
}

function closeVideoModal() {
  document.getElementById("videoModal").classList.remove("show");
  document.getElementById("videoIframe").src = "";
}

// Build dynamic filter chips
function initFilters() {
  // Types
  const typeContainer = document.getElementById("typeFilters");
  if (typeContainer) {
    const types = getUniqueTypes();
    types.forEach(t => {
      const btn = document.createElement("button");
      btn.className = "filter-chip";
      btn.dataset.filter = "type";
      btn.dataset.value = t;
      btn.textContent = t;
      btn.onclick = function () { setFilter("type", t, this); };
      typeContainer.appendChild(btn);
    });
  }

  // Alphabet A–Z that actually exist
  const alphaContainer = document.getElementById("alphaFilters");
  if (alphaContainer) {
    const letters = [...new Set(roseVarieties.map(r => r.name[0].toUpperCase()))].sort();
    letters.forEach(letter => {
      const btn = document.createElement("button");
      btn.className = "filter-chip";
      btn.dataset.filter = "alpha";
      btn.dataset.value = letter;
      btn.textContent = letter;
      btn.onclick = function () { setFilter("alpha", letter, this); };
      alphaContainer.appendChild(btn);
    });
  }

  // Attach click handlers for static chips
  document.querySelectorAll(".filter-chip[data-filter]").forEach(btn => {
    if (!btn.onclick) {
      btn.onclick = function () {
        setFilter(this.dataset.filter, this.dataset.value, this);
      };
    }
  });

  // Search on Enter
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") applyFilters();
    });
  }
}

// Init
window.addEventListener("DOMContentLoaded", () => {
  if (typeof roseVarieties !== "undefined") {
    filteredData = [...roseVarieties];
    initFilters();
    renderCatalog();
    updateCount();
  }
});
