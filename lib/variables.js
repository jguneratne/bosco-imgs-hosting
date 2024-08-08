"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowWidth = exports.windowHeight = exports.textArea = exports.submitError = exports.submitBtn = exports.sliderPlayIcon = exports.sliderPlayBtn = exports.sliderPauseIcon = exports.sliderPauseBtn = exports.sliderAnimationCtrlDiv = exports.slidePosition = exports.shortPageName = exports.setIndex = exports.reduceMotion = exports.photoBoxes = exports.newMenuIconWidth = exports.navigation = exports.messageError = exports.message = exports.menuLinks = exports.menuIconWidth = exports.menuIconDiv = exports.menuIcon = exports.menuChildrenDiv = exports.menuBtnStyle = exports.menuBar = exports.lastNameError = exports.lastName = exports.inputFields = exports.indexOfExtension = exports.getRightArrowIcon = exports.getRightArrow = exports.getPortraitSliderBox = exports.getPortraitGal = exports.getLeftArrowIcon = exports.getLeftArrow = exports.getLandscapeSliderBox = exports.getLandscapeGal = exports.getAnimationID = exports.galleryMainDivs = exports.galleryImgs = exports.fullPageName = exports.formFieldset = exports.formDisabledText = exports.form = exports.firstNameError = exports.firstName = exports.emailError = exports.email = exports.dropDownMenu = exports.dropDownItems = exports.dropDownDiv = exports.dropDownCarat = exports.currentPage = exports.circlePosition = exports.circleNav = exports.circleIcons = exports.circleIconDivs = exports.circleDivPosition = exports.arrowDivs = exports.activeSliderBox = exports.activePhotoBox = void 0;
// Menu Variables
const navigation = exports.navigation = document.querySelector("nav");
const menuIconDiv = exports.menuIconDiv = document.querySelector(".menu-icon-div");
const menuIcon = exports.menuIcon = document.querySelector(".menu-icon");
const menuIconWidth = exports.menuIconWidth = menuIcon.offsetWidth;
const newMenuIconWidth = exports.newMenuIconWidth = menuIconWidth / 2;
const menuBar = exports.menuBar = document.querySelector(".menu-items");
const currentPage = exports.currentPage = window.location.href;
const fullPageName = exports.fullPageName = currentPage.substring(currentPage.lastIndexOf("/") + 1);
const indexOfExtension = exports.indexOfExtension = fullPageName.indexOf(".");
const shortPageName = exports.shortPageName = fullPageName.substring(0, indexOfExtension);

// Drop Down
const dropDownDiv = exports.dropDownDiv = document.querySelector(".dropdown-div");
const dropDownCarat = exports.dropDownCarat = document.querySelector(".gal-arrow");
const dropDownMenu = exports.dropDownMenu = document.querySelector(".dropdown-content");

// Nav Styles
const menuChildrenDiv = exports.menuChildrenDiv = document.querySelector(".menu-items");
const menuBtnStyle = exports.menuBtnStyle = Array.from(document.querySelectorAll(".menu-btn"));
const dropDownItems = exports.dropDownItems = Array.from(document.querySelectorAll(".dropdown-item"));

// Accessibility
const reduceMotion = exports.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)") === true || window.matchMedia("(prefers-reduced-motion: reduce)").matches === true;
const menuLinks = exports.menuLinks = document.querySelectorAll(".menu-link");

// Contact Form Validation
const formDisabledText = exports.formDisabledText = document.querySelector(".form-disabled");
const form = exports.form = document.querySelector("#contact");
const formFieldset = exports.formFieldset = document.querySelector("fieldset");
const inputFields = exports.inputFields = document.querySelectorAll("input");
const textArea = exports.textArea = document.querySelector("textarea");
const firstName = exports.firstName = document.getElementById("first-name");
const firstNameError = exports.firstNameError = document.querySelector(".firstNameError");
const lastName = exports.lastName = document.getElementById("last-name");
const lastNameError = exports.lastNameError = document.querySelector(".lastNameError");
const email = exports.email = document.getElementById("email");
const emailError = exports.emailError = document.querySelector(".emailError");
const message = exports.message = document.getElementById("message");
const messageError = exports.messageError = document.querySelector(".messageError");
const submitBtn = exports.submitBtn = document.querySelector(".send-contact");
const submitError = exports.submitError = document.querySelector(".submitError");

// Window Dimensions
const windowHeight = exports.windowHeight = window.innerHeight;
const windowWidth = exports.windowWidth = window.innerWidth;

// Photo Gallery

let getPortraitGal = exports.getPortraitGal = {
  galPortraitView: undefined,
  get portraitGalLocale() {
    return this.galPortraitView;
  },
  set portraitGalLocale(newPortraitGalLocale) {
    this.galPortraitView = newPortraitGalLocale;
  }
};
let getLandscapeGal = exports.getLandscapeGal = {
  galLandscapeView: undefined,
  get landscapeGalLocale() {
    return this.galLandscapeView;
  },
  set landscapeGalLocale(newLandscapeGalLocale) {
    this.galLandscapeView = newLandscapeGalLocale;
  }
};
let getPortraitSliderBox = exports.getPortraitSliderBox = {
  portraitSliderBox: undefined,
  get portraitSliderLocale() {
    return this.portraitSliderBox;
  },
  set portraitSliderLocale(newPortraitSliderLocale) {
    this.portraitSliderBox = newPortraitSliderLocale;
  }
};
let getLandscapeSliderBox = exports.getLandscapeSliderBox = {
  landscapeSliderBox: undefined,
  get landscapeSliderLocale() {
    return this.landscapeSliderBox;
  },
  set landscapeSliderLocale(newLandscapeSliderLocale) {
    this.landscapeSliderBox = newLandscapeSliderLocale;
  }
};
let getAnimationID = exports.getAnimationID = {
  animationID: undefined,
  get animationIDValue() {
    return this.animationID;
  },
  set animationIDValue(newAnimationValue) {
    this.animationID = newAnimationValue;
  }
};
let sliderAnimationCtrlDiv = exports.sliderAnimationCtrlDiv = {
  animationCtrlDiv: undefined,
  get currentAnimationCtrlDiv() {
    return this.animationCtrlDiv;
  },
  set currentAnimationCtrlDiv(newAnimationCtrlDiv) {
    this.animationCtrlDiv = newAnimationCtrlDiv;
  }
};
let sliderPauseBtn = exports.sliderPauseBtn = {
  pauseBtn: undefined,
  get currentPauseBtn() {
    return this.pauseBtn;
  },
  set currentPauseBtn(newPauseBtn) {
    this.pauseBtn = newPauseBtn;
  }
};
let sliderPauseIcon = exports.sliderPauseIcon = {
  pauseIcon: undefined,
  get currentPauseIcon() {
    return this.pauseIcon;
  },
  set currentPauseIcon(newPauseIcon) {
    this.pauseIcon = newPauseIcon;
  }
};
let sliderPlayBtn = exports.sliderPlayBtn = {
  playBtn: undefined,
  get currentPlayBtn() {
    return this.playBtn;
  },
  set currentPlayBtn(newPlayBtn) {
    this.playBtn = newPlayBtn;
  }
};
let sliderPlayIcon = exports.sliderPlayIcon = {
  playIcon: undefined,
  get currentPlayIcon() {
    return this.playIcon;
  },
  set currentPlayIcon(newPlayIcon) {
    this.playIcon = newPlayIcon;
  }
};
const galleryMainDivs = exports.galleryMainDivs = document.querySelectorAll(".gal-main");
const arrowDivs = exports.arrowDivs = document.querySelectorAll(".arrow-div");
const photoBoxes = exports.photoBoxes = document.querySelectorAll(".photo-box");
let activeSliderBox = exports.activeSliderBox = {
  activeBox: undefined,
  get currentActiveBox() {
    return this.activeBox;
  },
  set currentActiveBox(currentPageBox) {
    this.activeBox = currentPageBox;
  }
};
let activePhotoBox = exports.activePhotoBox = {
  photoBox: undefined,
  get currentActivePhotoBox() {
    return this.photoBox;
  },
  set currentActivePhotoBox(currentPagePhotoBox) {
    this.photoBox = currentPagePhotoBox;
  }
};
let galleryImgs = exports.galleryImgs = {
  boxImgs: [],
  get boxImgsArray() {
    return this.boxImgs;
  },
  set boxImgsArray(currentBoxImgs) {
    this.boxImgs = currentBoxImgs;
  }
};

// export const circleNav = document.querySelectorAll(".img-dots-container");

const circleNav = exports.circleNav = {
  currentCircleNav: undefined,
  get thisCircleNav() {
    return this.currentCircleNav;
  },
  set thisCircleNav(getTheNav) {
    this.currentCircleNav = getTheNav;
  }
};
let circleIconDivs = exports.circleIconDivs = {
  circleDivs: [],
  get circleDivsArray() {
    return this.circleDivs;
  },
  set circleDivsArray(newCircleDivsArray) {
    this.circleDivs = newCircleDivsArray;
  }
};
let circleIcons = exports.circleIcons = {
  circles: [],
  get circleIconsArray() {
    return this.circles;
  },
  set circleIconsArray(newCirclesArray) {
    this.circles = newCirclesArray;
  }
};
const getRightArrow = exports.getRightArrow = {
  rightArrow: undefined,
  get rightArrowLocation() {
    return this.rightArrow;
  },
  set rightArrowLocation(newRightArrow) {
    this.rightArrow = newRightArrow;
  }
};
const getRightArrowIcon = exports.getRightArrowIcon = {
  rightArrowIcon: undefined,
  get rightIconLocation() {
    return this.rightArrowIcon;
  },
  set rightIconLocation(newRightIcon) {
    this.rightArrowIcon = newRightIcon;
  }
};
const getLeftArrow = exports.getLeftArrow = {
  leftArrow: undefined,
  get leftArrowLocation() {
    return this.leftArrow;
  },
  set leftArrowLocation(newLeftArrow) {
    this.leftArrow = newLeftArrow;
  }
};
const getLeftArrowIcon = exports.getLeftArrowIcon = {
  leftArrowIcon: undefined,
  get leftIconLocation() {
    return this.leftArrowIcon;
  },
  set leftIconLocation(newLeftIcon) {
    this.leftArrowIcon = newLeftIcon;
  }
};
let setIndex = exports.setIndex = {
  currentIndex: 0,
  get targetIndex() {
    return this.currentIndex;
  },
  set targetIndex(newTargetIndex) {
    this.currentIndex = newTargetIndex;
  }
};
let slidePosition = exports.slidePosition = {
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
  }
};
let circleDivPosition = exports.circleDivPosition = {
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
  }
};
let circlePosition = exports.circlePosition = {
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
  }
};