'use strict';

const input= document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.result-list');
const api = 'http://api.tvmaze.com/search/shows?q=';
const query = input.value;
const endpoint = api + query;

// creamos listener para llamar al botón
//que lo recogido en el input se pinte en consola cuando aprietas el botón

function showSerie () {
    let listSeries = '';
  fetch(endpoint)
    .then (response => response.json())
    .then (data => {
      for (const item of data) {
        const itemName= item.show.name;
        const itemImage= item.show.image.medium;
        listSeries += `<li class="li-elements><h2 class="show-name">${itemName}</h2><img class="show-img" src=${itemImage}></li>`;
    list.innerHTML = listSeries;
    }

    })


}



button.addEventListener('click', showSerie);
