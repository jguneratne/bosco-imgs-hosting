"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAriaCurrent = addAriaCurrent;
exports.ctrlMenuVisibility = ctrlMenuVisibility;
var _variables = require("./variables");
function ctrlMenuVisibility() {
  _variables.menuIconDiv.addEventListener("pointerdown", e => {
    if ((e.target === _variables.menuIconDiv || e.target === _variables.menuIcon) && !_variables.menuBar.classList.contains("active")) {
      _variables.menuBar.classList.add("active");
      _variables.menuIcon.style.width = _variables.newMenuIconWidth + "px";
      _variables.menuIcon.setAttribute("alt", "Menu Button: Click to hide menu options");
      ctrlTabHighlight();
    } else if (_variables.menuBar.classList.contains("active") && (e.target === _variables.menuIconDiv || e.target === _variables.menuIcon)) {
      _variables.menuBar.classList.remove("active");
      _variables.menuIcon.style.width = _variables.menuIconWidth + "px";
      _variables.menuIcon.setAttribute("alt", "Menu Button: Click to expand menu options");
    }
  });
  _variables.menuIconDiv.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && (e.target === _variables.menuIconDiv || e.target === _variables.menuIcon) && !_variables.menuBar.classList.contains("active")) {
      _variables.menuBar.classList.add("active");
      _variables.menuIcon.style.width = _variables.newMenuIconWidth + "px";
      _variables.menuIcon.setAttribute("alt", "Menu Button: Click to hide menu options");
      ctrlTabHighlight();
    } else if ((e.key === "Enter" || e.key === " ") && (e.target === _variables.menuIconDiv || e.target === _variables.menuIcon) && _variables.menuBar.classList.contains("active")) {
      _variables.menuBar.classList.remove("active");
      _variables.menuIcon.style.width = _variables.menuIconWidth + "px";
      _variables.menuIcon.setAttribute("alt", "Menu Button: Click to expand menu options");
    }
  });
}
function ctrlTabHighlight() {
  _variables.menuBtnStyle.forEach(btn => {
    if (btn.dataset.name === _variables.shortPageName) {
      console.log(btn.dataset.name);
      _variables.menuBtnStyle.forEach(btn => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else if (_variables.shortPageName === "birds-gallery" || _variables.shortPageName === "insects-gallery" || _variables.shortPageName === "small-animals-gallery") {
      showGalNavLink();
    }
  });
}
function showGalNavLink() {
  _variables.dropDownItems.forEach(item => {
    if (item.dataset.name === "birds-gallery" || item.dataset.name === "insects-gallery" || item.dataset.name === "small-animals-gallery") {
      _variables.menuBtnStyle.forEach(btn => {
        btn.classList.remove("selected");
      });
      _variables.dropDownDiv.classList.add("selected");
    }
  });
}
function addAriaCurrent() {
  // console.log(menuLinks);
  _variables.menuLinks.forEach(link => {
    if (link.dataset.name === _variables.shortPageName) {
      // console.log(link.dataset.name);
      _variables.menuLinks.forEach(link => {
        link.removeAttribute("aria-current", "page");
      });
      link.setAttribute("aria-current", "page");
    }
  });
}