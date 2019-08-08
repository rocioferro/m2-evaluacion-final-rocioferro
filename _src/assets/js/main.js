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
  let listFavs = '';
  const currentSerie = event.currentTarget;
//  obtener el titulo para el array de favoritos
  const showCurrentName = currentSerie.getAttribute('data-name');
  // // obtener la foto para el array de favoritos
  const showCurrentImage = currentSerie.querySelector('.show-img').src;

  //  for (const item of allImages) {
  //   console.log(item);

  currentSerie.classList.toggle('favorite');
 if (currentSerie.classList.contains('favorite') === true) {
  //   // lo guardo en el array solo si no existe
      if (favSeries.includes(showCurrentName) === false ) {
    favSeries.push(showCurrentName);
    favSeries.push(showCurrentImage);
    // favContainer.innerHTML = favSeries;
    // console.log(favSeries);
      }
   }
  else {
    // REVISAR ESTE CODIGO. NO ME LO QUITA EN EL DOM;ASOCIARLO a las variables
    const indexSerie = favSeries.indexOf(showCurrentName);
    if (indexSerie > -1) {
      favSeries.splice(indexSerie, 1);
    }
    const indexImg = favSeries.indexOf(showCurrentImage);
    if (indexImg > -1) {
      favSeries.splice(indexImg, 1);
    }
  }
  listFavs +=
        `<ul class="fav-list">
          <li class="fav-elements">
             <h3 class="fav-name">${showCurrentName}</h2>
             <img class="fav-img" src=${showCurrentImage} alt="${showCurrentName}">
           </li>
        </ul>`


  favContainer.innerHTML = listFavs;
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
             <h2 class="show-name" id="item-name">${itemName}</h2>
             <img class="show-img" data-image="${itemImage}" src=${itemImage} alt="${itemName}">
           </li>`;

        list.innerHTML = listSeries;

        startFavorites();

      }
    })


}


button.addEventListener('click', showSerie);


