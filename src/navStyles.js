import {
  shortPageName,
  menuBtnStyle,
  getAnimationID,
  dropDownDiv,
  dropDownItems,
  sliderBoxes,
} from "./variables";

import {
  sliderBoxCtrl,
  resetSliderAnimation,
  resetIndexes,
} from "./photoSlider";

export function ctrlTabHighlight() {
  menuBtnStyle.forEach((btn) => {
    if (btn.dataset.name === "index") {
      menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else {
      showCurrentNavLink();
    }
  });
}

export function showCurrentNavLink() {
  menuBtnStyle.forEach((btn) => {
    if (shortPageName === btn.dataset.name) {
      menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else if (
      shortPageName === "first-gallery" ||
      shortPageName === "second-gallery"
    ) {
      showGalNavLink();
      sliderBoxCtrl();
    }
  });
}

function showGalNavLink() {
  dropDownItems.forEach((item) => {
    if (
      item.dataset.name === "first-gal" ||
      item.dataset.name === "second-gal"
    ) {
      menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      dropDownDiv.classList.add("selected");
    }

    sliderBoxes.forEach((box) => {
      if (
        box.dataset.name === shortPageName &&
        getAnimationID.animationID !== undefined
      ) {
        resetIndexes();
        resetSliderAnimation();
      }
    });
  });
}
