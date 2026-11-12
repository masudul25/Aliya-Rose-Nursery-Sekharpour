// Aliya Rose Nursery – Catalog & Cart Logic

let filteredData = [];
let visibleCount = 12;
let cart = JSON.parse(localStorage.getItem("aliyaCart")) || [];

let currentFilters = {
  type: "All",
  fragrant: "All",
  alpha: "All",
  search: ""
};

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

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
    if (currentFilters.type !== "All" && rose.type !== currentFilters.type) return false;
    if (currentFilters.fragrant === "true" && !rose.fragrant) return false;
    if (currentFilters.fragrant === "false" && rose.fragrant) return false;
    if (currentFilters.alpha !== "All") {
      if (!rose.name.toUpperCase().startsWith(currentFilters.alpha)) return false;
    }
    if (searchVal) {
      const haystack = [rose.name, rose.code, rose.origin, rose.color, rose.type, rose.description].join(" ").toLowerCase();
      if (!haystack.includes(searchVal)) return false;
    }
    return true;
  });

  visibleCount = 12;
  renderCatalog();
  updateCount();
}

function setFilter(category, value, element) {
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
      <div class="empty-state" style="grid-column: 1/-1; text-align:center; padding: 2rem;">
        <p style="font-size:1.2rem; margin-bottom:0.5rem;">No varieties found</p>
        <p>Try changing filters or search terms.</p>
      </div>`;
    document.getElementById("viewMoreBtn").style.display = "none";
    return;
  }

  items.forEach(rose => {
    const card = document.createElement("div");
    card.className = "card";

    const fragrantBadge = rose.fragrant ? `<span class="badge fragrant">✨ Fragrant</span>` : "";

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
        <div class="card-actions" style="display:flex; gap:0.5rem; margin-top:0.8rem;">
          <a href="variety.html?code=${encodeURIComponent(rose.code)}" class="btn btn-primary btn-sm" style="flex:1;">Details</a>
          <button onclick="addToCart('${rose.code}', '${rose.name.replace(/'/g, "\\'")}')" class="btn btn-secondary btn-sm" style="flex:1; background:#be123c; color:white; border:none;">+ Add to Order</button>
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

// --- Cart Management Functions ---
function addToCart(code, name) {
  let existing = cart.find(item => item.code === code);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ code: code, name: name, qty: 1 });
  }
  saveAndRefreshCart();
  showCartToast(`Added ${name} to your order!`);
}

function removeFromCart(code) {
  cart = cart.filter(item => item.code !== code);
  saveAndRefreshCart();
}

function updateCartQty(code, qty) {
  let item = cart.find(item => item.code === code);
  if (item) {
    item.qty = parseInt(qty) || 1;
    if (item.qty <= 0) item.qty = 1;
  }
  saveAndRefreshCart();
}

function saveAndRefreshCart() {
  localStorage.setItem("aliyaCart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  let floatBar = document.getElementById("cartFloatingBar");
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (totalItems > 0) {
    if (!floatBar) {
      floatBar = document.createElement("div");
      floatBar.id = "cartFloatingBar";
      floatBar.style.cssText = "position:fixed; bottom:20px; right:20px; background:#1f2937; color:white; padding:0.8rem 1.2rem; border-radius:30px; box-shadow:0 4px 15px rgba(0,0,0,0.3); z-index:1000; display:flex; align-items:center; gap:1rem; font-weight:600;";
      document.body.appendChild(floatBar);
    }
    floatBar.innerHTML = `
      <span>🛒 Order Cart: ${totalItems} plants</span>
      <a href="order.html" style="background:#25D366; color:white; padding:0.4rem 0.9rem; border-radius:20px; text-decoration:none; font-size:0.9rem;">Review & Checkout</a>
    `;
  } else if (floatBar) {
    floatBar.remove();
  }
}

function showCartToast(msg) {
  let toast = document.createElement("div");
  toast.style.cssText = "position:fixed; bottom:80px; right:20px; background:#be123c; color:white; padding:0.6rem 1rem; border-radius:8px; z-index:1001; font-size:0.9rem; box-shadow:0 3px 10px rgba(0,0,0,0.2);";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function getUniqueTypes() {
  return [...new Set(roseVarieties.map(r => r.type))].sort();
}

function initFilters() {
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

  document.querySelectorAll(".filter-chip[data-filter]").forEach(btn => {
    if (!btn.onclick) {
      btn.onclick = function () {
        setFilter(this.dataset.filter, this.dataset.value, this);
      };
    }
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") applyFilters();
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (typeof roseVarieties !== "undefined") {
    filteredData = [...roseVarieties];
    initFilters();
    renderCatalog();
    updateCount();
    updateCartUI();
  }
});
