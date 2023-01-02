/**
 * Veremos algunos metodos de arreglos con lo que sabemos hasta el
 * momento:
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
 * Como hemos visto anteriormente, una de las formas de iterar un arreglo
 * es por medio de un for loop, pero JavaScrip tambien tiene metodos que
 * nos permitirar iterar los arreglos que son propios del Lenguaje.
 * 
 * A continuacion veremos el tipoco ejemplo del for loop
 */
 console.log("-------------Con un for loop-------------")
for (let i = 0; i < carrito.length; i++) {
  console.log(`El producto es ${carrito[i].nombre} con el precio de ${carrito[i].precio}`);
}
 /**
  * Ahora veremos como se haria con los metodos que tenemos disponibles
  * en el lenguaje entre las cuales tenemos:
  * 
  * forEach()
  * map()-----> lo veremos en la siguiente seccion
  */
console.log("-------------Con un forEach()-------------")
 carrito.forEach(function(producto){
    console.log(`El producto es ${producto.nombre} con el precio de ${producto.precio}`);
 })