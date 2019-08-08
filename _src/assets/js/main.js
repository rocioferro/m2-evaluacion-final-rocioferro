'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.result-list');
const api = 'http://api.tvmaze.com/search/shows?q=';
const query = input.value;
const endpoint = api + query;
const altPicture = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
let favSeries = [];
const favContainer = document.querySelector('.favseries-container');

function pickFavorite(event) {
  const currentSerie = event.currentTarget;
  const currentSerieName = currentSerie.getAttribute('data-name');


  currentSerie.classList.toggle('favorite');
  if (currentSerie.classList.contains('favorite') === true) {
    if (favSeries.includes(currentSerieName) !== true) {
      favSeries.push(currentSerieName);
      favContainer.innerHTML = favSeries;
    }

  }
  else {
    const index = favSeries.indexOf(currentSerieName);
    if (index > -1) {
      favSeries.splice(index, 1);
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
          `<li class="li-elements" data-name="${itemName}">
             <h2 class="show-name">${itemName}</h2>
             <img class="show-img" src=${itemImage} alt="${itemName}">
           </li>`;

        list.innerHTML = listSeries;

        startFavorites();

      }
    })


}


button.addEventListener('click', showSerie);




