import {
  sliderBox,
  photoBox,
  galleryImgs,
  circleNav,
  circleIcons,
  rightArrow,
  leftArrow,
  slidePosition,
  circlePosition,
} from "./querySelectors";

export function defaultGallerySetting() {
  let i = 0;
  let j = 0;
  galleryImgs[i].classList.add("picture--active");
  circleIcons[j].classList.add("circle-icon--active");
}

export function sliderAnimation() {
  console.log(galleryImgs);

  let i = 0;

  const advanceSlides = function () {
    if (i === 0) {
      galleryImgs[i].classList.add("picture--active");
    } else if (i === galleryImgs.length) {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[0].classList.add("picture--active");
      i = 0;
    } else {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[i].classList.add("picture--active");
    }

    i++;
  };

  setInterval(advanceSlides, 3000);
}

export function highlightCircles() {
  let i = 0;

  const selectCircleIcon = function () {
    if (i === 0) {
      circleIcons[i].classList.add("circle-icon--active");
    } else if (i === circleIcons.length) {
      circleIcons[i - 1].classList.remove("circle-icon--active");
      circleIcons[0].classList.add("circle-icon--active");
      i = 0;
    } else {
      circleIcons[i - 1].classList.remove("circle-icon--active");
      circleIcons[i].classList.add("circle-icon--active");
    }

    i++;
  };

  setInterval(selectCircleIcon, 3000);
}

export function clickCircles() {
  let currentSlide = photoBox.querySelector(".picture--active");
  let currentCircle = circleNav.querySelector(".circle-icon--active");

  circleNav.addEventListener("pointerdown", (e) => {
    const targetDot = e.target;
    // console.log(targetDot);
    const targetDotIndex = targetDot.dataset.circle;
    //console.log(targetDotIndex);
    const targetImg = galleryImgs[targetDotIndex];
    console.log(targetImg);

    currentSlide.classList.remove("picture--active");
    currentCircle.classList.remove("circle-icon--active");
    targetImg.classList.add("picture--active");
    targetDot.classList.add("circle-icon--active");

    currentSlide = targetImg;
    currentCircle = targetDot;
  });
}

export function arrowCtrl() {
  sliderBox.addEventListener("pointerdown", (e) => {
    if (e.target === rightArrow) {
      if (slidePosition.nextSlidePosition === null) {
        slidePosition.nextSlidePosition = galleryImgs[0];
      }

      if (circlePosition.nextCirclePosition === null) {
        circlePosition.nextCirclePosition = circleIcons[0];
      }

      slidePosition.currentSlidePosition.classList.remove("picture--active");
      slidePosition.nextSlidePosition.classList.add("picture--active");
      circlePosition.currentCirclePosition.classList.remove(
        "circle-icon--active"
      );
      circlePosition.nextCirclePosition.classList.add("circle-icon--active");

      slidePosition.currentSlidePosition =
        photoBox.querySelector(".picture--active");
      slidePosition.nextSlidePosition =
        slidePosition.currentSlidePosition.nextElementSibling;
      slidePosition.prevSlidePosition =
        slidePosition.currentSlidePosition.previousElementSibling;
      circlePosition.currentCirclePosition = circleNav.querySelector(
        ".circle-icon--active"
      );
      circlePosition.nextCirclePosition =
        circlePosition.currentCirclePosition.nextElementSibling;
      circlePosition.prevCirclePosition =
        circlePosition.currentCirclePosition.previousElementSibling;
    }

    if (e.target === leftArrow) {
      if (
        slidePosition.currentSlidePosition === galleryImgs[0] ||
        (slidePosition.prevSlidePosition === undefined ||
          slidePosition.prevSlidePosition) === null
      ) {
        slidePosition.prevSlidePosition = galleryImgs[galleryImgs.length - 1];
      }

      if (
        circlePosition.currentCirclePosition === circleIcons[0] ||
        circlePosition.prevCirclePosition === undefined ||
        circlePosition.prevCirclePosition === null
      ) {
        circlePosition.prevCirclePosition = circleIcons[circleIcons.length - 1];
      }

      slidePosition.currentSlidePosition.classList.remove("picture--active");
      slidePosition.prevSlidePosition.classList.add("picture--active");
      circlePosition.currentCirclePosition.classList.remove(
        "circle-icon--active"
      );
      circlePosition.prevCirclePosition.classList.add("circle-icon--active");

      slidePosition.currentSlidePosition =
        photoBox.querySelector(".picture--active");
      slidePosition.nextSlidePosition =
        slidePosition.currentSlidePosition.nextElementSibling;
      slidePosition.prevSlidePosition =
        slidePosition.currentSlidePosition.previousElementSibling;
      circlePosition.currentCirclePosition = circleNav.querySelector(
        ".circle-icon--active"
      );
      circlePosition.nextCirclePosition =
        circlePosition.currentCirclePosition.nextElementSibling;
      circlePosition.prevCirclePosition =
        circlePosition.currentCirclePosition.previousElementSibling;
    }
  });
}
