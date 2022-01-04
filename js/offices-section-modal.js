(function () {
  const officesModal = document.querySelector(".offices-section__modal");

  const officesModalCarousel = document.querySelector(".offices-section-carousel");

  function showCarousel() {
    officesModal.style.display = "block";
    officesModalCarousel.style.display = "flex";
  }

  document
    .querySelector("#modal-button")
    .addEventListener("click", showCarousel);

  function closeCarousel() {
    officesModal.style.display = "none";
  }

  document.querySelector(".offices-section__modal").addEventListener("click", closeCarousel);
})();