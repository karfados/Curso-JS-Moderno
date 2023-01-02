/**
 * En esta seccion veremos como se usa map y for each por medio de
 * un arrow funcion.
 *
 * Compararemos el codigo con el de 10-app.js de la carpeta Arrays
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

const nuevoArray = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArray);

carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));
