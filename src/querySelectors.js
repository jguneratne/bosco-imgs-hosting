export const sliderBox = document.querySelector(".slider-box");
export const photoBox = document.querySelector(".photo-box");
export const galleryImgs = Array.from(photoBox.children);
export const circleNav = document.querySelector(".img-dots");
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
    return this.prevSlide;
  },

  set prevCirclePosition(newPrevCircle) {
    this.prevSlide = newPrevCircle;
  },
};
