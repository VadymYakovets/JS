'use strict'


// ------------------------------------------ 01 -------------------------------------
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const btn = document.querySelector('.button');

// // const clickBtnCnt = () => btn.textContent++;

// const clickBtnCnt = function () {
//   let clickCnt = btn.textContent ++;
// }

// btn.addEventListener ('click', clickBtnCnt);

// ------------------------------------------ 02 -------------------------------------

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

// const calc = document.querySelector('.calc')
// const userInput = calc.querySelectorAll('input');
// const btn = calc.querySelector('button');
// const result = calc.querySelector('.result');

// const sum = function () {
//   let sum = 0;
//   for (let i = 0; i < userInput.length; i++) {
//     sum = sum + Number(userInput[i].value);
//   }
//  result.textContent = sum; 
// }

// btn.addEventListener('click', sum);


// ------------------------------------------ 03 -------------------------------------

/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/

// const btnUp = document.querySelector('.js-add');
// const btnDwn = document.querySelector('.js-sub');
// const result = document.querySelector('.value');

// const btnClickUp = () => result.textContent++;

// const btnClickDwn = function () {
//   if (result.textContent > 0) {
//     result.textContent--;
//   }
// }


// btnUp.addEventListener ('click', btnClickUp);
// btnDwn.addEventListener('click', btnClickDwn);


// const btn = document.querySelectorAll('.btn');
// const resultUp = () => result.textContent++;
// btn.addEventListener('click', resultUp)

// ------------------------------------------ 04 -------------------------------------

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/

// const form = document.querySelector('.question-form');
// const userInputs = form.querySelectorAll('input');
// const result = document.querySelector('.result');

// const btnClick = function (event) {
//   event.preventDefault();
//   let inputArr = Array.from(userInputs);
//   let checked = inputArr.filter(num => num.checked);
//   let resultInput = checked[0].value;
//   result.textContent = `Result: ${resultInput.toUpperCase()}`;
// }

// form.addEventListener('submit', btnClick);

// ------------------------------------------ 05 -------------------------------------

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/

// const imgList = document.querySelector('.images');

// imgList.addEventListener('click', btnClick);

// function btnClick(event) {
//   event.preventDefault();
//   const target = event.target;
//   return alert(`Image SRC: ${target.src}`);
// }

// ------------------------------------------ 06 -------------------------------------

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

// const ulList = document.querySelector('.list');

// ulList.addEventListener('click', btnClick);

// function btnClick (event) {
//   event.preventDefault();
//   const target = event.target;
//   console.log('target :', target);
//   const nodeName = target.nodeName;
//   console.log('nodeName :',nodeName);
//   const parent = target.parentNode;
//   console.log('parent :', parent)

//   if(nodeName === 'BUTTON') {
//     parent.remove();
//   }
// }

// ------------------------------------------ 07 -------------------------------------

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/

// const userInput = document.querySelector('.inputs')

// userInput.addEventListener('mouseout', btnClick);

// function btnClick (event) {
//   event.preventDefault();
//   // const target = event.target;
//   // console.log(target);
//   const inputValue = userInput.nodeValue;
//   console.log(inputValue);
// }

// ------------------------------------------ 08 -------------------------------------
// ------------------------------------------ 09 -------------------------------------

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
    
  
  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.
    
    При клике на кнопку показа модального окна должен вызываться 
    метод show или toggle. Соответственно при для закрытия 
    окна hide либо toggle.
*/

// const openModalBtn = document.querySelector('.js-open-modal');
// const modal = document.querySelector('.js-modal-backdrop');

// const closeModalBtn = document.querySelector('.close-btn');

// openModalBtn.addEventListener('click', openModal);
// closeModalBtn.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);


// function openModal () {
//   modal.classList.remove('modal-hidden');
// }

// function closeModal (event) {
//   console.log('this: ', this);
//   console.log('event.target: ', event.target);
//   if (this !== event.target) return;
//   modal.classList.add('modal-hidden');
// }


// ------------------------------------------ 10 -------------------------------------

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const menu = document.querySelector ('.js-menu');

menu.addEventListener('click', hoverItem);

function hoverItem (event) {
  event.preventDefault();
  const target = event.target;
  // console.log(target);
  // console.log(target.nodeName);
  if (target.nodeName !== 'A') return;
  setActiveLink(target);
}

function setActiveLink(activeLink) {
  const currentActiveLink = menu.querySelector('.menu-link-active');
  
  if (currentActiveLink) {
    currentActiveLink.classList.remove('menu-link-active');
  }

  activeLink.classList.add('menu-link-active');
}



// -----------------------------------------------------------------------------------
