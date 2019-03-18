'use strict'

let time = document.querySelector('.js-time');
let start = document.querySelector('.js-start');
let lap = document.querySelector('.js-take-lap');
let reset = document.querySelector('.js-reset');

const timer = {
  timeValue: 0,
  timerID: null,
  isActive: false,
  pauseTime: null,
  deltaTime: null,
  pauseTime: null,
  onTick: onTick,
  onPush: onPush,
  onLap: onLap,
  laps: [],

  start(onStart) {
    console.log(onStart)
    if(!this.isActive) {
      console.log('start')
      this.isActive = true;
      this.startTime = Date.now() - this.pauseTime;
      this.timerID = setInterval(() => {
        let currentTime = Date.now();
        this.deltaTime = currentTime - this.deltaTime;
        const time = new Date(this.deltaTime);
        // this.value += 1;
        onStart(this.time);
        console.log('timerID:', this.timerID);
        console.log('isActive:', this.isActive); 
      }, 100);
    }
  },

  reset(onStop) {
    console.log('reset');
    console.log('timerID:', this.timerID);
    console.log('isActive:', this.isActive); 
    this.isActive = false;
    this.timerID = null;
    clearInterval(this.timerID);
    this.value = 0;
    onStop(this.value);
  },
};

start.addEventListener('click', timer.start.bind(timer, updateTimer));
// reset.addEventListener('click', timer.reset.bind(timer, updateTimer));
// lap.addEventListener('click', timerLap);

// function setName() {
//   if (timer.isActive) {
//     start.textContent = 'Pause' 
//   }
// }

function updateTimer(val) {
  time.textContent = val;
}

// function timerLap() {
//   console.log('lap')
//   clearInterval(timerID);
// }

// function timerReset() {
//   console.log('reset');
//   isActive = false;
//   clearInterval(timerID);
//   counter = 0;
//   time.textContent = '00:00.0';
// }

// function updateCounterValue() {
//   counter += 1;
//   time.textContent = counter;
// }




// const Timer = function (obj) {
//   this.isActive = false;
//   this.timeStart = 0;
//   this.pauseTime = 0;
//   this.deltaTime = 0;
//   this.lapTime = 0;
//   this.min = 0;
//   this.sec = 0;
//   this.ms = 0;
//   this.intervalID = 0;

//   this.start = () => {
//     this.interval = setInterval(this.update, 1000)
//     console.log(startTime)
//   };

//   this.lap = () => {
    
//   };

//   this.stop = () => {
//     clearInterval(this.interval);
//   };

//   this.update = () => {
//     this.timeStart > 0 ? this.timeStart +=1 : this.stop();
//     return this.get();
//   }

//   this.get = () => {
//     return this.timeStart;
//   }
// }

// function tick() {
//   time.innerHTML = timeStart.get()
// }

// // let id = setInterval (timer, 1000);

// start.addEventListener('click', tick()
// // function () {
// //   console.log('start')
// // }
// )

// lap.addEventListener('click', function () {
//   console.log('lap')
// })

// reset.addEventListener('click', function () {
//   // clearInterval(id);
//   console.log('reset')
// })