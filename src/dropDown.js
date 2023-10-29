import {
  dropDownDiv,
  dropDownCarat,
  dropDownContent,
  dropDownItems,
} from "./querySelectors";

export function showSubMenu() {
  dropDownDiv.addEventListener("pointerdown", (e) => {
    console.log(e.target);
    if (e.target.nodeName === "A" || e.target === dropDownCarat) {
      console.log("click");
      dropDownCarat.classList.toggle("gal-arrow--active");
      dropDownContent.classList.toggle("dropdown-content--active");
      dropDownItems.forEach((item) => {
        item.classList.toggle("dropdown-item--active");
      });
    }
  });
}
