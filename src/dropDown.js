import {
  dropDownDiv,
  dropDownBtn,
  dropDownCarat,
  dropDownContent,
  dropDownItems,
} from "./querySelectors";

export function showSubMenu() {
  dropDownDiv.addEventListener("pointerdown", (e) => {
    if (e.target === dropDownBtn) {
      console.log("click");
      dropDownDiv.classList.toggle("dropdown-div--active");
      dropDownBtn.classList.toggle("dropdown-btn--active");
      dropDownCarat.classList.toggle("gal-arrow--active");
      dropDownContent.classList.toggle("dropdown-content--active");
      dropDownItems.forEach((item) => {
        item.classList.toggle("dropdown-item--active");
      });
    }
  });
}
