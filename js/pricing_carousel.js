(function () {
    const pricingModalOne = document.querySelector('.pricing_cards_modal.one');
    const pricingModalTwo = document.querySelector('.pricing_cards_modal.two');
    const pricingModalThird = document.querySelector('.pricing_cards_modal.third');
    const contentModalOne = document.querySelector('.pricing_card_modal.one');
    const contentModalTwo = document.querySelector('.pricing_card_background_modal');
    const contentModalThird = document.querySelector('.pricing_card_modal.third');

    function showModalOne() {
        pricingModalOne.style.display = "block";
        contentModalOne.style.display = "block";
    }
    function showModalTwo() {
        pricingModalTwo.style.display = "block";
        contentModalTwo.style.display = "block";
    }
    function showModalThird() {
        pricingModalThird.style.display = "block";
        contentModalThird.style.display = "block";
    }

    document
        .querySelector('.pricing_card.one')
        .addEventListener('click', showModalOne);
    document
        .querySelector('.pricing_card_background')
        .addEventListener('click', showModalTwo);
    document
        .querySelector('.pricing_card.third')
        .addEventListener('click', showModalThird);
   
    function showModalCloseOne() {
        pricingModalOne.style.display = "none";
    }
    function showModalCloseTwo() {
        pricingModalTwo.style.display = "none";
    }
    function showModalCloseThird() {
        pricingModalThird.style.display = "none";
    }

    document.querySelector('.pricing_card_modal.one').addEventListener('click', showModalCloseOne);
    document.querySelector('.pricing_card_background_modal').addEventListener('click', showModalCloseTwo);
    document.querySelector('.pricing_card_modal.third').addEventListener('click', showModalCloseThird);
})();