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

export function changeTabs() {
  menuLinks.forEach((link) => {
    link.addEventListener("pointerdown", (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        let hrefTag = e.target.href;
        let hrefTagText = hrefTag.substring(hrefTag.indexOf("#") + 1);
        console.log(hrefTagText);

        function selectMenuBtn() {
          menuBtnStyle.forEach((btn) => {
            if (hrefTagText === btn.dataset.tab) {
              menuBtnStyle.forEach((btn) => {
                btn.classList.remove("selected");
              });
              btn.classList.add("selected");
            } else if (btn.classList.contains("selected")) {
              return;
            }
          });
        }

        function selectTabContent() {
          tabContent.forEach((content) => {
            if (hrefTagText === content.id) {
              tabContent.forEach((content) => {
                if (content.classList.contains("selected")) {
                  content.classList.remove("selected");
                }
              });
              content.classList.toggle("selected");

              if (getAnimationID.animationID !== undefined) {
                resetSliderAnimation();
                resetIndexes();
              }

              sliderBoxCtrl(hrefTagText);
            }
          });
        }

        if (hrefTagText === "galleries") {
          selectMenuBtn();
          galleriesClickMenu(hrefTagText);
        } else if (hrefTagText.parentNode === dropDownContent) {
          selectTabContent();
          hideSubMenu();
        } else {
          selectMenuBtn();
          selectTabContent();
          hideSubMenu();
        }
      }
    });
  });
}
