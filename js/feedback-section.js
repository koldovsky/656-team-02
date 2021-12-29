 (function () {
    const slides = [
        `<div class="feedback__slider-item">
            <div class="feedback__slider-foto">
              <img
                src="img/feedback-foto-woman.webp"
                alt="Young woman standing near the car"
                class="feedback__slider-foto-image"
              />
            </div>
            <p class="feedback__slider-person-name">Jane McCallan</p>
            <p class="feedback__slider-person-profession">
              Marketing Director at Pepsi Co.
            </p>
            <p class="feedback__slider-person-feedback-text">
              I am completely satisfied with the services of this company. I
              often rent cars with FASTCAR for business meetings, driving to
              work, etc. I am pleased with the excellent technical condition of
              the cars, favorable rental conditions. And the staff is always
              friendly.
            </p>
            <p class="feedback__slider-feedback-date">December 15, 2019</p>
          </div>`,
        `<div class="feedback__slider-item">
            <div class="feedback__slider-foto">
              <img
                src="img/feedback-foto-man1.webp"
                alt="Man sitting in front of the the car"
                class="feedback__slider-foto-image"
              />
            </div>
            <p class="feedback__slider-person-name">Daniel Gordons</p>
            <p class="feedback__slider-person-profession">CEO at MyVent</p>
            <p class="feedback__slider-person-feedback-text">
              When I was driving to one of the most important meetings in my
              life, my car broke down... Only a few hours remained, and a new
              car was urgently needed. Thanks to the FASTCAR specialists, I
              managed to quickly rent a luxury car. They immediately solved my
              problem.
            </p>
            <p class="feedback__slider-feedback-date">January 08, 2020</p>
          </div>`,
      `<div class="feedback__slider-item">
            <div class="feedback__slider-foto">
              <img
                src="img/feedback-foto-man2.webp"
                alt="Young man standing near the the car"
                class="feedback__slider-foto-image"
              />
            </div>
            <p class="feedback__slider-person-name">Elizabeth Smith</p>
            <p class="feedback__slider-person-profession">
              Director of Media at Legal Company
            </p>
            <p class="feedback__slider-person-feedback-text">
              I love sports cars and fast driving but I can’t buy such a car,
              it's too expensive. Therefore, sometimes I rent sports cars to
              enjoy the speed. I choose this company because of the attractive
              pricing policy and a wide selection of luxury vehicles.
            </p>
            <p class="feedback__slider-feedback-date">April 04, 2020</p>
          </div>`,
    
  ];
  let currentSlide = 0;
  function showCurrentSlide() {
    const slideContainer = document.querySelector(
      ".feedback__slider-slide"
    );
    slideContainer.innerHTML = slides[currentSlide];
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    showCurrentSlide();
  }

  function prevSlide() {
    currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
  }

  showCurrentSlide();

  document
    .querySelector(".feedback__slider__button.forward")
    .addEventListener("click", nextSlide);
  document
    .querySelector(".feedback__slider__button.back")
    .addEventListener("click", prevSlide);
  window.addEventListener("resize", showCurrentSlide);
})(); 