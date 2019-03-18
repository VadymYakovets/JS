'use strict'

//-------------------------------------------- 01 --------------------------------------------

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
   
// };

// const userChange = function (addUserMood) {
//   // добавляет поле mood со значением 'happy'
//   user.mood = addUserMood;
//   // заменяет значение hobby на 'javascript'
//   user.hobby = 'javascript';
//   // удаляет свойство premium
//   delete user.premium;
//   // выводит содержимое объекта user в формате ключ:значение 
//   // используя цикл for...in
//   for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
//   };
//   // выводит содержимое объекта user в формате ключ:значение 
//   // используя Object.keys и for...of
//   const keys = Object.keys(user);
//   // console.log(keys);
//   for (const key of keys) {
//     console.log(`User ${key}: ${user[key]}`)
//   }
//   // выводит содержимое объекта user в формате ключ:значение 
//   // используя Object.entries и for...of
//   const entries = Object.entries(user);
//   // console.log(entries);
//   for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`Key: ${key}, Value: ${value}`);
//   }
// }

// userChange('happy');

// console.log(user)

//-------------------------------------------- 02 --------------------------------------------

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};

let bestUser = '';
let bestResult = 0;

const entries = Object.entries(tasksCompleted);
// console.log(entries);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  for (let i = 1; i < entries.length; i++) {
    if (value > bestResult) {
       bestUser = key;
       bestResult = value;
    }
  }
}
console.log(bestUser);

// const user = Object.values(tasksCompleted);
// const values = [];

// for (const key of user) {
//    values.push(key);
// }

// console.log(values);


// console.log();

//-------------------------------------------- 03 --------------------------------------------


//-------------------------------------------- 04 --------------------------------------------


//-------------------------------------------- 05 --------------------------------------------