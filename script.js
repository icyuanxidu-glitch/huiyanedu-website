const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const insightCards = document.querySelectorAll("[data-insight-card]");
const insightTitle = document.querySelector("[data-insight-title]");
const insightCopy = document.querySelector("[data-insight-copy]");

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
