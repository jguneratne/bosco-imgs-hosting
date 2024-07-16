import {
  ctrlMenuVisibility,
  ctrlTabHighlight,
  giveHomeLinkFocus,
  addAriaCurrent,
} from "./navStyles";

import { galleriesClickMenu } from "./dropDown";

import { gallerySetup } from "./photoSlider";

import { validateFormFields } from "./form-validation";

console.log("photogallery");

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("The page is loaded");
  ctrlMenuVisibility();
  ctrlTabHighlight();
  giveHomeLinkFocus();
  addAriaCurrent();
  galleriesClickMenu();
  gallerySetup();
  validateFormFields();
});
