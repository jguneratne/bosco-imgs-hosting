/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropDown.js":
/*!*************************!*\
  !*** ./src/dropDown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   galleriesClickMenu: () => (/* binding */ galleriesClickMenu)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");


function galleriesClickMenu() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.navigation.addEventListener("keydown", (e) => {
    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) &&
      !_variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      activateDropdown();
    } else if (
      (e.key === " " || e.key === "Enter") &&
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) &&
      _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      closeDropdown();
    }
  });

  _variables__WEBPACK_IMPORTED_MODULE_0__.navigation.addEventListener("pointerdown", (e) => {
    if (
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) &&
      !_variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      activateDropdown();
    } else if (
      (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) &&
      _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      console.log(e.target);
      closeDropdown();
    } else if (
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) &&
      _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      closeDropdown();
      changeActiveState();
    }
  });
}

function activateDropdown() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat.classList.add("gal-arrow--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.add("dropdown-content--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems.forEach((item) => {
    item.classList.add("dropdown-item--active");
  });

  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
    console.log(btn.dataset.name);
    btn.classList.remove("selected");
    if (btn.dataset.name === "galleries") {
      btn.classList.add("selected");
    }
  });
}

function changeActiveState() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
    if (btn.dataset.name === _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName) {
      btn.classList.add("selected");
      console.log(_variables__WEBPACK_IMPORTED_MODULE_0__.currentPage);
    }
  });
}

function closeDropdown() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
    btn.classList.remove("selected");
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.remove("dropdown-content--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat.classList.remove("gal-arrow--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems.forEach((item) => {
    item.classList.remove("dropdown-item--active");
  });
}


/***/ }),

/***/ "./src/form-validation.js":
/*!********************************!*\
  !*** ./src/form-validation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateFormFields: () => (/* binding */ validateFormFields)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");


function validateFormFields() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "contact" && _variables__WEBPACK_IMPORTED_MODULE_0__.formFieldset.disabled) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.formDisabledText.style.display = "initial";

    _variables__WEBPACK_IMPORTED_MODULE_0__.inputFields.forEach((field) => {
      field.style.backgroundColor = "#edf0f0";
      field.style.pointerEvents = "none";
    });

    _variables__WEBPACK_IMPORTED_MODULE_0__.textArea.style.backgroundColor = "#edf0f0";
    _variables__WEBPACK_IMPORTED_MODULE_0__.textArea.style.pointerEvents = "none";

    _variables__WEBPACK_IMPORTED_MODULE_0__.submitBtn.style.backgroundColor = "#edf0f0";
    _variables__WEBPACK_IMPORTED_MODULE_0__.submitBtn.style.pointerEvents = "none";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "contact" && !_variables__WEBPACK_IMPORTED_MODULE_0__.formFieldset.disabled) {
    validateFirstNameInput();
    validateLastNameInput();
    validateEmailInput();
    validateMessageInput();
    validateOnSubmit();
  }
}

// First Name Validation

function validateFirstNameInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.firstName.addEventListener("blur", (e) => {
    if (_variables__WEBPACK_IMPORTED_MODULE_0__.firstName.validity.valid) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.textContent = "";
      _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.style.visibility = "hidden";
      _variables__WEBPACK_IMPORTED_MODULE_0__.firstName.classList.remove("firstName--invalid");
    } else {
      showFirstNameError();
    }
  });
}

function showFirstNameError() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.firstName.validity.valueMissing) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.textContent = "You need to enter your first name.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.setAttribute("aria-labelledby", "firstNameError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstName.classList.add("firstName--invalid");
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.firstName.validity.typeMismatch) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.textContent = "Entered value needs to be a name.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.setAttribute("aria-labelledby", "firstNameError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstName.classList.add("firstName--invalid");
  }
}

// Last Name Validation

function validateLastNameInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.lastName.addEventListener("blur", (e) => {
    if (_variables__WEBPACK_IMPORTED_MODULE_0__.lastName.validity.valid) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.textContent = "";
      _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.style.visibility = "hidden";
      _variables__WEBPACK_IMPORTED_MODULE_0__.lastName.classList.remove("lastName--invalid");
    } else {
      showLastNameError();
    }
  });
}

function showLastNameError() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.lastName.validity.valueMissing) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.textContent = "You need to enter your last name.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.setAttribute("aria-labelledby", "lastNameError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastName.classList.add("lastName--invalid");
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.lastName.validity.typeMismatch) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.textContent = "Entered value needs to be a name.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.setAttribute("aria-labelledby", "lastNameError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastName.classList.add("lastName--invalid");
  }
}

// Email Validation

function validateEmailInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.email.addEventListener("blur", (e) => {
    if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.valid) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = "";
      _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.style.visibility = "hidden";
      _variables__WEBPACK_IMPORTED_MODULE_0__.email.classList.remove("emailField--invalid");
    } else {
      showEmailError();
    }
  });
}

function showEmailError() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.valueMissing) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent =
      "Email address must be in standard format: your-email@email.com.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.setAttribute("aria-labelledby", "emailError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.email.classList.add("emailField--invalid");
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.typeMismatch) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent =
      "Email address must be in standard format: your-email@email.com.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.setAttribute("aria-labelledby", "emailError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.email.classList.add("emailField--invalid");
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.tooShort) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = `Email should be at least ${_variables__WEBPACK_IMPORTED_MODULE_0__.email.minLength} characters; you entered ${_variables__WEBPACK_IMPORTED_MODULE_0__.email.value.length}.`;
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.setAttribute("aria-labelledby", "emailError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.email.classList.add("emailField--invalid");
  }
}

// Message Validation

function validateMessageInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.message.addEventListener("blur", (e) => {
    if (_variables__WEBPACK_IMPORTED_MODULE_0__.message.validity.valid) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.textContent = "";
      _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.style.visibility = "hidden";
      _variables__WEBPACK_IMPORTED_MODULE_0__.message.classList.remove("messageField--invalid");
    } else {
      showMessageError();
    }
  });
}

function showMessageError() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.message.validity.valueMissing) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.textContent = "You must enter a message to submit this form.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.setAttribute("aria-labelledby", "messageError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.message.classList.add("messageField--invalid");
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.typeMismatch) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.textContent = "You must enter a message to submit this form.";
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.style.visibility = "visible";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.tooShort) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.textContent = `Message should be at least ${_variables__WEBPACK_IMPORTED_MODULE_0__.message.minLength} characters; you entered ${_variables__WEBPACK_IMPORTED_MODULE_0__.message.value.length}.`;
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.style.visibility = "visible";
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.setAttribute("aria-labelledby", "messageError");
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.focus();
    _variables__WEBPACK_IMPORTED_MODULE_0__.message.classList.add("messageField--invalid");
  }
}

// All Fileds Submit Validation

function validateOnSubmit() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener("submit", (e) => {
    if (
      !_variables__WEBPACK_IMPORTED_MODULE_0__.firstName.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_0__.lastName.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.valid ||
      !_variables__WEBPACK_IMPORTED_MODULE_0__.message.validity.valid
    ) {
      e.preventDefault();
      // showFirstNameError();
      // showLastNameError();
      // showEmailError();
      // showMessageError();

      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.textContent =
        "This form cannot be submitted with errors. Please review all text fields";
      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.style.visibility = "visible";
      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.setAttribute("aria-labelledby", "submitError");
      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.focus();
      submit.classList.add("submitField--invalid");
    }
  });
}


/***/ }),

/***/ "./src/navStyles.js":
/*!**************************!*\
  !*** ./src/navStyles.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ctrlTabHighlight: () => (/* binding */ ctrlTabHighlight),
/* harmony export */   showCurrentNavLink: () => (/* binding */ showCurrentNavLink)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");


function ctrlTabHighlight() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
    if (btn.dataset.name === _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName) {
      console.log(btn.dataset.name);
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else {
      showCurrentNavLink();
    }
  });
}

function showCurrentNavLink() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
    if (_variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === btn.dataset.name) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else if (
      _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "birds-gallery" ||
      _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "insects-gallery" ||
      _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "small-animals-gallery"
    ) {
      showGalNavLink();
    }
  });
}

function showGalNavLink() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems.forEach((item) => {
    if (
      item.dataset.name === "birds-gallery" ||
      item.dataset.name === "insects-gallery" ||
      item.dataset.name === "small-animals-gallery"
    ) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownDiv.classList.add("selected");
    }
  });
}


/***/ }),

/***/ "./src/photoSlider.js":
/*!****************************!*\
  !*** ./src/photoSlider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gallerySetup: () => (/* binding */ gallerySetup)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");


function gallerySetup() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.galleryMainDivs.forEach((div) => {
    if (div.dataset.name === _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName) {
      // getMainDiv.mainDivLocale = document.querySelector(".main");
      // // console.log(getMainDiv.mainDiv);
      // let galleryMain = getMainDiv.mainDiv;

      _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.portraitGalLocale =
        document.querySelector(".gal-portrait");

      _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.landscapeGalLocale =
        document.querySelector(".gal-landscape");

      if (_variables__WEBPACK_IMPORTED_MODULE_0__.windowHeight < _variables__WEBPACK_IMPORTED_MODULE_0__.windowWidth) {
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
      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupLandscapeGal();
    } else {
      console.log("portrait");
      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupPortraitGal();
    }
  });
}

function setupPortraitGal() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.galLandscapeView.hidden = true;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.galPortraitView.hidden = false;
  portraitSliderBoxCtrl();
  console.log("Gallery Portrait Mode");
}

function setupLandscapeGal() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.galLandscapeView.hidden = false;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.galPortraitView.hidden = true;
  landscapeSliderBoxCtrl();
  console.log("Gallery Landscape Mode");
}

function portraitSliderBoxCtrl() {
  const currentGallery = _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.galPortraitView;
  //  console.log(currentGallery);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(
    ".portrait-animation-ctrl-div"
  );
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(
    ".portrait-pause-btn"
  );
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(
    ".portrait-pause-icon"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn =
    currentGallery.querySelector(".portrait-play-btn");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(
    ".portrait-play-icon"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox = currentGallery.querySelector(
    ".portrait-slider-box"
  );
  // console.log(activeSliderBox.activeBox);

  const portraitSliderBox = _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.currentActivePhotoBox = portraitSliderBox.querySelector(
    ".portrait-photo-box"
  );
  // console.log(activePhotoBox.photoBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgsArray = Array.from(_variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrowLocation = portraitSliderBox.querySelector(
    "[data-forward-arrow]"
  );
  // console.log(getRightArrow.rightArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightIconLocation = portraitSliderBox.querySelector(
    "[data-icon-forward]"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrowLocation =
    portraitSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftIconLocation =
    portraitSliderBox.querySelector("[data-icon-back]");

  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition =
    _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.add("picture--active");

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.thisCircleNav = portraitSliderBox.querySelector(
    ".img-dots-container"
  );
  // console.log(circleNav.currentCircleNav);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivsArray = Array.from(
    portraitSliderBox.getElementsByClassName("circle-icon-div")
  );
  // console.log(circleIconDivs.circleDivs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition =
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add(
    "circle-icon-div--active"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circleIconsArray = Array.from(
    portraitSliderBox.getElementsByClassName("circle-icon")
  );
  // console.log(circleIcons.circles);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition =
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add(
    "circle-icon--active"
  );

  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}

function landscapeSliderBoxCtrl() {
  const currentGallery = _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.galLandscapeView;
  //  console.log(currentGallery);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(
    ".landscape-animation-ctrl-div"
  );
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(
    ".landscape-pause-btn"
  );
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(
    ".landscape-pause-icon"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn = currentGallery.querySelector(
    ".landscape-play-btn"
  );
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(
    ".landscape-play-icon"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox = currentGallery.querySelector(
    ".landscape-slider-box"
  );
  // console.log(activeSliderBox.activeBox);

  const landscapeSliderBox = _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.currentActivePhotoBox = landscapeSliderBox.querySelector(
    ".landscape-photo-box"
  );
  // console.log(activePhotoBox.photoBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgsArray = Array.from(_variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrowLocation = landscapeSliderBox.querySelector(
    "[data-forward-arrow]"
  );
  // console.log(getRightArrow.rightArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightIconLocation = landscapeSliderBox.querySelector(
    "[data-icon-forward]"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrowLocation =
    landscapeSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftIconLocation =
    landscapeSliderBox.querySelector("[data-icon-back]");

  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition =
    _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.add("picture--active");

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.thisCircleNav = landscapeSliderBox.querySelector(
    ".img-dots-container"
  );
  // console.log(circleNav.currentCircleNav);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivsArray = Array.from(
    landscapeSliderBox.getElementsByClassName("circle-icon-div")
  );
  // console.log(circleIconDivs.circleDivs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition =
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add(
    "circle-icon-div--active"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circleIconsArray = Array.from(
    landscapeSliderBox.getElementsByClassName("circle-icon")
  );
  // console.log(circleIcons.circles);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition =
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add(
    "circle-icon--active"
  );

  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}

function sliderAnimationCtrl() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener(
    "pointerdown",
    (e) => {
      if (
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon
      ) {
        sliderAnimationOff();
      }

      if (
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon
      ) {
        sliderAnimationOn();
      }
    }
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener("keydown", (e) => {
    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon)
    ) {
      sliderAnimationOff();
    }

    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon)
    ) {
      sliderAnimationOn();
    }
  });
}

function animationAccessibility() {
  console.log(_variables__WEBPACK_IMPORTED_MODULE_0__.reduceMotion);

  if (_variables__WEBPACK_IMPORTED_MODULE_0__.reduceMotion) {
    sliderAnimationOff();
  }

  if (!_variables__WEBPACK_IMPORTED_MODULE_0__.reduceMotion) {
    sliderAnimationOn();
  }
}

function sliderAnimationOn() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn.classList.add("pause-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn.classList.remove("play-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.setAttribute("aria-live", "off");
  _variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationIDValue = setInterval(slideRight, 3000);
}

function sliderAnimationOff() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn.classList.remove("pause-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn.classList.add("play-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.setAttribute("aria-live", "polite");
  clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
}

function clickCircles() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.currentCircleNav.addEventListener("pointerdown", (e) => {
    console.log(e.target);

    if (
      e.target.classList.contains("circle-icon-div") ||
      e.target.classList.contains("circle-icon")
    ) {
      // console.log(e.target.classList);
      _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = e.target.dataset.circle;

      clearActiveState();
      handleIndexes();
      addActiveState();
    }
  });

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.currentCircleNav.addEventListener("keydown", (e) => {
    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target.classList.contains("circle-icon-div") ||
        e.target.classList.contains("circle-icon-div--active"))
    ) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = e.target.dataset.circle;

      clearActiveState();
      handleIndexes();
      addActiveState();
    }
  });
}

function arrowCtrl() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox.addEventListener("pointerdown", (e) => {
    // console.log(e.target);
    if (
      e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrow ||
      e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightArrowIcon
    ) {
      console.log("right");
      slideRight();
    }
    if (
      e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrow ||
      e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftArrowIcon
    ) {
      console.log("left");
      slideLeft();
    }
  });

  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox.addEventListener("keydown", (e) => {
    if (
      ((e.key === " " || e.key === "Enter" || e.key === "ArrowRight") &&
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrow) ||
      e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightArrowIcon
    ) {
      slideRight();
    }

    if (
      (e.key === " " || e.key === "Enter" || e.key === "ArrowLeft") &&
      (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrow ||
        e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftArrowIcon)
    ) {
      slideLeft();
    }
  });
}

function handleIndexes() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex < 0) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1;
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[0];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[0];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[0];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex === 0) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles.lengh - 1];
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex > _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = 0;
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles.length - 1];
  } else {
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition =
      _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
  }
}

function slideRight() {
  clearActiveState();
  _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex++;
  handleIndexes();
  addActiveState();
}

function slideLeft() {
  clearActiveState();
  _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex--;
  handleIndexes();
  addActiveState();
}

function clearActiveState() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.remove("picture--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.classList.remove(
    "circle-icon-div--active"
  );
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.removeAttribute(
    "aria-disabled",
    "true"
  );
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition.classList.remove("circle-icon--active");
}

function addActiveState() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.add("picture--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.classList.add(
    "circle-icon-div--active"
  );
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.setAttribute(
    "aria-disabled",
    "true"
  );

  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition.classList.add("circle-icon--active");
}

function resetIndexes() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = 0;
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlide = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlide = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex + 1];
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlide = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex - 1];
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCircle = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCircle = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex + 1];
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCircle = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex - 1];
}


/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activePhotoBox: () => (/* binding */ activePhotoBox),
/* harmony export */   activeSliderBox: () => (/* binding */ activeSliderBox),
/* harmony export */   arrowDivs: () => (/* binding */ arrowDivs),
/* harmony export */   circleDivPosition: () => (/* binding */ circleDivPosition),
/* harmony export */   circleIconDivs: () => (/* binding */ circleIconDivs),
/* harmony export */   circleIcons: () => (/* binding */ circleIcons),
/* harmony export */   circleNav: () => (/* binding */ circleNav),
/* harmony export */   circlePosition: () => (/* binding */ circlePosition),
/* harmony export */   currentPage: () => (/* binding */ currentPage),
/* harmony export */   dropDownCarat: () => (/* binding */ dropDownCarat),
/* harmony export */   dropDownDiv: () => (/* binding */ dropDownDiv),
/* harmony export */   dropDownItems: () => (/* binding */ dropDownItems),
/* harmony export */   dropDownMenu: () => (/* binding */ dropDownMenu),
/* harmony export */   email: () => (/* binding */ email),
/* harmony export */   emailError: () => (/* binding */ emailError),
/* harmony export */   firstName: () => (/* binding */ firstName),
/* harmony export */   firstNameError: () => (/* binding */ firstNameError),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   formDisabledText: () => (/* binding */ formDisabledText),
/* harmony export */   formFieldset: () => (/* binding */ formFieldset),
/* harmony export */   fullPageName: () => (/* binding */ fullPageName),
/* harmony export */   galleryImgs: () => (/* binding */ galleryImgs),
/* harmony export */   galleryMainDivs: () => (/* binding */ galleryMainDivs),
/* harmony export */   getAnimationID: () => (/* binding */ getAnimationID),
/* harmony export */   getLandscapeGal: () => (/* binding */ getLandscapeGal),
/* harmony export */   getLeftArrow: () => (/* binding */ getLeftArrow),
/* harmony export */   getLeftArrowIcon: () => (/* binding */ getLeftArrowIcon),
/* harmony export */   getPortraitGal: () => (/* binding */ getPortraitGal),
/* harmony export */   getRightArrow: () => (/* binding */ getRightArrow),
/* harmony export */   getRightArrowIcon: () => (/* binding */ getRightArrowIcon),
/* harmony export */   indexOfExtension: () => (/* binding */ indexOfExtension),
/* harmony export */   inputFields: () => (/* binding */ inputFields),
/* harmony export */   lastName: () => (/* binding */ lastName),
/* harmony export */   lastNameError: () => (/* binding */ lastNameError),
/* harmony export */   menuBtnStyle: () => (/* binding */ menuBtnStyle),
/* harmony export */   menuChildrenDiv: () => (/* binding */ menuChildrenDiv),
/* harmony export */   message: () => (/* binding */ message),
/* harmony export */   messageError: () => (/* binding */ messageError),
/* harmony export */   navigation: () => (/* binding */ navigation),
/* harmony export */   photoBoxes: () => (/* binding */ photoBoxes),
/* harmony export */   reduceMotion: () => (/* binding */ reduceMotion),
/* harmony export */   setIndex: () => (/* binding */ setIndex),
/* harmony export */   shortPageName: () => (/* binding */ shortPageName),
/* harmony export */   slidePosition: () => (/* binding */ slidePosition),
/* harmony export */   sliderAnimationCtrlDiv: () => (/* binding */ sliderAnimationCtrlDiv),
/* harmony export */   sliderPauseBtn: () => (/* binding */ sliderPauseBtn),
/* harmony export */   sliderPauseIcon: () => (/* binding */ sliderPauseIcon),
/* harmony export */   sliderPlayBtn: () => (/* binding */ sliderPlayBtn),
/* harmony export */   sliderPlayIcon: () => (/* binding */ sliderPlayIcon),
/* harmony export */   submitBtn: () => (/* binding */ submitBtn),
/* harmony export */   submitError: () => (/* binding */ submitError),
/* harmony export */   textArea: () => (/* binding */ textArea),
/* harmony export */   windowHeight: () => (/* binding */ windowHeight),
/* harmony export */   windowWidth: () => (/* binding */ windowWidth)
/* harmony export */ });
// Contact Form Validation
const formDisabledText = document.querySelector(".form-disabled");
const form = document.querySelector("#contact");
const formFieldset = document.querySelector("fieldset");
const inputFields = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector(".firstNameError");
const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector(".lastNameError");
const email = document.getElementById("email");
const emailError = document.querySelector(".emailError");
const message = document.getElementById("message");
const messageError = document.querySelector(".messageError");
const submitBtn = document.querySelector(".send-contact");
const submitError = document.querySelector(".submitError");

// Accessibility
const reduceMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)") === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

// Menu Variables
const currentPage = window.location.href;
const fullPageName = currentPage.substring(
  currentPage.lastIndexOf("/") + 1
);
const indexOfExtension = fullPageName.indexOf(".");
const shortPageName = fullPageName.substring(0, indexOfExtension);

// Drop Down
const dropDownDiv = document.querySelector(".dropdown-div");
const dropDownCarat = document.querySelector(".gal-arrow");
const dropDownMenu = document.querySelector(".dropdown-content");
const navigation = document.querySelector("nav");

// Nav Styles
const menuChildrenDiv = document.querySelector(".menu-items");
const menuBtnStyle = Array.from(document.querySelectorAll(".menu-btn"));
const dropDownItems = Array.from(
  document.querySelectorAll(".dropdown-item")
);

// Window Dimensions
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

// Photo Gallery

let getPortraitGal = {
  galPortraitView: undefined,

  get portraitGalLocale() {
    return this.galPortraitView;
  },

  set portraitGalLocale(newPortraitGalLocale) {
    this.galPortraitView = newPortraitGalLocale;
  },
};

let getLandscapeGal = {
  galLandscapeView: undefined,

  get landscapeGalLocale() {
    return this.galLandscapeView;
  },

  set landscapeGalLocale(newLandscapeGalLocale) {
    this.galLandscapeView = newLandscapeGalLocale;
  },
};

let getAnimationID = {
  animationID: undefined,

  get animationIDValue() {
    return this.animationID;
  },

  set animationIDValue(newAnimationValue) {
    this.animationID = newAnimationValue;
  },
};

let sliderAnimationCtrlDiv = {
  animationCtrlDiv: undefined,

  get currentAnimationCtrlDiv() {
    return this.animationCtrlDiv;
  },

  set currentAnimationCtrlDiv(newAnimationCtrlDiv) {
    this.animationCtrlDiv = newAnimationCtrlDiv;
  },
};

let sliderPauseBtn = {
  pauseBtn: undefined,

  get currentPauseBtn() {
    return this.pauseBtn;
  },

  set currentPauseBtn(newPauseBtn) {
    this.pauseBtn = newPauseBtn;
  },
};

let sliderPauseIcon = {
  pauseIcon: undefined,

  get currentPauseIcon() {
    return this.pauseIcon;
  },

  set currentPauseIcon(newPauseIcon) {
    this.pauseIcon = newPauseIcon;
  },
};

let sliderPlayBtn = {
  playBtn: undefined,

  get currentPlayBtn() {
    return this.playBtn;
  },

  set currentPlayBtn(newPlayBtn) {
    this.playBtn = newPlayBtn;
  },
};

let sliderPlayIcon = {
  playIcon: undefined,

  get currentPlayIcon() {
    return this.playIcon;
  },

  set currentPlayIcon(newPlayIcon) {
    this.playIcon = newPlayIcon;
  },
};

const galleryMainDivs = document.querySelectorAll(".gal-main");
const arrowDivs = document.querySelectorAll(".arrow-div");
const photoBoxes = document.querySelectorAll(".photo-box");

let activeSliderBox = {
  activeBox: undefined,

  get currentActiveBox() {
    return this.activeBox;
  },

  set currentActiveBox(currentPageBox) {
    this.activeBox = currentPageBox;
  },
};

let activePhotoBox = {
  photoBox: undefined,

  get currentActivePhotoBox() {
    return this.photoBox;
  },

  set currentActivePhotoBox(currentPagePhotoBox) {
    this.photoBox = currentPagePhotoBox;
  },
};

let galleryImgs = {
  boxImgs: [],

  get boxImgsArray() {
    return this.boxImgs;
  },

  set boxImgsArray(currentBoxImgs) {
    this.boxImgs = currentBoxImgs;
  },
};

// export const circleNav = document.querySelectorAll(".img-dots-container");

const circleNav = {
  currentCircleNav: undefined,

  get thisCircleNav() {
    return this.currentCircleNav;
  },

  set thisCircleNav(getTheNav) {
    this.currentCircleNav = getTheNav;
  },
};

let circleIconDivs = {
  circleDivs: [],

  get circleDivsArray() {
    return this.circleDivs;
  },

  set circleDivsArray(newCircleDivsArray) {
    this.circleDivs = newCircleDivsArray;
  },
};

let circleIcons = {
  circles: [],

  get circleIconsArray() {
    return this.circles;
  },

  set circleIconsArray(newCirclesArray) {
    this.circles = newCirclesArray;
  },
};

const getRightArrow = {
  rightArrow: undefined,

  get rightArrowLocation() {
    return this.rightArrow;
  },

  set rightArrowLocation(newRightArrow) {
    this.rightArrow = newRightArrow;
  },
};

const getRightArrowIcon = {
  rightArrowIcon: undefined,

  get rightIconLocation() {
    return this.rightArrowIcon;
  },

  set rightIconLocation(newRightIcon) {
    this.rightArrowIcon = newRightIcon;
  },
};

const getLeftArrow = {
  leftArrow: undefined,

  get leftArrowLocation() {
    return this.leftArrow;
  },

  set leftArrowLocation(newLeftArrow) {
    this.leftArrow = newLeftArrow;
  },
};

const getLeftArrowIcon = {
  leftArrowIcon: undefined,

  get leftIconLocation() {
    return this.leftArrowIcon;
  },

  set leftIconLocation(newLeftIcon) {
    this.leftArrowIcon = newLeftIcon;
  },
};

let setIndex = {
  currentIndex: 0,

  get targetIndex() {
    return this.currentIndex;
  },

  set targetIndex(newTargetIndex) {
    this.currentIndex = newTargetIndex;
  },
};

let slidePosition = {
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

let circleDivPosition = {
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

let circlePosition = {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navStyles */ "./src/navStyles.js");
/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropDown */ "./src/dropDown.js");
/* harmony import */ var _photoSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoSlider */ "./src/photoSlider.js");
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-validation */ "./src/form-validation.js");








console.log("photogallery");

window.addEventListener("load", (e) => {
  console.log("The page is loaded");
  (0,_navStyles__WEBPACK_IMPORTED_MODULE_0__.ctrlTabHighlight)();
  (0,_dropDown__WEBPACK_IMPORTED_MODULE_1__.galleriesClickMenu)();
  (0,_photoSlider__WEBPACK_IMPORTED_MODULE_2__.gallerySetup)();
  (0,_form_validation__WEBPACK_IMPORTED_MODULE_3__.validateFormFields)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVQOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDQTtBQUNBOztBQUVBO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7VUNuWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRUM7O0FBRUg7O0FBRVU7O0FBRXZEOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDREQUFnQjtBQUNsQixFQUFFLDZEQUFrQjtBQUNwQixFQUFFLDBEQUFZO0FBQ2QsRUFBRSxvRUFBa0I7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3RvLWdhbGxlcnkvLi9zcmMvZHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vcGhvdG8tZ2FsbGVyeS8uL3NyYy9mb3JtLXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGhvdG8tZ2FsbGVyeS8uL3NyYy9uYXZTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcGhvdG8tZ2FsbGVyeS8uL3NyYy9waG90b1NsaWRlci5qcyIsIndlYnBhY2s6Ly9waG90by1nYWxsZXJ5Ly4vc3JjL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly9waG90by1nYWxsZXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bob3RvLWdhbGxlcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bob3RvLWdhbGxlcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9waG90by1nYWxsZXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGhvdG8tZ2FsbGVyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjdXJyZW50UGFnZSxcbiAgbWVudUJ0blN0eWxlLFxuICBuYXZpZ2F0aW9uLFxuICBkcm9wRG93bkNhcmF0LFxuICBkcm9wRG93bk1lbnUsXG4gIGRyb3BEb3duSXRlbXMsXG4gIHNob3J0UGFnZU5hbWUsXG59IGZyb20gXCIuL3ZhcmlhYmxlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2FsbGVyaWVzQ2xpY2tNZW51KCkge1xuICBuYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJFbnRlclwiKSAmJlxuICAgICAgKGUudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpID09PSBcImdhbGxlcmllc1wiIHx8XG4gICAgICAgIGUudGFyZ2V0ID09PSBkcm9wRG93bkNhcmF0KSAmJlxuICAgICAgIWRyb3BEb3duTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi1jb250ZW50LS1hY3RpdmVcIilcbiAgICApIHtcbiAgICAgIGFjdGl2YXRlRHJvcGRvd24oKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJFbnRlclwiKSAmJlxuICAgICAgKGUudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpID09PSBcImdhbGxlcmllc1wiIHx8XG4gICAgICAgIGUudGFyZ2V0ID09PSBkcm9wRG93bkNhcmF0KSAmJlxuICAgICAgZHJvcERvd25NZW51LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWNvbnRlbnQtLWFjdGl2ZVwiKVxuICAgICkge1xuICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICAoZS50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkgPT09IFwiZ2FsbGVyaWVzXCIgfHxcbiAgICAgICAgZS50YXJnZXQgPT09IGRyb3BEb3duQ2FyYXQpICYmXG4gICAgICAhZHJvcERvd25NZW51LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLWNvbnRlbnQtLWFjdGl2ZVwiKVxuICAgICkge1xuICAgICAgYWN0aXZhdGVEcm9wZG93bigpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoZS50YXJnZXQgPT09IGRyb3BEb3duSXRlbXMgfHwgZS50YXJnZXQgPT09IGRyb3BEb3duQ2FyYXQpICYmXG4gICAgICBkcm9wRG93bk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tY29udGVudC0tYWN0aXZlXCIpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChlLnRhcmdldC5pbm5lclRleHQudG9Mb3dlckNhc2UoKSA9PT0gXCJnYWxsZXJpZXNcIiB8fFxuICAgICAgICBlLnRhcmdldCA9PT0gZHJvcERvd25DYXJhdCkgJiZcbiAgICAgIGRyb3BEb3duTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcm9wZG93bi1jb250ZW50LS1hY3RpdmVcIilcbiAgICApIHtcbiAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgIGNoYW5nZUFjdGl2ZVN0YXRlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVEcm9wZG93bigpIHtcbiAgZHJvcERvd25DYXJhdC5jbGFzc0xpc3QuYWRkKFwiZ2FsLWFycm93LS1hY3RpdmVcIik7XG4gIGRyb3BEb3duTWVudS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGVudC0tYWN0aXZlXCIpO1xuICBkcm9wRG93bkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1pdGVtLS1hY3RpdmVcIik7XG4gIH0pO1xuXG4gIG1lbnVCdG5TdHlsZS5mb3JFYWNoKChidG4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhidG4uZGF0YXNldC5uYW1lKTtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIGlmIChidG4uZGF0YXNldC5uYW1lID09PSBcImdhbGxlcmllc1wiKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVN0YXRlKCkge1xuICBtZW51QnRuU3R5bGUuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgaWYgKGJ0bi5kYXRhc2V0Lm5hbWUgPT09IHNob3J0UGFnZU5hbWUpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcbiAgbWVudUJ0blN0eWxlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH0pO1xuICBkcm9wRG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLWNvbnRlbnQtLWFjdGl2ZVwiKTtcbiAgZHJvcERvd25DYXJhdC5jbGFzc0xpc3QucmVtb3ZlKFwiZ2FsLWFycm93LS1hY3RpdmVcIik7XG4gIGRyb3BEb3duSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLWl0ZW0tLWFjdGl2ZVwiKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQge1xuICBmb3JtRGlzYWJsZWRUZXh0LFxuICBmb3JtLFxuICBmb3JtRmllbGRzZXQsXG4gIGlucHV0RmllbGRzLFxuICB0ZXh0QXJlYSxcbiAgZmlyc3ROYW1lLFxuICBmaXJzdE5hbWVFcnJvcixcbiAgbGFzdE5hbWUsXG4gIGxhc3ROYW1lRXJyb3IsXG4gIGVtYWlsLFxuICBlbWFpbEVycm9yLFxuICBtZXNzYWdlLFxuICBtZXNzYWdlRXJyb3IsXG4gIHN1Ym1pdEJ0bixcbiAgc3VibWl0RXJyb3IsXG4gIHNob3J0UGFnZU5hbWUsXG59IGZyb20gXCIuL3ZhcmlhYmxlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtRmllbGRzKCkge1xuICBpZiAoc2hvcnRQYWdlTmFtZSA9PT0gXCJjb250YWN0XCIgJiYgZm9ybUZpZWxkc2V0LmRpc2FibGVkKSB7XG4gICAgZm9ybURpc2FibGVkVGV4dC5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG5cbiAgICBpbnB1dEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZWRmMGYwXCI7XG4gICAgICBmaWVsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICB0ZXh0QXJlYS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZGYwZjBcIjtcbiAgICB0ZXh0QXJlYS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgICBzdWJtaXRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZWRmMGYwXCI7XG4gICAgc3VibWl0QnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIGlmIChzaG9ydFBhZ2VOYW1lID09PSBcImNvbnRhY3RcIiAmJiAhZm9ybUZpZWxkc2V0LmRpc2FibGVkKSB7XG4gICAgdmFsaWRhdGVGaXJzdE5hbWVJbnB1dCgpO1xuICAgIHZhbGlkYXRlTGFzdE5hbWVJbnB1dCgpO1xuICAgIHZhbGlkYXRlRW1haWxJbnB1dCgpO1xuICAgIHZhbGlkYXRlTWVzc2FnZUlucHV0KCk7XG4gICAgdmFsaWRhdGVPblN1Ym1pdCgpO1xuICB9XG59XG5cbi8vIEZpcnN0IE5hbWUgVmFsaWRhdGlvblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpcnN0TmFtZUlucHV0KCkge1xuICBmaXJzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcbiAgICBpZiAoZmlyc3ROYW1lLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBmaXJzdE5hbWVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBmaXJzdE5hbWVFcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIGZpcnN0TmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiZmlyc3ROYW1lLS1pbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93Rmlyc3ROYW1lRXJyb3IoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93Rmlyc3ROYW1lRXJyb3IoKSB7XG4gIGlmIChmaXJzdE5hbWUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgZmlyc3ROYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIHlvdXIgZmlyc3QgbmFtZS5cIjtcbiAgICBmaXJzdE5hbWVFcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgZmlyc3ROYW1lRXJyb3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwiZmlyc3ROYW1lRXJyb3JcIik7XG4gICAgZmlyc3ROYW1lRXJyb3IuZm9jdXMoKTtcbiAgICBmaXJzdE5hbWUuY2xhc3NMaXN0LmFkZChcImZpcnN0TmFtZS0taW52YWxpZFwiKTtcbiAgfSBlbHNlIGlmIChmaXJzdE5hbWUudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgZmlyc3ROYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIkVudGVyZWQgdmFsdWUgbmVlZHMgdG8gYmUgYSBuYW1lLlwiO1xuICAgIGZpcnN0TmFtZUVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBmaXJzdE5hbWVFcnJvci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJmaXJzdE5hbWVFcnJvclwiKTtcbiAgICBmaXJzdE5hbWVFcnJvci5mb2N1cygpO1xuICAgIGZpcnN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiZmlyc3ROYW1lLS1pbnZhbGlkXCIpO1xuICB9XG59XG5cbi8vIExhc3QgTmFtZSBWYWxpZGF0aW9uXG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGFzdE5hbWVJbnB1dCgpIHtcbiAgbGFzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcbiAgICBpZiAobGFzdE5hbWUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGxhc3ROYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgbGFzdE5hbWVFcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgIGxhc3ROYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXN0TmFtZS0taW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0xhc3ROYW1lRXJyb3IoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93TGFzdE5hbWVFcnJvcigpIHtcbiAgaWYgKGxhc3ROYW1lLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGxhc3ROYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIHlvdXIgbGFzdCBuYW1lLlwiO1xuICAgIGxhc3ROYW1lRXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGxhc3ROYW1lRXJyb3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwibGFzdE5hbWVFcnJvclwiKTtcbiAgICBsYXN0TmFtZUVycm9yLmZvY3VzKCk7XG4gICAgbGFzdE5hbWUuY2xhc3NMaXN0LmFkZChcImxhc3ROYW1lLS1pbnZhbGlkXCIpO1xuICB9IGVsc2UgaWYgKGxhc3ROYW1lLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgIGxhc3ROYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIkVudGVyZWQgdmFsdWUgbmVlZHMgdG8gYmUgYSBuYW1lLlwiO1xuICAgIGxhc3ROYW1lRXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGxhc3ROYW1lRXJyb3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwibGFzdE5hbWVFcnJvclwiKTtcbiAgICBsYXN0TmFtZUVycm9yLmZvY3VzKCk7XG4gICAgbGFzdE5hbWUuY2xhc3NMaXN0LmFkZChcImxhc3ROYW1lLS1pbnZhbGlkXCIpO1xuICB9XG59XG5cbi8vIEVtYWlsIFZhbGlkYXRpb25cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbElucHV0KCkge1xuICBlbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgIGlmIChlbWFpbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBlbWFpbEVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgZW1haWwuY2xhc3NMaXN0LnJlbW92ZShcImVtYWlsRmllbGQtLWludmFsaWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dFbWFpbEVycm9yKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0VtYWlsRXJyb3IoKSB7XG4gIGlmIChlbWFpbC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID1cbiAgICAgIFwiRW1haWwgYWRkcmVzcyBtdXN0IGJlIGluIHN0YW5kYXJkIGZvcm1hdDogeW91ci1lbWFpbEBlbWFpbC5jb20uXCI7XG4gICAgZW1haWxFcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgZW1haWxFcnJvci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJlbWFpbEVycm9yXCIpO1xuICAgIGVtYWlsRXJyb3IuZm9jdXMoKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiZW1haWxGaWVsZC0taW52YWxpZFwiKTtcbiAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID1cbiAgICAgIFwiRW1haWwgYWRkcmVzcyBtdXN0IGJlIGluIHN0YW5kYXJkIGZvcm1hdDogeW91ci1lbWFpbEBlbWFpbC5jb20uXCI7XG4gICAgZW1haWxFcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgZW1haWxFcnJvci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJlbWFpbEVycm9yXCIpO1xuICAgIGVtYWlsRXJyb3IuZm9jdXMoKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiZW1haWxGaWVsZC0taW52YWxpZFwiKTtcbiAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBgRW1haWwgc2hvdWxkIGJlIGF0IGxlYXN0ICR7ZW1haWwubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke2VtYWlsLnZhbHVlLmxlbmd0aH0uYDtcbiAgICBlbWFpbEVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBlbWFpbEVycm9yLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCBcImVtYWlsRXJyb3JcIik7XG4gICAgZW1haWxFcnJvci5mb2N1cygpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJlbWFpbEZpZWxkLS1pbnZhbGlkXCIpO1xuICB9XG59XG5cbi8vIE1lc3NhZ2UgVmFsaWRhdGlvblxuXG5mdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2VJbnB1dCgpIHtcbiAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBtZXNzYWdlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgbWVzc2FnZUVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwibWVzc2FnZUZpZWxkLS1pbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93TWVzc2FnZUVycm9yKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd01lc3NhZ2VFcnJvcigpIHtcbiAgaWYgKG1lc3NhZ2UudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgbWVzc2FnZUVycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbXVzdCBlbnRlciBhIG1lc3NhZ2UgdG8gc3VibWl0IHRoaXMgZm9ybS5cIjtcbiAgICBtZXNzYWdlRXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIG1lc3NhZ2VFcnJvci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJtZXNzYWdlRXJyb3JcIik7XG4gICAgbWVzc2FnZUVycm9yLmZvY3VzKCk7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZUZpZWxkLS1pbnZhbGlkXCIpO1xuICB9IGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgIG1lc3NhZ2VFcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG11c3QgZW50ZXIgYSBtZXNzYWdlIHRvIHN1Ym1pdCB0aGlzIGZvcm0uXCI7XG4gICAgbWVzc2FnZUVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgIG1lc3NhZ2VFcnJvci50ZXh0Q29udGVudCA9IGBNZXNzYWdlIHNob3VsZCBiZSBhdCBsZWFzdCAke21lc3NhZ2UubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke21lc3NhZ2UudmFsdWUubGVuZ3RofS5gO1xuICAgIG1lc3NhZ2VFcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgbWVzc2FnZUVycm9yLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCBcIm1lc3NhZ2VFcnJvclwiKTtcbiAgICBtZXNzYWdlRXJyb3IuZm9jdXMoKTtcbiAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlRmllbGQtLWludmFsaWRcIik7XG4gIH1cbn1cblxuLy8gQWxsIEZpbGVkcyBTdWJtaXQgVmFsaWRhdGlvblxuXG5mdW5jdGlvbiB2YWxpZGF0ZU9uU3VibWl0KCkge1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICAhZmlyc3ROYW1lLnZhbGlkaXR5LnZhbGlkIHx8XG4gICAgICAhbGFzdE5hbWUudmFsaWRpdHkudmFsaWQgfHxcbiAgICAgICFlbWFpbC52YWxpZGl0eS52YWxpZCB8fFxuICAgICAgIW1lc3NhZ2UudmFsaWRpdHkudmFsaWRcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIHNob3dGaXJzdE5hbWVFcnJvcigpO1xuICAgICAgLy8gc2hvd0xhc3ROYW1lRXJyb3IoKTtcbiAgICAgIC8vIHNob3dFbWFpbEVycm9yKCk7XG4gICAgICAvLyBzaG93TWVzc2FnZUVycm9yKCk7XG5cbiAgICAgIHN1Ym1pdEVycm9yLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJUaGlzIGZvcm0gY2Fubm90IGJlIHN1Ym1pdHRlZCB3aXRoIGVycm9ycy4gUGxlYXNlIHJldmlldyBhbGwgdGV4dCBmaWVsZHNcIjtcbiAgICAgIHN1Ym1pdEVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIHN1Ym1pdEVycm9yLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCBcInN1Ym1pdEVycm9yXCIpO1xuICAgICAgc3VibWl0RXJyb3IuZm9jdXMoKTtcbiAgICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwic3VibWl0RmllbGQtLWludmFsaWRcIik7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIHNob3J0UGFnZU5hbWUsXG4gIG1lbnVCdG5TdHlsZSxcbiAgZHJvcERvd25EaXYsXG4gIGRyb3BEb3duSXRlbXMsXG59IGZyb20gXCIuL3ZhcmlhYmxlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3RybFRhYkhpZ2hsaWdodCgpIHtcbiAgbWVudUJ0blN0eWxlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChidG4uZGF0YXNldC5uYW1lID09PSBzaG9ydFBhZ2VOYW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhidG4uZGF0YXNldC5uYW1lKTtcbiAgICAgIG1lbnVCdG5TdHlsZS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH0pO1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd0N1cnJlbnROYXZMaW5rKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDdXJyZW50TmF2TGluaygpIHtcbiAgbWVudUJ0blN0eWxlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGlmIChzaG9ydFBhZ2VOYW1lID09PSBidG4uZGF0YXNldC5uYW1lKSB7XG4gICAgICBtZW51QnRuU3R5bGUuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICB9KTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHNob3J0UGFnZU5hbWUgPT09IFwiYmlyZHMtZ2FsbGVyeVwiIHx8XG4gICAgICBzaG9ydFBhZ2VOYW1lID09PSBcImluc2VjdHMtZ2FsbGVyeVwiIHx8XG4gICAgICBzaG9ydFBhZ2VOYW1lID09PSBcInNtYWxsLWFuaW1hbHMtZ2FsbGVyeVwiXG4gICAgKSB7XG4gICAgICBzaG93R2FsTmF2TGluaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dHYWxOYXZMaW5rKCkge1xuICBkcm9wRG93bkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoXG4gICAgICBpdGVtLmRhdGFzZXQubmFtZSA9PT0gXCJiaXJkcy1nYWxsZXJ5XCIgfHxcbiAgICAgIGl0ZW0uZGF0YXNldC5uYW1lID09PSBcImluc2VjdHMtZ2FsbGVyeVwiIHx8XG4gICAgICBpdGVtLmRhdGFzZXQubmFtZSA9PT0gXCJzbWFsbC1hbmltYWxzLWdhbGxlcnlcIlxuICAgICkge1xuICAgICAgbWVudUJ0blN0eWxlLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgfSk7XG4gICAgICBkcm9wRG93bkRpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIHdpbmRvd0hlaWdodCxcbiAgd2luZG93V2lkdGgsXG4gIGdldFBvcnRyYWl0R2FsLFxuICBnZXRMYW5kc2NhcGVHYWwsXG4gIGdhbGxlcnlNYWluRGl2cyxcbiAgcmVkdWNlTW90aW9uLFxuICBzaG9ydFBhZ2VOYW1lLFxuICBnZXRBbmltYXRpb25JRCxcbiAgc2xpZGVyQW5pbWF0aW9uQ3RybERpdixcbiAgc2xpZGVyUGF1c2VCdG4sXG4gIHNsaWRlclBsYXlCdG4sXG4gIHNsaWRlclBhdXNlSWNvbixcbiAgc2xpZGVyUGxheUljb24sXG4gIGFjdGl2ZVNsaWRlckJveCxcbiAgYWN0aXZlUGhvdG9Cb3gsXG4gIGdhbGxlcnlJbWdzLFxuICBjaXJjbGVOYXYsXG4gIGNpcmNsZUljb25EaXZzLFxuICBjaXJjbGVJY29ucyxcbiAgZ2V0UmlnaHRBcnJvdyxcbiAgZ2V0UmlnaHRBcnJvd0ljb24sXG4gIGdldExlZnRBcnJvdyxcbiAgZ2V0TGVmdEFycm93SWNvbixcbiAgc2V0SW5kZXgsXG4gIHNsaWRlUG9zaXRpb24sXG4gIGNpcmNsZURpdlBvc2l0aW9uLFxuICBjaXJjbGVQb3NpdGlvbixcbn0gZnJvbSBcIi4vdmFyaWFibGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnYWxsZXJ5U2V0dXAoKSB7XG4gIGdhbGxlcnlNYWluRGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICBpZiAoZGl2LmRhdGFzZXQubmFtZSA9PT0gc2hvcnRQYWdlTmFtZSkge1xuICAgICAgLy8gZ2V0TWFpbkRpdi5tYWluRGl2TG9jYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgLy8gLy8gY29uc29sZS5sb2coZ2V0TWFpbkRpdi5tYWluRGl2KTtcbiAgICAgIC8vIGxldCBnYWxsZXJ5TWFpbiA9IGdldE1haW5EaXYubWFpbkRpdjtcblxuICAgICAgZ2V0UG9ydHJhaXRHYWwucG9ydHJhaXRHYWxMb2NhbGUgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbC1wb3J0cmFpdFwiKTtcblxuICAgICAgZ2V0TGFuZHNjYXBlR2FsLmxhbmRzY2FwZUdhbExvY2FsZSA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsLWxhbmRzY2FwZVwiKTtcblxuICAgICAgaWYgKHdpbmRvd0hlaWdodCA8IHdpbmRvd1dpZHRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFuZHNjYXBlXCIpO1xuICAgICAgICBzZXR1cExhbmRzY2FwZUdhbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwb3J0cmFpdFwiKTtcbiAgICAgICAgc2V0dXBQb3J0cmFpdEdhbCgpO1xuICAgICAgfVxuXG4gICAgICBjaGVja1BhZ2VPcmllbnRhdGlvbigpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUGFnZU9yaWVudGF0aW9uKCkge1xuICBjb25zdCBsYW5kc2NhcGUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKTtcbiAgY29uc29sZS5sb2cobGFuZHNjYXBlKTtcblxuICBsYW5kc2NhcGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLm1hdGNoZXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibGFuZHNjYXBlXCIpO1xuICAgICAgY2xlYXJJbnRlcnZhbChnZXRBbmltYXRpb25JRC5hbmltYXRpb25JRCk7XG4gICAgICBjbGVhckFjdGl2ZVN0YXRlKCk7XG4gICAgICByZXNldEluZGV4ZXMoKTtcbiAgICAgIHNldHVwTGFuZHNjYXBlR2FsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicG9ydHJhaXRcIik7XG4gICAgICBjbGVhckludGVydmFsKGdldEFuaW1hdGlvbklELmFuaW1hdGlvbklEKTtcbiAgICAgIGNsZWFyQWN0aXZlU3RhdGUoKTtcbiAgICAgIHJlc2V0SW5kZXhlcygpO1xuICAgICAgc2V0dXBQb3J0cmFpdEdhbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldHVwUG9ydHJhaXRHYWwoKSB7XG4gIGdldExhbmRzY2FwZUdhbC5nYWxMYW5kc2NhcGVWaWV3LmhpZGRlbiA9IHRydWU7XG4gIGdldFBvcnRyYWl0R2FsLmdhbFBvcnRyYWl0Vmlldy5oaWRkZW4gPSBmYWxzZTtcbiAgcG9ydHJhaXRTbGlkZXJCb3hDdHJsKCk7XG4gIGNvbnNvbGUubG9nKFwiR2FsbGVyeSBQb3J0cmFpdCBNb2RlXCIpO1xufVxuXG5mdW5jdGlvbiBzZXR1cExhbmRzY2FwZUdhbCgpIHtcbiAgZ2V0TGFuZHNjYXBlR2FsLmdhbExhbmRzY2FwZVZpZXcuaGlkZGVuID0gZmFsc2U7XG4gIGdldFBvcnRyYWl0R2FsLmdhbFBvcnRyYWl0Vmlldy5oaWRkZW4gPSB0cnVlO1xuICBsYW5kc2NhcGVTbGlkZXJCb3hDdHJsKCk7XG4gIGNvbnNvbGUubG9nKFwiR2FsbGVyeSBMYW5kc2NhcGUgTW9kZVwiKTtcbn1cblxuZnVuY3Rpb24gcG9ydHJhaXRTbGlkZXJCb3hDdHJsKCkge1xuICBjb25zdCBjdXJyZW50R2FsbGVyeSA9IGdldFBvcnRyYWl0R2FsLmdhbFBvcnRyYWl0VmlldztcbiAgLy8gIGNvbnNvbGUubG9nKGN1cnJlbnRHYWxsZXJ5KTtcblxuICBzbGlkZXJBbmltYXRpb25DdHJsRGl2LmN1cnJlbnRBbmltYXRpb25DdHJsRGl2ID0gY3VycmVudEdhbGxlcnkucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wb3J0cmFpdC1hbmltYXRpb24tY3RybC1kaXZcIlxuICApO1xuICAvLyBjb25zb2xlLmxvZyhzbGlkZXJBbmltYXRpb25DdHJsRGl2LmFuaW1hdGlvbkN0cmxEaXYpO1xuXG4gIHNsaWRlclBhdXNlQnRuLmN1cnJlbnRQYXVzZUJ0biA9IGN1cnJlbnRHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucG9ydHJhaXQtcGF1c2UtYnRuXCJcbiAgKTtcbiAgc2xpZGVyUGF1c2VJY29uLmN1cnJlbnRQYXVzZUljb24gPSBjdXJyZW50R2FsbGVyeS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnBvcnRyYWl0LXBhdXNlLWljb25cIlxuICApO1xuXG4gIHNsaWRlclBsYXlCdG4uY3VycmVudFBsYXlCdG4gPVxuICAgIGN1cnJlbnRHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoXCIucG9ydHJhaXQtcGxheS1idG5cIik7XG4gIHNsaWRlclBsYXlJY29uLmN1cnJlbnRQbGF5SWNvbiA9IGN1cnJlbnRHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucG9ydHJhaXQtcGxheS1pY29uXCJcbiAgKTtcblxuICBhY3RpdmVTbGlkZXJCb3guY3VycmVudEFjdGl2ZUJveCA9IGN1cnJlbnRHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucG9ydHJhaXQtc2xpZGVyLWJveFwiXG4gICk7XG4gIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVNsaWRlckJveC5hY3RpdmVCb3gpO1xuXG4gIGNvbnN0IHBvcnRyYWl0U2xpZGVyQm94ID0gYWN0aXZlU2xpZGVyQm94LmFjdGl2ZUJveDtcbiAgLy8gY29uc29sZS5sb2codGhpc1NsaWRlckJveCk7XG5cbiAgYWN0aXZlUGhvdG9Cb3guY3VycmVudEFjdGl2ZVBob3RvQm94ID0gcG9ydHJhaXRTbGlkZXJCb3gucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wb3J0cmFpdC1waG90by1ib3hcIlxuICApO1xuICAvLyBjb25zb2xlLmxvZyhhY3RpdmVQaG90b0JveC5waG90b0JveCk7XG5cbiAgZ2FsbGVyeUltZ3MuYm94SW1nc0FycmF5ID0gQXJyYXkuZnJvbShhY3RpdmVQaG90b0JveC5waG90b0JveC5jaGlsZHJlbik7XG4gIC8vIGNvbnNvbGUubG9nKGdhbGxlcnlJbWdzLmJveEltZ3MpO1xuXG4gIGdldFJpZ2h0QXJyb3cucmlnaHRBcnJvd0xvY2F0aW9uID0gcG9ydHJhaXRTbGlkZXJCb3gucXVlcnlTZWxlY3RvcihcbiAgICBcIltkYXRhLWZvcndhcmQtYXJyb3ddXCJcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coZ2V0UmlnaHRBcnJvdy5yaWdodEFycm93KTtcblxuICBnZXRSaWdodEFycm93SWNvbi5yaWdodEljb25Mb2NhdGlvbiA9IHBvcnRyYWl0U2xpZGVyQm94LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1pY29uLWZvcndhcmRdXCJcbiAgKTtcblxuICBnZXRMZWZ0QXJyb3cubGVmdEFycm93TG9jYXRpb24gPVxuICAgIHBvcnRyYWl0U2xpZGVyQm94LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1iYWNrLWFycm93XVwiKTtcbiAgLy8gY29uc29sZS5sb2coZ2V0TGVmdEFycm93LmxlZnRBcnJvdyk7XG5cbiAgZ2V0TGVmdEFycm93SWNvbi5sZWZ0SWNvbkxvY2F0aW9uID1cbiAgICBwb3J0cmFpdFNsaWRlckJveC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaWNvbi1iYWNrXVwiKTtcblxuICBzbGlkZVBvc2l0aW9uLmN1cnJlbnRTbGlkZVBvc2l0aW9uID1cbiAgICBnYWxsZXJ5SW1ncy5ib3hJbWdzW3NldEluZGV4LmN1cnJlbnRJbmRleF07XG4gIC8vIGNvbnNvbGUubG9nKHNsaWRlUG9zaXRpb24uY3VycmVudFNsaWRlUG9zaXRpb24pO1xuICBzbGlkZVBvc2l0aW9uLmN1cnJlbnRTbGlkZVBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlLS1hY3RpdmVcIik7XG5cbiAgY2lyY2xlTmF2LnRoaXNDaXJjbGVOYXYgPSBwb3J0cmFpdFNsaWRlckJveC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmltZy1kb3RzLWNvbnRhaW5lclwiXG4gICk7XG4gIC8vIGNvbnNvbGUubG9nKGNpcmNsZU5hdi5jdXJyZW50Q2lyY2xlTmF2KTtcblxuICBjaXJjbGVJY29uRGl2cy5jaXJjbGVEaXZzQXJyYXkgPSBBcnJheS5mcm9tKFxuICAgIHBvcnRyYWl0U2xpZGVyQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGUtaWNvbi1kaXZcIilcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coY2lyY2xlSWNvbkRpdnMuY2lyY2xlRGl2cyk7XG5cbiAgY2lyY2xlRGl2UG9zaXRpb24uY3VycmVudENpcmNsZURpdlBvc2l0aW9uID1cbiAgICBjaXJjbGVJY29uRGl2cy5jaXJjbGVEaXZzW3NldEluZGV4LmN1cnJlbnRJbmRleF07XG4gIC8vIGNvbnNvbGUubG9nKGNpcmNsZURpdlBvc2l0aW9uLmN1cnJlbnRDaXJjbGVEaXZQb3NpdGlvbik7XG4gIGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbc2V0SW5kZXguY3VycmVudEluZGV4XS5jbGFzc0xpc3QuYWRkKFxuICAgIFwiY2lyY2xlLWljb24tZGl2LS1hY3RpdmVcIlxuICApO1xuXG4gIGNpcmNsZUljb25zLmNpcmNsZUljb25zQXJyYXkgPSBBcnJheS5mcm9tKFxuICAgIHBvcnRyYWl0U2xpZGVyQm94LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaXJjbGUtaWNvblwiKVxuICApO1xuICAvLyBjb25zb2xlLmxvZyhjaXJjbGVJY29ucy5jaXJjbGVzKTtcblxuICBjaXJjbGVQb3NpdGlvbi5jdXJyZW50Q2lyY2xlUG9zaXRpb24gPVxuICAgIGNpcmNsZUljb25zLmNpcmNsZXNbc2V0SW5kZXguY3VycmVudEluZGV4XTtcbiAgLy8gY29uc29sZS5sb2coY2lyY2xlUG9zaXRpb24uY3VycmVudENpcmNsZVBvc2l0aW9uKTtcbiAgY2lyY2xlSWNvbnMuY2lyY2xlc1tzZXRJbmRleC5jdXJyZW50SW5kZXhdLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJjaXJjbGUtaWNvbi0tYWN0aXZlXCJcbiAgKTtcblxuICBhbmltYXRpb25BY2Nlc3NpYmlsaXR5KCk7XG4gIHNsaWRlckFuaW1hdGlvbkN0cmwoKTtcbiAgY2xpY2tDaXJjbGVzKCk7XG4gIGFycm93Q3RybCgpO1xufVxuXG5mdW5jdGlvbiBsYW5kc2NhcGVTbGlkZXJCb3hDdHJsKCkge1xuICBjb25zdCBjdXJyZW50R2FsbGVyeSA9IGdldExhbmRzY2FwZUdhbC5nYWxMYW5kc2NhcGVWaWV3O1xuICAvLyAgY29uc29sZS5sb2coY3VycmVudEdhbGxlcnkpO1xuXG4gIHNsaWRlckFuaW1hdGlvbkN0cmxEaXYuY3VycmVudEFuaW1hdGlvbkN0cmxEaXYgPSBjdXJyZW50R2FsbGVyeS5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmxhbmRzY2FwZS1hbmltYXRpb24tY3RybC1kaXZcIlxuICApO1xuICAvLyBjb25zb2xlLmxvZyhzbGlkZXJBbmltYXRpb25DdHJsRGl2LmFuaW1hdGlvbkN0cmxEaXYpO1xuXG4gIHNsaWRlclBhdXNlQnRuLmN1cnJlbnRQYXVzZUJ0biA9IGN1cnJlbnRHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubGFuZHNjYXBlLXBhdXNlLWJ0blwiXG4gICk7XG4gIHNsaWRlclBhdXNlSWNvbi5jdXJyZW50UGF1c2VJY29uID0gY3VycmVudEdhbGxlcnkucXVlcnlTZWxlY3RvcihcbiAgICBcIi5sYW5kc2NhcGUtcGF1c2UtaWNvblwiXG4gICk7XG5cbiAgc2xpZGVyUGxheUJ0bi5jdXJyZW50UGxheUJ0biA9IGN1cnJlbnRHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubGFuZHNjYXBlLXBsYXktYnRuXCJcbiAgKTtcbiAgc2xpZGVyUGxheUljb24uY3VycmVudFBsYXlJY29uID0gY3VycmVudEdhbGxlcnkucXVlcnlTZWxlY3RvcihcbiAgICBcIi5sYW5kc2NhcGUtcGxheS1pY29uXCJcbiAgKTtcblxuICBhY3RpdmVTbGlkZXJCb3guY3VycmVudEFjdGl2ZUJveCA9IGN1cnJlbnRHYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubGFuZHNjYXBlLXNsaWRlci1ib3hcIlxuICApO1xuICAvLyBjb25zb2xlLmxvZyhhY3RpdmVTbGlkZXJCb3guYWN0aXZlQm94KTtcblxuICBjb25zdCBsYW5kc2NhcGVTbGlkZXJCb3ggPSBhY3RpdmVTbGlkZXJCb3guYWN0aXZlQm94O1xuICAvLyBjb25zb2xlLmxvZyh0aGlzU2xpZGVyQm94KTtcblxuICBhY3RpdmVQaG90b0JveC5jdXJyZW50QWN0aXZlUGhvdG9Cb3ggPSBsYW5kc2NhcGVTbGlkZXJCb3gucXVlcnlTZWxlY3RvcihcbiAgICBcIi5sYW5kc2NhcGUtcGhvdG8tYm94XCJcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coYWN0aXZlUGhvdG9Cb3gucGhvdG9Cb3gpO1xuXG4gIGdhbGxlcnlJbWdzLmJveEltZ3NBcnJheSA9IEFycmF5LmZyb20oYWN0aXZlUGhvdG9Cb3gucGhvdG9Cb3guY2hpbGRyZW4pO1xuICAvLyBjb25zb2xlLmxvZyhnYWxsZXJ5SW1ncy5ib3hJbWdzKTtcblxuICBnZXRSaWdodEFycm93LnJpZ2h0QXJyb3dMb2NhdGlvbiA9IGxhbmRzY2FwZVNsaWRlckJveC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiW2RhdGEtZm9yd2FyZC1hcnJvd11cIlxuICApO1xuICAvLyBjb25zb2xlLmxvZyhnZXRSaWdodEFycm93LnJpZ2h0QXJyb3cpO1xuXG4gIGdldFJpZ2h0QXJyb3dJY29uLnJpZ2h0SWNvbkxvY2F0aW9uID0gbGFuZHNjYXBlU2xpZGVyQm94LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJbZGF0YS1pY29uLWZvcndhcmRdXCJcbiAgKTtcblxuICBnZXRMZWZ0QXJyb3cubGVmdEFycm93TG9jYXRpb24gPVxuICAgIGxhbmRzY2FwZVNsaWRlckJveC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYmFjay1hcnJvd11cIik7XG4gIC8vIGNvbnNvbGUubG9nKGdldExlZnRBcnJvdy5sZWZ0QXJyb3cpO1xuXG4gIGdldExlZnRBcnJvd0ljb24ubGVmdEljb25Mb2NhdGlvbiA9XG4gICAgbGFuZHNjYXBlU2xpZGVyQm94LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pY29uLWJhY2tdXCIpO1xuXG4gIHNsaWRlUG9zaXRpb24uY3VycmVudFNsaWRlUG9zaXRpb24gPVxuICAgIGdhbGxlcnlJbWdzLmJveEltZ3Nbc2V0SW5kZXguY3VycmVudEluZGV4XTtcbiAgLy8gY29uc29sZS5sb2coc2xpZGVQb3NpdGlvbi5jdXJyZW50U2xpZGVQb3NpdGlvbik7XG4gIHNsaWRlUG9zaXRpb24uY3VycmVudFNsaWRlUG9zaXRpb24uY2xhc3NMaXN0LmFkZChcInBpY3R1cmUtLWFjdGl2ZVwiKTtcblxuICBjaXJjbGVOYXYudGhpc0NpcmNsZU5hdiA9IGxhbmRzY2FwZVNsaWRlckJveC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmltZy1kb3RzLWNvbnRhaW5lclwiXG4gICk7XG4gIC8vIGNvbnNvbGUubG9nKGNpcmNsZU5hdi5jdXJyZW50Q2lyY2xlTmF2KTtcblxuICBjaXJjbGVJY29uRGl2cy5jaXJjbGVEaXZzQXJyYXkgPSBBcnJheS5mcm9tKFxuICAgIGxhbmRzY2FwZVNsaWRlckJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2lyY2xlLWljb24tZGl2XCIpXG4gICk7XG4gIC8vIGNvbnNvbGUubG9nKGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnMpO1xuXG4gIGNpcmNsZURpdlBvc2l0aW9uLmN1cnJlbnRDaXJjbGVEaXZQb3NpdGlvbiA9XG4gICAgY2lyY2xlSWNvbkRpdnMuY2lyY2xlRGl2c1tzZXRJbmRleC5jdXJyZW50SW5kZXhdO1xuICAvLyBjb25zb2xlLmxvZyhjaXJjbGVEaXZQb3NpdGlvbi5jdXJyZW50Q2lyY2xlRGl2UG9zaXRpb24pO1xuICBjaXJjbGVJY29uRGl2cy5jaXJjbGVEaXZzW3NldEluZGV4LmN1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZChcbiAgICBcImNpcmNsZS1pY29uLWRpdi0tYWN0aXZlXCJcbiAgKTtcblxuICBjaXJjbGVJY29ucy5jaXJjbGVJY29uc0FycmF5ID0gQXJyYXkuZnJvbShcbiAgICBsYW5kc2NhcGVTbGlkZXJCb3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNpcmNsZS1pY29uXCIpXG4gICk7XG4gIC8vIGNvbnNvbGUubG9nKGNpcmNsZUljb25zLmNpcmNsZXMpO1xuXG4gIGNpcmNsZVBvc2l0aW9uLmN1cnJlbnRDaXJjbGVQb3NpdGlvbiA9XG4gICAgY2lyY2xlSWNvbnMuY2lyY2xlc1tzZXRJbmRleC5jdXJyZW50SW5kZXhdO1xuICAvLyBjb25zb2xlLmxvZyhjaXJjbGVQb3NpdGlvbi5jdXJyZW50Q2lyY2xlUG9zaXRpb24pO1xuICBjaXJjbGVJY29ucy5jaXJjbGVzW3NldEluZGV4LmN1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZChcbiAgICBcImNpcmNsZS1pY29uLS1hY3RpdmVcIlxuICApO1xuXG4gIGFuaW1hdGlvbkFjY2Vzc2liaWxpdHkoKTtcbiAgc2xpZGVyQW5pbWF0aW9uQ3RybCgpO1xuICBjbGlja0NpcmNsZXMoKTtcbiAgYXJyb3dDdHJsKCk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlckFuaW1hdGlvbkN0cmwoKSB7XG4gIHNsaWRlckFuaW1hdGlvbkN0cmxEaXYuYW5pbWF0aW9uQ3RybERpdi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwicG9pbnRlcmRvd25cIixcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldCA9PT0gc2xpZGVyUGF1c2VCdG4uY3VycmVudFBhdXNlQnRuIHx8XG4gICAgICAgIGUudGFyZ2V0ID09PSBzbGlkZXJQYXVzZUljb24uY3VycmVudFBhdXNlSWNvblxuICAgICAgKSB7XG4gICAgICAgIHNsaWRlckFuaW1hdGlvbk9mZigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0ID09PSBzbGlkZXJQbGF5QnRuLmN1cnJlbnRQbGF5QnRuIHx8XG4gICAgICAgIGUudGFyZ2V0ID09PSBzbGlkZXJQbGF5SWNvbi5jdXJyZW50UGxheUljb25cbiAgICAgICkge1xuICAgICAgICBzbGlkZXJBbmltYXRpb25PbigpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcblxuICBzbGlkZXJBbmltYXRpb25DdHJsRGl2LmFuaW1hdGlvbkN0cmxEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICAoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcIkVudGVyXCIpICYmXG4gICAgICAoZS50YXJnZXQgPT09IHNsaWRlclBhdXNlQnRuLmN1cnJlbnRQYXVzZUJ0biB8fFxuICAgICAgICBlLnRhcmdldCA9PT0gc2xpZGVyUGF1c2VJY29uLmN1cnJlbnRQYXVzZUljb24pXG4gICAgKSB7XG4gICAgICBzbGlkZXJBbmltYXRpb25PZmYoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoZS5rZXkgPT09IFwiIFwiIHx8IGUua2V5ID09PSBcIkVudGVyXCIpICYmXG4gICAgICAoZS50YXJnZXQgPT09IHNsaWRlclBsYXlCdG4uY3VycmVudFBsYXlCdG4gfHxcbiAgICAgICAgZS50YXJnZXQgPT09IHNsaWRlclBsYXlJY29uLmN1cnJlbnRQbGF5SWNvbilcbiAgICApIHtcbiAgICAgIHNsaWRlckFuaW1hdGlvbk9uKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uQWNjZXNzaWJpbGl0eSgpIHtcbiAgY29uc29sZS5sb2cocmVkdWNlTW90aW9uKTtcblxuICBpZiAocmVkdWNlTW90aW9uKSB7XG4gICAgc2xpZGVyQW5pbWF0aW9uT2ZmKCk7XG4gIH1cblxuICBpZiAoIXJlZHVjZU1vdGlvbikge1xuICAgIHNsaWRlckFuaW1hdGlvbk9uKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2xpZGVyQW5pbWF0aW9uT24oKSB7XG4gIHNsaWRlclBhdXNlQnRuLmN1cnJlbnRQYXVzZUJ0bi5jbGFzc0xpc3QuYWRkKFwicGF1c2UtYnRuLS1hY3RpdmVcIik7XG4gIHNsaWRlclBsYXlCdG4uY3VycmVudFBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZShcInBsYXktYnRuLS1hY3RpdmVcIik7XG4gIGFjdGl2ZVBob3RvQm94LnBob3RvQm94LnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBcIm9mZlwiKTtcbiAgZ2V0QW5pbWF0aW9uSUQuYW5pbWF0aW9uSURWYWx1ZSA9IHNldEludGVydmFsKHNsaWRlUmlnaHQsIDMwMDApO1xufVxuXG5mdW5jdGlvbiBzbGlkZXJBbmltYXRpb25PZmYoKSB7XG4gIHNsaWRlclBhdXNlQnRuLmN1cnJlbnRQYXVzZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwicGF1c2UtYnRuLS1hY3RpdmVcIik7XG4gIHNsaWRlclBsYXlCdG4uY3VycmVudFBsYXlCdG4uY2xhc3NMaXN0LmFkZChcInBsYXktYnRuLS1hY3RpdmVcIik7XG4gIGFjdGl2ZVBob3RvQm94LnBob3RvQm94LnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBcInBvbGl0ZVwiKTtcbiAgY2xlYXJJbnRlcnZhbChnZXRBbmltYXRpb25JRC5hbmltYXRpb25JRCk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrQ2lyY2xlcygpIHtcbiAgY2lyY2xlTmF2LmN1cnJlbnRDaXJjbGVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuXG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2lyY2xlLWljb24tZGl2XCIpIHx8XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaXJjbGUtaWNvblwiKVxuICAgICkge1xuICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xhc3NMaXN0KTtcbiAgICAgIHNldEluZGV4LnRhcmdldEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5jaXJjbGU7XG5cbiAgICAgIGNsZWFyQWN0aXZlU3RhdGUoKTtcbiAgICAgIGhhbmRsZUluZGV4ZXMoKTtcbiAgICAgIGFkZEFjdGl2ZVN0YXRlKCk7XG4gICAgfVxuICB9KTtcblxuICBjaXJjbGVOYXYuY3VycmVudENpcmNsZU5hdi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwiRW50ZXJcIikgJiZcbiAgICAgIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaXJjbGUtaWNvbi1kaXZcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2lyY2xlLWljb24tZGl2LS1hY3RpdmVcIikpXG4gICAgKSB7XG4gICAgICBzZXRJbmRleC50YXJnZXRJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuY2lyY2xlO1xuXG4gICAgICBjbGVhckFjdGl2ZVN0YXRlKCk7XG4gICAgICBoYW5kbGVJbmRleGVzKCk7XG4gICAgICBhZGRBY3RpdmVTdGF0ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFycm93Q3RybCgpIHtcbiAgYWN0aXZlU2xpZGVyQm94LmN1cnJlbnRBY3RpdmVCb3guYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0ID09PSBnZXRSaWdodEFycm93LnJpZ2h0QXJyb3cgfHxcbiAgICAgIGUudGFyZ2V0ID09PSBnZXRSaWdodEFycm93SWNvbi5yaWdodEFycm93SWNvblxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXCJyaWdodFwiKTtcbiAgICAgIHNsaWRlUmlnaHQoKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQgPT09IGdldExlZnRBcnJvdy5sZWZ0QXJyb3cgfHxcbiAgICAgIGUudGFyZ2V0ID09PSBnZXRMZWZ0QXJyb3dJY29uLmxlZnRBcnJvd0ljb25cbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibGVmdFwiKTtcbiAgICAgIHNsaWRlTGVmdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgYWN0aXZlU2xpZGVyQm94LmN1cnJlbnRBY3RpdmVCb3guYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICAoKGUua2V5ID09PSBcIiBcIiB8fCBlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIkFycm93UmlnaHRcIikgJiZcbiAgICAgICAgZS50YXJnZXQgPT09IGdldFJpZ2h0QXJyb3cucmlnaHRBcnJvdykgfHxcbiAgICAgIGUudGFyZ2V0ID09PSBnZXRSaWdodEFycm93SWNvbi5yaWdodEFycm93SWNvblxuICAgICkge1xuICAgICAgc2xpZGVSaWdodCgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChlLmtleSA9PT0gXCIgXCIgfHwgZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikgJiZcbiAgICAgIChlLnRhcmdldCA9PT0gZ2V0TGVmdEFycm93LmxlZnRBcnJvdyB8fFxuICAgICAgICBlLnRhcmdldCA9PT0gZ2V0TGVmdEFycm93SWNvbi5sZWZ0QXJyb3dJY29uKVxuICAgICkge1xuICAgICAgc2xpZGVMZWZ0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSW5kZXhlcygpIHtcbiAgaWYgKHNldEluZGV4LnRhcmdldEluZGV4IDwgMCkge1xuICAgIHNldEluZGV4LnRhcmdldEluZGV4ID0gZ2FsbGVyeUltZ3MuYm94SW1ncy5sZW5ndGggLSAxO1xuICAgIHNsaWRlUG9zaXRpb24uY3VycmVudFNsaWRlUG9zaXRpb24gPVxuICAgICAgZ2FsbGVyeUltZ3MuYm94SW1nc1tzZXRJbmRleC50YXJnZXRJbmRleF07XG4gICAgc2xpZGVQb3NpdGlvbi5uZXh0U2xpZGVQb3NpdGlvbiA9IGdhbGxlcnlJbWdzLmJveEltZ3NbMF07XG4gICAgc2xpZGVQb3NpdGlvbi5wcmV2U2xpZGVQb3NpdGlvbiA9XG4gICAgICBnYWxsZXJ5SW1ncy5ib3hJbWdzW3NldEluZGV4LnRhcmdldEluZGV4IC0gMV07XG4gICAgY2lyY2xlRGl2UG9zaXRpb24uY3VycmVudENpcmNsZURpdlBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbc2V0SW5kZXgudGFyZ2V0SW5kZXhdO1xuICAgIGNpcmNsZURpdlBvc2l0aW9uLm5leHRDaXJjbGVEaXZQb3NpdGlvbiA9IGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbMF07XG4gICAgY2lyY2xlRGl2UG9zaXRpb24ucHJldkNpcmNsZURpdlBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbc2V0SW5kZXgudGFyZ2V0SW5kZXggLSAxXTtcbiAgICBjaXJjbGVQb3NpdGlvbi5jdXJyZW50Q2lyY2xlUG9zaXRpb24gPVxuICAgICAgY2lyY2xlSWNvbnMuY2lyY2xlc1tzZXRJbmRleC50YXJnZXRJbmRleF07XG4gICAgY2lyY2xlUG9zaXRpb24ubmV4dENpcmNsZVBvc2l0aW9uID0gY2lyY2xlSWNvbnMuY2lyY2xlc1swXTtcbiAgICBjaXJjbGVQb3NpdGlvbi5wcmV2Q2lyY2xlUG9zaXRpb24gPVxuICAgICAgY2lyY2xlSWNvbnMuY2lyY2xlc1tzZXRJbmRleC50YXJnZXRJbmRleCAtIDFdO1xuICB9IGVsc2UgaWYgKHNldEluZGV4LnRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgc2xpZGVQb3NpdGlvbi5jdXJyZW50U2xpZGVQb3NpdGlvbiA9XG4gICAgICBnYWxsZXJ5SW1ncy5ib3hJbWdzW3NldEluZGV4LnRhcmdldEluZGV4XTtcbiAgICBzbGlkZVBvc2l0aW9uLm5leHRTbGlkZVBvc2l0aW9uID1cbiAgICAgIGdhbGxlcnlJbWdzLmJveEltZ3Nbc2V0SW5kZXgudGFyZ2V0SW5kZXggKyAxXTtcbiAgICBzbGlkZVBvc2l0aW9uLnByZXZTbGlkZVBvc2l0aW9uID1cbiAgICAgIGdhbGxlcnlJbWdzLmJveEltZ3NbZ2FsbGVyeUltZ3MuYm94SW1ncy5sZW5ndGggLSAxXTtcbiAgICBjaXJjbGVEaXZQb3NpdGlvbi5jdXJyZW50Q2lyY2xlRGl2UG9zaXRpb24gPVxuICAgICAgY2lyY2xlSWNvbkRpdnMuY2lyY2xlRGl2c1tzZXRJbmRleC50YXJnZXRJbmRleF07XG4gICAgY2lyY2xlRGl2UG9zaXRpb24ubmV4dENpcmNsZURpdlBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbc2V0SW5kZXgudGFyZ2V0SW5kZXggKyAxXTtcbiAgICBjaXJjbGVEaXZQb3NpdGlvbi5wcmV2Q2lyY2xlRGl2UG9zaXRpb24gPVxuICAgICAgY2lyY2xlSWNvbkRpdnMuY2lyY2xlRGl2c1tzZXRJbmRleC50YXJnZXRJbmRleCAtIDFdO1xuICAgIGNpcmNsZVBvc2l0aW9uLmN1cnJlbnRDaXJjbGVQb3NpdGlvbiA9XG4gICAgICBjaXJjbGVJY29ucy5jaXJjbGVzW3NldEluZGV4LnRhcmdldEluZGV4XTtcbiAgICBjaXJjbGVQb3NpdGlvbi5uZXh0Q2lyY2xlUG9zaXRpb24gPSBjaXJjbGVJY29ucy5jaXJjbGVzW3NldEluZGV4ICsgMV07XG4gICAgY2lyY2xlUG9zaXRpb24ucHJldkNpcmNsZVBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25zLmNpcmNsZXNbY2lyY2xlSWNvbnMuY2lyY2xlcy5sZW5naCAtIDFdO1xuICB9IGVsc2UgaWYgKHNldEluZGV4LnRhcmdldEluZGV4ID4gZ2FsbGVyeUltZ3MuYm94SW1ncy5sZW5ndGggLSAxKSB7XG4gICAgc2V0SW5kZXgudGFyZ2V0SW5kZXggPSAwO1xuICAgIHNsaWRlUG9zaXRpb24uY3VycmVudFNsaWRlUG9zaXRpb24gPVxuICAgICAgZ2FsbGVyeUltZ3MuYm94SW1nc1tzZXRJbmRleC50YXJnZXRJbmRleF07XG4gICAgc2xpZGVQb3NpdGlvbi5uZXh0U2xpZGVQb3NpdGlvbiA9XG4gICAgICBnYWxsZXJ5SW1ncy5ib3hJbWdzW3NldEluZGV4LnRhcmdldEluZGV4ICsgMV07XG4gICAgc2xpZGVQb3NpdGlvbi5wcmV2U2xpZGVQb3NpdGlvbiA9XG4gICAgICBnYWxsZXJ5SW1ncy5ib3hJbWdzW2dhbGxlcnlJbWdzLmJveEltZ3MubGVuZ3RoIC0gMV07XG4gICAgY2lyY2xlRGl2UG9zaXRpb24uY3VycmVudENpcmNsZURpdlBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbc2V0SW5kZXgudGFyZ2V0SW5kZXhdO1xuICAgIGNpcmNsZURpdlBvc2l0aW9uLm5leHRDaXJjbGVEaXZQb3NpdGlvbiA9XG4gICAgICBjaXJjbGVJY29uRGl2cy5jaXJjbGVEaXZzW3NldEluZGV4LnRhcmdldEluZGV4ICsgMV07XG4gICAgY2lyY2xlRGl2UG9zaXRpb24ucHJldkNpcmNsZURpdlBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbc2V0SW5kZXgudGFyZ2V0SW5kZXggLSAxXTtcbiAgICBjaXJjbGVQb3NpdGlvbi5jdXJyZW50Q2lyY2xlUG9zaXRpb24gPVxuICAgICAgY2lyY2xlSWNvbnMuY2lyY2xlc1tzZXRJbmRleC50YXJnZXRJbmRleF07XG4gICAgY2lyY2xlUG9zaXRpb24ubmV4dENpcmNsZVBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25zLmNpcmNsZXNbc2V0SW5kZXgudGFyZ2V0SW5kZXggKyAxXTtcbiAgICBjaXJjbGVQb3NpdGlvbi5wcmV2Q2lyY2xlUG9zaXRpb24gPVxuICAgICAgY2lyY2xlSWNvbnNbY2lyY2xlSWNvbnMuY2lyY2xlcy5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICBzbGlkZVBvc2l0aW9uLmN1cnJlbnRTbGlkZVBvc2l0aW9uID1cbiAgICAgIGdhbGxlcnlJbWdzLmJveEltZ3Nbc2V0SW5kZXgudGFyZ2V0SW5kZXhdO1xuICAgIHNsaWRlUG9zaXRpb24ubmV4dFNsaWRlUG9zaXRpb24gPVxuICAgICAgZ2FsbGVyeUltZ3MuYm94SW1nc1tzZXRJbmRleC50YXJnZXRJbmRleCArIDFdO1xuICAgIHNsaWRlUG9zaXRpb24ucHJldlNsaWRlUG9zaXRpb24gPVxuICAgICAgZ2FsbGVyeUltZ3MuYm94SW1nc1tzZXRJbmRleC50YXJnZXRJbmRleCAtIDFdO1xuICAgIGNpcmNsZURpdlBvc2l0aW9uLmN1cnJlbnRDaXJjbGVEaXZQb3NpdGlvbiA9XG4gICAgICBjaXJjbGVJY29uRGl2cy5jaXJjbGVEaXZzW3NldEluZGV4LnRhcmdldEluZGV4XTtcbiAgICBjaXJjbGVEaXZQb3NpdGlvbi5uZXh0Q2lyY2xlRGl2UG9zaXRpb24gPVxuICAgICAgY2lyY2xlSWNvbkRpdnMuY2lyY2xlRGl2c1tzZXRJbmRleC50YXJnZXRJbmRleCArIDFdO1xuICAgIGNpcmNsZURpdlBvc2l0aW9uLnByZXZDaXJjbGVEaXZQb3NpdGlvbiA9XG4gICAgICBjaXJjbGVJY29uRGl2cy5jaXJjbGVEaXZzW3NldEluZGV4LnRhcmdldEluZGV4IC0gMV07XG4gICAgY2lyY2xlUG9zaXRpb24uY3VycmVudENpcmNsZVBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25zLmNpcmNsZXNbc2V0SW5kZXgudGFyZ2V0SW5kZXhdO1xuICAgIGNpcmNsZVBvc2l0aW9uLm5leHRDaXJjbGVQb3NpdGlvbiA9XG4gICAgICBjaXJjbGVJY29ucy5jaXJjbGVzW3NldEluZGV4LnRhcmdldEluZGV4ICsgMV07XG4gICAgY2lyY2xlUG9zaXRpb24ucHJldkNpcmNsZVBvc2l0aW9uID1cbiAgICAgIGNpcmNsZUljb25zLmNpcmNsZXNbc2V0SW5kZXgudGFyZ2V0SW5kZXggLSAxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbGlkZVJpZ2h0KCkge1xuICBjbGVhckFjdGl2ZVN0YXRlKCk7XG4gIHNldEluZGV4LnRhcmdldEluZGV4Kys7XG4gIGhhbmRsZUluZGV4ZXMoKTtcbiAgYWRkQWN0aXZlU3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gc2xpZGVMZWZ0KCkge1xuICBjbGVhckFjdGl2ZVN0YXRlKCk7XG4gIHNldEluZGV4LnRhcmdldEluZGV4LS07XG4gIGhhbmRsZUluZGV4ZXMoKTtcbiAgYWRkQWN0aXZlU3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBY3RpdmVTdGF0ZSgpIHtcbiAgc2xpZGVQb3NpdGlvbi5jdXJyZW50U2xpZGVQb3NpdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwicGljdHVyZS0tYWN0aXZlXCIpO1xuICBjaXJjbGVEaXZQb3NpdGlvbi5jdXJyZW50Q2lyY2xlRGl2UG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZShcbiAgICBcImNpcmNsZS1pY29uLWRpdi0tYWN0aXZlXCJcbiAgKTtcbiAgY2lyY2xlRGl2UG9zaXRpb24uY3VycmVudENpcmNsZURpdlBvc2l0aW9uLnJlbW92ZUF0dHJpYnV0ZShcbiAgICBcImFyaWEtZGlzYWJsZWRcIixcbiAgICBcInRydWVcIlxuICApO1xuICBjaXJjbGVQb3NpdGlvbi5jdXJyZW50Q2lyY2xlUG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1pY29uLS1hY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGFkZEFjdGl2ZVN0YXRlKCkge1xuICBzbGlkZVBvc2l0aW9uLmN1cnJlbnRTbGlkZVBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlLS1hY3RpdmVcIik7XG4gIGNpcmNsZURpdlBvc2l0aW9uLmN1cnJlbnRDaXJjbGVEaXZQb3NpdGlvbi5jbGFzc0xpc3QuYWRkKFxuICAgIFwiY2lyY2xlLWljb24tZGl2LS1hY3RpdmVcIlxuICApO1xuICBjaXJjbGVEaXZQb3NpdGlvbi5jdXJyZW50Q2lyY2xlRGl2UG9zaXRpb24uc2V0QXR0cmlidXRlKFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiLFxuICAgIFwidHJ1ZVwiXG4gICk7XG5cbiAgY2lyY2xlUG9zaXRpb24uY3VycmVudENpcmNsZVBvc2l0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtaWNvbi0tYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiByZXNldEluZGV4ZXMoKSB7XG4gIHNldEluZGV4LnRhcmdldEluZGV4ID0gMDtcbiAgc2xpZGVQb3NpdGlvbi5jdXJyZW50U2xpZGUgPSBnYWxsZXJ5SW1nc1tzZXRJbmRleC5jdXJyZW50SW5kZXhdO1xuICBzbGlkZVBvc2l0aW9uLm5leHRTbGlkZSA9IGdhbGxlcnlJbWdzW3NldEluZGV4LmN1cnJlbnRJbmRleCArIDFdO1xuICBzbGlkZVBvc2l0aW9uLnByZXZTbGlkZSA9IGdhbGxlcnlJbWdzW3NldEluZGV4LmN1cnJlbnRJbmRleCAtIDFdO1xuICBjaXJjbGVQb3NpdGlvbi5jdXJyZW50Q2lyY2xlID0gY2lyY2xlSWNvbnNbc2V0SW5kZXguY3VycmVudEluZGV4XTtcbiAgY2lyY2xlUG9zaXRpb24ubmV4dENpcmNsZSA9IGNpcmNsZUljb25zW3NldEluZGV4LmN1cnJlbnRJbmRleCArIDFdO1xuICBjaXJjbGVQb3NpdGlvbi5wcmV2Q2lyY2xlID0gY2lyY2xlSWNvbnNbc2V0SW5kZXguY3VycmVudEluZGV4IC0gMV07XG59XG4iLCIvLyBDb250YWN0IEZvcm0gVmFsaWRhdGlvblxuZXhwb3J0IGNvbnN0IGZvcm1EaXNhYmxlZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZGlzYWJsZWRcIik7XG5leHBvcnQgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcbmV4cG9ydCBjb25zdCBmb3JtRmllbGRzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZmllbGRzZXRcIik7XG5leHBvcnQgY29uc3QgaW5wdXRGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG5leHBvcnQgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIik7XG5leHBvcnQgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdC1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IGZpcnN0TmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdE5hbWVFcnJvclwiKTtcbmV4cG9ydCBjb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFzdC1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IGxhc3ROYW1lRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhc3ROYW1lRXJyb3JcIik7XG5leHBvcnQgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpO1xuZXhwb3J0IGNvbnN0IGVtYWlsRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtYWlsRXJyb3JcIik7XG5leHBvcnQgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKTtcbmV4cG9ydCBjb25zdCBtZXNzYWdlRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VFcnJvclwiKTtcbmV4cG9ydCBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbmQtY29udGFjdFwiKTtcbmV4cG9ydCBjb25zdCBzdWJtaXRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0RXJyb3JcIik7XG5cbi8vIEFjY2Vzc2liaWxpdHlcbmV4cG9ydCBjb25zdCByZWR1Y2VNb3Rpb24gPVxuICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpID09PSB0cnVlIHx8XG4gIHdpbmRvdy5tYXRjaE1lZGlhKGAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKWApLm1hdGNoZXMgPT09IHRydWU7XG5cbi8vIE1lbnUgVmFyaWFibGVzXG5leHBvcnQgY29uc3QgY3VycmVudFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbmV4cG9ydCBjb25zdCBmdWxsUGFnZU5hbWUgPSBjdXJyZW50UGFnZS5zdWJzdHJpbmcoXG4gIGN1cnJlbnRQYWdlLmxhc3RJbmRleE9mKFwiL1wiKSArIDFcbik7XG5leHBvcnQgY29uc3QgaW5kZXhPZkV4dGVuc2lvbiA9IGZ1bGxQYWdlTmFtZS5pbmRleE9mKFwiLlwiKTtcbmV4cG9ydCBjb25zdCBzaG9ydFBhZ2VOYW1lID0gZnVsbFBhZ2VOYW1lLnN1YnN0cmluZygwLCBpbmRleE9mRXh0ZW5zaW9uKTtcblxuLy8gRHJvcCBEb3duXG5leHBvcnQgY29uc3QgZHJvcERvd25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWRpdlwiKTtcbmV4cG9ydCBjb25zdCBkcm9wRG93bkNhcmF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWwtYXJyb3dcIik7XG5leHBvcnQgY29uc3QgZHJvcERvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1jb250ZW50XCIpO1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXG4vLyBOYXYgU3R5bGVzXG5leHBvcnQgY29uc3QgbWVudUNoaWxkcmVuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWl0ZW1zXCIpO1xuZXhwb3J0IGNvbnN0IG1lbnVCdG5TdHlsZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWJ0blwiKSk7XG5leHBvcnQgY29uc3QgZHJvcERvd25JdGVtcyA9IEFycmF5LmZyb20oXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24taXRlbVwiKVxuKTtcblxuLy8gV2luZG93IERpbWVuc2lvbnNcbmV4cG9ydCBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5leHBvcnQgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuLy8gUGhvdG8gR2FsbGVyeVxuXG5leHBvcnQgbGV0IGdldFBvcnRyYWl0R2FsID0ge1xuICBnYWxQb3J0cmFpdFZpZXc6IHVuZGVmaW5lZCxcblxuICBnZXQgcG9ydHJhaXRHYWxMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FsUG9ydHJhaXRWaWV3O1xuICB9LFxuXG4gIHNldCBwb3J0cmFpdEdhbExvY2FsZShuZXdQb3J0cmFpdEdhbExvY2FsZSkge1xuICAgIHRoaXMuZ2FsUG9ydHJhaXRWaWV3ID0gbmV3UG9ydHJhaXRHYWxMb2NhbGU7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IGdldExhbmRzY2FwZUdhbCA9IHtcbiAgZ2FsTGFuZHNjYXBlVmlldzogdW5kZWZpbmVkLFxuXG4gIGdldCBsYW5kc2NhcGVHYWxMb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FsTGFuZHNjYXBlVmlldztcbiAgfSxcblxuICBzZXQgbGFuZHNjYXBlR2FsTG9jYWxlKG5ld0xhbmRzY2FwZUdhbExvY2FsZSkge1xuICAgIHRoaXMuZ2FsTGFuZHNjYXBlVmlldyA9IG5ld0xhbmRzY2FwZUdhbExvY2FsZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBsZXQgZ2V0QW5pbWF0aW9uSUQgPSB7XG4gIGFuaW1hdGlvbklEOiB1bmRlZmluZWQsXG5cbiAgZ2V0IGFuaW1hdGlvbklEVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uSUQ7XG4gIH0sXG5cbiAgc2V0IGFuaW1hdGlvbklEVmFsdWUobmV3QW5pbWF0aW9uVmFsdWUpIHtcbiAgICB0aGlzLmFuaW1hdGlvbklEID0gbmV3QW5pbWF0aW9uVmFsdWU7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IHNsaWRlckFuaW1hdGlvbkN0cmxEaXYgPSB7XG4gIGFuaW1hdGlvbkN0cmxEaXY6IHVuZGVmaW5lZCxcblxuICBnZXQgY3VycmVudEFuaW1hdGlvbkN0cmxEaXYoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uQ3RybERpdjtcbiAgfSxcblxuICBzZXQgY3VycmVudEFuaW1hdGlvbkN0cmxEaXYobmV3QW5pbWF0aW9uQ3RybERpdikge1xuICAgIHRoaXMuYW5pbWF0aW9uQ3RybERpdiA9IG5ld0FuaW1hdGlvbkN0cmxEaXY7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IHNsaWRlclBhdXNlQnRuID0ge1xuICBwYXVzZUJ0bjogdW5kZWZpbmVkLFxuXG4gIGdldCBjdXJyZW50UGF1c2VCdG4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VCdG47XG4gIH0sXG5cbiAgc2V0IGN1cnJlbnRQYXVzZUJ0bihuZXdQYXVzZUJ0bikge1xuICAgIHRoaXMucGF1c2VCdG4gPSBuZXdQYXVzZUJ0bjtcbiAgfSxcbn07XG5cbmV4cG9ydCBsZXQgc2xpZGVyUGF1c2VJY29uID0ge1xuICBwYXVzZUljb246IHVuZGVmaW5lZCxcblxuICBnZXQgY3VycmVudFBhdXNlSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXVzZUljb247XG4gIH0sXG5cbiAgc2V0IGN1cnJlbnRQYXVzZUljb24obmV3UGF1c2VJY29uKSB7XG4gICAgdGhpcy5wYXVzZUljb24gPSBuZXdQYXVzZUljb247XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IHNsaWRlclBsYXlCdG4gPSB7XG4gIHBsYXlCdG46IHVuZGVmaW5lZCxcblxuICBnZXQgY3VycmVudFBsYXlCdG4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheUJ0bjtcbiAgfSxcblxuICBzZXQgY3VycmVudFBsYXlCdG4obmV3UGxheUJ0bikge1xuICAgIHRoaXMucGxheUJ0biA9IG5ld1BsYXlCdG47XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IHNsaWRlclBsYXlJY29uID0ge1xuICBwbGF5SWNvbjogdW5kZWZpbmVkLFxuXG4gIGdldCBjdXJyZW50UGxheUljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheUljb247XG4gIH0sXG5cbiAgc2V0IGN1cnJlbnRQbGF5SWNvbihuZXdQbGF5SWNvbikge1xuICAgIHRoaXMucGxheUljb24gPSBuZXdQbGF5SWNvbjtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBnYWxsZXJ5TWFpbkRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbC1tYWluXCIpO1xuZXhwb3J0IGNvbnN0IGFycm93RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJyb3ctZGl2XCIpO1xuZXhwb3J0IGNvbnN0IHBob3RvQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBob3RvLWJveFwiKTtcblxuZXhwb3J0IGxldCBhY3RpdmVTbGlkZXJCb3ggPSB7XG4gIGFjdGl2ZUJveDogdW5kZWZpbmVkLFxuXG4gIGdldCBjdXJyZW50QWN0aXZlQm94KCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUJveDtcbiAgfSxcblxuICBzZXQgY3VycmVudEFjdGl2ZUJveChjdXJyZW50UGFnZUJveCkge1xuICAgIHRoaXMuYWN0aXZlQm94ID0gY3VycmVudFBhZ2VCb3g7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IGFjdGl2ZVBob3RvQm94ID0ge1xuICBwaG90b0JveDogdW5kZWZpbmVkLFxuXG4gIGdldCBjdXJyZW50QWN0aXZlUGhvdG9Cb3goKSB7XG4gICAgcmV0dXJuIHRoaXMucGhvdG9Cb3g7XG4gIH0sXG5cbiAgc2V0IGN1cnJlbnRBY3RpdmVQaG90b0JveChjdXJyZW50UGFnZVBob3RvQm94KSB7XG4gICAgdGhpcy5waG90b0JveCA9IGN1cnJlbnRQYWdlUGhvdG9Cb3g7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IGdhbGxlcnlJbWdzID0ge1xuICBib3hJbWdzOiBbXSxcblxuICBnZXQgYm94SW1nc0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmJveEltZ3M7XG4gIH0sXG5cbiAgc2V0IGJveEltZ3NBcnJheShjdXJyZW50Qm94SW1ncykge1xuICAgIHRoaXMuYm94SW1ncyA9IGN1cnJlbnRCb3hJbWdzO1xuICB9LFxufTtcblxuLy8gZXhwb3J0IGNvbnN0IGNpcmNsZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1nLWRvdHMtY29udGFpbmVyXCIpO1xuXG5leHBvcnQgY29uc3QgY2lyY2xlTmF2ID0ge1xuICBjdXJyZW50Q2lyY2xlTmF2OiB1bmRlZmluZWQsXG5cbiAgZ2V0IHRoaXNDaXJjbGVOYXYoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudENpcmNsZU5hdjtcbiAgfSxcblxuICBzZXQgdGhpc0NpcmNsZU5hdihnZXRUaGVOYXYpIHtcbiAgICB0aGlzLmN1cnJlbnRDaXJjbGVOYXYgPSBnZXRUaGVOYXY7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IGNpcmNsZUljb25EaXZzID0ge1xuICBjaXJjbGVEaXZzOiBbXSxcblxuICBnZXQgY2lyY2xlRGl2c0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmNpcmNsZURpdnM7XG4gIH0sXG5cbiAgc2V0IGNpcmNsZURpdnNBcnJheShuZXdDaXJjbGVEaXZzQXJyYXkpIHtcbiAgICB0aGlzLmNpcmNsZURpdnMgPSBuZXdDaXJjbGVEaXZzQXJyYXk7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IGNpcmNsZUljb25zID0ge1xuICBjaXJjbGVzOiBbXSxcblxuICBnZXQgY2lyY2xlSWNvbnNBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5jaXJjbGVzO1xuICB9LFxuXG4gIHNldCBjaXJjbGVJY29uc0FycmF5KG5ld0NpcmNsZXNBcnJheSkge1xuICAgIHRoaXMuY2lyY2xlcyA9IG5ld0NpcmNsZXNBcnJheTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSaWdodEFycm93ID0ge1xuICByaWdodEFycm93OiB1bmRlZmluZWQsXG5cbiAgZ2V0IHJpZ2h0QXJyb3dMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodEFycm93O1xuICB9LFxuXG4gIHNldCByaWdodEFycm93TG9jYXRpb24obmV3UmlnaHRBcnJvdykge1xuICAgIHRoaXMucmlnaHRBcnJvdyA9IG5ld1JpZ2h0QXJyb3c7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmlnaHRBcnJvd0ljb24gPSB7XG4gIHJpZ2h0QXJyb3dJY29uOiB1bmRlZmluZWQsXG5cbiAgZ2V0IHJpZ2h0SWNvbkxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0QXJyb3dJY29uO1xuICB9LFxuXG4gIHNldCByaWdodEljb25Mb2NhdGlvbihuZXdSaWdodEljb24pIHtcbiAgICB0aGlzLnJpZ2h0QXJyb3dJY29uID0gbmV3UmlnaHRJY29uO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGdldExlZnRBcnJvdyA9IHtcbiAgbGVmdEFycm93OiB1bmRlZmluZWQsXG5cbiAgZ2V0IGxlZnRBcnJvd0xvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRBcnJvdztcbiAgfSxcblxuICBzZXQgbGVmdEFycm93TG9jYXRpb24obmV3TGVmdEFycm93KSB7XG4gICAgdGhpcy5sZWZ0QXJyb3cgPSBuZXdMZWZ0QXJyb3c7XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGVmdEFycm93SWNvbiA9IHtcbiAgbGVmdEFycm93SWNvbjogdW5kZWZpbmVkLFxuXG4gIGdldCBsZWZ0SWNvbkxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRBcnJvd0ljb247XG4gIH0sXG5cbiAgc2V0IGxlZnRJY29uTG9jYXRpb24obmV3TGVmdEljb24pIHtcbiAgICB0aGlzLmxlZnRBcnJvd0ljb24gPSBuZXdMZWZ0SWNvbjtcbiAgfSxcbn07XG5cbmV4cG9ydCBsZXQgc2V0SW5kZXggPSB7XG4gIGN1cnJlbnRJbmRleDogMCxcblxuICBnZXQgdGFyZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4O1xuICB9LFxuXG4gIHNldCB0YXJnZXRJbmRleChuZXdUYXJnZXRJbmRleCkge1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gbmV3VGFyZ2V0SW5kZXg7XG4gIH0sXG59O1xuXG5leHBvcnQgbGV0IHNsaWRlUG9zaXRpb24gPSB7XG4gIGN1cnJlbnRTbGlkZTogZ2FsbGVyeUltZ3MuYm94SW1nc1tzZXRJbmRleC5jdXJyZW50SW5kZXhdLFxuICBuZXh0U2xpZGU6IGdhbGxlcnlJbWdzLmJveEltZ3Nbc2V0SW5kZXguY3VycmVudEluZGV4ICsgMV0sXG4gIHByZXZTbGlkZTogZ2FsbGVyeUltZ3MuYm94SW1nc1tzZXRJbmRleC5jdXJyZW50SW5kZXggLSAxXSxcblxuICBnZXQgY3VycmVudFNsaWRlUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNsaWRlO1xuICB9LFxuXG4gIHNldCBjdXJyZW50U2xpZGVQb3NpdGlvbihuZXdDdXJyZW50U2xpZGUpIHtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IG5ld0N1cnJlbnRTbGlkZTtcbiAgfSxcblxuICBnZXQgbmV4dFNsaWRlUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFNsaWRlO1xuICB9LFxuXG4gIHNldCBuZXh0U2xpZGVQb3NpdGlvbihuZXdOZXh0U2xpZGUpIHtcbiAgICB0aGlzLm5leHRTbGlkZSA9IG5ld05leHRTbGlkZTtcbiAgfSxcblxuICBnZXQgcHJldlNsaWRlUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJldlNsaWRlO1xuICB9LFxuXG4gIHNldCBwcmV2U2xpZGVQb3NpdGlvbihuZXdQcmV2U2xpZGUpIHtcbiAgICB0aGlzLnByZXZTbGlkZSA9IG5ld1ByZXZTbGlkZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBsZXQgY2lyY2xlRGl2UG9zaXRpb24gPSB7XG4gIGN1cnJlbnRDaXJjbGVEaXY6IGNpcmNsZUljb25EaXZzLmNpcmNsZURpdnNbc2V0SW5kZXguY3VycmVudEluZGV4XSxcbiAgbmV4dENpcmNsZURpdjogY2lyY2xlSWNvbkRpdnMuY2lyY2xlRGl2c1tzZXRJbmRleC5jdXJyZW50SW5kZXggKyAxXSxcbiAgcHJldkNpcmNsZURpdjogY2lyY2xlSWNvbkRpdnMuY2lyY2xlRGl2c1tzZXRJbmRleC5jdXJyZW50SW5kZXggLSAxXSxcblxuICBnZXQgY3VycmVudENpcmNsZURpdlBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDaXJjbGVEaXY7XG4gIH0sXG5cbiAgc2V0IGN1cnJlbnRDaXJjbGVEaXZQb3NpdGlvbihuZXdDdXJyZW50Q2lyY2xlRGl2KSB7XG4gICAgdGhpcy5jdXJyZW50Q2lyY2xlRGl2ID0gbmV3Q3VycmVudENpcmNsZURpdjtcbiAgfSxcblxuICBnZXQgbmV4dENpcmNsZURpdlBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRDaXJjbGVEaXY7XG4gIH0sXG5cbiAgc2V0IG5leHRDaXJjbGVEaXZQb3NpdGlvbihuZXdOZXh0Q2lyY2xlRGl2KSB7XG4gICAgdGhpcy5uZXh0Q2lyY2xlRGl2ID0gbmV3TmV4dENpcmNsZURpdjtcbiAgfSxcblxuICBnZXQgcHJldkNpcmNsZURpdlBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByZXZDaXJjbGVEaXY7XG4gIH0sXG5cbiAgc2V0IHByZXZDaXJjbGVEaXZQb3NpdGlvbihuZXdQcmV2Q2lyY2xlRGl2KSB7XG4gICAgdGhpcy5wcmV2Q2lyY2xlRGl2ID0gbmV3UHJldkNpcmNsZURpdjtcbiAgfSxcbn07XG5cbmV4cG9ydCBsZXQgY2lyY2xlUG9zaXRpb24gPSB7XG4gIGN1cnJlbnRDaXJjbGU6IGNpcmNsZUljb25zLmNpcmNsZXNbc2V0SW5kZXguY3VycmVudEluZGV4XSxcbiAgbmV4dENpcmNsZTogY2lyY2xlSWNvbnMuY2lyY2xlc1tzZXRJbmRleC5jdXJyZW50SW5kZXggKyAxXSxcbiAgcHJldkNpcmNsZTogY2lyY2xlSWNvbnMuY2lyY2xlc1tzZXRJbmRleC5jdXJyZW50SW5kZXggLSAxXSxcblxuICBnZXQgY3VycmVudENpcmNsZVBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDaXJjbGU7XG4gIH0sXG5cbiAgc2V0IGN1cnJlbnRDaXJjbGVQb3NpdGlvbihuZXdDdXJyZW50Q2lyY2xlKSB7XG4gICAgdGhpcy5jdXJyZW50Q2lyY2xlID0gbmV3Q3VycmVudENpcmNsZTtcbiAgfSxcblxuICBnZXQgbmV4dENpcmNsZVBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRDaXJjbGU7XG4gIH0sXG5cbiAgc2V0IG5leHRDaXJjbGVQb3NpdGlvbihuZXdOZXh0Q2lyY2xlKSB7XG4gICAgdGhpcy5uZXh0Q2lyY2xlID0gbmV3TmV4dENpcmNsZTtcbiAgfSxcblxuICBnZXQgcHJldkNpcmNsZVBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByZXZDaXJjbGU7XG4gIH0sXG5cbiAgc2V0IHByZXZDaXJjbGVQb3NpdGlvbihuZXdQcmV2Q2lyY2xlKSB7XG4gICAgdGhpcy5wcmV2U2xpZGUgPSBuZXdQcmV2Q2lyY2xlO1xuICB9LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3RybFRhYkhpZ2hsaWdodCB9IGZyb20gXCIuL25hdlN0eWxlc1wiO1xuXG5pbXBvcnQgeyBnYWxsZXJpZXNDbGlja01lbnUgfSBmcm9tIFwiLi9kcm9wRG93blwiO1xuXG5pbXBvcnQgeyBnYWxsZXJ5U2V0dXAgfSBmcm9tIFwiLi9waG90b1NsaWRlclwiO1xuXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm1GaWVsZHMgfSBmcm9tIFwiLi9mb3JtLXZhbGlkYXRpb25cIjtcblxuY29uc29sZS5sb2coXCJwaG90b2dhbGxlcnlcIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIlRoZSBwYWdlIGlzIGxvYWRlZFwiKTtcbiAgY3RybFRhYkhpZ2hsaWdodCgpO1xuICBnYWxsZXJpZXNDbGlja01lbnUoKTtcbiAgZ2FsbGVyeVNldHVwKCk7XG4gIHZhbGlkYXRlRm9ybUZpZWxkcygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=