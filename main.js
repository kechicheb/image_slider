let images = document.querySelectorAll(".slider-container img");
let index = 0;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideNumber = document.getElementById("slide-number");

if (index == 0) {
  prev.classList.add("disabled");
  images[0].classList.add("active")
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
  addActiveClassToLi(index);
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
  addActiveClassToLi(index);
};

function slideNbr() {
  slideNumber.innerText = `Slide #${index + 1} of ${images.length}`;
}
slideNbr();

// Pagination create in HTML
let indicators = document.getElementById("indicators");
let ul = document.createElement("ul");
ul.setAttribute("id", "pagination-ul");
indicators.appendChild(ul);
for (let i = 0; i < images.length; i++) {
  let li = document.createElement("li");
  let text = document.createTextNode(`${i + 1}`);
  li.setAttribute("data-index", `${i + 1}`);
  if (i === 0) {
    li.setAttribute("class", "active");
  }
  li.appendChild(text);
  ul.appendChild(li);
}

//  add Active Class To Li when Onclick
function addActiveClassToLi(number) {
  let li = document.querySelector(
    `#indicators ul li[data-index="${number + 1}"]`
  );
  let allLi = document.querySelectorAll("#indicators ul li");
  allLi.forEach((e) => {
    e.classList.remove("active");
  });
  li.classList.add("active");
}

// change image when Onclick
let allLi = document.querySelectorAll("#indicators ul li");
allLi.forEach((e) => {
  e.onclick = function () {
    images.forEach((e) => {
      e.classList.remove("active");
    });
    images[this.dataset.index - 1].classList.add("active");
    allLi.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
    index = this.dataset.index - 1;
    if (index + 1 == images.length) {
      next.classList.add("disabled");
    } else {
      next.classList.remove("disabled");
    }
    if (index == 0) {
      prev.classList.add("disabled");
    } else {
      prev.classList.remove("disabled");
    }
  };
});
