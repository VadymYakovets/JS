'use strict'

// let date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(Date.now());

let daysContainer = document.querySelector('.days');
let hoursContainer = document.querySelector('.hours');
let minutesContainer = document.querySelector('.minutes');
let secondsContainer = document.querySelector('.seconds');

const deadline = new Date(2019,4,1,12,0,0);

function timer () {
    let today = Date.now();
    let delta = deadline - today;
    // console.log(delta);
    let sec = Math.floor(delta / 1000 % 60);
    // console.log(sec);
    let min = Math.floor(delta / 1000 / 60 % 60);
    // console.log(min);
    let hours = Math.floor(delta / 1000 / 60 / 60 % 24);
    // console.log(hours);
    let days = Math.floor(delta / 1000 / 60 / 60 / 24);
    // console.log(days);
    
    daysContainer.textContent = days < 10 ? `0${days}` : days;
    hoursContainer.textContent = hours < 10 ? `0${hours}` : hours;
    minutesContainer.textContent = min < 10 ? `0${min}` : min;
    secondsContainer.textContent = sec < 10 ? `0${sec}` : sec;
}

setInterval(timer, 1000);



