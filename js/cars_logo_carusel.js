(function() {
    const carSlides = [
        '<div class="brand_carusel_photo"><img src="img/logo_ford.png" alt="Logo ford"></div>',
        '<div class="brand_carusel_photo"><img src="img/logo_honda.png" alt="Logo honda"></div>',
        '<div class="brand_carusel_photo"><img src="img/logo_bmv.png" alt="Logo BMV"></div>',
        '<div class="brand_carusel_photo"><img src="img/logo_audi.png" alt="Logo audi"></div>'
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.brand_carusel_photos');
        slideContainer.innerHTML = carSlides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= carSlides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += carSlides[secondSlide];
            if (window.innerWidth > 1000) {
                const thirdSlide = secondSlide + 1 >= carSlides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += carSlides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= carSlides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }
    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? carSlides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }
    // setInterval (nextSlide, 1000)
    showCurrentSlide();

    document.document.querySelector('manufacture_carusel_btn_forvard').addEventListener('click', nextSlide);
    document.document.querySelector('manufacture_carusel_btn_back').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);

})();