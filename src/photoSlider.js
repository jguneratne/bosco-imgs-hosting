import {
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

// export function highlightCircles() {
//   let i = 0;

//   const selectCircleIcon = function () {
//     if (i === 0) {
//       circleIcons[i].classList.add("circle-icon--active");
//     } else if (i === circleIcons.length) {
//       circleIcons[i - 1].classList.remove("circle-icon--active");
//       circleIcons[0].classList.add("circle-icon--active");
//       i = 0;
//     } else {
//       circleIcons[i - 1].classList.remove("circle-icon--active");
//       circleIcons[i].classList.add("circle-icon--active");
//     }

//     i++;
//   };

//   setInterval(selectCircleIcon, 3000);
// }

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

export function rightArrowCtrl() {
  let i = 0;
  let j = 0;

  rightArrow.addEventListener("pointerdown", () => {
    if (
      i === 0 &&
      galleryImgs[i].classList.contains("picture--active") &&
      j === 0 &&
      circleIcons[j].classList.contains("circle-icon--active")
    ) {
      i = i + 1;
      j = j + 1;
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[i].classList.add("picture--active");
      circleIcons[j - 1].classList.remove("circle-icon--active");
      circleIcons[j].classList.add("circle-icon--active");
    } else if (i === 0 && j === 0) {
      galleryImgs[i].classList.add("picture--active");
      circleIcons[j].classList.add("circle-icon--active");
    } else if (i === galleryImgs.length && j === circleIcons.length) {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[0].classList.add("picture--active");
      circleIcons[j - 1].classList.remove("circle-icon--active");
      circleIcons[0].classList.add("circle-icon--active");
      i = 0;
      j = 0;
    } else {
      galleryImgs[i - 1].classList.remove("picture--active");
      galleryImgs[i].classList.add("picture--active");
      circleIcons[j - 1].classList.remove("circle-icon--active");
      circleIcons[j].classList.add("circle-icon--active");
    }

    i++;
    j++;
  });
}

export function leftArrowCtrl() {
  let i = 0;
  let j = 0;

  leftArrow.addEventListener("pointerdown", () => {
    if (
      i === 0 &&
      galleryImgs[i].classList.contains("picture--active") &&
      j === 0 &&
      circleIcons[j].classList.contains("circle-icon--active")
    ) {
      console.log(true);
      i = galleryImgs.length - 1;
      j = circleIcons.length - 1;
      galleryImgs[i].classList.add("picture--active");
      circleIcons[j].classList.add("circle-icon--active");
      galleryImgs[0].classList.remove("picture--active");
      circleIcons[0].classList.remove("circle-icon--active");
    } else {
      i = i - 1;
      j = j - 1;
      galleryImgs[i].classList.add("picture--active");
      circleIcons[j].classList.add("circle-icon--active");
      galleryImgs[i + 1].classList.remove("picture--active");
      circleIcons[j + 1].classList.remove("circle-icon--active");
    }
  });
}
