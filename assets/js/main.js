// Theme toggle (light default, persisted)
function toggleTheme() {
  var html = document.documentElement;
  var icon = document.getElementById("theme-icon");
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    if (icon) icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    if (icon) icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

(function () {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    var icon = document.getElementById("theme-icon");
    if (icon) icon.classList.replace("fa-moon", "fa-sun");
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
