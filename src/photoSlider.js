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

export function clickCircles() {
  circleNav.addEventListener("pointerdown", (e) => {
    setIndex.targetIndex = e.target.dataset.circle;
    console.log(setIndex.targetIndex);

    slidePosition.currentSlidePosition.classList.remove("picture--active");
    circlePosition.currentCirclePosition.classList.remove(
      "circle-icon--active"
    );

    slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
    console.log(slidePosition.currentSlidePosition);
    slidePosition.currentSlidePosition.classList.add("picture--active");

    circlePosition.currentCirclePosition = circleIcons[setIndex.targetIndex];
    console.log(circlePosition.currentCirclePosition);
    circlePosition.currentCirclePosition.classList.add("circle-icon--active");

    if (
      slidePosition.currentSlidePosition ===
        galleryImgs[galleryImgs.length - 1] &&
      circlePosition.currentCirclePosition ===
        circleIcons[circleIcons.length - 1]
    ) {
      slidePosition.nextSlidePosition = galleryImgs[0];
      slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
      circlePosition.nextCirclePosition = circleIcons[0];
      circlePosition.prevCirclePosition = circleIcons[setIndex.targetIndex - 1];

      // console.log(slidePosition.currentSlidePosition);
      // console.log(slidePosition.prevSlidePosition);
      // console.log(slidePosition.nextSlidePosition);
      // console.log(circlePosition.currentCirclePosition);
      // console.log(circlePosition.prevCirclePosition);
      // console.log(circlePosition.nextCirclePosition);
    } else if (
      slidePosition.currentSlidePosition === galleryImgs[0] &&
      circlePosition.currentCirclePosition === circleIcons[0]
    ) {
      // console.log(setIndex.targetIndex);
      // console.log(slidePosition.currentSlidePosition);

      slidePosition.nextSlidePosition = galleryImgs[0 + 1];
      // console.log(slidePosition.nextSlidePosition);

      slidePosition.prevSlidePosition = galleryImgs[galleryImgs.length - 1];
      // console.log(slidePosition.prevSlidePosition);

      circlePosition.nextCirclePosition = circleIcons[0 + 1];
      // console.log(circlePosition.nextCirclePosition);

      circlePosition.prevCirclePosition = circleIcons[circleIcons.length - 1];
      // console.log(circlePosition.currentCirclePosition);
      // console.log(circlePosition.prevCirclePosition);
    } else {
      slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
      slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
      circlePosition.nextCirclePosition = circleIcons[setIndex.targetIndex + 1];
      circlePosition.prevCircle = circleIcons[setIndex.targetIndex - 1];
    }
  });
}

export function arrowCtrl() {
  sliderBox.addEventListener("pointerdown", (e) => {
    if (e.target === rightArrow) {
      if (setIndex.targetIndex === galleryImgs.length - 1) {
        slidePosition.nextSlidePosition = galleryImgs[0];
        circlePosition.nextCirclePosition = circleIcons[0];
      }

      slidePosition.currentSlidePosition.classList.remove("picture--active");
      slidePosition.nextSlidePosition.classList.add("picture--active");
      circlePosition.currentCirclePosition.classList.remove(
        "circle-icon--active"
      );
      circlePosition.nextCirclePosition.classList.add("circle-icon--active");

      setIndex.targetIndex++;
      console.log(setIndex.targetIndex);

      if (setIndex.targetIndex > galleryImgs.length - 1) {
        resetIndexes();
      } else {
        slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
        slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
        slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
        circlePosition.currentCirclePosition =
          circleIcons[setIndex.targetIndex];
        circlePosition.nextCirclePosition =
          circleIcons[setIndex.targetIndex + 1];
        circlePosition.prevCirclePosition =
          circleIcons[setIndex.targetIndex - 1];
      }
    }

    if (e.target === leftArrow) {
      if (
        slidePosition.currentSlidePosition === galleryImgs[0] &&
        circlePosition.currentCirclePosition === circleIcons[0]
      ) {
        slidePosition.prevSlide = galleryImgs[galleryImgs.length - 1];
        circlePosition.prevCircle = circleIcons[circleIcons.lengh - 1];

        slidePosition.currentSlidePosition.classList.remove("picture--active");
        circlePosition.currentCirclePosition.classList.remove(
          "circle-icon--active"
        );

        setIndex.targetIndex = galleryImgs.length - 1;

        slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
        slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
        slidePosition.nextSlidePosition = galleryImgs[0];
        circlePosition.currentCirclePosition =
          circleIcons[setIndex.targetIndex];
        circlePosition.prevCirclePosition =
          circleIcons[setIndex.targetIndex - 1];
        circlePosition.nextCirclePosition = circleIcons[0];

        slidePosition.currentSlidePosition.classList.add("picture--active");
        circlePosition.currentCirclePosition.classList.add(
          "circle-icon--active"
        );
      } else {
        slidePosition.currentSlidePosition.classList.remove("picture--active");
        slidePosition.prevSlidePosition.classList.add("picture--active");
        circlePosition.currentCirclePosition.classList.remove(
          "circle-icon--active"
        );
        circlePosition.prevCirclePosition.classList.add("circle-icon--active");

        setIndex.targetIndex--;

        slidePosition.currentSlidePosition = galleryImgs[setIndex.targetIndex];
        slidePosition.nextSlidePosition = galleryImgs[setIndex.targetIndex + 1];
        slidePosition.prevSlidePosition = galleryImgs[setIndex.targetIndex - 1];
        circlePosition.currentCirclePosition =
          circleIcons[setIndex.targetIndex];
        circlePosition.nextCirclePosition =
          circleIcons[setIndex.targetIndex + 1];
        circlePosition.prevCirclePosition =
          circleIcons[setIndex.targetIndex - 1];
      }
    }
  });
}

function resetIndexes() {
  setIndex.targetIndex = 0;
  slidePosition.currentSlide = galleryImgs[setIndex.currentIndex];
  slidePosition.nextSlide = galleryImgs[setIndex.currentIndex + 1];
  slidePosition.prevSlide = galleryImgs[setIndex.currentIndex - 1];
  circlePosition.currentCircle = circleIcons[setIndex.currentIndex];
  circlePosition.nextCircle = circleIcons[setIndex.currentIndex + 1];
  circlePosition.prevCircle = circleIcons[setIndex.currentIndex - 1];
}
