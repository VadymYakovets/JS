'use strict'

const admin = 'adminLogin';
const password = 'm4ngo1zh4ackz0r';
const error = 'Доступ запрещен!';
const cancel = 'Отменено пользователем!';
const user = prompt ('введите Ваш логин');

console.log (user);

if (user === null) {
    alert (cancel);
} else if (admin === user) {
            const userPassword = prompt ('введите Ваш пароль');
            if (userPassword === null) {
                alert (cancel);
            } else if (userPassword === password) {
                alert ('Добро пожаловать!')
            } else {
                alert ('Ошибка входа! Неверный пароль!')
            }
  } else {
        alert (error)
    }