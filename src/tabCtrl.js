import {
  menuLinks,
  menuBtnStyle,
  tabContent,
  getAnimationID,
  dropDownContent,
  menuChildrenDiv,
} from "./querySelectors";

import { galleriesClickMenu, hideSubMenu, showSubMenu } from "./dropDown";

import {
  sliderBoxCtrl,
  resetSliderAnimation,
  resetIndexes,
} from "./photoSlider";

export function defaultSelectedSettings() {
  let i = 0;
  let j = 0;
  menuBtnStyle[i].classList.add("selected");
  tabContent[j].classList.add("selected");
}

export function navigateTabs() {
  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    let hrefTag = location.hash.substring(location.hash.indexOf("#") + 1);
    console.log(hrefTag);

    function selectMenuBtn() {
      menuBtnStyle.forEach((btn) => {
        if (hrefTag === btn.dataset.tab) {
          menuBtnStyle.forEach((btn) => {
            btn.classList.remove("selected");
          });
          btn.classList.add("selected");
        }
      });
    }

    function selectTabContent() {
      tabContent.forEach((content) => {
        if (hrefTag === content.id) {
          tabContent.forEach((content) => {
            if (content.classList.contains("selected")) {
              content.classList.remove("selected");
            }
          });
          content.classList.add("selected");

          // if (getAnimationID.animationID !== undefined) {
          //   resetSliderAnimation();
          //   resetIndexes();
          // }

          // sliderBoxCtrl(hrefTagText);
        }
      });
    }

    if (hrefTag === "galleries") {
      selectMenuBtn();
      galleriesClickMenu(hrefTag);
    } else if (hrefTag.parentNode === dropDownContent) {
      selectTabContent();
      hideSubMenu();
    } else {
      selectMenuBtn();
      selectTabContent();
      hideSubMenu();
    }
  });
}
