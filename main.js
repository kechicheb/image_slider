let images = document.querySelectorAll(".slider-container img");
let index = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
if (index == 0) {
  prev.classList.add("disabled");
}
prev.onclick = function (e) {
  if (index  == 0) {
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
};
