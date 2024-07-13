import {
  menuBar,
  menuIconDiv,
  menuIcon,
  shortPageName,
  menuBtnStyle,
  menuLinks,
  dropDownDiv,
  dropDownItems,
} from "./variables";

export function ctrlMenuVisibility() {
  menuIconDiv.addEventListener("pointerdown", (e) => {
    if (
      (e.target === menuIconDiv || e.target === menuIcon) &&
      !menuBar.classList.contains("active")
    ) {
      menuBar.classList.add("active");
      menuIcon.style.width = "1.5ch";
    } else if (
      menuBar.classList.contains("active") &&
      (e.target === menuIconDiv || e.target === menuIcon)
    ) {
      menuBar.classList.remove("active");
      menuIcon.style.width = "3ch";
    }
  });
}

export function ctrlTabHighlight() {
  menuBtnStyle.forEach((btn) => {
    if (btn.dataset.name === shortPageName) {
      console.log(btn.dataset.name);
      menuBtnStyle.forEach((btn) => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else if (
      shortPageName === "birds-gallery" ||
      shortPageName === "insects-gallery" ||
      shortPageName === "small-animals-gallery"
    ) {
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

export function addAriaCurrent() {
  console.log(menuLinks);
  menuLinks.forEach((link) => {
    if (link.dataset.name === shortPageName) {
      console.log(link.dataset.name);
      menuLinks.forEach((link) => {
        link.removeAttribute("aria-current", "page");
      });

      link.setAttribute("aria-current", "page");
    }
  });
}
