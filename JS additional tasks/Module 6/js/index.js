'use strict'

//-------------------------------------------- 01 --------------------------------------------

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

 
// const Account = function (login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInfo = function(){
//   console.log(`login: ${this.login}, email: ${this.email}, friendCount: ${this.friendsCount}`)
// }

// const mango = new Account('Mango', 'mango@mango.com', 28);
// const poly = new Account('Poly', 'poly@mango.com', 56);

// mango.getAccountInfo();
// poly.getAccountInfo();

// console.log(mango);

//-------------------------------------------- 02 --------------------------------------------

/*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/


// const StringBuilder = function(string = "") {
//   this.value = string;
// }

// StringBuilder.prototype.showValue = function() {
//   console.log(`value: ${this.value}`);
// }

// StringBuilder.prototype.append = function(str) {
//   this.value = this.value + str;
// }

// StringBuilder.prototype.prepend = function(str) {
//   this.value = str + this.value;
// }

// StringBuilder.prototype.pad = function(str) {
//   this.value = str + this.value + str;
// }

// const myString = new StringBuilder('.');

// myString.append('^'); 
// myString.showValue(); // '.^'

// myString.prepend('^'); 
// myString.showValue(); // '^.^'

// myString.pad('='); 
// myString.showValue(); // '=^.^='

//-------------------------------------------- 03 --------------------------------------------

/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//   constructor(speed = 0, maxSpeed, runing =false, distance = 0) {
//     this.speed = speed;
//     this.maxSpeed  = maxSpeed; 
//     this.runing = this.runing;
//     this.distance = distance;
//     /*
//       Добавьте свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости 
//         - running - для отслеживания заведен ли автомобиль, 
//           возможные значения true или false. Изначально false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//   }

//   turnOn() {
//     this.runing = true;
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }

//   turnOff() {
//     this.runing = false;
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }
  
//   accelerate(spd) {
//     if (spd < this.maxSpeed) {
//       this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }
  
//   decelerate(spd) {
//     if (spd > 0 && spd < this.maxSpeed) {
//       this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }

//   drive(hours) {
//     if (this.runing !== false) {
//       return (this.distance = hours * this.speed);
//     }
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }
// }

//Проверка
// const Ford = new Car(0, 320, false, 0);

// Ford.turnOn(true);
// // Ford.turnOff(true);
// Ford.accelerate(130);
// Ford.decelerate(90)
// Ford.drive(6)
// console.log(Ford)


//-------------------------------------------- 04 --------------------------------------------

// /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//   constructor(maxSpeed) {
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//   }
  
//     turnOn() {
//         return this.running = true;
//     }
  
//     turnOff() {
//         return this.running = false;
//     }
    
//     accelerate(spd) {
//         if (spd < this.maxSpeed) {
//             return  this.speed = spd;
//         }
//     }
    
//     decelerate(spd) {
//         if (0 <= spd <= this.maxSpeed) {
//             return this.speed = spd;
//         }
//     }
  
//     drive(hours) {
//         if (this.running = true) {
//             return this.distance = hours * this.speed;
//         }
//     }

//     static getSpecs(Car) {
//     console.log(`maxSpeed: ${Car.maxSpeed}, running: ${Car.running}, distance: ${Car.distance}`);
//   }

// }

// //  проверка
  
//   const ford = new Car(320)

//   ford.turnOn(true);
//   ford.accelerate(180);
//   ford.decelerate(90);
//   ford.drive(10);
//   console.log(ford);

// /*
//   Добавьте к классу Car из предыдущего задания статический
//   метод getSpecs, который получает объект-машину как аргумент
//   и выводит в консоль значения полей maxSpeed, running и distance.
  
//   Использование будет выглядеть следующим образом:
// */

// const someCar = new Car (101);
// someCar.turnOn(true);
// someCar.accelerate(100);
// someCar.drive(2);

// Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200


//-------------------------------------------- 05 --------------------------------------------

class Car {
  constructor(maxSpeed, value) {
    this._value = value;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }
  
    turnOn() {
        return this.running = true;
    }
  
    turnOff() {
        return this.running = false;
    }
    
    accelerate(spd) {
        if (spd < this.maxSpeed) {
            return  this.speed = spd;
        }
    }
    
    decelerate(spd) {
        if (0 <= spd <= this.maxSpeed) {
            return this.speed = spd;
        }
    }
  
    drive(hours) {
        if (this.running = true) {
            return this.distance = hours * this.speed;
        }
    }

    static getSpecs(Car) {
    console.log(`maxSpeed: ${Car.maxSpeed}, running: ${Car.running}, distance: ${Car.distance}`);
  }

  get value (){
    return this._value; 
  }

  set value (value) {
    return this._value = value
  }

}

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  // const myCa = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000

  console.log(myCar.value)

  myCar.value = 4000;
  myCar.value; // 4000

console.log(myCar.value)