// Footer: copyright year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("primary-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.innerHTML = isOpen ? "&#10006;" : "&#9776;";  // X when open, ☰ when closed
  menuButton.setAttribute("aria-expanded", isOpen);
});