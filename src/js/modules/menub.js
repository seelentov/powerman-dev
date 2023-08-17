document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("nav-mobile__btn") ||
    e.target.classList.contains("nav-mobile__btn-open") ||
    e.target.classList.contains("nav-mobile__btn-close")
  ) {
    const menuB = document.querySelector(".header__nav-mobile");
    if (menuB.classList.contains("active")) {
      menuB.classList.remove("active");
    } else {
      menuB.classList.add("active");
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("header-search__icon")) {
    const button = e.target.parentNode;
    const parent = button.parentNode;
    const searchBlock = parent.querySelector(".search-mobile__block");
    searchBlock.classList.add("active");
  }
  if (e.target.classList.contains("search-mobile__btn")) {
    const button = e.target.parentNode;
    const parent = button.parentNode;
    const searchBlock = parent.querySelector(".search-mobile__block");
    searchBlock.classList.add("active");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-mobile__close-btn")) {
    const button = e.target.parentNode;
    const parent = button.parentNode;
    parent.classList.remove("active");
  }
});
