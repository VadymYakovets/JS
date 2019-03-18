'use strict'

let timerFace = document.querySelector('.js-time');
let start = document.querySelector('.js-start');
let lap = document.querySelector('.js-take-lap');
let reset = document.querySelector('.js-reset');
// let jsLap = document.querySelector('.js-laps')
// let pause = document.querySelector('.js-')

const timer = {
  timeValue: null,
  timerID: null,
  isActive: false,
  deltaTime: null,
  pauseTime: null,

  // makeUl () {
  //   let root = document.querySelector('.wrapper');
  //   let ul = document.createElement('ul');
  //   ul.setAttribute('class', 'laps');
  //   ul.setAttribute('class', 'js-laps');
  //   let li = document.createElement('li');
  //   root.append(ul);
  // },

  start (onStart) {
      if(!this.isActive) {
        // console.log(onStart);
        this.isActive = true;
        this.timeValue = Date.now() - this.pauseTime;
        this.timerID = setInterval(() => {
          let currentTime = Date.now();
          // console.log(currentTime)
          this.deltaTime = currentTime - this.timeValue;
          const time = new Date(this.deltaTime);
          // console.log(time);
          onStart(time);
        }, 100);
        start.textContent = 'Pause';
        reset.textContent = 'Reset';
        lap.removeAttribute('disabled');
        reset.removeAttribute('disabled');

        // start.classList.add('js-pause');    
    } else {
      this.isActive = false;
      clearInterval(this.timerID);
      this.pauseTime = this.deltaTime;
      start.textContent = 'Continue';
      lap.setAttribute('disabled',true);

    }
  },
};

function updateTimer(time) {
  timerFace.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {
  time = new Date(time);
  let minutes = time.getMinutes(); 
  let seconds = time.getSeconds();
  let milliseconds = Number.parseInt(time.getMilliseconds() / 100);
  minutes = minutes < 10 ? '0' + time.getMinutes() : minutes;
  seconds = seconds < 10 ? '0' + time.getSeconds() : seconds;
  return `${minutes}:${seconds}.${milliseconds}`;
}

start.addEventListener('click', timer.start.bind(timer, updateTimer));
// let pause = document.querySelector('.js-pause');
lap.addEventListener('click', takeLap);
reset.addEventListener('click', resetTimer);
// console.log(timer.time);


function takeLap() {
  console.log('hello');
  let root = document.querySelector('.js-laps');
  let li = document.createElement('li');
  root.appendChild(li);
  li.textContent = timerFace.textContent
};

function makeUl(){
  let root = document.querySelector('.wrapper')
  // create elemenet
  let ul = document.createElement('ul');
  // add class
  ul.setAttribute('class', 'laps js-laps');
  //paste elemnet on screen
  root.append(ul);
}

function resetTimer() {
  // reset.setAttribute('disabled');
  // alert('test');
  clearInterval(timer.timerID);
  timer.isActive = false;
  timerFace.textContent = '00:00.0';
  timer.timeValue = null;
  timer.timerID = null;
  timer.deltaTime = 0;
  timer.pauseTime = null;
  start.textContent = 'Start';
  let root = document.querySelector('.wrapper')
  let ul = document.querySelector('.js-laps');
  root.removeChild(ul);
  reset.setAttribute('disabled',true);
  lap.setAttribute('disabled',true);
  return makeUl();
};