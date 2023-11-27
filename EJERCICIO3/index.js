/******************************************************************/
/******************* EJERCICIO 3 - 1.1 ****************************/
/******************************************************************/

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

//Creamos el elemento ul
const ul1 = document.createElement('ul');
//Recorremos el array de paises
countries1.forEach((country) => {
  //Creamos el elemento li
  const li1 = document.createElement('li');
  li1.textContent = country;
  //Agrego el elemento li al ul
  ul1.append(li1);
});

//Agregamos el elemento ul documento
document.body.append(ul1);

/******************************************************************/
/******************* EJERCICIO 3 - 1.2 ****************************/
/******************************************************************/
// Elimina el elemento que tenga la clase .fn-remove-me.
//Recogemos todos los elementos con las clase .fn-remove-me
const removeMe = document.querySelectorAll('.fn-remove-me');
//Recorremos el array y eliminamos cada uno de los elementos
removeMe.forEach((element) => {
  element.remove();
});

/******************************************************************/
/******************* EJERCICIO 3 - 1.3 ****************************/
/******************************************************************/
//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

//Recomemos el div data-function="printHere"
const divPrintHere = document.querySelector('div[data-function="printHere"]');

//Creamos el elemento ul
const ul2 = document.createElement('ul');

//Recorremos el array de paises
cars.forEach((car) => {
  //Creamos el elemento li
  const li2 = document.createElement('li');
  li2.textContent = car;
  //Agrego el elemento li al ul
  ul2.append(li2);
});

//Agregamos el elemento ul al div printHere
divPrintHere.append(ul2);
/******************************************************************/
/******************* EJERCICIO 3 - 1.4 ****************************/
/******************************************************************/
//Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

//Recorremos el array y vamos insertando los elementos
countries2.forEach((country) => {
  //Creamos el div que contendrá al título y la imagen
  const div = document.createElement('div');
  //Creamos los elementos h4 e img
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  //Les insertamos el contenido
  h4.textContent = country.title;
  img.src = country.imgUrl;

  //Los agregamos al div
  div.append(h4);
  div.append(img);

  //Agregamos el div al documento
  document.body.append(div);
});

/******************************************************************/
/******************* EJERCICIO 3 - 1.5 ****************************/
/******************************************************************/
//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

//Creamos el nodo del botón y le asignamos un texto
const button = document.createElement('button');
button.textContent = 'Eliminar último elemento';

//Asignamos la funcionalidad del botón
button.addEventListener('click', removeLastDiv);

function removeLastDiv() {
  //Cogemos el ultimo div sin clase
  const lastDivWithoutClass = document.querySelector(
    'div:not([class]):last-of-type'
  );
  lastDivWithoutClass.remove();
}

//Asignamos el botón al documento
document.body.append(button);

/****************************************************************/
/******************* EJERCICIO 3 - 1.6 **************************/
/****************************************************************/
//Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

//Recogemos en un array los divs sin clase
const divWithoutClass = document.querySelectorAll('div:not([class])');
//Recorremos el array
divWithoutClass.forEach((div) => {
  //Creamos el nodo del botón y le asignamos un texto
  const button1 = document.createElement('button');
  button1.textContent = 'Eliminar este elemento';

  //Asignamos la funcionalidad del botón
  button1.addEventListener('click', () => div.remove());
  //Asignamos el botón al documento
  div.append(button1);
});
