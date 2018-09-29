'use strict';

class User {
  constructor (name, gender, city) {
    this._name = name;
    this.gender = gender;
    this.city = city;
  }

  static showPI () {
    return Math.PI;
  }

  get name () {
    return this._name
  }

  set age (age) {
    this._age = age;
  }

  get age () {
    return this._age;
  }

  getFullInfo () {
    return `My name is ${this.name} i am ${this.gender}`;
  }

  showCity () {
    return `I live in ${this.city}`;
  }
}

let Ivan = new User('Ivan', 'male', 'Kiev');
console.log(Ivan);
console.log(Ivan.name);

// Ivan.name = 'Bob';

console.log(Ivan.name);

Ivan.age = 25;

console.log(Ivan.age);

console.log(User.showPI());

User.a = 5;
Hamburger.Sizes = {
  Big: {
    price: 50,
    cal: 100,
  },

  Small: {
    price: 30,
    cal: 80,
  }
}
console.log(Hamburger.Big)
console.log(User.a);