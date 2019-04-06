'use strict'

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const GAU_btn = document.querySelector('#GAU-btn')
const URL = 'https://test-users-api.herokuapp.com/users/';

GAU_btn.addEventListener('click', getAllUsers);

function getAllUsers(event) {
  event.preventDefault();
  fetch(URL)
    .then(resp => {
      if (resp.ok) return resp.json();
      throw new Error("Error fetching data");
    })
    .then(data => {
      const users = data.data;
      console.log(users);
      createUsersTable(users);
    })
    .catch(err => console.log(err))
};

function createUsersTable (arr) {
  // let body = document.querySelector('.AU_Table');
  let resultForm = document.querySelector('.resultAllUsers');
  let result = '';
  let n = 1;
  for (let obj of arr) {
  result += `<tr>
                  <td>${n++}</td>
                  <td>${obj.id}</td>
                  <td>${obj.name}</td>
                  <td>${obj.age}</td>
              </tr>`
  }
  let markup = `<table>
  <tr>
      <th>#</th>
      <th>USER_ID</th>
      <th>USER_NAME</th>
      <th>USER_AGE</th>
  </tr>
  ${result}
  </table>`
  resultForm.innerHTML = markup;
  get_P.textContent = '';
  rem_P.textContent = '';
  upd_P.textContent = '';
  post_P.textContent = '';
}

// ------------------------- GET USER BY ID ----------------------------------------

const GUBI_btn = document.querySelector('.GUBI-btn')
const GUBI_inputID = document.querySelector('.GUBI_inputID');
const get_P = document.querySelector('.ResulByUserID');


GUBI_btn.addEventListener('click', getUserById);

function getUserById(event) {
  event.preventDefault();
  if (!GUBI_inputID.value) {
    get_P.textContent = 'You should enter user ID'
  }  else {
    fetch(`${URL}${GUBI_inputID.value}`)
    .then(resp => {
      if (resp.ok) return resp.json();
      throw new Error("Error fetching data");
      
    })
    .then(data => {
      const userData = data.data
      if (userData) {
        userDataFn(userData);
      }
        else {
          get_P.textContent = `User with ID = "${GUBI_inputID.value}" doesn\'t exist in DataBase`;
          GUBI_inputID.value = '';
        }
    })
    .catch(err => console.log(err))
  }
  rem_P.textContent = '';
  upd_P.textContent = '';
  post_P.textContent = '';
}

const userDataFn = userData => {
    get_P.innerHTML = `
                  <p>User ID = ${userData.id}</p>
                  <p>User name = ${userData.name}</p>
                  <p>User age = ${userData.age}</p>
                  `
    GUBI_inputID.value = '';
}

// ------------------------- ADD NEW USER ----------------------------------------

const userName = document.querySelector('.inputPostName');
const userAge = document.querySelector('.inputPostAge');
const userPostBtn = document.querySelector('.addUserBtn');
const post_P = document.querySelector('.ResultPostUser');

userPostBtn.addEventListener('click', addUser);

function addUser(event) {
  event.preventDefault();

if (!userAge.value || !userName.value) {
  post_P.innerHTML = `<p>You should enter user Name and Age</p>` 
} else {

  const newUser = {
    name: userName.value,
    age: Number(userAge.value),
  };

  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newUser),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      const userData = data.data
      post_P.textContent = `User ${userData.name} ${userData.age} years old has been added successfully`;
    })
    .catch(error => console.log('ERROR' + error));
  }
  userName.value = '';
  userAge.value = '';
  rem_P.textContent = '';
  get_P.textContent = '';
  upd_P.textContent = '';
}

// ------------------------- UPDATE USER ----------------------------------------

const userUpd_ID = document.querySelector('.inputUpd_ID');
const userUpd_Name = document.querySelector('.inputUpd_Name');
const userUpd_Age = document.querySelector('.inputUpd_Age');
const updUserBtn = document.querySelector('.updUser-btn')
const upd_P = document.querySelector('.updateResult');

updUserBtn.addEventListener('click', updateUser);

function updateUser(event) {
  event.preventDefault();

  const user = {
    name: userUpd_Name.value,
    age: Number(userUpd_Age.value)
  };

  console.log(user.name);
  console.log(user.age);

  fetch(`${URL}${userUpd_ID.value}`, {
    method: 'PUT',
    body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
  })
  .then(response => response.json())
  // .then(data => console.log(data.status))
  .then(data => {
    const userData = data.data
    if (userUpd_ID.value === '') {
      upd_P.textContent = 'You should enter user ID'
    } else if (userData) {
      upd_P.innerHTML = `
      <p>User:</p>
      <p>ID = ${userData.id}</p>
      <p>Name = ${userData.name}</p>
      <p>Age = ${userData.age}</p>
      <p>has been updated successfully</p>
      `
      userUpd_ID.value = '';
      userUpd_Name.value = '';
      userUpd_Age.value = '';
      }
    else {
      upd_P.textContent = `User with ID: "${userUpd_ID.value}" doesn\'t exist in DataBase`;
      userUpd_ID.value = '';
      userUpd_Name.value = '';
      userUpd_Age.value = '';
} 
})
  .catch(error => console.log('ERROR' + error));
  user.value = '';
  rem_P.textContent = '';
  get_P.textContent = '';
  upd_P.textContent = '';
  post_P.textContent = '';
}

// ------------------------- REMOVE USER BY ID ----------------------------------------

const remID = document.querySelector('.inputRem_ID');
const rem_btn = document.querySelector('.rem-btn')
const rem_P = document.querySelector('.removeResult');

rem_btn.addEventListener('click', remUser);

function remUser(event) {
  event.preventDefault();
  const remUserID =  remID.value
  console.log(remID.value);
  console.log(`${URL}${remID.value}`)
  fetch(`${URL}${remID.value}`, {
    method: 'DELETE'
  })
  .then(resp => {
    if (resp.ok) return resp.json();
    throw new Error("Error fetching data");
  })
  .then(data => {
    const remUserID = data.data;
    if (remID.value === '') {
      rem_P.textContent = 'You should enter user ID'
    } else if (remUserID) {
      rem_P.innerHTML = `
      <p>User:</p>
      <p>ID = ${remUserID.id}</p>
      <p>Name = ${remUserID.name}</p>
      <p>Age = ${remUserID.age}</p>
      <p>has been removed successfully</p>
      `
      remID.value = '';
    }
    else {
      rem_P.textContent = `User with ID: "${remID.value}" doesn\'t exist in DataBase`;
      remID.value = '';
    }  
  })
  .catch(err => console.log(err))
  get_P.textContent = '';
  upd_P.textContent = '';
  post_P.textContent = '';
}