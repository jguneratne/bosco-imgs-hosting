import {
  shortPageName,
  menuBtnStyle,
  dropDownDiv,
  dropDownItems,
} from "./variables";

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
