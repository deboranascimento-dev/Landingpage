const btnmobile = document.querySelector(".btn-mobile");
const navlinks = document.getElementById("nav_links");
const icon = document.querySelector(".btn-mobile i");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const homeSection = document.getElementById("home");
const homeBtn = document.querySelectorAll("btn");

btnmobile.addEventListener("click", () => {
  navlinks.classList.toggle("show");
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
});

let active = 0;
const total = items.length;
let timer;

function updateSlides(direction) {
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  if (direction > 0) {
    active = active + 1;

    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active = active - 1;

    if (active < 0) {
      active = total - 1;
    }
  }

  items[active].classList.add("active");
  dots[active].classList.add("active");
}

clearInterval(timer);
timer = setInterval(() => {
  updateSlides(1);
}, 5000);

prevButton.addEventListener("click", () => {
  updateSlides(-1);
});

nextButton.addEventListener("click", () => {
  updateSlides(1);
});
