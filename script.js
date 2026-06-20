document.addEventListener("DOMContentLoaded", () => {

  /* Scroll-reveal for cards and section headers */
  const revealTargets = document.querySelectorAll(".card, .section-title, .section-tag");
  revealTargets.forEach(el => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* Mobile nav toggle */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Active nav link tracking */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  const setActive = id => {
    navAnchors.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
    });
  };

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(s => sectionObserver.observe(s));

});
