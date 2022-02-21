//Header part=========================================================
const clock = document.querySelector(".header__markup-clock");

const setTime = function () {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  clock.textContent = `${hour}:${minute < 10 ? "0" + minute : minute}`;
};

setInterval(() => {
  setTime();
}, 1000);

setInterval(() => {
  for (let i = 0; i < 3; i++) {
    document
      .querySelector(`.span__dots-dot-${i + 1}`)
      .classList.toggle(`moveUp-${i + 1}`);
  }
}, 2000);

//Headings part=========================================================
const headerMarkupB = document.querySelector(".header__markup-big");
const cursorContainer = document.querySelector(".cursor__container");

const moveText = function (e) {
  headerMarkupB.style.transform = `translateX(${-e.pageX * 0.1}px)`;

  cursorContainer.style.left = `${e.pageX}px`;
  cursorContainer.style.top = `${e.pageY - window.scrollY}px`;

  if (
    e.pageY > screen.height + window.scrollY - 130 ||
    e.pageY < 20 + window.scrollY ||
    e.pageX > screen.width - 20 ||
    e.pageX < 10
  ) {
    cursorContainer.classList.add("hide__cursor");
  } else {
    cursorContainer.classList.remove("hide__cursor");
  }
};

window.addEventListener("mousemove", moveText);

//Images part=========================================================
const image1 = document.querySelector(".section__img--2");
const image2 = document.querySelector(".section__img--1");
const images = document.querySelectorAll(".section__img");

images.forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const offsetX = img.classList.contains("section__img--2") ? 50 : 80;
    const offsetY = img.classList.contains("section__img--2") ? 90 : 85;

    img.style.transform = `translate(${e.pageX * 0.07 - offsetX}px, ${
      e.pageY * 0.07 - offsetY
    }px) `;
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = `translate(0, 0)`;
  });
});

// images.forEach((img) => {
//   img.addEventListener("mouseover", () => {
//     document.body.style.cursor = "url('../img/cursor2.svg') 8 7, auto";
//   });
// });
