'use ctrict'

//-------------------------------------------- 01 --------------------------------------------

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const items = document.querySelector('.categories');
// console.log(items.children);

// for (const i of items.children) {
//     console.log(`Категория: ${i.firstChild.textContent}`);
//     console.log(`оличество вложенных li: ${i.lastElementChild.children.length}`);
// }

//-------------------------------------------- 02 --------------------------------------------


/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const list = document.querySelector('.list');
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';

//-------------------------------------------- 03 --------------------------------------------


/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// let list = document.querySelector('.list');

// for (const i of elements) {
//     let newLi = document.createElement('li');
//     newLi.textContent = i;
//     list.append(newLi)
// }

//-------------------------------------------- 04 --------------------------------------------

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/

// let root = document.querySelector('body');
// let ul = document.createElement('ul');
// ul.textContent = 'Список';
// root.append(ul);

// const newLi = function (listName) {
//     let li = document.createElement('li');
//     li.textContent = listName;
//     ul.append(li);
// }

// let listName;

// do {
//     listName = prompt('Введите значение элемента списка', '' );
//     listName !== null ? (newLi(listName)) : ( listName === null );
// } while(listName !== null);

//-------------------------------------------- 05 --------------------------------------------

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// const doc = Array.from(document.querySelectorAll('input[Checked=""]'));
// // console.log(doc);

// const getAllValue = arr => {
//     return arr.map(user => user.getAttribute('value'));
//   };
  
//   console.log(getAllValue(doc));

//-------------------------------------------- 06 --------------------------------------------

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

// const createPostCard = function() {

// // select element
// let root = document.querySelector('section')

// // create elemenet
// let div = document.createElement('div');
// let img = document.createElement('img');
// let h2 = document.createElement('h2');
// let p = document.createElement('p');
// let a = document.createElement('a');

// // add class
// div.setAttribute('class','post');
// img.setAttribute('class','post__image');
// h2.setAttribute('class','post__title');
// p.setAttribute('class','post__text');
// a.setAttribute('class','button');

// //add atribute
// img.setAttribute('src','http://via.placeholder.com/400x150');
// img.setAttribute('alt','post image');
// a.setAttribute('href','#')

// //paste textContent
// h2.textContent = 'Lorem ipsum dolor';
// p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!'
// a.textContent = 'Read more'

// //paste elemnet on screen
// root.append(div);
// div.append(img);
// div.append(h2);
// div.append(p);
// div.append(a);
// }

// createPostCard();

//-------------------------------------------- 07 --------------------------------------------

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// const num = 5;

// let root = document.querySelector('#root');

// const createBoxes = function(num) {
//     let w = 30;
//     for (let i = 0; i < num; i ++) {
//         let div = document.createElement('div');

//         function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//             }
//         let r = getRandomInt(0, 255);
//         let g = getRandomInt(0, 255);
//         let b = getRandomInt(0, 255);

//         div.setAttribute("style", `width:${w}px; height:${w}px; background-color: rgb(${r}, ${g}, ${b})`);
//         root.append(div);
//         w += 10;
//     }
// }
// createBoxes(10);
