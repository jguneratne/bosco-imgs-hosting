// Drop Down
export const dropDownDiv = document.querySelector(".dropdown-div");
export const dropDownCarat = document.querySelector(".gal-arrow");
export const dropDownContent = document.querySelector(".dropdown-content");
export const dropDownItems = Array.from(
  document.querySelectorAll(".dropdown-item")
);

// Tab Control

export const tabLinks = Array.from(document.querySelectorAll("[href]"));

// Photo Gallery
export const sliderBox = document.querySelector(".slider-box");
export const photoBox = document.querySelector(".photo-box");
export const galleryImgs = Array.from(photoBox.children);
export const circleNav = document.querySelector(".img-dots-container");
export const circleIconDivs = Array.from(
  document.querySelectorAll(".circle-icon-div")
);
export const circleIcons = Array.from(
  document.querySelectorAll(".circle-icon")
);
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

export const slidePosition = {
  currentSlide: galleryImgs[setIndex.currentIndex],
  nextSlide: galleryImgs[setIndex.currentIndex + 1],
  prevSlide: galleryImgs[setIndex.currentIndex - 1],

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

export const circleDivPosition = {
  currentCircleDiv: circleIconDivs[setIndex.currentIndex],
  nextCircleDiv: circleIconDivs[setIndex.currentIndex + 1],
  prevCircleDiv: circleIconDivs[setIndex.currentIndex - 1],

  get currentCircleDivPosition() {
    return this.currentCircleDiv;
  },

  set currentCircleDivPosition(newCurrentCircleDiv) {
    this.currentCircleDiv = newCurrentCircleDiv;
  },

  get nextCirclePositionDiv() {
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

export const circlePosition = {
  currentCircle: circleIcons[setIndex.currentIndex],
  nextCircle: circleIcons[setIndex.currentIndex + 1],
  prevCircle: circleIcons[setIndex.currentIndex - 1],

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
