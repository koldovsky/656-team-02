(function () {
    document.querySelector('.burger_menu').addEventListener('click', function () {
        document.querySelector('.burger_menu span').classList.toggle('active');
        document.querySelector('.subheader_navigation_icons').classList.toggle('animate');
    });

    
})();