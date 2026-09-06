// Theme toggle. Dark is the default; light is opt-in and remembered.
function toggleTheme() {
  var html = document.documentElement;
  var icon = document.getElementById("theme-icon");
  if (html.getAttribute("data-theme") === "light") {
    html.removeAttribute("data-theme");
    if (icon) icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
    if (icon) icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
}

(function () {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    var icon = document.getElementById("theme-icon");
    if (icon) icon.classList.replace("fa-sun", "fa-moon");
  }
})();

// Mobile nav
function toggleNav() {
  var links = document.getElementById("nav-links");
  if (links) links.classList.toggle("open");
}

// Scroll reveal
document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
});
