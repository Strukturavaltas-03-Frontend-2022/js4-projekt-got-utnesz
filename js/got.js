'use strict'

const displayChar = document.querySelector(".displayChar");
const picture = document.querySelector(".picture");
const moviePic = document.querySelector(".moviePic");
const charName = document.querySelector(".charName");
const house = document.querySelector(".house");
const bio = document.querySelector(".bio");
const searchButton = document.querySelector(".searchButton");
const searchField = document.querySelector(".searchField");

let value;
let searchValue;
let charTable;
let pic_tag;
let lastTimeout = 0;

//fetching data

async function request(url, options = {}) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.filter((character) => !character?.dead);
    } catch (error) {
        console.error(error);
    }
}

request("../json/got.json").then(function (charTable) {
  const characters = document.querySelector(".characters");
    let character = "";
    for (let element of charTable) {
        character += `<div class="pic_tag"><img class="smallImg" src=${element.portrait} alt="picture"><p class="img_tag">${element.name}</p></div>`;
    }
    characters.innerHTML = character;
    console.log(character);
    pic_tag = document.querySelectorAll(".pic_tag");
    putData(charTable);
})

//display choosen charecter

const putData = (charTable) => {

     pic_tag.forEach((character, i) => character.addEventListener("click", () => {    
            moviePic.setAttribute("src", charTable[i].picture) 
            charName.innerHTML = charTable[i].name
            house.setAttribute("src", `../assets/houses/${charTable[i].house}.png`)
            bio.innerHTML = charTable[i].bio
    }))

};

//search function

searchField.addEventListener('keyup', (ev) => {
        searchButton.addEventListener("click", () => {
           value = (ev.target.value);
            searchValue = value.toLowerCase();
            if (searchValue) {
                searchValue === charName;
            }
        });
})
















