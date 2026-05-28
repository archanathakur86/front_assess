let imgs = document.querySelectorAll(".slide-img");
let contents = document.querySelectorAll(".slide-content");
let dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(i) {

  imgs[current].classList.remove("active");
  contents[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = i;

  if (current >= imgs.length) {
    current = 0;
  }

  if (current < 0) {
    current = imgs.length - 1;
  }

  imgs[current].classList.add("active");
  contents[current].classList.add("active");
  dots[current].classList.add("active");
}

document.querySelector(".next").onclick = function () {
  showSlide(current + 1);
};

document.querySelector(".prev").onclick = function () {
  showSlide(current - 1);
};

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    showSlide(i);
  };
}

// Auto slide
setInterval(function () {
  showSlide(current + 1);
}, 3500);
