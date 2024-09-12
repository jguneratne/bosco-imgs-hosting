import { ctrlMenuVisibility, addAriaCurrent } from "./navStyles";

import { galleriesClickMenu } from "./dropDown";

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("The page is loaded");
  ctrlMenuVisibility();
  addAriaCurrent();
  galleriesClickMenu();
});
