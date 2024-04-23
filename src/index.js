import "./style.css";

import { ctrlTabHighlight } from "./navStyles";

import { galleriesClickMenu } from "./dropDown";

import { sliderBoxCtrl } from "./photoSlider";

console.log("photogallery");

window.addEventListener("load", (e) => {
  console.log("The page is loaded");
  ctrlTabHighlight();
  galleriesClickMenu();
  sliderBoxCtrl();
});
