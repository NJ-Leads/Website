// Highlights active nav link based on current page
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();

// === MOBILE NAV TOGGLE (GLOBAL) ===
// Requires: <button class="menu-toggle" onclick="toggleMenu()"> and <nav id="primary-nav" class="nav-links">
function toggleMenu(){
  const nav = document.getElementById("primary-nav");
  const btn = document.querySelector(".menu-toggle");
  if (!nav || !btn) return;

  const isOpen = nav.classList.toggle("active");
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

// Close menu after tapping a link or tapping outside (mobile)
document.addEventListener("click", (e) => {
  const nav = document.getElementById("primary-nav");
  const btn = document.querySelector(".menu-toggle");
  if (!nav || !btn) return;

  const isMobile = window.matchMedia("(max-width: 900px)").matches;
  if (!isMobile) return;

  const clickedLink = e.target.closest && e.target.closest("#primary-nav a");
  const clickedToggle = e.target.closest && e.target.closest(".menu-toggle");
  const clickedInsideNav = e.target.closest && e.target.closest("#primary-nav");

  if (clickedLink){
    nav.classList.remove("active");
    btn.setAttribute("aria-expanded","false");
  } else if (!clickedToggle && nav.classList.contains("active") && !clickedInsideNav) {
    nav.classList.remove("active");
    btn.setAttribute("aria-expanded","false");
  }
});

// If user rotates / resizes back to desktop, ensure menu closes cleanly
window.addEventListener("resize", () => {
  const nav = document.getElementById("primary-nav");
  const btn = document.querySelector(".menu-toggle");
  if (!nav || !btn) return;

  const isDesktop = window.matchMedia("(min-width: 901px)").matches;
  if (isDesktop){
    nav.classList.remove("active");
    btn.setAttribute("aria-expanded","false");
  }
});
