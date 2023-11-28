// Drop Down
export const dropDownDiv = document.querySelector(".dropdown-div");
export const dropDownCarat = document.querySelector(".gal-arrow");
export const dropDownContent = document.querySelector(".dropdown-content");
export const dropDownItems = Array.from(
  document.querySelectorAll(".dropdown-item")
);

// Tab Control
export const menuChildrenDiv = document.querySelector(".menu-items");
export const menuLinks = Array.from(menuChildrenDiv.getElementsByTagName("LI"));
export const menuBtnStyle = document.querySelectorAll(".menu-btn");
export const galleryLinkParent = document.querySelector(".dropdown-content");
export const tabContent = document.querySelectorAll(".tab-content");

// Photo Gallery
export const sliderBoxes = document.querySelectorAll(".slider-box");
export const photoBoxes = document.querySelectorAll(".photo-box");

export let galleryImgs = {
  boxImgs: [],

  get boxImgsArray() {
    return this.boxImgs;
  },

  set boxImgsArray(currentBoxImgs) {
    this.boxImgs = currentBoxImgs;
  },
};

export const circleNav = document.querySelectorAll(".img-dots-container");
export const circleIconContainer = document.querySelectorAll(".img-dots");

export let circleIconDivs = {
  circleDivs: [],

  get circleDivsArray() {
    return this.circleDivs;
  },

  set circleDivsArray(newCircleDivsArray) {
    this.circleDivs = newCircleDivsArray;
  },
};

export let circleIcons = {
  circles: [],

  get circleIconsArray() {
    return this.circles;
  },

  set circleIconsArray(newCirclesArray) {
    this.circles = newCirclesArray;
  },
};

export const rightArrow = document.querySelector("[data-forward-arrow]");
export const leftArrow = document.querySelector("[data-back-arrow]");

export let setIndex = {
  currentIndex: 0,

  get targetIndex() {
    return this.currentIndex;
  },

  set targetIndex(newTargetIndex) {
    this.currentIndex = newTargetIndex;
  },
};

export let slidePosition = {
  currentSlide: galleryImgs.boxImgs[setIndex.currentIndex],
  nextSlide: galleryImgs.boxImgs[setIndex.currentIndex + 1],
  prevSlide: galleryImgs.boxImgs[setIndex.currentIndex - 1],

  get currentSlidePosition() {
    return this.currentSlide;
  },

  set currentSlidePosition(newCurrentSlide) {
    this.currentSlide = newCurrentSlide;
  },

  get nextSlidePosition() {
    return this.nextSlide;
  },

  set nextSlidePosition(newNextSlide) {
    this.nextSlide = newNextSlide;
  },

  get prevSlidePosition() {
    return this.prevSlide;
  },

  set prevSlidePosition(newPrevSlide) {
    this.prevSlide = newPrevSlide;
  },
};

export let circleDivPosition = {
  currentCircleDiv: circleIconDivs.circleDivs[setIndex.currentIndex],
  nextCircleDiv: circleIconDivs.circleDivs[setIndex.currentIndex + 1],
  prevCircleDiv: circleIconDivs.circleDivs[setIndex.currentIndex - 1],

  get currentCircleDivPosition() {
    return this.currentCircleDiv;
  },

  set currentCircleDivPosition(newCurrentCircleDiv) {
    this.currentCircleDiv = newCurrentCircleDiv;
  },

  get nextCircleDivPosition() {
    return this.nextCircleDiv;
  },

  set nextCircleDivPosition(newNextCircleDiv) {
    this.nextCircleDiv = newNextCircleDiv;
  },

  get prevCircleDivPosition() {
    return this.prevCircleDiv;
  },

  set prevCircleDivPosition(newPrevCircleDiv) {
    this.prevCircleDiv = newPrevCircleDiv;
  },
};

export let circlePosition = {
  currentCircle: circleIcons.circles[setIndex.currentIndex],
  nextCircle: circleIcons.circles[setIndex.currentIndex + 1],
  prevCircle: circleIcons.circles[setIndex.currentIndex - 1],

  get currentCirclePosition() {
    return this.currentCircle;
  },

  set currentCirclePosition(newCurrentCircle) {
    this.currentCircle = newCurrentCircle;
  },

  get nextCirclePosition() {
    return this.nextCircle;
  },

  set nextCirclePosition(newNextCircle) {
    this.nextCircle = newNextCircle;
  },

  get prevCirclePosition() {
    return this.prevCircle;
  },

  set prevCirclePosition(newPrevCircle) {
    this.prevSlide = newPrevCircle;
  },
};
