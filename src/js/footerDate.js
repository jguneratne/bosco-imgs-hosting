function getCurrentYear() {
  const date = new Date().getFullYear();
  const footerYear = document.querySelector(".year");

  footerYear.textContent = date;
}

document.addEventListener("DOMContentLoaded", () => {
  getCurrentYear();
});
