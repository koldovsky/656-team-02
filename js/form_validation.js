(function () {
const email = document.getElementById('mail');
email.addEventListener('input', function (event){
    if (email.validity.typeMismatch){
        email.setCustomValidity('Write correct email!');
    } else { 
        email.setCustomValidity("");
    }
});
})();