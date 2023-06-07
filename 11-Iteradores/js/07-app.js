/**
 * En esta seccion veremos los for of
 *
 * que es una forma de for que es mas automatica. Este es para arreglos
 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

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
 *en el arreglo meses busca el mes y lo presenta en consola
 */
for (let mes of meses) {
  console.log(mes);
}
console.log("---------------------------------------");
for (let item of carrito) {
  console.log(item.nombre);
}
