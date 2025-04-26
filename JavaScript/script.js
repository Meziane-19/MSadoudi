// declaration de variables et constantes
// buttons:
const starter_btn = document.querySelector(".starter__btn");
const main_btn = document.querySelector(".main__btn");
const dessert_btn = document.querySelector(".dessert__btn");
const drink_btn = document.querySelector(".drink__btn");

// menu sections:
const starter_menu = document.querySelector(".starter");
const main_menu = document.querySelector(".mainCourse");
const dessert_menu = document.querySelector(".dessert");
const drink_menu = document.querySelector(".drinks");

const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const hide_header = document.querySelector(".header__hidder");

starter_btn.addEventListener("click", function () {
  if (starter_menu.classList.contains("hidden")) {
    starter_menu.classList.remove("hidden");
    main_menu.classList.add("hidden");
    drink_menu.classList.add("hidden");
    dessert_menu.classList.add("hidden");
    menu.scrollTop = 0;
  }
});

main_btn.addEventListener("click", function () {
  if (main_menu.classList.contains("hidden")) {
    main_menu.classList.remove("hidden");
    starter_menu.classList.add("hidden");
    drink_menu.classList.add("hidden");
    dessert_menu.classList.add("hidden");
    menu.scrollTop = 0;
  }
});

dessert_btn.addEventListener("click", function () {
  if (dessert_menu.classList.contains("hidden")) {
    dessert_menu.classList.remove("hidden");
    main_menu.classList.add("hidden");
    drink_menu.classList.add("hidden");
    starter_menu.classList.add("hidden");
    menu.scrollTop = 0;
  }
});

drink_btn.addEventListener("click", function () {
  if (drink_menu.classList.contains("hidden")) {
    drink_menu.classList.remove("hidden");
    main_menu.classList.add("hidden");
    starter_menu.classList.add("hidden");
    dessert_menu.classList.add("hidden");
    menu.scrollTop = 0;
  }
});

hide_header.addEventListener("mouseover", function () {
  header.classList.add("hidden");
});

hide_header.addEventListener("mouseleave", function () {
  header.classList.remove("hidden");
});
