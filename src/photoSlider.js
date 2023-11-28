import {
  sliderBoxes,
  photoBoxes,
  galleryImgs,
  circleNav,
  circleIconContainer,
  circleIconDivs,
  circleIcons,
  rightArrow,
  leftArrow,
  setIndex,
  slidePosition,
  circleDivPosition,
  circlePosition,
} from "./querySelectors";

export function sliderBoxCtrl(hrefTagText) {
  photoBoxes.forEach((box) => {
    if (box.dataset.name === hrefTagText) {
      galleryImgs.boxImgsArray = Array.from(box.children);

      console.log(galleryImgs.boxImgs);

      slidePosition.currentSlidePosition =
        galleryImgs.boxImgs[setIndex.currentIndex];
      console.log(slidePosition.currentSlidePosition);

      slidePosition.currentSlidePosition.classList.add("picture--active");
    }
  });

  circleIconContainer.forEach((container) => {
    if (container.dataset.name === hrefTagText) {
      circleIconDivs.circleDivsArray = Array.from(container.children);
      console.log(circleIconDivs.circleDivsArray);

      circleDivPosition.currentCircleDivPosition =
        circleIconDivs.circleDivs[setIndex.currentIndex];
      console.log(circleDivPosition.currentCircleDivPosition);

      circleIconDivs.circleDivs[setIndex.currentIndex].classList.add(
        "circle-icon-div--active"
      );
    }
  });

  circleNav.forEach((nav) => {
    if (nav.dataset.name === hrefTagText) {
      circleIcons.circleIconsArray = Array.from(
        nav.querySelectorAll(".circle-icon")
      );
      console.log(circleIcons.circles);

      circlePosition.currentCirclePosition =
        circleIcons.circles[setIndex.currentIndex];
      console.log(circlePosition.currentCirclePosition);

      circleIcons.circles[setIndex.currentIndex].classList.add(
        "circle-icon--active"
      );
    }
  });

  sliderAnimation();
  clickCircles();
  arrowCtrl();
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
  sliderBoxes.forEach((box) => {
    box.addEventListener("pointerdown", (e) => {
      if (e.target === rightArrow) {
        slideRight();
      }

      if (e.target === leftArrow) {
        slideLeft();
      }
    });
  });
}

function handleIndexes() {
  if (setIndex.targetIndex < 0) {
    setIndex.targetIndex = galleryImgs.boxImgs.length - 1;
    slidePosition.currentSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs.boxImgs[0];
    slidePosition.prevSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition = circleIconDivs.circleDivs[0];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition =
      circleIcons.circles[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons.circles[0];
    circlePosition.prevCirclePosition =
      circleIcons.circles[setIndex.targetIndex - 1];
  } else if (setIndex.targetIndex === 0) {
    slidePosition.currentSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition =
      galleryImgs.boxImgs[galleryImgs.boxImgs.length - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex + 1];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition =
      circleIcons.circles[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons.circles[setIndex + 1];
    circlePosition.prevCirclePosition =
      circleIcons.circles[circleIcons.circles.lengh - 1];
  } else if (setIndex.targetIndex > galleryImgs.boxImgs.length - 1) {
    setIndex.targetIndex = 0;
    slidePosition.currentSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition =
      galleryImgs.boxImgs[galleryImgs.boxImgs.length - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex + 1];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition =
      circleIcons.circles[setIndex.targetIndex];
    circlePosition.nextCirclePosition =
      circleIcons.circles[setIndex.targetIndex + 1];
    circlePosition.prevCirclePosition =
      circleIcons[circleIcons.circles.length - 1];
  } else {
    slidePosition.currentSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition =
      galleryImgs.boxImgs[setIndex.targetIndex - 1];
    circleDivPosition.currentCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex];
    circleDivPosition.nextCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex + 1];
    circleDivPosition.prevCircleDivPosition =
      circleIconDivs.circleDivs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition =
      circleIcons.circles[setIndex.targetIndex];
    circlePosition.nextCirclePosition =
      circleIcons.circles[setIndex.targetIndex + 1];
    circlePosition.prevCirclePosition =
      circleIcons.circles[setIndex.targetIndex - 1];
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
