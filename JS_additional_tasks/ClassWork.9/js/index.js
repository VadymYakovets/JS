'use strict'

let deadline = new Date (2019, 0, 1, 0, 0, 0);
console.log(deadline);

let daysContainer =  document.querySelector('.days');
let hoursContainer =  document.querySelector('.hours');
let minutesContainer =  document.querySelector('.minutes');
let secondsContainer =  document.querySelector('.seconds');
let btn = document.querySelector('.btn');

function timer () {
    let today = new Date(); 
    let delta = deadline - today;
    let seconds = Math.floor(delta / 1000 % 60);
    let minutes = Math.floor(delta / 1000 / 60 % 60);
    let hours = Math.floor(delta / 1000 / 60 / 60 % 24);
    let days = Math.floor(delta / 1000 / 60 / 60 / 24);
    console.log(days, hours, minutes, seconds);

    daysContainer.textContent = days >= 10 ? days : `0${days}`;
    hoursContainer.textContent  = hours >= 10 ? hours : `0${hours}`;
    minutesContainer.textContent = minutes >= 10 ? minutes : `0${minutes}`;;
    secondsContainer.textContent = seconds >= 10 ? seconds : `0${seconds}`;
}

let id = setInterval (timer, 1000);

btn.addEventListener('click', function () {
    clearInterval(id);
})



