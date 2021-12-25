(function() {
    const carSlides = [
        '<div class="brand_carusel_photo"><img src="img/logo_ford.png" alt="Logo ford"></div>',
        '<div class="brand_carusel_photo"><img src="img/logo_honda.png" alt="Logo honda"></div>',
        '<div class="brand_carusel_photo"><img src="img/logo_bmv.png" alt="Logo BMV"></div>',
        '<div class="brand_carusel_photo"><img src="img/logo_audi.png" alt="Logo audi"></div>'
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.section_manufactures_brand_carusel');
        slideContainer.innerHTML = carSlides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= carSlides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += carSlides[secondSlide];
            if (window.innerWidth > 900) {
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

    showCurrentSlide();

    document.querySelector('manufacyure_carusel_btn_next').addEventListener('click', nextSlide);
    document.querySelector('manufacyure_carusel_btn_prev').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);

})()