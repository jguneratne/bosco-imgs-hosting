export function sliderAnimation() {
  const galleryImgs = Array.from(document.querySelectorAll("picture"));

  console.log(galleryImgs);

  let i = 0;

  const advanceSlides = function () {
    if (i === 0) {
      galleryImgs[i].classList.add("picture--active");
    } else if (i === galleryImgs.length) {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[0].classList.add("picture--active");
      i = 0;
    } else {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[i].classList.add("picture--active");
    }

    i++;
  };

  setInterval(advanceSlides, 3000);
}

export function highlightCircles() {
  const circleIcons = Array.from(document.querySelectorAll(".circle-icon"));

  let i = 0;

  const selectCircleIcon = function () {
    if (i === 0) {
      circleIcons[i].classList.add("circle-iconn--active");
    } else if (i === circleIcons.length) {
      circleIcons[i - 1].classList.remove("circle-iconn--active");
      circleIcons[0].classList.add("circle-iconn--active");
      i = 0;
    } else {
      circleIcons[i - 1].classList.remove("circle-iconn--active");
      circleIcons[i].classList.add("circle-iconn--active");
    }

    i++;
  };

  setInterval(selectCircleIcon, 3000);
}
