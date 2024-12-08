const hamburger = document.querySelector(".hamburger-wrapper");
const navClose = document.querySelector(".close-icon-wrapper");
const ul = document.querySelector("nav ul");

function setHamburger(display) {
  hamburger.style.display = display;
}

function setNav(display) {
  navClose.style.display = display;
}

function setUl(num) {
  ul.style.transform = `translatex(${num}vw)`;
}

function showNav() {
  setUl(0);
  setHamburger("none");
  setNav("block");
}
function closeNav() {
  setUl(-100);
  setHamburger("block");
  setNav("none");
}

hamburger.addEventListener("click", showNav);
navClose.addEventListener("click", closeNav);
