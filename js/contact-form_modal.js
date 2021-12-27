document.addEventListener('DOMContentLoaded', () => {
  let requestButton = document.getElementsByClassName('botton_request');

  let modal1 = document.getElementById('modal_form');

  let closeButton = modal1.getElementsByClassName('modal__close-button', 'modal__close-button_ok')[0];

  let tagBody = document.getElementsByTagName('body');

  requestButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    tagBody.classList.add('hidden');
  }

  closeButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
  }

  modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  };