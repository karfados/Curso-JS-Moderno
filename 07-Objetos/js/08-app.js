"use strict";
/**
 * En esta seccion veremos como Congelar(Freezing) un objeto para
 * no modificarlo.
 *
 * Para poder hacer esto primero debemos abilitar el modo estricto
 * de JavaScrip. Para esto en la parte superior del documento
 * escribimos "use strict"
 *
 * Con el modo estricto le diremos a JavaScrip que evalue el
 * codigo de JavaScrip de forma estricta, por lo que no se
 * permitiran malas practicas, como por ejemplo:
 * Si en el modo normal de JavaScrip declaramos una variable
 * sin el let:
 *              a=4;
 *              console.log(a);
 * JavaScrip cuando ve esto nos creara la variable a con el y
 * imprimira el codigo; en cambio con el modo estricto no, ya que
 * debemos cumplir siertas reglas a la hora de escribir el codigo.
 *
 * La ventaja es que el modo estricto es que nos da acceso a
 * metodos que antes no teniamos(llamados Object methods)
 *
 */

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
};

// Congelaremos el objeto anterior:

Object.freeze(producto);

// Ahora si intentamos borrar una propiedad no nos lo permitira:
// delete producto.disponible;

// Tambien ha un metodo para saber si un objeto esta conjelado:
console.log(Object.isFrozen(producto));


