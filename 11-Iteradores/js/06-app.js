/**
 * En esta seccion veremos un poco mas del forEach y el map.
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

meses.forEach((mes,indice,otraVariable,otramas) => {
    console.log(`${indice}:${mes}`);
    /**
     * El primer parametro tiene el iten del arreglo
     * el segundo tiene el indice
     * 
     * Ya el tercero tiene una copia del arreglo y el cuarto no hay nada;
     * aunque se puedan crear no son muy utiles.
     */
});


copiaCarrito=carrito.map((mes,indice,otraVariable,otramas) => {
    console.log(`${indice}:${mes.nombre}`);
    /**
     * El primer parametro tiene el iten del arreglo
     * el segundo tiene el indice
     * 
     * Ya el tercero tiene una copia del arreglo y el cuarto no hay nada;
     * aunque se puedan crear no son muy utiles.
     */
});