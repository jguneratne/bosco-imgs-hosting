export default function sliderAnimation() {
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
