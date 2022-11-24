window.onscroll = function () {
  stickyHeader();
};

const header = document.querySelector("header");
const sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const hamburger = document.querySelector(".header__mobile");
const navLinks = document.querySelector(".header__mobile-nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
});