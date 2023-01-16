const btnAll = document.querySelector(".btn-all");
const header = document.querySelector(".header");
const depth01 = document.querySelectorAll(".gnb > .list > li > a");
const depth02 = document.querySelectorAll(".gnb > .list > li .depth02");
console.log("🚀 ~ file: main.js:4 ~ depth01", depth01);
const depth01Total = depth01.length;
const depth02Total = depth02.length;

for (let i = 0; i < depth01Total; i++) {
  depth01[i].addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(i);
    // if넣어준거 다른거 누르면 사라지게한거
    for (let j = 0; j < depth02Total; j++) {
      if (i !== j) {
        depth02[j].classList.remove("on");
      }
      depth02[i].classList.toggle("on");
    }
  });
}

btnAll.addEventListener("click", function () {
  //   console.log(".btnAll 클릭");

  if (header.classList.contains("on")) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
  //   한줄로 퉁칠떈 header.classList.add("on");
});

new Swiper(".visual__list", {
  effect: "cube",
  pagination: {
    el: ".visual__list .pagination",
    type: "bullets",
  },
});

/**
 visual__txt 움직이기
 */
gsap.to(".visual__txt .char", {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power4",
  stagger: 0.05,
});

new Swiper(".news-banner", {
  slidesperView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
});
