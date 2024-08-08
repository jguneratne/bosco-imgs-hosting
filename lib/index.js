"use strict";

var _navStyles = require("./navStyles");
var _dropDown = require("./dropDown");
var _photoSlider = require("./photoSlider");
var _formValidation = require("./form-validation");
console.log("photogallery");
document.addEventListener("DOMContentLoaded", e => {
  console.log("The page is loaded");
  (0, _navStyles.ctrlMenuVisibility)();
  (0, _navStyles.addAriaCurrent)();
  (0, _dropDown.galleriesClickMenu)();
  (0, _photoSlider.gallerySetup)();
  (0, _formValidation.validateFormFields)();
});