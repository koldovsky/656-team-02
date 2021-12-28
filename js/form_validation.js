(function () {
const email = document.getElementById('mail');
email.addEventListener('input', function (event){
    if (email.validity.typeMismatch){
        email.setCustomValidity('Write correct email!');
    } else { 
        email.setCustomValidity("");
    }
});

const phone = document.getElementById('phone_number');
phone.addEventListener('input', function (event){
    if (phone.value === ''){
        phone.setCustomValidity('Write correct phone number!');
    } else { 
        phone.setCustomValidity("");
    }
});

})();