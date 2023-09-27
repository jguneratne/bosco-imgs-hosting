import {
  sliderBox,
  photoBox,
  galleryImgs,
  circleNav,
  circleIcons,
  rightArrow,
  leftArrow,
  setIndex,
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
      if (setIndex.targetIndex === galleryImgs.length - 1) {
        slidePosition.nextSlidePosition = galleryImgs[0];
        circlePosition.nextCirclePosition = circleIcons[0];
      }

      if (setIndex.targetIndex > galleryImgs.length - 1) {
        resetIndexes();
      }

      slidePosition.currentSlidePosition.classList.remove("picture--active");
      slidePosition.nextSlidePosition.classList.add("picture--active");
      circlePosition.currentCirclePosition.classList.remove(
        "circle-icon--active"
      );
      circlePosition.nextCirclePosition.classList.add("circle-icon--active");

      setIndex.targetIndex++;
      console.log(setIndex.targetIndex);

      slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
      slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
      slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
      circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
      circlePosition.nextCirclePosition = circleIcons[setIndex.targetIndex + 1];
      circlePosition.prevCirclePosition = circleIcons[setIndex.targetIndex - 1];

      console.log(slidePosition.currentSlidePosition);
      console.log(slidePosition.nextSlidePosition);
      console.log(slidePosition.prevSlidePosition);
    }

    if (e.target === leftArrow) {
      //   if (
      //     slidePosition.currentSlidePosition === galleryImgs[0] &&
      //     circlePosition.currentCirclePosition === circleIcons[0]
      //   ) {
      //     console.log("true");
      //     resetIndexes();
      //   } else {
      //     console.log("false");
      //   }

      if (
        slidePosition.currentSlidePosition === galleryImgs[0] &&
        // slidePosition.prevSlidePosition === undefined &&
        circlePosition.currentCirclePosition === circleIcons[0]
        // circlePosition.prevCirclePosition === undefined
      ) {
        console.log("true");

        slidePosition.prevSlide = galleryImgs[galleryImgs.length - 1];
        circlePosition.prevCircle = circleIcons[circleIcons.lengh - 1];

        slidePosition.currentSlidePosition.classList.remove("picture--active");
        circlePosition.currentCirclePosition.classList.remove(
          "circle-icon--active"
        );

        setIndex.targetIndex = galleryImgs.length - 1;

        slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
        slidePosition.currentSlidePosition.classList.add("picture--active");
        slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
        slidePosition.nextSlidePosition = galleryImgs[0];
        circlePosition.currentCirclePosition =
          circleIcons[setIndex.targetIndex];
        circlePosition.currentCirclePosition.classList.add(
          "circle-icon--active"
        );
        circlePosition.prevCirclePosition =
          circleIcons[setIndex.targetIndex - 1];
        circlePosition.nextCirclePosition = circleIcons[0];
      } else {
        slidePosition.currentSlidePosition.classList.remove("picture--active");
        slidePosition.prevSlidePosition.classList.add("picture--active");
        circlePosition.currentCirclePosition.classList.remove(
          "circle-icon--active"
        );
        circlePosition.prevCirclePosition.classList.add("circle-icon--active");

        setIndex.targetIndex--;
        console.log(setIndex.targetIndex);

        slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
        slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
        slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
        circlePosition.currentCirclePosition =
          circleIcons[setIndex.targetIndex];
        circlePosition.nextCirclePosition =
          circleIcons[setIndex.targetIndex + 1];
        circlePosition.prevCirclePosition =
          circleIcons[setIndex.targetIndex - 1];
      }
    }
  });
}

function resetIndexes() {
  setIndex.targetIndex = 0;
  slidePosition.currentSlide = galleryImgs[setIndex.currentIndex];
  slidePosition.nextSlide = galleryImgs[setIndex.currentIndex + 1];
  slidePosition.prevSlide = galleryImgs[setIndex.currentIndex - 1];
  circlePosition.currentCircle = circleIcons[setIndex.currentIndex];
  circlePosition.nextCircle = circleIcons[setIndex.currentIndex + 1];
  circlePosition.prevCircle = circleIcons[setIndex.currentIndex - 1];
}
