import "./style.css";

import {
  defaultGallerySetting,
  sliderAnimation,
  clickCircles,
  arrowCtrl,
} from "./photoSlider";

import { defaultSelectedSettings, navigateTabs } from "./tabCtrl";

console.log("photogallery");

defaultGallerySetting();
sliderAnimation();
clickCircles();
arrowCtrl();
defaultSelectedSettings();
navigateTabs();
