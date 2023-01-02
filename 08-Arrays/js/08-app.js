/**
 * En esta seccion veremos como aplicar destructuring a arrays.
 * 
 * Tal y como se aplica en los objetos. Recordemos que esto consiste
 * en sacar el valor del arreglo y crear la variable en un mismo 
 * paso.
 * 
 * Veamos el siguiente arreglo:
 */

const numeros = [10,20,30,40,50];

/**
 * El destructurin en los arreglos se hace por medio de la pocicion
 * del elementos, por ejemplo si queremos extraer el 10 del arreglo
 * hacemos lo siguiente:
 */

const [primero]=numeros;

console.log(primero);

/**
 * Pero si queremos extraer el 30 del arreglo hacemos lo siguiente:  
 */

const [,,tercero] = numeros;
console.log(tercero)

/**
 * o podemos traernos toda la seccion de un arreglo por medio del 
 * spray operator:
 */
 const [,,...arreglo2] = numeros;
 console.log(arreglo2)