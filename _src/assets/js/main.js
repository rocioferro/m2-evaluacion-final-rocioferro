'use strict';

const input= document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.result-list');
const api = 'http://api.tvmaze.com/search/shows?q=';
const query = input.value;

// creamos listener para llamar al botón
//que lo recogido en el input se pinte en consola cuando aprietas el botón

function showSerie () {
  const endpoint = api + query;
  fetch(endpoint)
    .then (response => response.json())
    .then (data => {
      for (const item of data) {
      console.log(item.show.name, item.show.image); }
    })




}



button.addEventListener('click', showSerie);
