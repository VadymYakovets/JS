"use strict";
let text = document.querySelector('.input');
let form = document.querySelector('.box');
let container = document.querySelector('#container');
function readValue () {
    event.preventDefault();
    let value = text.value;
    console.log(value);
    text.value = '';
    sendRequest(value);
}
function sendRequest(value) {
    let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${value}&per_page=9`;
    fetch(url)
    .then(response => response.json())
    .then(data => paintGallery(data.hits))
}
function paintGallery (arr) {
    let result = arr.reduce((acc, el) => acc + `<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}></div>`, '');
    container.innerHTML = result;
}
form.addEventListener('submit', readValue);
window.addEventListener('DOMContentLoaded', readValue);