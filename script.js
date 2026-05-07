const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const insightCards = document.querySelectorAll("[data-insight-card]");
const insightTitle = document.querySelector("[data-insight-title]");
const insightCopy = document.querySelector("[data-insight-copy]");
const radarButtons = document.querySelectorAll("[data-radar-button]");
const radarMapButtons = document.querySelectorAll("[data-radar-map]");
const radarTitle = document.querySelector("[data-radar-title]");
const radarCopy = document.querySelector("[data-radar-copy]");
const radarDetail = document.querySelector("[data-radar-detail]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

insightCards.forEach((card) => {
  card.addEventListener("click", () => {
    insightCards.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    card.classList.add("active");
    card.setAttribute("aria-pressed", "true");

    if (insightTitle && insightCopy) {
      insightTitle.textContent = card.dataset.title || "";
      insightCopy.textContent = card.dataset.copy || "";
    }
  });
});

function activateRadar(button) {
  radarButtons.forEach((item) => {
    item.classList.remove("active");
    item.setAttribute("aria-pressed", "false");
  });

  radarMapButtons.forEach((item) => {
    item.classList.toggle("active", item.dataset.radarMap === button.dataset.title);
  });

  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");

  if (radarTitle && radarCopy && radarDetail) {
    radarTitle.textContent = button.dataset.title || "";
    radarCopy.textContent = button.dataset.copy || "";
    radarDetail.textContent = button.dataset.detail || "";
  }
}

radarButtons.forEach((button) => {
  button.addEventListener("click", () => activateRadar(button));
});

radarMapButtons.forEach((mapButton) => {
  mapButton.addEventListener("click", () => {
    const target = Array.from(radarButtons).find((button) => button.dataset.title === mapButton.dataset.radarMap);
    if (target) activateRadar(target);
  });
});
