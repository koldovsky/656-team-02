(function () {
  document.addEventListener('DOMContentLoaded',function() {
  const requestButton = document.querySelector('.button_request');

  const modalForm = document.querySelector('.modal');
  
  const closeButton = modalForm.querySelector('.modal__close-button_ok');

  requestButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalForm.classList.add('modal_active');
  });

  closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalForm.classList.remove('modal_active');
  });
});
})() 

 