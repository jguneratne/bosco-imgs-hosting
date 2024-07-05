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
//# sourceMappingURL=index.8bc1628b.js.map