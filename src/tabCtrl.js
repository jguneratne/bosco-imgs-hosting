import {
  menuLinks,
  menuBtnStyle,
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

        menuBtnStyle.forEach((btn) => {
          if (`${hrefTagText}` === btn.dataset.tab) {
            showSubMenu();
            menuBtnStyle.forEach((btn) => {
              btn.classList.remove("selected");
            });
            btn.classList.add("selected");
          }

          tabContent.forEach((content) => {
            if (`${hrefTagText}` === content.id) {
              tabContent.forEach((content) => {
                content.classList.remove("selected");
              });
              content.classList.add("selected");
            }
          });
        });
      }
    });
  });
}

// export function initializeTabs() {
//   for (let i = 0; i < menuChildren.length; i++) {
//     if (menuChildren[i].nodeName === "LI") {
//       let tabLink = getFirstChildWithTagName(menuChildren[i], "A");
//       let id = getHash(tabLink.getAttribute("href"));
//       menuChildren[id] = tabLink;
//       contentDivs[id] = document.getElementById(id);
//       //   console.log(tabLink);
//       //   console.log(contentDivs[id]);

//       for (let id in tabLink) {
//         let i = 0;
//         menuItems.addEventListener("pointerdown", () => {
//           tabLink[id] = showTab;
//         });
//         menuItems.addEventListener("focus", () => {
//           tabLink[id] = function () {
//             this.blur();
//             if (i === 0) tabLink[id].className = "menu-btn.selected";
//           };
//         });
//       }
//     }
//   }

//   // Add .menu-btn--selected to home menu tab
//   // Add .tab-content--selected to home tab content
//   // Call eventListener for menu clicks to change tabs (need to write function)
// }

// function getFirstChildWithTagName(element, tagName) {
//   for (let i = 0; i < element.childNodes.length; i++) {
//     if (element.childNodes[i].nodeName === tagName)
//       return element.childNodes[i];
//   }
// }

// function getHash(url) {
//   let hashPos = url.lastIndexOf("#");
//   return url.substring(hashPos + 1);
// }

// function showTab() {
//   menuItems.addEventListener("pointerdown", () => {
//     let selectedId = getHash(tabLink.getAttribute("href"));

//     for (let id in contentDivs) {
//       if (id === selectedId) {
//         tabLinks[id].className = "menu-btn.selected";
//         contentDivs[id].className = "tab-content--selected";
//       } else {
//         tabLinks[id].className = "";
//         contentDivs[id].className = "tab-content";
//       }
//     }
//     console.log(tabLinks[id]);
//     console.log(contentDivs[id]);

//     return false; // stops browser following the link
//   });
// }

// // Code modified from the following tutorial: https://www.elated.com/javascript-tabs/
