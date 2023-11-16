import {
  sliderBox,
  galleryImgs,
  circleNav,
  circleIconDivs,
  circleIcons,
  rightArrow,
  leftArrow,
  setIndex,
  slidePosition,
  circleDivPosition,
  circlePosition,
} from "./querySelectors";

export function defaultGallerySetting() {
  let i = 0;
  let j = 0;
  galleryImgs[i].classList.add("picture--active");
  circleIconDivs[j].classList.add("circle-icon-div--active");
  circleIcons[j].classList.add("circle-icon--active");
}

export function sliderAnimation() {
  setInterval(slideRight, 3000);
}

export function clickCircles() {
  circleNav.addEventListener("pointerdown", (e) => {
    setIndex.targetIndex = e.target.dataset.circle;
    console.log(setIndex.targetIndex);

    slidePosition.currentSlidePosition.classList.remove("picture--active");
    circleDivPosition.currentCircleDivPosition.classList.remove(
      "circle-icon-div--active"
    );
    circlePosition.currentCirclePosition.classList.remove(
      "circle-icon--active"
    );

    handleIndexes();

    slidePosition.currentSlidePosition.classList.add("picture--active");
    circleDivPosition.currentCircleDivPosition.classList.add(
      "circle-icon-div--active"
    );
    circlePosition.currentCirclePosition.classList.add("circle-icon--active");
  });
}

export function arrowCtrl() {
  sliderBox.addEventListener("pointerdown", (e) => {
    if (e.target === rightArrow) {
      slideRight();
    }

    if (e.target === leftArrow) {
      slideLeft();
    }
  });
}

function handleIndexes() {
  if (setIndex.targetIndex < 0) {
    setIndex.targetIndex = galleryImgs.length - 1;
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[0];
    slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition = circleIconDivs[0];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[0];
    circlePosition.prevCirclePosition = circleIcons[setIndex.targetIndex - 1];
  } else if (setIndex.targetIndex === 0) {
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition = galleryImgs[galleryImgs.length - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition =
      circleIconDivs[setIndex.targetIndex + 1];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[setIndex + 1];
    circlePosition.prevCirclePosition = circleIcons[circleIcons.lengh - 1];
  } else if (setIndex.targetIndex > galleryImgs.length - 1) {
    setIndex.targetIndex = 0;
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition = galleryImgs[galleryImgs.length - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition =
      circleIconDivs[setIndex.targetIndex + 1];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[setIndex.targetIndex + 1];
    circlePosition.prevCirclePosition = circleIcons[circleIcons.length - 1];
  } else {
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition =
      circleIconDivs[setIndex.targetIndex + 1];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[setIndex.targetIndex + 1];
    circlePosition.prevCirclePosition = circleIcons[setIndex.targetIndex - 1];
  }
}

function slideRight() {
  slidePosition.currentSlidePosition.classList.remove("picture--active");
  circlePosition.currentCirclePosition.classList.remove("circle-icon--active");

  setIndex.targetIndex++;

  handleIndexes();

  slidePosition.currentSlidePosition.classList.add("picture--active");
  circlePosition.currentCirclePosition.classList.add("circle-icon--active");

  // console.log(slidePosition.currentSlidePosition);
  // console.log(slidePosition.prevSlidePosition);
  // console.log(slidePosition.nextSlidePosition);
  // console.log(circlePosition.currentCirclePosition);
  // console.log(circlePosition.prevCirclePosition);
  // console.log(circlePosition.nextCirclePosition);
}

function slideLeft() {
  slidePosition.currentSlidePosition.classList.remove("picture--active");
  circlePosition.currentCirclePosition.classList.remove("circle-icon--active");

  setIndex.targetIndex--;

  handleIndexes();

  slidePosition.currentSlidePosition.classList.add("picture--active");
  circlePosition.currentCirclePosition.classList.add("circle-icon--active");

  // console.log(slidePosition.currentSlidePosition);
  // console.log(slidePosition.prevSlidePosition);
  // console.log(slidePosition.nextSlidePosition);
  // console.log(circlePosition.currentCirclePosition);
  // console.log(circlePosition.prevCirclePosition);
  // console.log(circlePosition.nextCirclePosition);
}
