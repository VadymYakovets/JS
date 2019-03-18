'use strict'

// IIFE
// let x =5;

// ;(function () {
//     let x = 10;
//     let y = 20;

//     console.log(x);  // 10
//     console.log(y);  // 20

//     function add (a, b) {
//         return a + b;
//     }

//     console.log(add(5,10));  // 15

//   })();


// IIFE
// let x = 5;
// ;(function () {
//     let x = 10;
//     let y = 20;

//     console.log(x);
//     console.log(y);

//     function add (a, b) {
//         return a + b
//     }

//     // console.log(add(5,10));
// })();

// console.log(add(5,10));
// console.log(x);
// console.log(y);

// Anonymous closure

// const globalVar = 'I am a global variable!';
// (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const average = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Аverage grade is ${Math.round(total / grades.length)}.`;
//     };

//     console.log(average());
//     console.log(globalVar);
// })();




// console.log(average());


// Global import

// const globalVar = {};

// (function (gv) {
//     // Приватная функция, доступная только внутри замыкания
//     const privateFn = () => console.log("Shhhh, this is private!");

//     const movieFetch =() => {
//          return fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=3FPTV2NXFOV3M1JQ')
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }

//     // Откроем методы через интерфейс globalVariable,
//     // закрыв имплементацию внутри замыкания
//     gv.books = () => {
//         privateFn();
//         console.log("Hello, I am a global variable");
//     };

//     gv.music = ['sdfsd','sfsdfsdf0', 'sfsdfsdf'],

//     gv.movies = () => {
//         movieFetch()
//     }
// })(globalVar);
// console.log('global',globalVar);
// console.log(globalVar.music);
// // console.log(globalVar.books());
// // // Shhhh, this is private!
// // // Hello, I am a global variable

// // privateFn();


// Object interface

// const GRADES_MODULE = (function () {
//     // Это будет приватная переменная внутри замыкания
//     const grades = [80, 45, 75, 64, 53, 82];

//     // const message = () => {
//     //     console.log('Create message');
//     // }

//     return {
//         average() {
//             const total = grades.reduce((acc, grade) => acc + grade, 0);

//             return `Average grade is ${Math.round(total / grades.length)}.`;
//         },

//         failing: function() {
//             const failingGrades = grades.filter(item => item < 70);
//             return 'You failed ' + failingGrades.length + ' times.';
//         }
//     }
// })();
// console.log(GRADES_MODULE);
// console.log(GRADES_MODULE.average());
// console.log(GRADES_MODULE.failing());


// Revealing module pattern

// const calcGrades = (function () {
//     // Переменные и методы внутри будут приватными
//     const grades = [80, 45, 75, 64, 53, 82];

//     const calcAverage = () => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0);

//         return `Average grade is ${Math.round(total / grades.length)}.`;
//     };

//     const failingGrades = ()=> {
//         const failingGrades = grades.filter(item => item < 70);

//         return 'You failed ' + failingGrades.length + ' times.';
//     }

//     // явно укажем что мы хотим открыть и под какими именами
//     return {
//         average: calcAverage,
//         failing: failingGrades,
//     };
// })();

// console.log(calcGrades);

// console.log(calcGrades.average());
// console.log(calcGrades.failing());


const calculator = (function () {
    
    // let arr = [1,2,3]

    const totalSum = (...args) => {
        let total = args.reduce((acc, el) => acc + el, 0);
        return `Total sum is: ${total}`;
    };

    const totalMinus = (...args) => {
        let total = args.reduce((acc, el) => acc - el);
        return `Result is: ${total}`;
    };

    const mult = (...args) => {
        let total = args.reduce((acc, el) => acc * el);
        return `Myltiply is: ${total}`;
    };

    const pow = (...args) => {
        if (args.length !== 2) {
            return 'Error';
        }
        else {
            let [number, dig] = args;
            return Math.pow(number, dig);
        }
    }

    return {
        sum: totalSum,
        minus: totalMinus,
        mult,
        pow,
    };

})();

console.log(calculator);
console.log(calculator.sum(1,2,3)) // 6
console.log(calculator.sum(5,2)) // 7
console.log(calculator.minus(1,2,3)) // -4
console.log(calculator.minus(5,2)) // 3
console.log(calculator.mult(1,2,3)) // 6
console.log(calculator.mult(5,2)) // 6
console.log(calculator.pow(5,2)) // 6

