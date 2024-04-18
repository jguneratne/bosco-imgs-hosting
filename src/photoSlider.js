import {
  shortPageName,
  getAnimationID,
  sliderAnimationCtrlDiv,
  sliderPauseBtn,
  sliderPlayBtn,
  sliderPauseIcon,
  sliderPlayIcon,
  sliderBoxes,
  activeSliderBox,
  activePhotoBox,
  galleryImgs,
  circleNav,
  circleIconDivs,
  circleIcons,
  getRightArrow,
  getRightArrowIcon,
  getLeftArrow,
  getLeftArrowIcon,
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

      sliderAnimationCtrlDiv.currentAnimationCtrlDiv = document.querySelector(
        ".animation-ctrl-div"
      );

      sliderPauseBtn.currentPauseBtn = document.querySelector(".pause-btn");
      sliderPauseIcon.currentPauseIcon = document.querySelector(".pause-icon");

      sliderPlayBtn.currentPlayBtn = document.querySelector(".play-btn");
      sliderPlayIcon.currentPlayIcon = document.querySelector(".play-icon");

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

      getRightArrowIcon.rightIconLocation = thisSliderBox.querySelector(
        "[data-icon-forward]"
      );

      getLeftArrow.leftArrowLocation =
        thisSliderBox.querySelector("[data-back-arrow]");
      // console.log(getLeftArrow.leftArrow);

      getLeftArrowIcon.leftIconLocation =
        thisSliderBox.querySelector("[data-icon-back]");

      slidePosition.currentSlidePosition =
        galleryImgs.boxImgs[setIndex.currentIndex];
      // console.log(slidePosition.currentSlidePosition);
      slidePosition.currentSlidePosition.classList.add("picture--active");

      circleNav.thisCircleNav = thisSliderBox.querySelector(
        ".img-dots-container"
      );
      // console.log(circleNav.currentCircleNav);

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

      sliderAnimationOn();
      clickCircles();
      arrowCtrl();
    }
  });
}

export function sliderAnimationCtrl() {
  sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener(
    "pointerdown",
    (e) => {
      if (
        e.target === sliderPauseBtn.currentPauseBtn ||
        e.target === sliderPauseIcon.currentPauseIcon
      ) {
        sliderAnimationOff();
      }

      if (
        e.target === sliderPlayBtn.currentPlayBtn ||
        e.target === sliderPlayIcon.currentPlayIcon
      ) {
        sliderAnimationOn();
      }
    }
  );

  sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener("keydown", (e) => {
    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target === sliderPauseBtn.currentPauseBtn ||
        e.target === sliderPauseIcon.currentPauseIcon)
    ) {
      sliderAnimationOff();
    }

    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target === sliderPlayBtn.currentPlayBtn ||
        e.target === sliderPlayIcon.currentPlayIcon)
    ) {
      sliderAnimationOn();
    }
  });
}

function sliderAnimationOn() {
  sliderPauseBtn.currentPauseBtn.classList.add("pause-btn--active");
  sliderPlayBtn.currentPlayBtn.classList.remove("play-btn--active");
  getAnimationID.animationIDValue = setInterval(slideRight, 3000);
}

function sliderAnimationOff() {
  sliderPauseBtn.currentPauseBtn.classList.remove("pause-btn--active");
  sliderPlayBtn.currentPlayBtn.classList.add("play-btn--active");
  clearInterval(getAnimationID.animationID);
}

export function clickCircles() {
  circleNav.currentCircleNav.addEventListener("pointerdown", (e) => {
    console.log(e.target);

    if (
      e.target.classList.contains("circle-icon-div") ||
      e.target.classList.contains("circle-icon")
    ) {
      // console.log(e.target.classList);
      setIndex.targetIndex = e.target.dataset.circle;

      clearActiveState();
      handleIndexes();
      addActiveState();
    }
  });

  circleNav.currentCircleNav.addEventListener("keydown", (e) => {
    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target.classList.contains("circle-icon-div") ||
        e.target.classList.contains("circle-icon-div--active"))
    ) {
      setIndex.targetIndex = e.target.dataset.circle;

      clearActiveState();
      handleIndexes();
      addActiveState();
    }
  });
}

export function arrowCtrl() {
  activeSliderBox.currentActiveBox.addEventListener("pointerdown", (e) => {
    console.log(e.target);
    if (
      e.target === getRightArrow.rightArrow ||
      e.target === getRightArrowIcon.rightArrowIcon
    ) {
      console.log("right");
      slideRight();
    }
    if (
      e.target === getLeftArrow.leftArrow ||
      e.target === getLeftArrowIcon.leftArrowIcon
    ) {
      console.log("left");
      slideLeft();
    }
  });

  activeSliderBox.currentActiveBox.addEventListener("keydown", (e) => {
    if (
      ((e.key === " " || e.key === "Enter" || e.key === "ArrowRight") &&
        e.target === getRightArrow.rightArrow) ||
      e.target === getRightArrowIcon.rightArrowIcon
    ) {
      slideRight();
    }

    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target === getLeftArrow.leftArrow ||
        e.target === getLeftArrowIcon.leftArrowIcon)
    ) {
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
