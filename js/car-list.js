(function(){
    const cars=[
        {
            title:"BMW i8",
            description:"This car is for true speed fans! If you love a fast ride, this car is for you! Feel all its force!",
            image:"img/bmw.png"
        },
        {
            title:"Ford Everest",
            description:"This SUV is perfect for both the city and off-road. It has a spacious baggage compartment.",
            image:"img/ford.png"
        },
        {
            title:"Lexus SX350"
            description:"It's an elegant and comfortable business class car. Perfect for driving to a business meeting.",
            image:"img/lexus_sx.png"
        }
    ];
    function renderCars(cars){
        const carsContainer = document.querySelector('.car_show');
        for(const car of cars){
        carsContainer.innerHTML +=
        `<article class="bmw">
        <img class="bmw_img" src="${car.image}" alt="${car.title}">
        <h3 class="bmw_title">${car.title}</h3>
        <p class="bmw_description">${car.description}</p>;`;

        }
    }
    renderCars(cars);
})