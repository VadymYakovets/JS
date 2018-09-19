'use strict'

let userArr = [];
let userInput;
let totalSum = 0;

do {
  userArr.push(Number(userInput = prompt ('Введите число массива')));
} while (Number(userInput)>0);

for (const i of userArr) {
  if (isNaN(totalSum += i)) {
    alert ('Было введено не число, попробуйте еще раз');
    break;
  }
}

if (totalSum > 0) {
  alert (`Сумма всех значений в массиве: ${totalSum}`)
};

console.log(totalSum);