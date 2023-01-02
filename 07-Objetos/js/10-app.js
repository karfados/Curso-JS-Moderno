/**
 * En esta seccion veremos como copiar objetos, y unirlos.
 * Trabajaremos con los siguientes objetos:
 */

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

/**
 * Con el metodo assign podemos conbinar y copiar 2 objetos
 */
const resultado = Object.assign(producto, medidas);

console.log(resultado);

/**
 * La otra forma de hacer esto es por medio del Spread Operator o
 * Rest Operator.
 */

const resultado2 = { ...producto, ...medidas };

/**
 * Aunque la segunda forma parese mas magica lo que significan los 3
 * puntos es que tomen una copua de la variable que se les de despues
 */

console.log(resultado2);
