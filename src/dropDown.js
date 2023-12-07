import {
  dropDownDiv,
  dropDownCarat,
  dropDownContent,
  dropDownItems,
} from "./querySelectors";

import { menuLinks } from "./querySelectors";

export function showSubMenu(hrefTagText) {
  dropDownDiv.addEventListener("pointerdown", (e) => {
    console.log(hrefTagText);
    console.log(e.currentTarget);

    if (dropDownContent.classList.contains("dropdown-content--active")) {
      dropDownContent.classList.toggle("dropdown-content--active");
      dropDownCarat.classList.toggle("gal-arrow--active");
      dropDownItems.forEach((item) => {
        item.classList.toggle("dropdown-item--active");
      });
    } else {
      e.preventDefault();
      dropDownCarat.classList.toggle("gal-arrow--active");
      dropDownContent.classList.toggle("dropdown-content--active");
      dropDownItems.forEach((item) => {
        item.classList.toggle("dropdown-item--active");
      });
    }

    // if ( e.currentTarget === dropDownDiv &&
    //   hrefTagText === "galleries" &&
    //   (e.target.nodeName === "A" || e.target === dropDownCarat)
    // ) {
    //   e.preventDefault();
    //   dropDownCarat.classList.toggle("gal-arrow--active");
    //   dropDownContent.classList.toggle("dropdown-content--active");
    //   dropDownItems.forEach((item) => {
    //     item.classList.toggle("dropdown-item--active");
    //   });
    // } else if (dropDownContent.classList.contains("dropdown-content--active")) {
    //   dropDownContent.classList.toggle("dropdown-content--active");
    //   dropDownCarat.classList.toggle("gal-arrow--active");
    //   dropDownItems.forEach((item) => {
    //     item.classList.toggle("dropdown-item--active");
    //   });
    // }
  });
}
