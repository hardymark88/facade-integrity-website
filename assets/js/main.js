const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });
}

document.querySelectorAll(".contact-form").forEach((form) => {
  form.addEventListener("submit", () => {
    const note = form.querySelector(".form-note");
    if (note) note.textContent = "Opening your email client to send the enquiry.";
  });
});
