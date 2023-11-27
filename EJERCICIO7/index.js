//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];

//Cogemos el elemento data-function="printHere"
const printHere = document.querySelector('[data-function="printHere"]');
//Creamos el elemento ul
const ul = document.createElement('ul');

//Recorremos el array
places.forEach((place) => {
  //Creamos el elemento li y le asignamos el contenido
  const li = document.createElement('li');
  li.textContent = place;
  //Agregamos el li a la lista ul
  ul.append(li);
});

//Agregamos la lista ul al div
printHere.append(ul);
