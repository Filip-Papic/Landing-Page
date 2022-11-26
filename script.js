// sticky header
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

// mobile menu
const hamburger = document.querySelector(".header__mobile");
const navLinks = document.querySelector(".header__mobile-nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
});

// animate on scroll
const serviceElements = document.querySelectorAll(".service");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
}

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
}

const handleScrollAnimation = () => {
  serviceElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
