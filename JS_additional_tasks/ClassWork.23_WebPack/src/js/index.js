// import sum from './math';
// import {minus, pow} from './math';

// можна затянуть еще проще через одну инструкцию импорта
import sum, {minus, pow} from './math';
import h1 from './createDom';
import picture from './img';

console.log(sum(10,20,5,6,21,23));
console.log(minus(50,10));
console.log(pow(2,3));

console.log(h1);
let body = document.querySelector('body');
body.append(h1);

body.append(picture);