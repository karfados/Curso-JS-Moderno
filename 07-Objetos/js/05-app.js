/**
 * En esta seccion veremos objetos dentro de objetos; veamos el
 * siguiente ejemplo.
 */

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
  informacion: {
    peso: "1000g",
    color: "red",
  },
};

/**
 * Por medio de la sintaxis del punto podemos aceder al interior
 * del objeto.
 */
console.log(producto.informacion.color)

/**
 * Los objetos pueden ser tan complicados como sea requerido
 */