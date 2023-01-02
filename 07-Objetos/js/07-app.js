/**
 * Los objetos en JavaScrip presentan una peculiaridad, y es que
 * cuando ellos se definen en una constante, siempre se puede
 * modificar las propiedades de estos.
 */

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
};

//Por ejemplo, cambiaremos disponible a falce:
producto.disponible = false;
console.log(producto.disponible);

// Otro ejemplo es que podemos borrar propiedades del objeto:
delete producto.disponible;
console.log(producto);
