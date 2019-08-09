Evaluación final módulo 2 rocioferro

Aplicación web de búsqueda de series de tv. Objetivos/pasos:

X1- html básico.
  -h1 buscador de series
  -input
  -botón
  -ul para introducir los li en el dom

2-
Xcrear un listener en el botón
Xse redirige hacia lo escrito en el input
Xhacer un fetch. recoge lo escrito en el input y con eso rellena el enlace del fetch (hacer dos variables: una para la api en si y otra para el contenido. luego juntarlas en la url del fetch)

3Xque lo que se obtenga de la api se pinte dentro de la ul en varios li (con clase + h2 + img) y se pinte en el dom (con innerhtml seguramente).

4Xusar bucles para recorrer el array/objetos/whatever. tomar de array name + image-original
  donde se introducen los elementos en dom, se inicia con una variable vacía para que no se acumulen las búsquedas, con un +=

5X series sin imagen: poner imagen de relleno nuestra (con un if. si no existe X, poner X otra cosa. y en esa X otra cosa poner el titulo de la serie dentro?)


6-
-que el usuario pueda seleccionar los elementos favoritos
Una vez aparecen los resultados de búsqueda, podremos indicar cuáles son nuestras series
favoritas. Para ello, al hacer clic sobre un resultado el color de fondo y el de fuente se
intercambian.

Además, debes crear un listado (array) con las series favoritas que almacenamos en una variable.
Este listado lo mostraremos en la parte izquierda de la pantalla, debajo del formulario de búqueda.
Para terminar, si volvemos a realizar una nueva búsqueda, los favoritos se irán acumulando en
nuestra lista.

6  X-poner un listener sobre los de la lista.
  X-generar una función nueva(showFavorite) que seleccione los elementos de la lista
  X-que cuando los pulses se añada una clase que los marque como favoritos (y cambie su scss)

7 X-crear un array con el nombre de las series favoritas seleccionadas
  X-crear un array con la foto de las series favoritas seleccionadas
  X-que el array se muestre en pantalla debajo del formulario
  x-hacer que el array no se repita si ya ha sido seleccionado
  X-inclur array + imagen en el dom
  x-hacer que se muestren todas las que añado en el array de favs con un for


8 X-guardarlo en localStorage
  -Para terminar, si volvemos a realizar una nueva búsqueda, los favoritos se irán acumulando en
nuestra lista.

9-maquetación

10-borrar favoritos

REVISAR LOS CONSOLE LOG Y EL CODIGO COMENTADO
