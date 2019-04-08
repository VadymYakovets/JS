'use strict'

const container = document.querySelector(".bookmarks__container");
const form = document.querySelector(".bookmarks__form");
const input = document.querySelector(".bookmark__input");
const addButton = document.querySelector(".bookmark-add__button");
const urlListWrap = document.querySelector(".bookmarks__list");
const removeBtn = document.querySelector('.bookmark-remove__button');

// addButton.addEventListener('click', getUrlData);

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

const LOCALSTORAGE = (addUrl => {
    if (!addUrl) return;

    const isActive = "localStorage" in addUrl;

    const get = key => {
        try {
            const LSData = localStorage.getItem(key);
            console.log('парс дата',JSON.parse(LSData));
            console.log(`Тип LSData: ${typeof(JSON.parse(LSData))}`);
            return LSData === null && typeof(JSON.parse(LSData)) != object ?
                undefined :
                JSON.parse(LSData);
        } catch (err) {
            console.error("Get state error: ", err);
        }
    };

    const set = (key, value) => {
        try {
            const valueToSave = JSON.stringify(value);
            localStorage.setItem(key, valueToSave);
        } catch (err) {
            console.error("Set state error: ", err);
        }
    };

    const userAPI = {
        isActive,
        get,
        set,
    };

    return userAPI;
})(window);

function handleOnDomcreated() {
    const urlList = LOCALSTORAGE.get("urlList") ? LOCALSTORAGE.get("urlList") : [];
    updateLocalStorage(urlList);
    createMarkup(urlList);
};

function updateLocalStorage(valueToUpdate) {
    LOCALSTORAGE.set("urlList", valueToUpdate);
}

function checkForPrevSaved(name) {
    let urlListFromLS = LOCALSTORAGE.get("urlList");
    const savedUrlNames = urlListFromLS ? urlListFromLS.map(el => el.name) : [];
    return savedUrlNames.some(bookmark => bookmark === name);
}

function checkForValidUrlSyntax(url) {
    const regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return regExp.test(url);
}

function handleAddBookmark(event) {
    event.preventDefault();

    const target = event.target;
    let urlListFromLS = LOCALSTORAGE.get("urlList");

    if (target.textContent === "Add") {
        let urlList = urlListFromLS.reverse();
        const bookmark = {
            name: "",
        };

        if (!checkForValidUrlSyntax(input.value)) {
            alert("Error! You entered not valid URL");
            form.reset();
            input.value = '';
            return
        }

        if (!checkForPrevSaved(input.value)) {
            bookmark.name = input.value;
            // bookmark.name = getUrlData(input.value);
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
    const source = document.querySelector("#bookmark__template").innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = list.reduce((acc, bookmark) => acc + template(bookmark), "");
    urlListWrap.insertAdjacentHTML("beforeend", markup);
}

function handleRemoveBookmark(event) {
    event.preventDefault();
    const target = event.target;

    if (target.textContent === "x") {
        const card = target.parentNode;
        const bookmarkToDelete = target.previousElementSibling.textContent;
        // const cardDellValue = target.parentNode.textContent;

        let urlListFromLS = LOCALSTORAGE.get("urlList");
        let updatedUrlList = urlListFromLS.filter(el => el.name != bookmarkToDelete);

        localStorage.removeItem('urlList');
        updateLocalStorage(updatedUrlList);

        // console.log('URL list:', urlListFromLS);
        // console.log('Element for delete',cardDellValue);

        card.remove();
        form.reset();
    }
}

form.addEventListener('click', handleAddBookmark);
container.addEventListener('click', handleRemoveBookmark)
document.addEventListener('DOMContentLoaded', handleOnDomcreated)
