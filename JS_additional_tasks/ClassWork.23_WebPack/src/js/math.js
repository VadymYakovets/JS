'use strict'

const sum = (...args) => args.reduce((acc, el) => acc + el);

const minus = (...args) => args.reduce((acc, el) => acc - el);

const pow = (a, b) => Math.pow(a,b);

export {
    minus, 
    pow
}; // затягиваем эти функции в index.js через фигурные дужки

export default sum; //затягиваем функцию в index.js без фигурных дужок