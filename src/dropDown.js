import { dropDownMain, dropDownSub } from "./querySelectors";

export function showSubMenu() {
  dropDownMain.addEventListener("pointerdown", () => {
    console.log("click");
    dropDownSub.style.visibility = "visible";
  });
}
