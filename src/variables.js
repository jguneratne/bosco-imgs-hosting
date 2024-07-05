// Contact Form Validation
export const formDisabledText = document.querySelector(".form-disabled");
export const form = document.querySelector("#contact");
export const formFieldset = document.querySelector("fieldset");
export const inputFields = document.querySelectorAll("input");
export const textArea = document.querySelector("textarea");
export const firstName = document.getElementById("first-name");
export const firstNameError = document.querySelector(".firstNameError");
export const lastName = document.getElementById("last-name");
export const lastNameError = document.querySelector(".lastNameError");
export const email = document.getElementById("email");
export const emailError = document.querySelector(".emailError");
export const message = document.getElementById("message");
export const messageError = document.querySelector(".messageError");
export const submitBtn = document.querySelector(".send-contact");
export const submitError = document.querySelector(".submitError");

// Accessibility
export const reduceMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)") === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

// Menu Variables
export const currentPage = window.location.href;
export const fullPageName = currentPage.substring(
  currentPage.lastIndexOf("/") + 1
);
export const indexOfExtension = fullPageName.indexOf(".");
export const shortPageName = fullPageName.substring(0, indexOfExtension);

// Drop Down
export const dropDownDiv = document.querySelector(".dropdown-div");
export const dropDownCarat = document.querySelector(".gal-arrow");
export const dropDownMenu = document.querySelector(".dropdown-content");
export const navigation = document.querySelector("nav");

// Nav Styles
export const menuChildrenDiv = document.querySelector(".menu-items");
export const menuBtnStyle = Array.from(document.querySelectorAll(".menu-btn"));
export const dropDownItems = Array.from(
  document.querySelectorAll(".dropdown-item")
);

// Window Dimensions
export const windowHeight = window.innerHeight;
export const windowWidth = window.innerWidth;

// Photo Gallery

export let getPortraitGal = {
  galPortraitView: undefined,

  get portraitGalLocale() {
    return this.galPortraitView;
  },

  set portraitGalLocale(newPortraitGalLocale) {
    this.galPortraitView = newPortraitGalLocale;
  },
};

export let getLandscapeGal = {
  galLandscapeView: undefined,

  get landscapeGalLocale() {
    return this.galLandscapeView;
  },

  set landscapeGalLocale(newLandscapeGalLocale) {
    this.galLandscapeView = newLandscapeGalLocale;
  },
};

export let getPortraitSliderBox = {
  portraitSliderBox: undefined,

  get portraitSliderLocale() {
    return this.portraitSliderBox;
  },

  set portraitSliderLocale(newPortraitSliderLocale) {
    this.portraitSliderBox = newPortraitSliderLocale;
  },
};

export let getLandscapeSliderBox = {
  landscapelSiderBox: undefined,

  get landscapeSliderLocale() {
    return this.landscapeSliderBox;
  },

  set landscapeSliderLocale(newLandscapeSliderLocale) {
    this.landscapeSliderBox = newLandscapeSliderLocale;
  },
};

export let getAnimationID = {
  animationID: undefined,

  get animationIDValue() {
    return this.animationID;
  },

  set animationIDValue(newAnimationValue) {
    this.animationID = newAnimationValue;
  },
};

export let sliderAnimationCtrlDiv = {
  animationCtrlDiv: undefined,

  get currentAnimationCtrlDiv() {
    return this.animationCtrlDiv;
  },

  set currentAnimationCtrlDiv(newAnimationCtrlDiv) {
    this.animationCtrlDiv = newAnimationCtrlDiv;
  },
};

export let sliderPauseBtn = {
  pauseBtn: undefined,

  get currentPauseBtn() {
    return this.pauseBtn;
  },

  set currentPauseBtn(newPauseBtn) {
    this.pauseBtn = newPauseBtn;
  },
};

export let sliderPauseIcon = {
  pauseIcon: undefined,

  get currentPauseIcon() {
    return this.pauseIcon;
  },

  set currentPauseIcon(newPauseIcon) {
    this.pauseIcon = newPauseIcon;
  },
};

export let sliderPlayBtn = {
  playBtn: undefined,

  get currentPlayBtn() {
    return this.playBtn;
  },

  set currentPlayBtn(newPlayBtn) {
    this.playBtn = newPlayBtn;
  },
};

export let sliderPlayIcon = {
  playIcon: undefined,

  get currentPlayIcon() {
    return this.playIcon;
  },

  set currentPlayIcon(newPlayIcon) {
    this.playIcon = newPlayIcon;
  },
};

export const galleryMainDivs = document.querySelectorAll(".gal-main");
export const arrowDivs = document.querySelectorAll(".arrow-div");
export const photoBoxes = document.querySelectorAll(".photo-box");

export let activeSliderBox = {
  activeBox: undefined,

  get currentActiveBox() {
    return this.activeBox;
  },

  set currentActiveBox(currentPageBox) {
    this.activeBox = currentPageBox;
  },
};

export let activePhotoBox = {
  photoBox: undefined,

  get currentActivePhotoBox() {
    return this.photoBox;
  },

  set currentActivePhotoBox(currentPagePhotoBox) {
    this.photoBox = currentPagePhotoBox;
  },
};

export let galleryImgs = {
  boxImgs: [],

  get boxImgsArray() {
    return this.boxImgs;
  },

  set boxImgsArray(currentBoxImgs) {
    this.boxImgs = currentBoxImgs;
  },
};

// export const circleNav = document.querySelectorAll(".img-dots-container");

export const circleNav = {
  currentCircleNav: undefined,

  get thisCircleNav() {
    return this.currentCircleNav;
  },

  set thisCircleNav(getTheNav) {
    this.currentCircleNav = getTheNav;
  },
};

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

export const getRightArrow = {
  rightArrow: undefined,

  get rightArrowLocation() {
    return this.rightArrow;
  },

  set rightArrowLocation(newRightArrow) {
    this.rightArrow = newRightArrow;
  },
};

export const getRightArrowIcon = {
  rightArrowIcon: undefined,

  get rightIconLocation() {
    return this.rightArrowIcon;
  },

  set rightIconLocation(newRightIcon) {
    this.rightArrowIcon = newRightIcon;
  },
};

export const getLeftArrow = {
  leftArrow: undefined,

  get leftArrowLocation() {
    return this.leftArrow;
  },

  set leftArrowLocation(newLeftArrow) {
    this.leftArrow = newLeftArrow;
  },
};

export const getLeftArrowIcon = {
  leftArrowIcon: undefined,

  get leftIconLocation() {
    return this.leftArrowIcon;
  },

  set leftIconLocation(newLeftIcon) {
    this.leftArrowIcon = newLeftIcon;
  },
};

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
