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

boxes.forEach((box) => {
  box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
  hidePanels();
  e.preventDefault();
  let currentBox = e.target.closest('.accordion__box');
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.add('active');
  if (currentBox.classList.contains('active')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
  } else {
    currentContent.style.maxHeight = 0;
  }
}

function hidePanels() {
  let acc = document.querySelectorAll('.accordion__box');
  let accPanel = document.querySelectorAll('.accordion__content');
  for (let i = 0; i < accPanel.length; i++) {
    accPanel[i].style.maxHeight = null;
    acc[i].classList.remove('active');
  }
}

// Показать/Свернуть

let moreText = document.querySelector('.about__show-more');
let btnText = document.querySelector('.about__button');

btnText.addEventListener('click', function (event) {
  event.preventDefault();
  moreText.classList.toggle('about__show-more');
  btnText.textContent = btnText.textContent === 'Подробнее' ? 'Свернуть' : 'Подробнее';
});


// Плавный скролл

const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// Маска для ввода телефона

// function maskPhone(selector, masked = '+7 (___) ___-__-__') {
//   const elems = document.querySelectorAll('.tel');

//   function mask(event) {
//     const keyCode = event.keyCode;
//     const template = masked;
//     let def = template.replace(/\D/g, '');
//     let val = event.target.value.replace(/\D/g, '');
//     let i = 0;
//     let newValue = template.replace(/[_\d]/g, function (a) {
//       return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
//     });
//     i = newValue.indexOf('_');
//     if (i !== -1) {
//       newValue = newValue.slice(0, i);
//     }
//     let reg = template.substr(0, event.target.value.length).replace(/_+/g,
//         function (a) {
//           return '\\d{1,' + a.length + '}';
//         }).replace(/[+()]/g, '\\$&');
//     reg = new RegExp('^' + reg + '$');
//     if (!reg.test(event.target.value) || event.target.value.length < 5 || keyCode > 47 && keyCode < 58) {
//       event.target.value = newValue;
//     }
//     if (event.type === 'blur' && event.target.value.length < 5) {
//       event.target.value = '';
//     }
//   }

//   for (const elem of elems) {
//     elem.addEventListener('input', mask);
//     elem.addEventListener('focus', mask);
//     elem.addEventListener('blur', mask);
//   }
// }

// maskPhone();
