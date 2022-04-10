/* Button toggle medium screens */

const menu = document.querySelector(".nav-menu");
const btnOpenMenu = document.querySelector(".open-menu");
const btnCloseMenu = document.querySelector(".close-menu");

btnOpenMenu.addEventListener("click", function () {
  menu.classList.toggle("menu-opened");
  menu.classList.remove("dont-show");
  btnOpenMenu.classList.toggle("dont-show");
  menu.classList.remove("menu-closed");
});

btnCloseMenu.addEventListener("click", function () {
  menu.classList.toggle("menu-opened");
  menu.classList.toggle("menu-closed");
  btnOpenMenu.classList.toggle("dont-show");
});

/* Navbar background active with scroll */

window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (scrollY > 1) {
    navbar.classList.add("navbar-bg");
  } else {
    navbar.classList.remove("navbar-bg");
  }
};

/* Edad */

function yOld() {
  const currentDate = new Date();
  const yearOfBorn = new Date("April 13, 1999 16:41:13");
  let yOld = currentDate.getFullYear() - yearOfBorn.getFullYear();
  let differenceMonths = currentDate.getMonth() - yearOfBorn.getMonth();
  if (
    differenceMonths < 0 ||
    (differenceMonths === 0 && currentDate.getDate() < yearOfBorn.getDate())
  ) {
    yOld--;
  }
  document.querySelector("#yOld").innerHTML = yOld;
}

yOld();
