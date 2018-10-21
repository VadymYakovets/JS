'use strict'


//------ прилипание меню ---------
// const nav = document.querySelector('.nav');
// let topNav = nav.offsetTop;
// console.log(topNav);

// function showScroll() {
//     console.log(window.scrollY);
//     if (window.scrollY >= topNav) {
//         nav.classList.add('fixed-nav');
//     } else {nav.classList.remove('fixed-nav')}
// }

// window.addEventListener('scroll',showScroll);

// ---------------------------------

// задача кнопки вразнобой

// 1. определяем размеры экрана

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

console.log(windowHeight,windowWidth);

// 2. определить размеры кнопок

let btn = document.querySelector('.win');
let btnWidth = btn.clientWidth;
let btnHeiht = btn.clientHeight;

console.log(btnHeiht, btnWidth);

let btns = document.querySelectorAll('.btn');

// 3. определить рандомные координаты кнопки
function moveBtn () {
    this.style.top = Math.floor(Math.random()* (windowHeight - btnHeiht)) + 'px';
    this.style.left = Math.floor(Math.random()* (windowWidth - btnWidth)) + 'px';   
}

// let btns = document.querySelector

btns.forEach(el => el.addEventListener ('mouseenter', moveBtn));

// 4. ограничить пространство движений кнопок


// 5. действие при mouseenter





window.innerWidth
window.innerHeight
clientHeight
clientWidth
mouseenter


// Window.scrollY