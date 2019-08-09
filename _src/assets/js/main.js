'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const erase = document.querySelector('.erase');
const list = document.querySelector('.result-list');
const api = 'http://api.tvmaze.com/search/shows?q=';
const altPicture = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
const favContainer = document.querySelector('.favseries-container');
let favSeries = [];

if (localStorage.getItem('myFavSeries') !== null) {
  favSeries = JSON.parse(localStorage.getItem('myFavSeries'));
}
if (favSeries.length > 1) {
  for (let i = 0; i < favSeries.length; i++) {
    favContainer.innerHTML += `<ul class="fav-list">
      <li class="fav-elements">
         <h3 class="fav-name">${favSeries[i].name}</h2>
         <img class="fav-img" src=${favSeries[i].image}>
       </li>
    </ul>`;
  }
}

function eraseSerie () {
  localStorage.clear('myFavSeries');
  favContainer.innerHTML = '';

 }

function pickFavorite(event) {
  eraseSerie();
  let listFavs = '';
  const currentSerie = event.currentTarget;
  const currentName = currentSerie.querySelector('.show-name').innerHTML;
  const currentImage = currentSerie.querySelector('.show-img').src;
  const myObjects = { 'name': currentName, 'image': currentImage };


  currentSerie.classList.toggle('favorite');
  if (currentSerie.classList.contains('favorite') === true) {
    favSeries.push(myObjects);
  }
  for (const item of favSeries) {
    listFavs +=
      `<ul class="fav-list">
          <li class="fav-elements">
             <h3 class="fav-name">${item.name}</h2>
             <img class="fav-img" src=${item.image} alt="${currentName}">
           </li>
        </ul>`;

    favContainer.innerHTML = listFavs;
    }

  printFavs();

}
function printFavs () {
  localStorage.setItem('myFavSeries', JSON.stringify(favSeries));
  if (favContainer.innerHTML === '') {
    for (let i = 0; i < favSeries.length; i++) {
      favContainer.innerHTML += `<ul class="fav-list">
          <li class="fav-elements">
             <h3 class="fav-name">${favSeries[i].name}</h2>
             <img class="fav-img" src=${favSeries[i].image} alt="${currentName}">
           </li>
        </ul>`;
    }
  }
}
function startFavorites() {
  const listElements = document.querySelectorAll('.li-elements');

  for (const item of listElements) {
    item.addEventListener('click', pickFavorite);
  }
}

function showSerie() {
  let listSeries = '';
  const query = input.value;
  const endpoint = api + query;
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      for (const item of data) {
        const itemName = item.show.name;
        let itemImage = item.show.image;
        if (itemImage === null) {
          itemImage = altPicture;
        } else {
          itemImage = item.show.image.medium;
        }
        listSeries +=
          `<li class="li-elements" id="name-id" data-name="${itemName}">
             <h2 class="show-name" id="item-name">${itemName}</h2>
             <img class="show-img" data-image="${itemImage}" src=${itemImage} alt="${itemName}">
           </li>`;

        list.innerHTML = listSeries;

        startFavorites();


      }
    });


}

button.addEventListener('click', showSerie);
erase.addEventListener('click',eraseSerie);


