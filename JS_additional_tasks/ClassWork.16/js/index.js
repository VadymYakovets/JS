'use strict'

// точка входа:
// console.log('htpps://pixabay.com/api/?period=30&type=music&time=30&per_page=21');


// const URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=car&category=backgrounds&per_page=9'

// fetch(URL)
//     .then(resp => resp.json())
//     .then(result => console.log(result.hits))
//     .catch(err => console.log(err))

const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

fetch(URL)
    .then(resp => resp.json())
    .then(result => render(result))
    .catch(err => console.log(err))

function render (arr) {
    let body = document.querySelector('body')
    let result = '';
    for (let obj of arr) {
    result += `<tr>
                    <td>${obj.ccy}</td>
                    <td>${obj.buy}</td>
                    <td>${obj.sale}</td>
               </tr>`
    }
    let markup = `<table>
    <tr>
        <th>Валюта</th>
        <th>Покупка</th>
        <th>Продажа</th>
    </tr>
    ${result}
    </table>`
    body.innerHTML = markup;
}

// let obj = {
//     name: 'Bob',
//     age: 25,
// }

// let j = JSON.stringify(obj);

// console.log(JSON.parse(j));





// &category=fashion&order=popular%pretty=true&image_type=photo'



