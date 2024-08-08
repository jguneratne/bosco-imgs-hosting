"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.galleriesClickMenu = galleriesClickMenu;
var _variables = require("./variables");
function galleriesClickMenu() {
  _variables.navigation.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter") && (e.target.innerText.toLowerCase() === "galleries" || e.target === _variables.dropDownCarat) && !_variables.dropDownMenu.classList.contains("dropdown-content--active")) {
      activateDropdown();
    } else if ((e.key === " " || e.key === "Enter") && (e.target.innerText.toLowerCase() === "galleries" || e.target === _variables.dropDownCarat) && _variables.dropDownMenu.classList.contains("dropdown-content--active")) {
      closeDropdown();
    }
  });
  _variables.navigation.addEventListener("pointerdown", e => {
    if ((e.target.innerText.toLowerCase() === "galleries" || e.target === _variables.dropDownCarat) && !_variables.dropDownMenu.classList.contains("dropdown-content--active")) {
      activateDropdown();
    } else if ((e.target === _variables.dropDownItems || e.target === _variables.dropDownCarat) && _variables.dropDownMenu.classList.contains("dropdown-content--active")) {
      console.log(e.target);
      closeDropdown();
    } else if ((e.target.innerText.toLowerCase() === "galleries" || e.target === _variables.dropDownCarat) && _variables.dropDownMenu.classList.contains("dropdown-content--active")) {
      closeDropdown();
      changeActiveState();
    }
  });
}
function activateDropdown() {
  _variables.dropDownCarat.classList.add("gal-arrow--active");
  _variables.dropDownMenu.classList.add("dropdown-content--active");
  _variables.dropDownItems.forEach(item => {
    item.classList.add("dropdown-item--active");
  });
  _variables.menuBtnStyle.forEach(btn => {
    console.log(btn.dataset.name);
    btn.classList.remove("selected");
    if (btn.dataset.name === "galleries") {
      btn.classList.add("selected");
    }
  });
}
function changeActiveState() {
  _variables.menuBtnStyle.forEach(btn => {
    if (btn.dataset.name === _variables.shortPageName) {
      btn.classList.add("selected");
      console.log(_variables.currentPage);
    } else if (btn.dataset.name !== _variables.shortPageName && (_variables.shortPageName === "birds-gallery" || _variables.shortPageName === "insects-gallery" || _variables.shortPageName === "small-animals-gallery")) {
      _variables.dropDownDiv.classList.add("selected");
    }
  });
}
function closeDropdown() {
  _variables.menuBtnStyle.forEach(btn => {
    btn.classList.remove("selected");
  });
  _variables.dropDownMenu.classList.remove("dropdown-content--active");
  _variables.dropDownCarat.classList.remove("gal-arrow--active");
  _variables.dropDownItems.forEach(item => {
    item.classList.remove("dropdown-item--active");
  });
}