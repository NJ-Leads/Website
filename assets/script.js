// Highlights active nav link based on current page
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Contact form: creates a mailto link (no backend needed)
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.querySelector("#name").value || "").trim();
    const email = (document.querySelector("#email").value || "").trim();
    const company = (document.querySelector("#company").value || "").trim();
    const message = (document.querySelector("#message").value || "").trim();

    const to = "sales@njleads.com"; // change if you want
    const subject = encodeURIComponent(`NJLeads inquiry from ${name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
})();
