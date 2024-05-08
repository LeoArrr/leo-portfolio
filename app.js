const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");

let prevScrollPos = window.scrollY;

window.onscroll = function () {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos < currentScrollPos) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  prevScrollPos = currentScrollPos;
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  dropdownMenu.classList.toggle("open");
});
