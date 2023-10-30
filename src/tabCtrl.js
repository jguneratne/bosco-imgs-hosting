import { menuChildren, contentDivs } from "./querySelectors";
import { showSubMenu } from "./dropDown";

export function initializeTabs() {
  for (let i = 0; i < menuChildren.length; i++) {
    if (menuChildren[i].nodeName === "LI") {
      let tabLink = getFirstChildWithTagName(menuChildren[i], "A");
      let id = getHash(tabLink.getAttribute("href"));
      menuChildren[id] = tabLink;
      contentDivs[id] = document.getElementById(id);
      //   console.log(tabLink);
      //   console.log(contentDivs[id]);
    }
  }

  // Add .menu-btn--selected to home menu tab
  // Add .tab-content--selected to home tab content
  // Call eventListener for menu clicks to change tabs (need to write function)
}

function getFirstChildWithTagName(element, tagName) {
  for (var i = 0; i < element.childNodes.length; i++) {
    if (element.childNodes[i].nodeName === tagName)
      return element.childNodes[i];
  }
}

function getHash(url) {
  let hashPos = url.lastIndexOf("#");
  return url.substring(hashPos + 1);
}

function showTab() {
  let selectedId = getHash(this.getAttribute("href"));

  for (let id in contentDivs) {
    if (id === selectedId) {
      tabLinks[id].className = "menu-btn.selected";
      contentDivs[id].className = "tab-content--selected";
    } else {
      tabLinks[id].className = "";
      contentDivs[id].className = "tab-content";
    }
  }

  return false; // stops browser following the link
}

// Code modified from the following tutorial: https://www.elated.com/javascript-tabs/
