'use strict';
// Объявляем переменные
const modalAdd = document.querySelector('.modal__add'),
  addAd = document.querySelector('.add__ad'),
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  modalSubmit = document.querySelector('.modal__submit'),
  modalItem = document.querySelector('.modal__item'),
  catalog = document.querySelector('.catalog');

//Вызов модального окна по клику мыши и отключение кнопки ПОТВЕРДИТЬ

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
});

// Вызов карточки с товаром

catalog.addEventListener('click', event => {
  const target = event.target;

  if(target.closest('.card')){
    modalItem.classList.remove('hide');
  }
});

// Закрытие модального окна по крестику и по свободному пространству, а также  сброс содержимого

modalAdd.addEventListener('click', event => {
  const target = event.target;

  if(target.classList.contains('modal__close') ||
    target === modalAdd ) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
  }
});

// Закрытие карточки с товаром по крестику и по свободному пространству

modalItem.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('modal__close') ||
    target === modalItem) {
    modalItem.classList.add('hide');
  }
});

// Закрытие модальных окон по клавише escape

document.addEventListener('keydown', event => {
  if(event.key === 'Escape'){
    modalAdd.classList.add('hide');
    modalItem.classList.add('hide');
  }
});



