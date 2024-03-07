import {
  currentPage,
  fullPageName,
  indexOfExtension,
  shortPageName,
  menuBtnStyle,
  getAnimationID,
  dropDownDiv,
  dropDownItems,
  menuChildrenDiv,
} from "./querySelectors";

// import { galleriesClickMenu, hideSubMenu, showSubMenu } from "./dropDown";

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

  console.log(menuBtnStyle);
  console.log(dropDownItems);
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
      resetSliderAnimation();
      resetIndexes();
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
  });
}

// export function changeTabs() {
//   menuLinks.forEach((link) => {
//     link.addEventListener("pointerdown", (e) => {
//       e.preventDefault();
//       console.log(e.target.dataset);
//       console.log(menuLinks.textContent);
//       console.log(menuLinks.outerText);
//       console.log(menuLinks.innerText);
//       console.log(menuLinks.innerHTML);
//       console.log(menuLinks.dataset);
//       if (e.target.dataset === menuLinks) {
//         // let hrefTag = e.target.href;
//         // let hrefTagText = hrefTag.substring(hrefTag.indexOf("#") + 1);
//         // console.log(hrefTagText);
//         console.log(e.target);

//         function selectMenuBtn() {
//           menuBtnStyle.forEach((btn) => {
//             if (hrefTagText === btn.dataset.tab) {
//               menuBtnStyle.forEach((btn) => {
//                 btn.classList.remove("selected");
//               });
//               btn.classList.add("selected");
//             } else if (btn.classList.contains("selected")) {
//               return;
//             }
//           });
//         }

//         function selectTabContent() {
//           tabContent.forEach((content) => {
//             if (hrefTagText === content.id) {
//               tabContent.forEach((content) => {
//                 if (content.classList.contains("selected")) {
//                   content.classList.remove("selected");
//                 }
//               });
//               content.classList.toggle("selected");

//               if (getAnimationID.animationID !== undefined) {
//                 resetSliderAnimation();
//                 resetIndexes();
//               }

//               // sliderBoxCtrl(hrefTagText);
//             }
//           });
//         }

//         if (hrefTagText === "galleries") {
//           selectMenuBtn();
//           galleriesClickMenu(hrefTagText);
//         } else if (hrefTagText.parentNode === dropDownContent) {
//           selectTabContent();
//           hideSubMenu();
//         } else {
//           selectMenuBtn();
//           selectTabContent();
//           hideSubMenu();
//         }
//       }
//     });
//   });
// }
