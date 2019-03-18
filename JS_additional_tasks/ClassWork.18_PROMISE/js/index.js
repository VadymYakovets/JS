'use strict'

// const sum = new Promise(function (resolve, reject) {
//     let count = 0;
//     let arr = [];
//     while (count < 10000000) {
//         let random = Math.floor(Math.random()*100);
//         arr.push(random);
//         count ++
//     }
//     let result = arr.reduce((acc, el) => acc + el, 0);

//     if (result % 2 === 0) {
//         resolve(result)
//     } else {
//         reject('Result incorect. Try again')
//     }
// })

// sum
//     // .then(data => console.log(data))
//     .then(data => {
//         console.log(data);
//         return data;        
//     })
//     .then(result => Math.sqrt(result))
//     .then(sqrt => sqrt / 2)
//     .then(division => Math.pow(division, 3))
//     .then(final => console.log(final))
//     .catch(err => console.error(err))

// промис внутри функции

function sum (iteration) {
    return new Promise(function (resolve, reject) {
        let count = 0;
        let arr = [];
        while (count < 10000000) {
            let random = Math.floor(Math.random()*100);
            arr.push(random);
            count ++
        }
        let result = arr.reduce((acc, el) => acc + el, 0);
    
        if (result % 2 === 0) {
            resolve(result)
        } else {
            reject('Result incorect. Try again')
        }
    })
}

// sum(500)
//     // .then(data => console.log(data))
//     .then(data => {
//         console.log(data);
//         return data;        
//     })
//     .then(result => Math.sqrt(result))
//     .then(sqrt => sqrt / 2)
//     .then(division => Math.pow(division, 3))
//     .then(final => console.log(final))
//     .catch(err => console.error(err));

// sum(200)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// Promise.all([sum(50), sum(10000), sum(1000000)])
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

Promise.race([sum(50), sum(10000)])
    .then(data => console.log(data))
    .catch(err => console.log(err))