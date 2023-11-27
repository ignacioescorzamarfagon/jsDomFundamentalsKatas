/****************************************************************/
/******************* EJERCICIO 4 - 1.1 **************************/
/****************************************************************/

// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

//RESOLUCIÓN EJERCICIO 1.1
//Creo el elemento button y le agrego el id y un texto
const button = document.createElement('button');
button.id = 'btnToClick';
button.textContent = 'Pulsa aquí';
button.addEventListener('click', (e) => {
  console.log(e);
});
//Añado el elemento a mi documento
document.body.append(button);

/****************************************************************/
/******************* EJERCICIO 4 - 1.2 **************************/
/****************************************************************/
// Añade un evento 'focus' que ejecute un console.log con el valor del input.

//Cogemos el input class value
const focus = document.querySelector('.focus');
//Añadimos el evento input con el console.log
focus.addEventListener('focus', () => {
  console.log(focus.value);
});

/****************************************************************/
/******************* EJERCICIO 4 - 1.3 **************************/
/****************************************************************/
// Añade un evento 'input' que ejecute un console.log con el valor del input.

//Cogemos el input class value
const input = document.querySelector('.value');
//Añadimos el evento input con el console.log
input.addEventListener('input', () => {
  console.log(input.value);
});
