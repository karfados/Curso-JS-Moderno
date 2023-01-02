/**
 * En esta seccion veremos el metodo map() y su diferencia entre el
 * metodo forEach().
 * Para eso utilizaremos el siguiente arreglo:
 */

const carrito = [
  { nombre: 'Monitor 22"', precio: 200 },
  { nombre: 'Monitor 24"', precio: 250 },
  { nombre: 'Monitor 27"', precio: 500 },
  { nombre: "8Gb ram", precio: 75 },
  { nombre: "16Gb ram", precio: 130 },
  { nombre: "Intel i3", precio: 125 },
  { nombre: "Intel i5", precio: 180 },
  { nombre: "Intel i7", precio: 220 },
  { nombre: "gtx 1060", precio: 300 },
];

/**
 * El metodo map() y forEach() son bastante similares, pero su
 * diferencia esta en que map() llenara una variable con un
 * arreglo nuevo.
 */
//  -------------Con un map()-------------
let array1 = carrito.map(function (producto) {
  return `El producto es ${producto.nombre} con el precio de ${producto.precio}`;
});

console.log("-------------Con un map()-------------");
console.log(array1);
console.log("-------------Con un forEach()-------------");
//  -------------Con un forEach()-------------
carrito.forEach(function (producto) {
   console.log(`El producto es ${producto.nombre} con el precio de ${producto.precio}`) ;
 });

/**
 * Pueden haver ocaciones en las que se quiera crear un nuevo arreglo
 * con los productos que cuesten mas de 200 y el metodo map()
 * es una opcion facil para realizar la tarea.
 */
