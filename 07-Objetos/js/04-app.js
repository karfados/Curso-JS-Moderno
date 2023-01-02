/*
    En este video veremos como asignar los valores de las 
    propiedades de un objeto a una variable, a esto se le conose
    como desestructering; veamos el ejemplo con el siguiente 
    objeto:
*/

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
};

/**
 * Hay varias firmas de extraer los datos de un objeto,
 * por ejemplo, podemos crear una variable y darle el
 * valor de la propiedad del objeto.
 */

let precio1 = producto.presio;
console.log(precio1);

/**
 * Pero esto tambien se pede hacer por medio de destructuring,
 * que consta de crear y dar el calor de la variable en un solo
 * paso. Para eso implementamos el siguiente codigo:
 */

let { nombre } = producto;
console.log(nombre);

/**
 * Como se muestra en consola el codigo anterior crea una variable
 * con el nombre de la propiedad y dentro le pasa el valor.
 * Tambien podemos extraer varios valores a la vez:
 */

 let { presio, disponible } = producto;
console.log(presio);
console.log(disponible);

/**
 * Si extraemos una variable que no existe en consola aparesera
 * un undefined, ya que creara la bariable pero no esta con un 
 * valor definido.
 */
 let { cantidad } = producto;
 console.log(cantidad)
//Prueba de que la variable cantidad se se creo.
 cantidad=100;
 console.log(cantidad)
