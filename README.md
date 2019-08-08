Evaluación final módulo 2 rocioferro

Aplicación web de búsqueda de series de tv

XX1- html básico.
  -h1 buscador de series
  -input
  -botón
  -ul para introducir los li en el dom

2- crear un listener en el botón
-se redirige hacia lo escrito en el input
-hacer un fetch. recoge lo escrito en el inpuy y con eso rellena el enlace del fetch (hacer dos variables: una para la api en si y otra para el contenido. luego juntarlas en la url del fetch)

3-que lo que se obtenga de la api se pinte dentro de la ul en varios li (con clase + h2 + img) y se pinte en el dom (con innerhtml seguramente).
  -usar bucles para recorrer el array/objetos/whatever. tomar de array name + image-original
  donde se introducen los elementos en dom, se inicia con una variable vacía para que no se acumulen las búsquedas, con un *=

4- series sin imagen: poner imagen de relleno nuestra (con un if. si no existe X, poner X otra cosa. y en esa X otra cosa poner el titulo de la serie dentro?)


4- que el usuario pueda seleccionar los elementos favoritos (ej 6 o 7 de fin de semana)
Una vez aparecen los resultados de búsqueda, podremos indicar cuáles son nuestras series
favoritas. Para ello, al hacer clic sobre un resultado el color de fondo y el de fuente se
intercambian.
Además, debes crear un listado (array) con las series favoritas que almacenamos en una variable.
Este listado lo mostraremos en la parte izquierda de la pantalla, debajo del formulario de búqueda.
Para terminar, si volvemos a realizar una nueva búsqueda, los favoritos se irán acumulando en
nuestra lista.

5- guardarlo en localStorage

6-maquetación

7-borrar favoritos

BORRAR VALUE DEL INPUT POR DEFECTO
