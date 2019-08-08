'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.result-list');
const api = 'http://api.tvmaze.com/search/shows?q=';
const query = input.value;
const endpoint = api + query;
const altPicture = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';



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
        listSeries += `<li class="li-elements"><h2 class="show-name">${itemName}</h2><img class="show-img" src=${itemImage}></li>`;

        list.innerHTML = listSeries;
        const listElements = document.querySelectorAll('.li-elements');
        console.log(listElements);
        listElements.addEventListener('click', pickFavorite);
        function pickFavorite () {
          console.log('what');
        }


      }
    })


}


// function pickFavorite() {
//   console.log('li');

// }


button.addEventListener('click', showSerie);




// let liElement = [];

//   let element = [];
//   for (let i = 0; i < list.length; i++) {
//     element[i] = list[i].element;
//   }
//   for (let i = 0; i < element.length; i++) {
//     if (element[i].classList.contains('favorite') { classList.toggle('favorite') }

//   }
// }
