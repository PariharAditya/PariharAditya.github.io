document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.addEventListener("click", function () {
      // Toggle an "active" class or directly manipulate the style
      this.classList.toggle("active");
      // Optional: scroll into view if the section expands significantly
      this.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
});
