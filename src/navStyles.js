import {
  menuBar,
  menuIconDiv,
  menuIcon,
  menuIconWidth,
  newMenuIconWidth,
  shortPageName,
  menuBtnStyle,
  menuLinks,
  homeLinkFocus,
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
      menuIcon.style.width = newMenuIconWidth + "px";
      menuIcon.setAttribute("alt", "Menu Button: Click to hide menu options");
    } else if (
      menuBar.classList.contains("active") &&
      (e.target === menuIconDiv || e.target === menuIcon)
    ) {
      menuBar.classList.remove("active");
      menuIcon.style.width = menuIconWidth + "px";
      menuIcon.setAttribute("alt", "Menu Button: Click to expand menu options");
    }
  });

  menuIconDiv.addEventListener("keydown", (e) => {
    if (
      (e.key === "Enter" || e.key === " ") &&
      (e.target === menuIconDiv || e.target === menuIcon) &&
      !menuBar.classList.contains("active")
    ) {
      menuBar.classList.add("active");
      menuIcon.style.width = newMenuIconWidth + "px";
      menuIcon.setAttribute("alt", "Menu Button: Click to hide menu options");
      ctrlTabHighlight();
      giveHomeLinkFocus();
    } else if (
      (e.key === "Enter" || e.key === " ") &&
      (e.target === menuIconDiv || e.target === menuIcon) &&
      menuBar.classList.contains("active")
    ) {
      menuBar.classList.remove("active");
      menuIcon.style.width = menuIconWidth + "px";
      menuIcon.setAttribute("alt", "Menu Button: Click to expand menu options");
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

export function giveHomeLinkFocus() {
  menuIconDiv.blur();
  homeLinkFocus.focus({ focusVisible: true });
  console.log(document.activeElement);
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
  // console.log(menuLinks);
  menuLinks.forEach((link) => {
    if (link.dataset.name === shortPageName) {
      // console.log(link.dataset.name);
      menuLinks.forEach((link) => {
        link.removeAttribute("aria-current", "page");
      });

      link.setAttribute("aria-current", "page");
    }
  });
}
