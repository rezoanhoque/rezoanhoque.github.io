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
