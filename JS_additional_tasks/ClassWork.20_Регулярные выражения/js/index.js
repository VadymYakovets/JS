'use strict'

// let patern = /win/;
// const string = 'text windows win';
// console.log(string.match(patern)); // выводи индекс первого символа комбинации где встречается искомое выражение
// console.log(patern.test(string)); // только для проверки есть ли в выражении искомые символы

// let patern = /win/gi; // g - глобальный поиск по строке. Наход все символы
//                       // i - игнорирование реестра
// const string = 'text Windows win';
// console.log(string.match(patern));
// console.log(patern.test(string));

// let string = 'IS that all there is?',
//     reg = /is/gi;
// console.log(string.match(reg));
// console.log(reg.test(string));

// const string = 'Win text Windows win',
// // let string = 'Q5 wq w. www h - wh3whwh',
//     reg = /\Bwin\B/gi; // d - ищет отдельную цифру
//                   // \d - ищет цифру в строке
//                   // \D - ищет все символы которые не цифры
//                   // \w - ищет все цифры и буквы
//                   // \W - ищет все другие символы кроме цифр и букв
//                   // \s - ищет пробелы в строке
//                   // \S - ищет все символы кроме пробелов
//                   // \b - флажок \b показывает начало и конец слова
//                   // \B - ищет не начало и не конец слова
// console.log(string.match(reg));
// console.log(reg.test(string));

// let string = '92345 123 8 243 467 52 34 987 5 qwe 999',
//     regV = /\b\w{2,3}\b/g;
// console.log(string.match(regV));
// console.log(regV.test(string));

let string = '92345 123 8 243 467 52 34 987 5 qwe юху 999',
    regB = /[a-zA-Zа-яА-Я]{3}/g;
                                // $ - конец строки
                                // ^ - начало строки
                                // [^] - исключение, нипример находить все но не с - [^c]
console.log(string.match(regB));
console.log(regB.test(string));