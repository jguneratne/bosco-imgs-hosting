import {
  currentPage,
  menuBtnStyle,
  navigation,
  dropDownCarat,
  dropDownMenu,
  dropDownItems,
  shortPageName,
  dropDownDiv,
} from "./variables";

export function galleriesClickMenu() {
  navigation.addEventListener("keydown", (e) => {
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
      closeDropdown();
    }
  });

  navigation.addEventListener("pointerdown", (e) => {
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
    if (btn.dataset.name === shortPageName) {
      btn.classList.add("selected");
      console.log(currentPage);
    } else if (btn.dataset.name !== shortPageName) {
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
