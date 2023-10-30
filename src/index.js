import "./style.css";

import {
  defaultGallerySetting,
  sliderAnimation,
  clickCircles,
  arrowCtrl,
} from "./photoSlider";

import { showSubMenu } from "./dropDown";

import { initializeTabs } from "./tabCtrl";

console.log("photogallery");

defaultGallerySetting();
sliderAnimation();
clickCircles();
arrowCtrl();
showSubMenu();
initializeTabs();
