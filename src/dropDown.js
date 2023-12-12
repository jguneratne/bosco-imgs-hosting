import {
  dropDownDiv,
  dropDownCarat,
  dropDownContent,
  dropDownItems,
} from "./querySelectors";

export function galleriesClickMenu() {
  dropDownDiv.addEventListener("focusin", (e) => {
    if (
      (e.target.nodeName === "A" || e.target === dropDownCarat) &&
      !dropDownContent.classList.contains("dropdown-content--active")
    ) {
      addActiveState();
    } else if (
      (e.target.nodeName === "A" || e.target === dropDownCarat) &&
      dropDownContent.classList.contains("dropdown-content--active")
    ) {
      removeActiveState();
    }
  });
}

export function showSubMenu() {
  dropDownDiv.addEventListener("focusin", () => {
    addActiveState();
  });
}

export function hideSubMenu() {
  dropDownDiv.addEventListener("focusout", () => {
    removeActiveState();
  });
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
