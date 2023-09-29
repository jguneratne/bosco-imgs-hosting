import {
  sliderBox,
  photoBox,
  galleryImgs,
  circleNav,
  circleIcons,
  rightArrow,
  leftArrow,
  setIndex,
  slidePosition,
  circlePosition,
} from "./querySelectors";

export function defaultGallerySetting() {
  let i = 0;
  let j = 0;
  galleryImgs[i].classList.add("picture--active");
  circleIcons[j].classList.add("circle-icon--active");
}

export function sliderAnimation() {
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

// export function clickCircles() {
//   circleNav.addEventListener("pointerdown", (e) => {
//     setIndex.targetIndex = e.target.dataset.circle;
//     console.log(setIndex.targetIndex);

//     slidePosition.currentSlidePosition.classList.remove("picture--active");
//     circlePosition.currentCirclePosition.classList.remove(
//       "circle-icon--active"
//     );

//     slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
//     // console.log(slidePosition.currentSlidePosition);
//     slidePosition.currentSlidePosition.classList.add("picture--active");

//     circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
//     // console.log(circlePosition.currentCirclePosition);
//     circlePosition.currentCirclePosition.classList.add("circle-icon--active");

//     if (
//       // slidePosition.currentSlidePosition ===
//       //   galleryImgs[galleryImgs.length - 1] &&
//       // circlePosition.currentCirclePosition ===
//       //   circleIcons[circleIcons.length - 1]
//       setIndex.targetIndex ===
//       galleryImgs.length - 1
//     ) {
//       slidePosition.nextSlidePosition = galleryImgs[0];
//       slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
//       circlePosition.nextCirclePosition = circleIcons[0];
//       circlePosition.prevCirclePosition = circleIcons[setIndex.targetIndex - 1];

//       // console.log(slidePosition.currentSlidePosition);
//       // console.log(slidePosition.prevSlidePosition);
//       // console.log(slidePosition.nextSlidePosition);
//       // console.log(circlePosition.currentCirclePosition);
//       // console.log(circlePosition.prevCirclePosition);
//       // console.log(circlePosition.nextCirclePosition);
//     } else if (
//       // slidePosition.currentSlidePosition ===
//       //   galleryImgs[setIndex.targetIndex] &&
//       // circlePosition.currentCirclePosition === circleIcons[setIndex.targetIndex]
//       setIndex.targetIndex === 0
//     ) {
//       // console.log(setIndex.targetIndex);

//       resetIndexes();
//       console.log(slidePosition.currentSlidePosition);
//       console.log(slidePosition.nextSlidePosition);
//       console.log(slidePosition.prevSlidePosition);
//       console.log(circlePosition.nextCirclePosition);
//       console.log(circlePosition.currentCirclePosition);
//       console.log(circlePosition.prevCirclePosition);
//     } else {
//       slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
//       slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
//       circlePosition.nextCirclePosition = circleIcons[setIndex.targetIndex + 1];
//       circlePosition.prevCircle = circleIcons[setIndex.targetIndex - 1];
//     }
//   });
// }

export function arrowCtrl() {
  sliderBox.addEventListener("pointerdown", (e) => {
    if (e.target === rightArrow) {
      slidePosition.currentSlidePosition.classList.remove("picture--active");
      circlePosition.currentCirclePosition.classList.remove(
        "circle-icon--active"
      );

      setIndex.targetIndex++;

      handleIndexes();

      slidePosition.currentSlidePosition.classList.add("picture--active");
      circlePosition.currentCirclePosition.classList.add("circle-icon--active");

      console.log(slidePosition.currentSlidePosition);
      console.log(slidePosition.prevSlidePosition);
      console.log(slidePosition.nextSlidePosition);
      console.log(circlePosition.currentCirclePosition);
      console.log(circlePosition.prevCirclePosition);
      console.log(circlePosition.nextCirclePosition);
    }

    if (e.target === leftArrow) {
      slidePosition.currentSlidePosition.classList.remove("picture--active");
      circlePosition.currentCirclePosition.classList.remove(
        "circle-icon--active"
      );

      setIndex.targetIndex--;

      handleIndexes();

      slidePosition.currentSlidePosition.classList.add("picture--active");
      circlePosition.currentCirclePosition.classList.add("circle-icon--active");

      console.log(slidePosition.currentSlidePosition);
      console.log(slidePosition.prevSlidePosition);
      console.log(slidePosition.nextSlidePosition);
      console.log(circlePosition.currentCirclePosition);
      console.log(circlePosition.prevCirclePosition);
      console.log(circlePosition.nextCirclePosition);
    }
  });
}

function handleIndexes() {
  if (setIndex.targetIndex < 0) {
    setIndex.targetIndex = galleryImgs.length - 1;
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[0];
    slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[0];
    circlePosition.prevCirclePosition = circleIcons[setIndex.targetIndex - 1];
  } else if (setIndex.targetIndex === 0) {
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition = galleryImgs[galleryImgs.length - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[setIndex + 1];
    circlePosition.prevCirclePosition = circleIcons[circleIcons.lengh - 1];
  } else if (setIndex.targetIndex > galleryImgs.length - 1) {
    setIndex.targetIndex = 0;
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition = galleryImgs[galleryImgs.length - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[setIndex.targetIndex + 1];
    circlePosition.prevCirclePosition = circleIcons[circleIcons.length - 1];
  } else {
    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
    slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    circlePosition.nextCirclePosition = circleIcons[setIndex.targetIndex + 1];
    circlePosition.prevCirclePosition = circleIcons[setIndex.targetIndex - 1];
  }
}
