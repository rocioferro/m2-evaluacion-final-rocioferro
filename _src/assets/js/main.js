'use strict';

const input= document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.list');

// creamos listener para llamar al botón

function showSerie () {
  console.log('series');
}



button.addEventListener('click', showSerie);
