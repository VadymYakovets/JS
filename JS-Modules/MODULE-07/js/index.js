/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const createPostCard = function() {

let root = document.querySelector('body')

for (let i of posts) {

      // create elemenet
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let a = document.createElement('a');

    // add class
    div.setAttribute('class','post');
    img.setAttribute('class','post__image');
    h2.setAttribute('class','post__title');
    p.setAttribute('class','post__text');
    a.setAttribute('class','button');

    //add atribute
    img.setAttribute('src',i.img);
    img.setAttribute('alt','post image');
    a.setAttribute('href',i.link)

    //paste textContent
    h2.textContent = i.title;
    p.textContent = i.text
    a.textContent = 'Read more'

    //paste elemnet on screen
    root.append(div);
    div.append(img);
    div.append(h2);
    div.append(p);
    div.append(a);
  }
}

createPostCard();