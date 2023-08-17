document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("faq-item__title-js") ||
      e.target.classList.contains("faq-item__title-sign")
    ) {
      const parent = e.target.parentNode;
      const text = parent.querySelector(".faq-item__text-js");
      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
      } else {
        parent.classList.add("active");
      }
    }

    if (e.target.classList.contains("faq-item__title-text")) {
      const title = e.target.parentNode;
      const parent = title.parentNode;
      const text = parent.querySelector(".faq-item__text-js");
      if (parent.classList.contains("active")) {
        parent.classList.remove("active");
      } else {
        parent.classList.add("active");
      }
    }
  });
});
