//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
];

//Creamos el elemento ul
const ul = document.createElement('ul');
//Recorremos el array y vamos generando tantos li como elementos tenga
albums.forEach((album) => {
  ///Creamos elemento li
  const li = document.createElement('li');
  //Agregamos el album al li
  li.textContent = album;
  //Agregamos el li a la lista
  ul.append(li);
});
//Agregamos el elemento ul al documento
document.body.append(ul);
