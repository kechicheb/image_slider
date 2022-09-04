let images = document.querySelectorAll(".slider-container img");
let index = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideNumber = document.getElementById("slide-number");

if (index == 0) {
  prev.classList.add("disabled");
}
prev.onclick = function (e) {
  if (index == 0) {
    prev.classList.add("disabled");
    e.preventDefault();
  } else {
    index--;
    next.classList.remove("disabled");
    images.forEach((e) => {
      e.classList.remove("active");
    });
    images[index].classList.add("active");
    if (index == 0) {
      prev.classList.add("disabled");
    }
  }
  slideNbr();
};
next.onclick = function (e) {
  if (index + 1 == images.length) {
    next.classList.add("disabled");
    e.preventDefault();
  } else {
    index++;
    prev.classList.remove("disabled");
    images.forEach((e) => {
      e.classList.remove("active");
    });
    images[index].classList.add("active");
    if (index + 1 == images.length) {
      next.classList.add("disabled");
    }
  }
  slideNbr();
};

function slideNbr() {
    slideNumber.innerText = `Slide #${index + 1} of ${images.length}`;
}
slideNbr();