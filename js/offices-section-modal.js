(function () {
  const modal = document.querySelector(".offices-section__modal");

  const modalCarousel = document.querySelector(".offices-section-carousel");

  function showCarousel() {
    modal.style.display = "block";
    modalCarousel.style.display = "flex";
  }

  document
    .querySelector("#modal-button")
    .addEventListener("click", showCarousel);

  function closeCarousel() {
    modal.style.display = "none";
  }

  document
    .querySelectorAll(".modal-close-button")[0]
    .addEventListener("click", closeCarousel);
})();