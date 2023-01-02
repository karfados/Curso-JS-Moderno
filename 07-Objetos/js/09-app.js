"use strict";

/**
 * En esta seccion veremos el metodo seal(sellar), la diferencia
 * entre seal y freeze es que en seal se pueden modificar las
 * propiedades del objeto pero no te deja añadir nuevas o eliminar
 */

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
};

Object.seal(producto);
producto.disponible = false;

// producto.imagen = "imagen.jpg";//Intento de agregar una nueva propiedad.
// delete producto.presio; // intento de eliminar una propiedad.

console.log(producto);

//Metodo para saber si esta sellado(Seal) el objeto:
console.log(Object.isSealed(producto));
