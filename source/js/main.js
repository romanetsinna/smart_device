import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)


// Аккордеон

const boxes = Array.from(document.querySelectorAll('.accordion__box'));

if (boxes) {
  boxes.forEach((box) => {
    box.addEventListener('click', boxHandler);
  });
}

function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest('.accordion__box');
  if (currentBox) {
    if (!currentBox.classList.contains('active')) {
      hidePanels();
      currentBox.classList.add('active');
    } else {
      hidePanels();
    }
  }
}

function hidePanels() {
  let acc = document.querySelectorAll('.accordion__box');
  for (let i = 0; i < acc.length; i++) {
    acc[i].classList.remove('active');
  }
}

// Показать/Свернуть

let moreText = document.querySelector('.about__show-more');
let btnText = document.querySelector('.about__button');

if (moreText && btnText) {
  btnText.addEventListener('click', function (event) {
    event.preventDefault();
    moreText.classList.toggle('about__show-more');
    btnText.textContent = btnText.textContent === 'Подробнее' ? 'Свернуть' : 'Подробнее';
  });
}
