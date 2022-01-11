(function() {
    function updateClock() {
        const clockContainer = document.querySelector('.footer-clock');
        clockContainer.innerText = new Date().toLocaleTimeString();
    }
    updateClock();
    setInterval(updateClock, 1000);
})();