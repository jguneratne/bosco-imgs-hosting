import {
  windowHeight,
  windowWidth,
  getPortraitGal,
  getPortraitSliderBox,
  getLandscapeGal,
  getLandscapeSliderBox,
  galleryMainDivs,
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
      getPortraitGal.portraitGalLocale =
        document.querySelector(".gal-portrait");

      getPortraitSliderBox.portraitSliderLocale = document.querySelector(
        ".portrait-slider-box",
      );

      getLandscapeGal.landscapeGalLocale =
        document.querySelector(".gal-landscape");

      getLandscapeSliderBox.landscapeSliderLocale = document.querySelector(
        ".landscape-slider-box",
      );

      if (windowHeight < windowWidth) {
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

  landscape.addEventListener("change", (e) => {
    if (e.matches) {
      console.log("landscape");
      clearInterval(getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupLandscapeGal();
    } else {
      console.log("portrait");
      clearInterval(getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupPortraitGal();
    }
  });
}

function setupPortraitGal() {
  getLandscapeGal.galLandscapeView.hidden = true;
  getLandscapeSliderBox.landscapeSliderBox.hidden = true;
  getPortraitGal.galPortraitView.hidden = false;
  getPortraitSliderBox.portraitSliderBox.hidden = false;
  portraitSliderBoxCtrl();
  console.log("Gallery Portrait Mode");
}

function setupLandscapeGal() {
  getLandscapeGal.galLandscapeView.hidden = false;
  getLandscapeSliderBox.landscapeSliderBox.hidden = false;
  getPortraitGal.galPortraitView.hidden = true;
  getPortraitSliderBox.portraitSliderBox.hidden = true;
  landscapeSliderBoxCtrl();
  console.log("Gallery Landscape Mode");
}

function portraitSliderBoxCtrl() {
  const currentGallery = getPortraitGal.galPortraitView;
  //  console.log(currentGallery);

  sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(
    ".portrait-animation-ctrl-div",
  );
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(
    ".portrait-pause-btn",
  );
  sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(
    ".portrait-pause-icon",
  );

  sliderPlayBtn.currentPlayBtn =
    currentGallery.querySelector(".portrait-play-btn");
  sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(
    ".portrait-play-icon",
  );

  activeSliderBox.currentActiveBox = currentGallery.querySelector(
    ".portrait-slider-box",
  );
  // console.log(activeSliderBox.activeBox);

  const portraitSliderBox = activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  activePhotoBox.currentActivePhotoBox = portraitSliderBox.querySelector(
    ".portrait-photo-box",
  );
  // console.log(activePhotoBox.photoBox);

  galleryImgs.boxImgsArray = Array.from(activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  getRightArrow.rightArrowLocation = portraitSliderBox.querySelector(
    "[data-forward-arrow]",
  );
  // console.log(getRightArrow.rightArrow);

  getRightArrowIcon.rightIconLocation = portraitSliderBox.querySelector(
    "[data-icon-forward]",
  );

  getLeftArrow.leftArrowLocation =
    portraitSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  getLeftArrowIcon.leftIconLocation =
    portraitSliderBox.querySelector("[data-icon-back]");

  slidePosition.currentSlidePosition =
    galleryImgs.boxImgs[setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  slidePosition.currentSlidePosition.classList.add("picture--active");

  circleNav.thisCircleNav = portraitSliderBox.querySelector(
    ".img-dots-container",
  );
  // console.log(circleNav.currentCircleNav);

  circleIconDivs.circleDivsArray = Array.from(
    portraitSliderBox.getElementsByClassName("circle-icon-div"),
  );
  // console.log(circleIconDivs.circleDivs);

  circleDivPosition.currentCircleDivPosition =
    circleIconDivs.circleDivs[setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  circleIconDivs.circleDivs[setIndex.currentIndex].classList.add(
    "circle-icon-div--active",
  );

  circleIcons.circleIconsArray = Array.from(
    portraitSliderBox.getElementsByClassName("circle-icon"),
  );
  // console.log(circleIcons.circles);

  circlePosition.currentCirclePosition =
    circleIcons.circles[setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  circleIcons.circles[setIndex.currentIndex].classList.add(
    "circle-icon--active",
  );

  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}

function landscapeSliderBoxCtrl() {
  const currentGallery = getLandscapeGal.galLandscapeView;
  //  console.log(currentGallery);

  sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(
    ".landscape-animation-ctrl-div",
  );
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(
    ".landscape-pause-btn",
  );
  sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(
    ".landscape-pause-icon",
  );

  sliderPlayBtn.currentPlayBtn = currentGallery.querySelector(
    ".landscape-play-btn",
  );
  sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(
    ".landscape-play-icon",
  );

  activeSliderBox.currentActiveBox = currentGallery.querySelector(
    ".landscape-slider-box",
  );
  // console.log(activeSliderBox.activeBox);

  const landscapeSliderBox = activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  activePhotoBox.currentActivePhotoBox = landscapeSliderBox.querySelector(
    ".landscape-photo-box",
  );
  // console.log(activePhotoBox.photoBox);

  galleryImgs.boxImgsArray = Array.from(activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  getRightArrow.rightArrowLocation = landscapeSliderBox.querySelector(
    "[data-forward-arrow]",
  );
  // console.log(getRightArrow.rightArrow);

  getRightArrowIcon.rightIconLocation = landscapeSliderBox.querySelector(
    "[data-icon-forward]",
  );

  getLeftArrow.leftArrowLocation =
    landscapeSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  getLeftArrowIcon.leftIconLocation =
    landscapeSliderBox.querySelector("[data-icon-back]");

  slidePosition.currentSlidePosition =
    galleryImgs.boxImgs[setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  slidePosition.currentSlidePosition.classList.add("picture--active");

  circleNav.thisCircleNav = landscapeSliderBox.querySelector(
    ".img-dots-container",
  );
  // console.log(circleNav.currentCircleNav);

  circleIconDivs.circleDivsArray = Array.from(
    landscapeSliderBox.getElementsByClassName("circle-icon-div"),
  );
  // console.log(circleIconDivs.circleDivs);

  circleDivPosition.currentCircleDivPosition =
    circleIconDivs.circleDivs[setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  circleIconDivs.circleDivs[setIndex.currentIndex].classList.add(
    "circle-icon-div--active",
  );

  circleIcons.circleIconsArray = Array.from(
    landscapeSliderBox.getElementsByClassName("circle-icon"),
  );
  // console.log(circleIcons.circles);

  circlePosition.currentCirclePosition =
    circleIcons.circles[setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  circleIcons.circles[setIndex.currentIndex].classList.add(
    "circle-icon--active",
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
    },
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
      clearInterval(getAnimationID.animationID);
      if (
        sliderPauseBtn.currentPauseBtn.classList.contains("pause-btn--active")
      ) {
        getAnimationID.animationID = setInterval(slideRight, 3000);
      }
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
      if (
        sliderPauseBtn.currentPauseBtn.classList.contains("pause-btn--active")
      ) {
        getAnimationID.animationID = setInterval(slideRight, 3000);
      }
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
      clearInterval(getAnimationID.animationID);
      if (
        sliderPauseBtn.currentPauseBtn.classList.contains("pause-btn--active")
      ) {
        getAnimationID.animationID = setInterval(slideRight, 3000);
      }
    }
    if (
      e.target === getLeftArrow.leftArrow ||
      e.target === getLeftArrowIcon.leftArrowIcon
    ) {
      console.log("left");
      slideLeft();
      clearInterval(getAnimationID.animationID);
      if (
        sliderPauseBtn.currentPauseBtn.classList.contains("pause-btn--active")
      ) {
        getAnimationID.animationID = setInterval(slideRight, 3000);
      }
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
    "circle-icon-div--active",
  );
  circleDivPosition.currentCircleDivPosition.removeAttribute(
    "aria-disabled",
    "true",
  );
  circlePosition.currentCirclePosition.classList.remove("circle-icon--active");
}

function addActiveState() {
  slidePosition.currentSlidePosition.classList.add("picture--active");
  circleDivPosition.currentCircleDivPosition.classList.add(
    "circle-icon-div--active",
  );
  circleDivPosition.currentCircleDivPosition.setAttribute(
    "aria-disabled",
    "true",
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
