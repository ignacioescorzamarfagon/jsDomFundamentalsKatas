/******************************************************************/
/******************* EJERCICIO 2 - 1.1 ****************************/
/******************************************************************/
//Inserta dinamicamente en un html un div vacio con javascript.

//RESOLUCIÓN 1.1
//Creamos el nodo del div
const myDiv1_1 = document.createElement('div');
//Lo insertamos directamente en el body
document.body.appendChild(myDiv1_1);

/******************************************************************/
/******************* EJERCICIO 2 - 1.2 ****************************/
/******************************************************************/

// Inserta dinamicamente en un html un div que contenga una p con javascript.

//RESOLUCIÓN 1.2
//Creamos el nodo del div y del párrafo
const myDiv1_2 = document.createElement('div');
const p1_2 = document.createElement('p');
//Añadimos el párrafo al div y el div al body
myDiv1_2.append(p1_2);
document.body.append(myDiv1_2);

/******************************************************************/
/******************* EJERCICIO 2 - 1.3 ****************************/
/******************************************************************/

//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

//RESOLUCIÓN 1.3
//Creamos el nodo del div
const myDiv1_3 = document.createElement('div');

//Insertamos 8 veces el p en el div
for (let i = 0; i < 6; i++) {
  //Creamos el nodo del párrafo
  const p1_3 = document.createElement('p');
  //Añadimos el párrafo al div
  myDiv1_3.appendChild(p1_3);
}

//Añadimos el div al body
document.body.append(myDiv1_3);

/******************************************************************/
/******************* EJERCICIO 2 - 1.4 ****************************/
/******************************************************************/

// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

//RESOLUCIÓN 1.4
//Creamos el nodo del párrafo
const p1_4 = document.createElement('p');
//Agregamos el texto al párrafo
p1_4.textContent = 'Soy dinámico';

//Agregamos el párrafo al body
document.body.append(p1_4);

/******************************************************************/
/******************* EJERCICIO 2 - 1.5 ****************************/
/******************************************************************/

// Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

//RESOLUCIÓN 1.5
//Obtenemos el elemento a modificar
const h2 = document.querySelector('h2.fn-insert-here');
//Insertamos el texto
h2.textContent = 'Wubba Lubba dub dub';

/******************************************************************/
/******************* EJERCICIO 2 - 1.6 ****************************/
/******************************************************************/

//Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//RESOLUCIÓN 1.6

//Creamos el nodo del ul
const ul = document.createElement('ul');

//Recorremos el array y creamos los correspondientes nodos li
apps.forEach((app) => {
  const li = document.createElement('li');
  //Agregamos el texto al li
  li.textContent = app;
  //Agregamos el li al ul
  ul.appendChild(li);
});

//Agregamos el ul al body
document.body.append(ul);

/******************************************************************/
/******************* EJERCICIO 2 - 1.7 ****************************/
/******************************************************************/

// Elimina todos los nodos que tengan la clase .fn-remove-me

//Seleccionamos todos los nodos a eliminar
const fnRemoveMe = document.querySelectorAll('.fn-remove-me');

//Recorremos el array de nodos a remover y eliminamos uno a uno cada nodo
fnRemoveMe.forEach((removeNode) => {
  removeNode.remove();
});

/******************************************************************/
/******************* EJERCICIO 2 - 1.8 ****************************/
/******************************************************************/

// Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.

//Recogemos todos los divs
const divs = document.querySelectorAll('div');

//Iteramos los dos primeros que son los que no tienen clase y a los que tenemos que añadir el texto
for (let i = 0; i < divs.length; i++) {
  if (i < 2) {
    divs[i].textContent = 'Voy en medio!';
  }
}

/******************************************************************/
/******************* EJERCICIO 2 - 1.9 ****************************/
/******************************************************************/

// Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//	.fn-insert-here

//Recogemos todos los divs de la clase .fn-insert-here
const divsInsert = document.querySelectorAll('div.fn-insert-here');

//Iteramos los divs y les añadimos el texto
for (let i = 0; i < divsInsert.length; i++) {
  divsInsert[i].textContent = 'Voy dentro!';
}
