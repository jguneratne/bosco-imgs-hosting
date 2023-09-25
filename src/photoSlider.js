import {
  sliderBox,
  photoBox,
  galleryImgs,
  circleIcons,
  rightArrow,
  leftArrow,
} from "./querySelectors";

export function defaultGallerySetting() {
  let i = 0;
  let j = 0;
  galleryImgs[i].classList.add("picture--active");
  circleIcons[j].classList.add("circle-icon--active");
}

// export function sliderAnimation() {
//   console.log(galleryImgs);

//   let i = 0;

//   const advanceSlides = function () {
//     if (i === 0) {
//       galleryImgs[i].classList.add("picture--active");
//     } else if (i === galleryImgs.length) {
//       galleryImgs[i - 1].classList.remove("picture--active");
//       galleryImgs[0].classList.add("picture--active");
//       i = 0;
//     } else {
//       galleryImgs[i - 1].classList.remove("picture--active");
//       galleryImgs[i].classList.add("picture--active");
//     }

//     i++;
//   };

//   setInterval(advanceSlides, 3000);
// }

export function highlightCircles() {
  let i = 0;

  const selectCircleIcon = function () {
    if (i === 0) {
      circleIcons[i].classList.add("circle-icon--active");
    } else if (i === circleIcons.length) {
      circleIcons[i - 1].classList.remove("circle-icon--active");
      circleIcons[0].classList.add("circle-icon--active");
      i = 0;
    } else {
      circleIcons[i - 1].classList.remove("circle-icon--active");
      circleIcons[i].classList.add("circle-icon--active");
    }

    i++;
  };

  setInterval(selectCircleIcon, 3000);
}

export function clickCircles() {
  circleIcons.forEach((icon) => {
    icon.addEventListener("pointerdown", () => {
      const circleIconDiv = document.querySelector(".img-dots");
      const sliderBox = circleIconDiv.parentElement;
      const circleIconNum = icon.dataset.forNum;
      const photoToDisplay = sliderBox.querySelector(
        `picture[data-num="${circleIconNum}"]`
      );

      //   console.log(circleIconDiv);
      //   console.log(sliderBox);
      //   console.log(circleIconNum);
      //   console.log(photoToDisplay);

      circleIconDiv.querySelectorAll(".circle-icon").forEach((circle) => {
        circle.classList.remove("circle-icon--active");
      });

      sliderBox.querySelectorAll("picture").forEach((pic) => {
        pic.classList.remove("picture--active");
      });

      //icon.classList.add("circle-icon--active");
      photoToDisplay.classList.add("picture--active");
    });
  });
}

export function arrowCtrl() {
  let currentSlide = photoBox.querySelector(".picture--active");
  let nextSlide = currentSlide.nextElementSibling;
  let prevSlide = currentSlide.previousElementSibling;

  sliderBox.addEventListener("pointerdown", (e) => {
    if (e.target === rightArrow) {
      if (nextSlide === null) {
        nextSlide = galleryImgs[0];
      }

      currentSlide.classList.remove("picture--active");
      nextSlide.classList.add("picture--active");
      currentSlide = photoBox.querySelector(".picture--active");
      nextSlide = currentSlide.nextElementSibling;
      prevSlide = currentSlide.previousElementSibling;
    }

    if (e.target === leftArrow) {
      if (currentSlide === galleryImgs[0]) {
        prevSlide = galleryImgs[galleryImgs.length - 1];
      }

      currentSlide.classList.remove("picture--active");
      prevSlide.classList.add("picture--active");
      currentSlide = photoBox.querySelector(".picture--active");
      nextSlide = currentSlide.nextElementSibling;
      prevSlide = currentSlide.previousElementSibling;

      if (prevSlide === null) {
        prevSlide = galleryImgs[galleryImgs.length - 1];
      }
    }

    // console.log(currentSlide);
    console.log(nextSlide);
    console.log(prevSlide);
    // console.log(currentSlideIndex);
    // console.log(galleryImgs.length - 1);
  });
}
