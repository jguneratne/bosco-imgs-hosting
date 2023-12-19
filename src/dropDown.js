import {
  dropDownDiv,
  dropDownCarat,
  dropDownContent,
  dropDownItems,
} from "./querySelectors";

export function galleriesClickMenu(hrefTagText) {
  console.log(hrefTagText);
  if (
    hrefTagText === "galleries" &&
    !dropDownContent.classList.contains("dropdown-content--active")
  ) {
    addActiveState();
  } else if (
    hrefTagText === "galleries" &&
    dropDownContent.classList.contains("dropdown-content--active")
  ) {
    removeActiveState();
  }
}

export function hideSubMenu() {
  removeActiveState();
}

function addActiveState() {
  dropDownCarat.classList.add("gal-arrow--active");
  dropDownContent.classList.add("dropdown-content--active");
  dropDownItems.forEach((item) => {
    item.classList.add("dropdown-item--active");
  });
}

function removeActiveState() {
  dropDownContent.classList.remove("dropdown-content--active");
  dropDownCarat.classList.remove("gal-arrow--active");
  dropDownItems.forEach((item) => {
    item.classList.remove("dropdown-item--active");
  });
}
