(function() {
    const slides = [
        '<div id="faq-slide-1" class="faq-slide"><p class="faq-slide-head">How can I rent a car with your service?</p><p class="faq-slide-text">You should come to our office or call us. Our specialist will help with the selection and make out the documents.</p></div>',
        '<div id="faq-slide-2" class="faq-slide"><p class="faq-slide-head">What is the minimum rental period?</p><p class="faq-slide-text">You can rent a car even for 1 day. The maximum period is not provided. We offer discounts for 10+ days of rental.</p></div>',
        '<div id="faq-slide-3" class="faq-slide"><p class="faq-slide-head">How do I pay for the rental period?</p><p class="faq-slide-text">Before you pick up the car, specify your credit card details. When you return the car, we charge the total amount.</p></div>',
        '<div id="faq-slide-4" class="faq-slide"><p class="faq-slide-head">How long does it take to pick up the car?</p><p class="faq-slide-text">You will have to wait no more than 20 minutes, and then you will be able to pick up the car wherever you want.</p></div>',
        '<div id="faq-slide-5" class="faq-slide"><p class="faq-slide-head">What if I want to extend the rental period?</p><p class="faq-slide-text">Just call our manager and ask to extend the rental period. The total amount will be charged from the card automatically.</p></div>',
        '<div id="faq-slide-6" class="faq-slide"><p class="faq-slide-head">Do you have any age or other restrictions?</p><p class="faq-slide-text">Each driver should have a valid driver`s license for the duration of the rental period and be at least age 18.</p></div>'
    ]
    
    let currentSlide = 0;
    
    function showCurrentSlide() {
    const slideContainer = document.querySelector('.faq-content-carousel-slide');
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
    
    document.querySelector('button.faq-content-carousel-slide-button.forvard').addEventListener('click', nextSlide);
    document.querySelector('button.faq-content-carousel-slide-button.back').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide); 
    })();