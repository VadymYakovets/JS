'use strict'

const scientist = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
},
{
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
},
{
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
},
{
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
},
{
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
},
{
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
},
{
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
},
{
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
},
{
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
},
{
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
},
{
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
},
{
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
}
];
// 1) отримати масив вчених що народилися в 19 ст

let result = scientist.filter(el => el.year > 1800 && el.year < 1900);
console.log(result.map(el => el.first));

// 2) знайти суму років скільки прожили всі вченні

let resultSecond = scientist.map(el => (el.passed - el.year));
let sumYEar = resultSecond.reduce((acc, el) => acc + el,0);
console.log(resultSecond);
console.log(sumYEar);

// 3) Відсортувати вчених по алфавіту

let scientistName = scientist.map(el => el.last);
let sortScientist = scientistName.sort((a,b) => a > b ? 1 : -1);
console.log(sortScientist);

// 4) Відсортувати вчених по даті народження

let scientistYear = scientist
                    .sort((a,b) => a.year > b.year ? 1 : -1)
                    .map(el => el.year);
// let sortByYear = scientistYear.sort((a,b) => a - b ? -1 : 1);
console.log(scientistYear);

// 5) Відсортувати вчених по кількості прожитих років

// let sortScientistByLifeYears = scientist.map(el => (el.passed - el.year))
// let new2 = sortScientistByLifeYears.sort((a,b) => a - b ? -1 : 1);
let sortScientistByLifeYears = scientist
                               .sort((a,b) => (a.passed - a.year) - (b.passed - b.year))
                               .map(el => el.first);
console.log(sortScientistByLifeYears);
// console.log(new2);

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

let dellScientist = scientist.filter(el => el.year < 1500 || el.year > 1700);
console.log(dellScientist);

// 7) Знайти вченого який народився найпізніше.

let maxScientistBornYear = scientist.sort((a,b) => b.year - a.year);
console.log(maxScientistBornYear[0].first);

// 8) Знайти рік народження Albert Einstein

let findEinstain = scientist.find(el => el.first === 'Albert' || el.last === 'Einstein');
console.log(findEinstain);

// 9) Знайти вчених прізвище яких починається на літеру С

let findLastC = scientist.filter(el => el.last[0] === 'C');
console.log(findLastC);

// 10) Видалити з масива всіх вчених імя яких починається на A

let dellScientistFirstA = scientist.filter(el => el.first[0] === 'A');
console.log(dellScientistFirstA);