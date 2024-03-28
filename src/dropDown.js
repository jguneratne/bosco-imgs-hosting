import {
  currentPage,
  menuBtnStyle,
  navigation,
  dropDownCarat,
  dropDownMenu,
  dropDownItems,
  shortPageName,
} from "./variables";

export function galleriesClickMenu() {
  navigation.addEventListener("pointerdown", (e) => {
    if (
      e.target.innerText.toLowerCase() === "galleries" &&
      !dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      addActiveState();
    } else if (
      e.target === dropDownItems &&
      dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      console.log(e.target);
      removeActiveState();
    } else if (
      e.target.innerText.toLowerCase() === "galleries" &&
      dropDownMenu.classList.contains("dropdown-content--active")
    ) {
      removeActiveState();
      changeActiveState();
    }
  });
}

function addActiveState() {
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
    }
  });
}

function removeActiveState() {
  menuBtnStyle.forEach((btn) => {
    btn.classList.remove("selected");
  });
  dropDownMenu.classList.remove("dropdown-content--active");
  dropDownCarat.classList.remove("gal-arrow--active");
  dropDownItems.forEach((item) => {
    item.classList.remove("dropdown-item--active");
  });
}
