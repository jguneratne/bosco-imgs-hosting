import {
  currentPage,
  menuBtnStyle,
  dropDownCarat,
  dropDownDiv,
  dropDownMenu,
  dropDownItems,
  shortPageName,
} from "./variables";

export function galleriesClickMenu() {
  dropDownDiv.addEventListener("pointerdown", (e) => {
    if (
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === dropDownCarat) &&
      !dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      activateDropdown();
    } else if (
      (e.target === dropDownItems || e.target === dropDownCarat) &&
      dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      console.log(e.target);
      closeDropdown();
    } else if (
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === dropDownCarat) &&
      dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      closeDropdown();
      changeActiveState();
    }
  });

  dropDownDiv.addEventListener("keydown", (e) => {
    if (
      (e.key === " " || e.key === "Enter") &&
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === dropDownCarat) &&
      !dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      activateDropdown();
    } else if (
      (e.key === " " || e.key === "Enter") &&
      (e.target.innerText.toLowerCase() === "galleries" ||
        e.target === dropDownCarat) &&
      dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      console.log(e.target);
      closeDropdown();
      changeActiveState();
      if (e.target.dataset.name === "galleries") {
        e.target.blur();
      }
    }
  });
}

function activateDropdown() {
  dropDownCarat.classList.add("gal-arrow--active");
  dropDownMenu.classList.add("dropdown-content--active");
  dropDownItems.forEach((item) => {
    item.classList.add("dropdown-item--active");
  });

  menuBtnStyle.forEach((btn) => {
    console.log(btn.dataset.name);
    btn.classList.remove("selected");
    if (btn.dataset.name === "galleries") {
      btn.classList.add("selected");
    }
  });
}

function changeActiveState() {
  menuBtnStyle.forEach((btn) => {
    btn.classList.remove("selected");
    if (btn.dataset.name === shortPageName) {
      btn.classList.add("selected");
      console.log(currentPage);
    } else if (
      btn.dataset.name !== shortPageName &&
      (shortPageName === "birds-gallery" ||
        shortPageName === "insects-gallery" ||
        shortPageName === "small-animals-gallery" ||
        shortPageName === "pond-life-gallery" ||
        shortPageName === "urban-animals-gallery")
    ) {
      dropDownDiv.classList.add("selected");
    }
  });
}

function closeDropdown() {
  menuBtnStyle.forEach((btn) => {
    btn.classList.remove("selected");
  });
  dropDownMenu.classList.remove("dropdown-content--active");
  dropDownCarat.classList.remove("gal-arrow--active");
  dropDownItems.forEach((item) => {
    item.classList.remove("dropdown-item--active");
  });
}
