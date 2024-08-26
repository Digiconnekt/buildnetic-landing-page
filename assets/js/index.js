document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky-top");
    } else {
      header.classList.remove("sticky-top");
    }
  });
});
