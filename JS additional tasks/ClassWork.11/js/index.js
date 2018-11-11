'use strict'

// let arr = [1, 2, 3, 4, 5, 6, 7, 10];
// let arr2 = [7]

// localStorage.setItem('array', JSON.stringify(arr));
// let result = JSON.parse(localStorage.getItem('array'));
// console.log(result);
// localStorage.setItem('arr2', JSON.stringify(arr2));

// localStorage.clear();

let text = document.querySelector('[type="text"]');
let form = document.querySelector('form');
let ul = document.querySelector('ul');
let taskArr = [];

function readValue () {
    event.preventDefault();
    let value = text.value;
    let obj = {
        id: Date.now(),
        content: value,
    }
    console.log(value); 
    createLi(obj);
    saveToStorage(obj);
    text.value = '';
}

function saveToStorage (obj) {
    let result = JSON.parse(localStorage.getItem('task'));
    result.push(obj);
    localStorage.setItem('task', JSON.stringify(result));
}

function createLi (task) {
    let li = document.createElement('li');
    li.textContent = task.content;
    li.setAttribute('data-id', task.id);
    ul.appendChild(li);
} 

function painFromStorage () {
    let result = JSON.parse(localStorage.getItem('task'));
    if (result) {
        for (let el of result) {
        createLi(el);
        } 
    } else {
        localStorage.setItem('task', JSON.stringify([]));
    }
    console.log(result);
}

function deleteLi () {
    let id = event.target.dataset.id;
    event.target.remove(id);
    console.log(id);
    let result = JSON.parse(localStorage.getItem('task'));
    let arrForSave = result.filter(el => el.id !== Number(id));
    localStorage.setItem('task', JSON.stringify(arrForSave));
}

ul.addEventListener('click', deleteLi);
window.addEventListener('DOMContentLoaded', painFromStorage);
form.addEventListener('submit', readValue);



