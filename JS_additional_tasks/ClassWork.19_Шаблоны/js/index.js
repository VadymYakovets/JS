'use strict'

// const context = {
//     city: 'London',
//     street: 'Baker Street',
//     number: '221B',
// };
// // // // 1) Отримати доступ до шаблона
// const source = document.querySelector('#address-template').innerHTML.trim();
// // // // 2) запускаем функцию шаблонизатор
// const temp = Handlebars.compile(source);
// // // // 3) передаем функцию в обьект
// const mark = temp(context);
// console.log(mark);
// // // // 4) Готовую разметку необходимо вставить в разметку
// const container = document.querySelector('.content-placeholder');

// container.innerHTML = mark;


// самостоятельно для проверки --------------------------------------------------------------------
// const info = {
//     title: 'Handlebars',
//     helpers: 'Each and if',
//     func: 'compile'
// }
// const source = document.querySelector('.template').innerHTML.trim();
// const temp = Handlebars.compile(source);
// const mark = temp(info);
// console.log(mark);
// const container = document.querySelector('.template');
// container.innerHTML = mark;
// --------------------------------------------------------------------------------------------------

// размножить li через функцию в шаблонизаторе

// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ],
//     temp: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node']
// };

// const source = document.querySelector('#example-template').innerHTML.trim();
// const draw = Handlebars.compile(source);
// const markup = draw(data);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;


// размножаем через reduce

// const people = [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ];

// const source = document.querySelector('#reduce').innerHTML.trim();
// const draw = Handlebars.compile(source);
// let result = people.reduce((acc, el) => acc + draw(el),'');
// console.log(result);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = result;


// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };

// const source = document.querySelector('#menu').innerHTML.trim();
// const draw = Handlebars.compile(source);
// const markup = draw(menuData);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup; 

// РИСУЕМ ГАЛЕРЕЙКУ

// const gallery = {
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// };

// const source = document.querySelector('#main-gallery').innerHTML.trim();
// const draw = Handlebars.compile(source);
// const markup = draw(gallery);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup; 


// галерея с телефонами

let phones = [
    {
        id: "1",
        categoryId: "1",
        name: "Apple iPhone 5c",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 823,
        image: "uploads/iphone5c-selection-hero-2013.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "2",
        categoryId: "1",
        name: "Apple iPhone 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 953,
        image: "uploads/51u6y9Rm8QL._SY300_.jpg",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "3",
        categoryId: "4",
        name: "Lenovo A6000",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 764,
        image: "uploads/_35%20(1).JPG",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
    {
        id: "4",
        categoryId: "5",
        name: "Nokia Lumia 1520",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
        price: 674,
        image: "uploads/Lumia1520-Front-Back-png.png",
        cpu: "1.3GHz Apple A6",
        camera: "8mp (3264x2448)",
        size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
        weight: "132 grams (4.7 ounces) with battery",
        display: "4.0 326 pixel density",
        battery: "1480 mAh",
        memory: "16GB, 32GB and RAM 1 GB"
    },
]

const source = document.querySelector('#phones-galery').innerHTML.trim();
const draw = Handlebars.compile(source);
const markup = draw(phones);
console.log(markup);
const container = document.querySelector('.content-placeholder');
container.innerHTML = markup; 

const btn = document.querySelector('.module-card-button');

btn.addEventListener('click', seeMore);

function seeMore () {
    btn.set('hide',true);
}