import {
  shortPageName,
  getAnimationID,
  sliderBoxes,
  activeSliderBox,
  activePhotoBox,
  galleryImgs,
  circleNav,
  circleIconDivs,
  circleIcons,
  getRightArrow,
  getLeftArrow,
  setIndex,
  slidePosition,
  circleDivPosition,
  circlePosition,
} from "./variables";

export function sliderBoxCtrl() {
  sliderBoxes.forEach((box) => {
    if (box.dataset.name === shortPageName) {
      console.log("DATASET MATCHES PAGENAME");

      activeSliderBox.currentActiveBox = box;
      // console.log(activeSliderBox.activeBox);

      const thisSliderBox = activeSliderBox.currentActiveBox;
      // console.log(thisSliderBox);

      activePhotoBox.currentActivePhotoBox =
        thisSliderBox.querySelector(".photo-box");
      // console.log(activePhotoBox.photoBox);

      galleryImgs.boxImgsArray = Array.from(activePhotoBox.photoBox.children);
      // console.log(galleryImgs.boxImgs);

      getRightArrow.rightArrowLocation = thisSliderBox.querySelector(
        "[data-forward-arrow]"
      );
      // console.log(getRightArrow.rightArrow);

      getLeftArrow.leftArrowLocation =
        thisSliderBox.querySelector("[data-back-arrow]");
      // console.log(getLeftArrow.leftArrow);

      slidePosition.currentSlidePosition =
        galleryImgs.boxImgs[setIndex.currentIndex];
      // console.log(slidePosition.currentSlidePosition);
      slidePosition.currentSlidePosition.classList.add("picture--active");

      circleIconDivs.circleDivsArray = Array.from(
        thisSliderBox.getElementsByClassName("circle-icon-div")
      );
      // console.log(circleIconDivs.circleDivs);

      circleDivPosition.currentCircleDivPosition =
        circleIconDivs.circleDivs[setIndex.currentIndex];
      // console.log(circleDivPosition.currentCircleDivPosition);
      circleIconDivs.circleDivs[setIndex.currentIndex].classList.add(
        "circle-icon-div--active"
      );

      circleIcons.circleIconsArray = Array.from(
        thisSliderBox.getElementsByClassName("circle-icon")
      );
      // console.log(circleIcons.circles);

      circlePosition.currentCirclePosition =
        circleIcons.circles[setIndex.currentIndex];
      // console.log(circlePosition.currentCirclePosition);
      circleIcons.circles[setIndex.currentIndex].classList.add(
        "circle-icon--active"
      );

      sliderAnimation();
      clickCircles();
      arrowCtrl();
    }
  });
}

export function sliderAnimation() {
  getAnimationID.animationIDValue = setInterval(slideRight, 3000);
}

export function clickCircles() {
  circleNav.forEach((nav) => {
    if (nav.dataset.name === shortPageName) {
      nav.addEventListener("pointerdown", (e) => {
        setIndex.targetIndex = e.target.dataset.circle;
        // console.log(setIndex.targetIndex);

        clearActiveState();
        handleIndexes();
        addActiveState();
      });
    }
  });
}

export function arrowCtrl() {
  activeSliderBox.currentActiveBox.addEventListener("pointerdown", (e) => {
    console.log(e.target);
    if (e.target === getRightArrow.rightArrow) {
      console.log("right");
      slideRight();
    }
    if (e.target === getLeftArrow.leftArrow) {
      console.log("left");
      slideLeft();
    }
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
  clearActiveState();
  setIndex.targetIndex++;
  handleIndexes();
  addActiveState();
}

function slideLeft() {
  clearActiveState();
  setIndex.targetIndex--;
  handleIndexes();
  addActiveState();
}

function clearActiveState() {
  slidePosition.currentSlidePosition.classList.remove("picture--active");
  circleDivPosition.currentCircleDivPosition.classList.remove(
    "circle-icon-div--active"
  );
  circlePosition.currentCirclePosition.classList.remove("circle-icon--active");
}

function addActiveState() {
  slidePosition.currentSlidePosition.classList.add("picture--active");
  circleDivPosition.currentCircleDivPosition.classList.add(
    "circle-icon-div--active"
  );
  circlePosition.currentCirclePosition.classList.add("circle-icon--active");
}

// export function resetSliderAnimation() {
//   clearInterval(getAnimationID.animationID);
// }

// export function resetIndexes() {
//   setIndex.targetIndex = 0;
//   clearActiveState();
// }
