import {
  windowHeight,
  windowWidth,
  getPortraitGal,
  getLandscapeGal,
  galleryMainDivs,
  getMainDiv,
  reduceMotion,
  shortPageName,
  getAnimationID,
  sliderAnimationCtrlDiv,
  sliderPauseBtn,
  sliderPlayBtn,
  sliderPauseIcon,
  sliderPlayIcon,
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

export function gallerySetup() {
  galleryMainDivs.forEach((div) => {
    if (div.dataset.name === shortPageName) {
      getMainDiv.mainDivLocale = document.querySelector(".main");
      // console.log(getMainDiv.mainDiv);
      let galleryMain = getMainDiv.mainDiv;

      getPortraitGal.portraitGalLocale =
        galleryMain.querySelector(".gal-portrait");

      getLandscapeGal.landscapeGalLocale =
        galleryMain.querySelector(".gal-landscape");

      if (windowHeight < windowWidth) {
        galleryMain.replaceChildren();
        galleryMain.appendChild(getLandscapeGal.galLandscapeView);
        console.log("Birds Gallery Landscape Mode");
        sliderBoxCtrl();
      } else {
        galleryMain.replaceChildren();
        galleryMain.appendChild(getPortraitGal.galPortraitView);
        console.log("Birds Gallery Portrait Mode");
        sliderBoxCtrl();
      }

      checkPageOrientation(galleryMain);
    }
  });
}

function checkPageOrientation(galleryMain) {
  const landscape = window.matchMedia("(orientation: landscape)");
  console.log(landscape);

  landscape.addEventListener("change", (e) => {
    if (e.matches) {
      console.log(landscape);
      clearActiveState();
      resetIndexes();
      insertLandscapeGal(galleryMain);
      sliderBoxCtrl();
    } else {
      console.log(landscape);
      clearActiveState();
      resetIndexes();
      insertPortraitGal(galleryMain);
      sliderBoxCtrl();
    }
  });
}

function insertPortraitGal(galleryMain) {
  clearInterval(getAnimationID.animationID);
  galleryMain.replaceChildren();
  galleryMain.appendChild(getPortraitGal.galPortraitView);
  console.log("Birds Gallery Portrait Mode");
}

function insertLandscapeGal(galleryMain) {
  clearInterval(getAnimationID.animationID);
  galleryMain.replaceChildren();
  galleryMain.appendChild(getLandscapeGal.galLandscapeView);
  console.log("Birds Gallery Landscape Mode");
}

export function sliderBoxCtrl() {
  const currentGallery = getMainDiv.mainDiv.querySelector(".gallery");
  //  console.log(currentGallery);

  activeSliderBox.currentActiveBox =
    currentGallery.querySelector(".slider-box");
  // console.log(activeSliderBox.activeBox);

  sliderAnimationCtrlDiv.currentAnimationCtrlDiv =
    getMainDiv.mainDiv.querySelector(".animation-ctrl-div");
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  sliderPauseBtn.currentPauseBtn =
    getMainDiv.mainDiv.querySelector(".pause-btn");
  sliderPauseIcon.currentPauseIcon =
    getMainDiv.mainDiv.querySelector(".pause-icon");

  sliderPlayBtn.currentPlayBtn = getMainDiv.mainDiv.querySelector(".play-btn");
  sliderPlayIcon.currentPlayIcon =
    getMainDiv.mainDiv.querySelector(".play-icon");

  const thisSliderBox = activeSliderBox.activeBox;
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

  circleNav.thisCircleNav = thisSliderBox.querySelector(".img-dots-container");
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

  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}

function sliderAnimationCtrl() {
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

function animationAccessibility() {
  console.log(reduceMotion);

  if (reduceMotion) {
    sliderAnimationOff();
  }

  if (!reduceMotion) {
    sliderAnimationOn();
  }
}

function sliderAnimationOn() {
  sliderPauseBtn.currentPauseBtn.classList.add("pause-btn--active");
  sliderPlayBtn.currentPlayBtn.classList.remove("play-btn--active");
  activePhotoBox.photoBox.setAttribute("aria-live", "off");
  getAnimationID.animationIDValue = setInterval(slideRight, 3000);
}

function sliderAnimationOff() {
  sliderPauseBtn.currentPauseBtn.classList.remove("pause-btn--active");
  sliderPlayBtn.currentPlayBtn.classList.add("play-btn--active");
  activePhotoBox.photoBox.setAttribute("aria-live", "polite");
  clearInterval(getAnimationID.animationID);
}

function clickCircles() {
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

function arrowCtrl() {
  activeSliderBox.currentActiveBox.addEventListener("pointerdown", (e) => {
    // console.log(e.target);
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
      (e.key === " " || e.key === "Enter" || e.key === "ArrowLeft") &&
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
  circleDivPosition.currentCircleDivPosition.removeAttribute(
    "aria-disabled",
    "true"
  );
  circlePosition.currentCirclePosition.classList.remove("circle-icon--active");
}

function addActiveState() {
  slidePosition.currentSlidePosition.classList.add("picture--active");
  circleDivPosition.currentCircleDivPosition.classList.add(
    "circle-icon-div--active"
  );
  circleDivPosition.currentCircleDivPosition.setAttribute(
    "aria-disabled",
    "true"
  );

  circlePosition.currentCirclePosition.classList.add("circle-icon--active");
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
