import "./style.css";

import { ctrlTabHighlight } from "./navStyles";

import { galleriesClickMenu } from "./dropDown";

console.log("photogallery");

// document.addEventListener("DOMContentLoaded", () => {
//   ctrlTabHighlight();
//   galleriesClickMenu();
// });

window.addEventListener("load", (e) => {
  console.log("The page is loaded");
  ctrlTabHighlight();
  galleriesClickMenu();
});
