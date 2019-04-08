'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var container = document.querySelector(".bookmarks__container");
var form = document.querySelector(".bookmarks__form");
var input = document.querySelector(".bookmark__input");
var addButton = document.querySelector(".bookmark-add__button");
var urlListWrap = document.querySelector(".bookmarks__list");
var removeBtn = document.querySelector('.bookmark-remove__button'); // addButton.addEventListener('click', getUrlData);
// function getUrlData() {
//   // event.preventDefault();
//   const data = {
//                 key: '5c9d0d1de4b438aee38c5cfd6cbd0cdafeacdf058dcf4',
//                 q: input.value
//               }
//   fetch('https://api.linkpreview.net', {
//     method: 'POST',
//     mode: 'cors',
//     body: JSON.stringify(data),
//   })
//     .then(res => res.json())
//     .then(response => console.log(response))
// };

var LOCALSTORAGE = function (addUrl) {
  if (!addUrl) return;
  var isActive = "localStorage" in addUrl;

  var get = function get(key) {
    try {
      var LSData = localStorage.getItem(key);
      console.log('парс дата', JSON.parse(LSData));
      console.log("\u0422\u0438\u043F LSData: ".concat(_typeof(JSON.parse(LSData))));
      return LSData === null && _typeof(JSON.parse(LSData)) != object ? undefined : JSON.parse(LSData);
    } catch (err) {
      console.error("Get state error: ", err);
    }
  };

  var set = function set(key, value) {
    try {
      var valueToSave = JSON.stringify(value);
      localStorage.setItem(key, valueToSave);
    } catch (err) {
      console.error("Set state error: ", err);
    }
  };

  var userAPI = {
    isActive: isActive,
    get: get,
    set: set
  };
  return userAPI;
}(window);

function handleOnDomcreated() {
  var urlList = LOCALSTORAGE.get("urlList") ? LOCALSTORAGE.get("urlList") : [];
  updateLocalStorage(urlList);
  createMarkup(urlList);
}

;

function updateLocalStorage(valueToUpdate) {
  LOCALSTORAGE.set("urlList", valueToUpdate);
}

function checkForPrevSaved(name) {
  var urlListFromLS = LOCALSTORAGE.get("urlList");
  var savedUrlNames = urlListFromLS ? urlListFromLS.map(function (el) {
    return el.name;
  }) : [];
  return savedUrlNames.some(function (bookmark) {
    return bookmark === name;
  });
}

function checkForValidUrlSyntax(url) {
  var regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return regExp.test(url);
}

function handleAddBookmark(event) {
  event.preventDefault();
  var target = event.target;
  var urlListFromLS = LOCALSTORAGE.get("urlList");

  if (target.textContent === "Add") {
    var urlList = urlListFromLS.reverse();
    var bookmark = {
      name: ""
    };

    if (!checkForValidUrlSyntax(input.value)) {
      alert("Error! You entered not valid URL");
      form.reset();
      input.value = '';
      return;
    }

    if (!checkForPrevSaved(input.value)) {
      bookmark.name = input.value; // bookmark.name = getUrlData(input.value);

      urlList.push(bookmark);
      createMarkup(urlListFromLS.reverse());
      updateLocalStorage(urlList);
      form.reset();
    } else {
      alert("This URL has been already saved!");
      form.reset();
      input.value = '';
    }
  }
}

function createMarkup(list) {
  urlListWrap.innerHTML = "";
  var source = document.querySelector("#bookmark__template").innerHTML.trim();
  var template = Handlebars.compile(source);
  var markup = list.reduce(function (acc, bookmark) {
    return acc + template(bookmark);
  }, "");
  urlListWrap.insertAdjacentHTML("beforeend", markup);
}

function handleRemoveBookmark(event) {
  event.preventDefault();
  var target = event.target;

  if (target.textContent === "x") {
    var card = target.parentNode;
    var bookmarkToDelete = target.previousElementSibling.textContent; // const cardDellValue = target.parentNode.textContent;

    var urlListFromLS = LOCALSTORAGE.get("urlList");
    var updatedUrlList = urlListFromLS.filter(function (el) {
      return el.name != bookmarkToDelete;
    });
    localStorage.removeItem('urlList');
    updateLocalStorage(updatedUrlList); // console.log('URL list:', urlListFromLS);
    // console.log('Element for delete',cardDellValue);

    card.remove();
    form.reset();
  }
}

form.addEventListener('click', handleAddBookmark);
container.addEventListener('click', handleRemoveBookmark);
document.addEventListener('DOMContentLoaded', handleOnDomcreated);