export const sliderBox = document.querySelector(".slider-box");
export const photoBox = document.querySelector(".photo-box");
export const galleryImgs = Array.from(photoBox.children);
export const circleNav = document.querySelector(".img-dots");
export const circleIcons = Array.from(
  document.querySelectorAll(".circle-icon")
);
export const rightArrow = document.querySelector("[data-forward-arrow]");
export const leftArrow = document.querySelector("[data-back-arrow]");

export let targetIndex = 0;
export let currentSlide = galleryImgs[targetIndex];
export let nextSlide = galleryImgs[targetIndex + 1];
export let prevSlide = galleryImgs[targetIndex - 1];
export let currentCircle = circleIcons[targetIndex];
export let nextCircle = circleIcons[targetIndex + 1];
export let prevCircle = circleIcons[targetIndex - 1];

export const slidePosition = {
  findCurrentSlide: currentSlide,
  findNextSlide: nextSlide,
  findPrevSlide: prevSlide,

  get currentSlidePosition() {
    return this.findCurrentSlide;
  },

  set currentSlidePosition(newCurrentSlide) {
    this.findCurrentSlide = newCurrentSlide;
  },

  get nextSlidePosition() {
    return this.findNextSlide;
  },

  set nextSlidePosition(newNextSlide) {
    this.findNextSlide = newNextSlide;
  },

  get prevSlidePosition() {
    return this.findPrevSlide;
  },

  set prevSlidePosition(newPrevSlide) {
    this.findPrevSlide = newPrevSlide;
  },
};

export const circlePosition = {
  findCurrentCircle: currentCircle,
  findNextCircle: nextCircle,
  findPrevCircle: prevCircle,

  get currentCirclePosition() {
    return this.findCurrentCircle;
  },

  set currentCirclePosition(newCurrentCircle) {
    this.findCurrentCircle = newCurrentCircle;
  },

  get nextCirclePosition() {
    return this.findNextCircle;
  },

  set nextCirclePosition(newNextCircle) {
    this.findNextCircle = newNextCircle;
  },

  get prevCirclePosition() {
    return this.findPrevSlide;
  },

  set prevCirclePosition(newPrevCircle) {
    this.findPrevSlide = newPrevCircle;
  },
};
