(function () {
  const slides = [
    '<img class="images-container-image" src="img/buying-car.jfif" alt="Young couple buying a car">',
    '<img class="images-container-image" src="img/getting-keys.jfif" alt="Young woman siiting in a car ang getting keys">',
    '<img class="images-container-image" src="img/car-showroom.png" alt="Car showroom">',
    '<img class="images-container-image" src="img/young-couple-with-car.png" alt="Young couple near a car"></img>',
  ];
  let currentSlide = 0;
  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      ".offices-section-carousel__slide"
    );
    slideContainer.innerHTML = slides[currentSlide];
  }

  function nextSlide(ev) {
    ev.stopPropagation();
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showCurrentSlide();
  }

  function prevSlide(ev) {
    ev.stopPropagation();
    currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
  }

  showCurrentSlide();

  document
    .querySelector("button.offices-section-carousel__button.forward")
    .addEventListener("click", nextSlide);
  document
    .querySelector("button.offices-section-carousel__button.back")
    .addEventListener("click", prevSlide);
  window.addEventListener("resize", showCurrentSlide);
})();
