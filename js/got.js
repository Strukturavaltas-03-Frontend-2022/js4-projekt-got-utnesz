'use strict'

const displayChar = document.querySelector(".displayChar");
const picture = document.querySelector(".picture");
const moviePic = document.querySelector(".moviePic");
const charName = document.querySelector(".charName");
const house = document.querySelector(".house");
const bio = document.querySelector(".bio");

let charData = [];
let pic_tag;

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
    pic_tag = document.querySelectorAll(".pic_tag");
    putData(charTable);
})

const putData = (charTable) => {

     pic_tag.forEach((character, i) => character.addEventListener("click", () => {    
         if (img.src === "assets/jorah.png") {
             moviePic.setAttribute("src", `./assets/nopic.png`);
        } else {
             moviePic.setAttribute("src", charTable[i].picture) 
        }
            charName.innerHTML = charTable[i].name
            house.setAttribute("src", `../assets/houses/${charTable[i].house}.png`)
            bio.innerHTML = charTable[i].bio
    }))

};















