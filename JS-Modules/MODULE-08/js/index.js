'use strict';

const galleryItems = [
  { preview: './img/prev/preview-1.jpg', fullview: './img/full/fullview-1.jpg', alt: "alt text 1" },
  { preview: './img/prev/preview-2.jpg', fullview: './img/full/fullview-2.jpg', alt: "alt text 2" },
  { preview: './img/prev/preview-3.jpg', fullview: './img/full/fullview-3.jpg', alt: "alt text 3" },
  { preview: './img/prev/preview-4.jpg', fullview: './img/full/fullview-4.jpg', alt: "alt text 4" },
];

// select element
const imageGallery = document.querySelector('.js-image-gallery');
const fullview = document.querySelector('.fullview');
const imgFullview = document.querySelector('.img-Fullview');
const imgPreview = document.querySelector('.preview');
const nav = document.querySelector('.nav')
console.log(nav);

document.addEventListener('DIMContentloaded', createCards);

function firstView () {
  // const randomeImg = Math.floor(Math.random() * galleryItems.length);
  imgFullview.setAttribute('src', galleryItems[0].preview);
}

firstView (galleryItems);

function createCards(galleryItems) {
  galleryItems.reduce(function(acc, el) {
    return acc.concat(createCard(el));
  }, []);
};

createCards(galleryItems);

function createCard ({preview, fullview, alt}) {
  //create elements
  const previewItem = document.createElement('li');
  const previewItemImg = document.createElement('img');
  // set class
  previewItem.classList.add('imgList');
  previewItemImg.classList.add('imgBlock');
  //set atribute
  previewItemImg.setAttribute('src', preview);
  previewItemImg.setAttribute('data-fullview', fullview);
  previewItemImg.setAttribute('alt', alt);
  //append elements
  imgPreview.appendChild(previewItem);
  previewItem.appendChild(previewItemImg);
}

const activeImg = document.querySelector('li img');
activeImg.classList.add('focused');

imgPreview.addEventListener('click', setActiveCard);

function setActiveCard (event) {
  const target = event.target;
  console.log('event target: ', target);
  if (target.nodeName !== 'IMG') return;
  setActiveLink(target);
}

function setActiveLink (nextActiveLink) {
  const link = nextActiveLink.getAttribute('data-fullview');
  console.log('fullview link', link);

  const currentActiveLink = imgPreview.querySelector('li img.focused');
  console.log('nextActiveLink', nextActiveLink)
  if (currentActiveLink) {
    currentActiveLink.classList.remove('focused');
  }
  nextActiveLink.classList.add('focused');
  imgFullview.setAttribute('src', link);
}