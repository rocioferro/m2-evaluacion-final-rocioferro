'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.result-list');
const api = 'http://api.tvmaze.com/search/shows?q=';
const query = input.value;
const endpoint = api + query;
const altPicture = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
let seriesArr = [];
const favContainer = document.querySelector('.favseries-container');

function pickFavorite(event) {
  const currentSerie =event.currentTarget;

  currentSerie.classList.toggle('favorite');


  if (currentSerie.classList.contains('favorite')) {
    seriesArr = currentSerie.getAttribute('data-name');
    favContainer.innerHTML += seriesArr;
  }
  else {
    // sacar del array
  }
  // const seriesArr = JSON.stringify(currentSerie);
  // console.log(seriesArr);


  // const seriesArr = [];
  // for (const elements of currentSerie) {

  // }
  // seriesArr = currentSerie;
  // // let seriesArr = [];
  // for (let i = 0; i<currentSerie.length; i++) {
  //   seriesArr[i] = currentSerie[i].seriesArr;
  //   console.log(seriesArr[i]);
  // }

  //   let seriesArr = [];
//   for (let i = 0; i < currentserie.length; i++) {
//     seriesArr[i] = currentSerie[i].seriesArr;
//   }
//   for (let i = 0; i < element.length; i++) {
//     if (element[i].classList.contains('favorite') { classList.toggle('favorite') }

//   }
// }
}

function startFavorites () {
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
             <img class="show-img" src=${itemImage}>
           </li>`;

        list.innerHTML = listSeries;

        startFavorites ();

      }
    })


}


button.addEventListener('click', showSerie);




