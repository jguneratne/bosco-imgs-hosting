import {
  shortPageName,
  menuBtnStyle,
  dropDownDiv,
  dropDownItems,
} from "./variables";

export function ctrlTabHighlight() {
  menuBtnStyle.forEach((btn) => {
    if (btn.dataset.name === shortPageName) {
      console.log(btn.dataset.name);
      menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else {
      showGalNavLink();
    }
  });
}

function showGalNavLink() {
  dropDownItems.forEach((item) => {
    if (
      item.dataset.name === "birds-gallery" ||
      item.dataset.name === "insects-gallery" ||
      item.dataset.name === "small-animals-gallery"
    ) {
      menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      dropDownDiv.classList.add("selected");
    }
  });
}
