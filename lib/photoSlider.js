"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gallerySetup = gallerySetup;
var _variables = require("./variables");
function gallerySetup() {
  _variables.galleryMainDivs.forEach(div => {
    if (div.dataset.name === _variables.shortPageName) {
      _variables.getPortraitGal.portraitGalLocale = document.querySelector(".gal-portrait");
      _variables.getPortraitSliderBox.portraitSliderLocale = document.querySelector(".portrait-slider-box");
      _variables.getLandscapeGal.landscapeGalLocale = document.querySelector(".gal-landscape");
      _variables.getLandscapeSliderBox.landscapeSliderLocale = document.querySelector(".landscape-slider-box");
      if (_variables.windowHeight < _variables.windowWidth) {
        console.log("landscape");
        setupLandscapeGal();
      } else {
        console.log("portrait");
        setupPortraitGal();
      }
      checkPageOrientation();
    }
  });
}
function checkPageOrientation() {
  const landscape = window.matchMedia("(orientation: landscape)");
  console.log(landscape);
  landscape.addEventListener("change", e => {
    if (e.matches) {
      console.log("landscape");
      clearInterval(_variables.getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupLandscapeGal();
    } else {
      console.log("portrait");
      clearInterval(_variables.getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupPortraitGal();
    }
  });
}
function setupPortraitGal() {
  _variables.getLandscapeGal.galLandscapeView.hidden = true;
  _variables.getLandscapeSliderBox.landscapeSliderBox.hidden = true;
  _variables.getPortraitGal.galPortraitView.hidden = false;
  _variables.getPortraitSliderBox.portraitSliderBox.hidden = false;
  portraitSliderBoxCtrl();
  console.log("Gallery Portrait Mode");
}
function setupLandscapeGal() {
  _variables.getLandscapeGal.galLandscapeView.hidden = false;
  _variables.getLandscapeSliderBox.landscapeSliderBox.hidden = false;
  _variables.getPortraitGal.galPortraitView.hidden = true;
  _variables.getPortraitSliderBox.portraitSliderBox.hidden = true;
  landscapeSliderBoxCtrl();
  console.log("Gallery Landscape Mode");
}
function portraitSliderBoxCtrl() {
  const currentGallery = _variables.getPortraitGal.galPortraitView;
  //  console.log(currentGallery);

  _variables.sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(".portrait-animation-ctrl-div");
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  _variables.sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(".portrait-pause-btn");
  _variables.sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(".portrait-pause-icon");
  _variables.sliderPlayBtn.currentPlayBtn = currentGallery.querySelector(".portrait-play-btn");
  _variables.sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(".portrait-play-icon");
  _variables.activeSliderBox.currentActiveBox = currentGallery.querySelector(".portrait-slider-box");
  // console.log(activeSliderBox.activeBox);

  const portraitSliderBox = _variables.activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  _variables.activePhotoBox.currentActivePhotoBox = portraitSliderBox.querySelector(".portrait-photo-box");
  // console.log(activePhotoBox.photoBox);

  _variables.galleryImgs.boxImgsArray = Array.from(_variables.activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  _variables.getRightArrow.rightArrowLocation = portraitSliderBox.querySelector("[data-forward-arrow]");
  // console.log(getRightArrow.rightArrow);

  _variables.getRightArrowIcon.rightIconLocation = portraitSliderBox.querySelector("[data-icon-forward]");
  _variables.getLeftArrow.leftArrowLocation = portraitSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  _variables.getLeftArrowIcon.leftIconLocation = portraitSliderBox.querySelector("[data-icon-back]");
  _variables.slidePosition.currentSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  _variables.slidePosition.currentSlidePosition.classList.add("picture--active");
  _variables.circleNav.thisCircleNav = portraitSliderBox.querySelector(".img-dots-container");
  // console.log(circleNav.currentCircleNav);

  _variables.circleIconDivs.circleDivsArray = Array.from(portraitSliderBox.getElementsByClassName("circle-icon-div"));
  // console.log(circleIconDivs.circleDivs);

  _variables.circleDivPosition.currentCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  _variables.circleIconDivs.circleDivs[_variables.setIndex.currentIndex].classList.add("circle-icon-div--active");
  _variables.circleIcons.circleIconsArray = Array.from(portraitSliderBox.getElementsByClassName("circle-icon"));
  // console.log(circleIcons.circles);

  _variables.circlePosition.currentCirclePosition = _variables.circleIcons.circles[_variables.setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  _variables.circleIcons.circles[_variables.setIndex.currentIndex].classList.add("circle-icon--active");
  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}
function landscapeSliderBoxCtrl() {
  const currentGallery = _variables.getLandscapeGal.galLandscapeView;
  //  console.log(currentGallery);

  _variables.sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(".landscape-animation-ctrl-div");
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  _variables.sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(".landscape-pause-btn");
  _variables.sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(".landscape-pause-icon");
  _variables.sliderPlayBtn.currentPlayBtn = currentGallery.querySelector(".landscape-play-btn");
  _variables.sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(".landscape-play-icon");
  _variables.activeSliderBox.currentActiveBox = currentGallery.querySelector(".landscape-slider-box");
  // console.log(activeSliderBox.activeBox);

  const landscapeSliderBox = _variables.activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  _variables.activePhotoBox.currentActivePhotoBox = landscapeSliderBox.querySelector(".landscape-photo-box");
  // console.log(activePhotoBox.photoBox);

  _variables.galleryImgs.boxImgsArray = Array.from(_variables.activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  _variables.getRightArrow.rightArrowLocation = landscapeSliderBox.querySelector("[data-forward-arrow]");
  // console.log(getRightArrow.rightArrow);

  _variables.getRightArrowIcon.rightIconLocation = landscapeSliderBox.querySelector("[data-icon-forward]");
  _variables.getLeftArrow.leftArrowLocation = landscapeSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  _variables.getLeftArrowIcon.leftIconLocation = landscapeSliderBox.querySelector("[data-icon-back]");
  _variables.slidePosition.currentSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  _variables.slidePosition.currentSlidePosition.classList.add("picture--active");
  _variables.circleNav.thisCircleNav = landscapeSliderBox.querySelector(".img-dots-container");
  // console.log(circleNav.currentCircleNav);

  _variables.circleIconDivs.circleDivsArray = Array.from(landscapeSliderBox.getElementsByClassName("circle-icon-div"));
  // console.log(circleIconDivs.circleDivs);

  _variables.circleDivPosition.currentCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  _variables.circleIconDivs.circleDivs[_variables.setIndex.currentIndex].classList.add("circle-icon-div--active");
  _variables.circleIcons.circleIconsArray = Array.from(landscapeSliderBox.getElementsByClassName("circle-icon"));
  // console.log(circleIcons.circles);

  _variables.circlePosition.currentCirclePosition = _variables.circleIcons.circles[_variables.setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  _variables.circleIcons.circles[_variables.setIndex.currentIndex].classList.add("circle-icon--active");
  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}
function sliderAnimationCtrl() {
  _variables.sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener("pointerdown", e => {
    if (e.target === _variables.sliderPauseBtn.currentPauseBtn || e.target === _variables.sliderPauseIcon.currentPauseIcon) {
      sliderAnimationOff();
    }
    if (e.target === _variables.sliderPlayBtn.currentPlayBtn || e.target === _variables.sliderPlayIcon.currentPlayIcon) {
      sliderAnimationOn();
    }
  });
  _variables.sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter") && (e.target === _variables.sliderPauseBtn.currentPauseBtn || e.target === _variables.sliderPauseIcon.currentPauseIcon)) {
      sliderAnimationOff();
    }
    if ((e.key === " " || e.key === "Enter") && (e.target === _variables.sliderPlayBtn.currentPlayBtn || e.target === _variables.sliderPlayIcon.currentPlayIcon)) {
      sliderAnimationOn();
    }
  });
}
function animationAccessibility() {
  console.log(_variables.reduceMotion);
  if (_variables.reduceMotion) {
    sliderAnimationOff();
  }
  if (!_variables.reduceMotion) {
    sliderAnimationOn();
  }
}
function sliderAnimationOn() {
  _variables.sliderPauseBtn.currentPauseBtn.classList.add("pause-btn--active");
  _variables.sliderPlayBtn.currentPlayBtn.classList.remove("play-btn--active");
  _variables.activePhotoBox.photoBox.setAttribute("aria-live", "off");
  _variables.getAnimationID.animationIDValue = setInterval(slideRight, 3000);
}
function sliderAnimationOff() {
  _variables.sliderPauseBtn.currentPauseBtn.classList.remove("pause-btn--active");
  _variables.sliderPlayBtn.currentPlayBtn.classList.add("play-btn--active");
  _variables.activePhotoBox.photoBox.setAttribute("aria-live", "polite");
  clearInterval(_variables.getAnimationID.animationID);
}
function clickCircles() {
  _variables.circleNav.currentCircleNav.addEventListener("pointerdown", e => {
    console.log(e.target);
    if (e.target.classList.contains("circle-icon-div") || e.target.classList.contains("circle-icon")) {
      // console.log(e.target.classList);
      _variables.setIndex.targetIndex = e.target.dataset.circle;
      clearActiveState();
      handleIndexes();
      addActiveState();
      clearInterval(_variables.getAnimationID.animationID);
      _variables.getAnimationID.animationID = setInterval(slideRight, 3000);
    }
  });
  _variables.circleNav.currentCircleNav.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter") && (e.target.classList.contains("circle-icon-div") || e.target.classList.contains("circle-icon-div--active"))) {
      _variables.setIndex.targetIndex = e.target.dataset.circle;
      clearActiveState();
      handleIndexes();
      addActiveState();
    }
  });
}
function arrowCtrl() {
  _variables.activeSliderBox.currentActiveBox.addEventListener("pointerdown", e => {
    // console.log(e.target);
    if (e.target === _variables.getRightArrow.rightArrow || e.target === _variables.getRightArrowIcon.rightArrowIcon) {
      console.log("right");
      slideRight();
      clearInterval(_variables.getAnimationID.animationID);
      _variables.getAnimationID.animationID = setInterval(slideRight, 3000);
    }
    if (e.target === _variables.getLeftArrow.leftArrow || e.target === _variables.getLeftArrowIcon.leftArrowIcon) {
      console.log("left");
      slideLeft();
      clearInterval(_variables.getAnimationID.animationID);
      _variables.getAnimationID.animationID = setInterval(slideRight, 3000);
    }
  });
  _variables.activeSliderBox.currentActiveBox.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter" || e.key === "ArrowRight") && e.target === _variables.getRightArrow.rightArrow || e.target === _variables.getRightArrowIcon.rightArrowIcon) {
      slideRight();
    }
    if ((e.key === " " || e.key === "Enter" || e.key === "ArrowLeft") && (e.target === _variables.getLeftArrow.leftArrow || e.target === _variables.getLeftArrowIcon.leftArrowIcon)) {
      slideLeft();
    }
  });
}
function handleIndexes() {
  if (_variables.setIndex.targetIndex < 0) {
    _variables.setIndex.targetIndex = _variables.galleryImgs.boxImgs.length - 1;
    _variables.slidePosition.currentSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex];
    _variables.slidePosition.nextSlidePosition = _variables.galleryImgs.boxImgs[0];
    _variables.slidePosition.prevSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex - 1];
    _variables.circleDivPosition.currentCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex];
    _variables.circleDivPosition.nextCircleDivPosition = _variables.circleIconDivs.circleDivs[0];
    _variables.circleDivPosition.prevCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex - 1];
    _variables.circlePosition.currentCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex];
    _variables.circlePosition.nextCirclePosition = _variables.circleIcons.circles[0];
    _variables.circlePosition.prevCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex - 1];
  } else if (_variables.setIndex.targetIndex === 0) {
    _variables.slidePosition.currentSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex];
    _variables.slidePosition.nextSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex + 1];
    _variables.slidePosition.prevSlidePosition = _variables.galleryImgs.boxImgs[_variables.galleryImgs.boxImgs.length - 1];
    _variables.circleDivPosition.currentCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex];
    _variables.circleDivPosition.nextCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex + 1];
    _variables.circleDivPosition.prevCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex - 1];
    _variables.circlePosition.currentCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex];
    _variables.circlePosition.nextCirclePosition = _variables.circleIcons.circles[_variables.setIndex + 1];
    _variables.circlePosition.prevCirclePosition = _variables.circleIcons.circles[_variables.circleIcons.circles.lengh - 1];
  } else if (_variables.setIndex.targetIndex > _variables.galleryImgs.boxImgs.length - 1) {
    _variables.setIndex.targetIndex = 0;
    _variables.slidePosition.currentSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex];
    _variables.slidePosition.nextSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex + 1];
    _variables.slidePosition.prevSlidePosition = _variables.galleryImgs.boxImgs[_variables.galleryImgs.boxImgs.length - 1];
    _variables.circleDivPosition.currentCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex];
    _variables.circleDivPosition.nextCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex + 1];
    _variables.circleDivPosition.prevCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex - 1];
    _variables.circlePosition.currentCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex];
    _variables.circlePosition.nextCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex + 1];
    _variables.circlePosition.prevCirclePosition = _variables.circleIcons[_variables.circleIcons.circles.length - 1];
  } else {
    _variables.slidePosition.currentSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex];
    _variables.slidePosition.nextSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex + 1];
    _variables.slidePosition.prevSlidePosition = _variables.galleryImgs.boxImgs[_variables.setIndex.targetIndex - 1];
    _variables.circleDivPosition.currentCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex];
    _variables.circleDivPosition.nextCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex + 1];
    _variables.circleDivPosition.prevCircleDivPosition = _variables.circleIconDivs.circleDivs[_variables.setIndex.targetIndex - 1];
    _variables.circlePosition.currentCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex];
    _variables.circlePosition.nextCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex + 1];
    _variables.circlePosition.prevCirclePosition = _variables.circleIcons.circles[_variables.setIndex.targetIndex - 1];
  }
}
function slideRight() {
  clearActiveState();
  _variables.setIndex.targetIndex++;
  handleIndexes();
  addActiveState();
}
function slideLeft() {
  clearActiveState();
  _variables.setIndex.targetIndex--;
  handleIndexes();
  addActiveState();
}
function clearActiveState() {
  _variables.slidePosition.currentSlidePosition.classList.remove("picture--active");
  _variables.circleDivPosition.currentCircleDivPosition.classList.remove("circle-icon-div--active");
  _variables.circleDivPosition.currentCircleDivPosition.removeAttribute("aria-disabled", "true");
  _variables.circlePosition.currentCirclePosition.classList.remove("circle-icon--active");
}
function addActiveState() {
  _variables.slidePosition.currentSlidePosition.classList.add("picture--active");
  _variables.circleDivPosition.currentCircleDivPosition.classList.add("circle-icon-div--active");
  _variables.circleDivPosition.currentCircleDivPosition.setAttribute("aria-disabled", "true");
  _variables.circlePosition.currentCirclePosition.classList.add("circle-icon--active");
}
function resetIndexes() {
  _variables.setIndex.targetIndex = 0;
  _variables.slidePosition.currentSlide = _variables.galleryImgs[_variables.setIndex.currentIndex];
  _variables.slidePosition.nextSlide = _variables.galleryImgs[_variables.setIndex.currentIndex + 1];
  _variables.slidePosition.prevSlide = _variables.galleryImgs[_variables.setIndex.currentIndex - 1];
  _variables.circlePosition.currentCircle = _variables.circleIcons[_variables.setIndex.currentIndex];
  _variables.circlePosition.nextCircle = _variables.circleIcons[_variables.setIndex.currentIndex + 1];
  _variables.circlePosition.prevCircle = _variables.circleIcons[_variables.setIndex.currentIndex - 1];
}