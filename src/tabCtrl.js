import {
  menuLinks,
  menuBtnStyle,
  galleryLinkParent,
  tabContentDiv,
  tabContent,
} from "./querySelectors";
import { showSubMenu } from "./dropDown";

export function navigateTabs() {
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
            }
          });
        }

        function selectTabContent() {
          tabContent.forEach((content) => {
            if (hrefTagText === content.id) {
              tabContent.forEach((content) => {
                content.classList.remove("selected");
              });
              content.classList.add("selected");
            }
          });
        }

        if (hrefTagText === "galleries") {
          showSubMenu();
          selectMenuBtn();
        } else if (hrefTagText.parentNode === galleryLinkParent) {
          showSubMenu();
          selectTabContent();
        } else {
          selectMenuBtn();
          selectTabContent();
        }
      }
    });
  });
}
