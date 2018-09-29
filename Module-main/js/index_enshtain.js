'use strict';

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string = prompt ('введите произвольный набор символов');
// let arr = string.split("");

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// let arrSec = arr.join(" ")
// console.log(arrSec);

// // // Вывести в консоли общую длину массива arr
// console.log(arrSec.length);

// // // Используя цикл, вывести в консоль все индексы массива arr

// for(let i = 0; i < arrSec.length; i += 1) {
//     console.log(i);
//   }

// // // Используя цикл, вывести в консоль все элементы массива arr

// for(const value of arr) {
//     console.log(value);
//   }
// // console.log();

// // // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let i = 0; i < arrSec.length; i += 1) {
//     if (i % 2 !== 0) continue;
  
//     console.log(i); // 1, 3, 5, 7, 9
//   }

// // console.log();


/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// let userInput;

//   do {
//     userInput = Number ( prompt('введите число больше 100') );
//   } while(userInput <= 100 && userInput !== 0);

// console.log (userInput);

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for (let i = min; i <= max; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else console.log(i);
// }

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let a of numbers) {
//   if (a > num) {
//     newArray.push(a);
//   }
// }

// console.log(newArray);

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;
// let wordLenght = 0;

// let stringArr = string.split(' ');

// for (let i = 0; i < stringArr.length; i++) {
//   if (stringArr[i].length > wordLenght) {
//     wordLenght = stringArr[i].length;
//     longestWord = stringArr[i];
//   }
// }

// console.log(longestWord); // 'force'

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// let userArr = [];
// let userInput = 0;
// let totalSum = 0;

// do {
//   userArr.push(Number(userInput = prompt ('введите число массива')));
// } while (Number(userInput)>=0 && userInput !== null);

// for (const i of userArr) {
//   if (i > 0) {
//     totalSum += i;
//   } else {userArr.pop()}
//   }
// console.log(totalSum);

// alert (`Сумма всех значений в массиве: ${totalSum}`);

// console.log(userArr);


// const scientist = [
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
// ];
// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A

// const newList = scientist.filter(century => century.year > 1800 && century.year < 1900);

// console.log(newList);

// const lifeYears = scientist.reduce(function(acc, el){
//   return acc + (el.passed - el.year);
// },0)

// console.log(lifeYears);

// const filterScientist = scientist.sort(function(a,b){
//   return a.first > b.first ? 1 : -1;
// });

// console.log(filterScientist);

// const sortByYears = scientist.sort(function(a ,b){
//   return a.year > b.year ? 1 : -1;
// }) 

// console.log(sortByYears);

// const sortScientistByLifeYears = scientist
// .map(el => el.passed - el.year);
// .sort(function(a, b){
//   return (a.passed - a.year) > (b.passed - b.year) ? 1 : -1
// })

// console.log(sortScientistByLifeYears);

// const sixTask = scientist

// // .filter(el => el.year > 1800)
// .filter(function(el){
//   return el.year <= 1400 && el.year >= 1700;
// });

// console.log(sixTask);

// const olderScientist = scientist
// .sort(function(a,b){
//   return (b.year - a.year);
// })

// console.log(olderScientist[0]);

// const birthDay = scientist.find(function(el){
//   return el.first === 'Albert' && el.last === 'Einstein';
// })

// console.log(birthDay);

// const firstLetterScientist = scientist

// .filter(function(el){
//   return el.last.charAt(0) === 'C';
// });

// console.log(firstLetterScientist);

// const aScientist = scientist

// .filter(function(el){
//   return el.first.charAt(0) !== 'A';
// });

// console.log(aScientist);
