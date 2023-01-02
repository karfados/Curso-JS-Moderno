/**
 * En esta seccion veremos como acceder a los valores dentro de los
 * Array. Tomemos en cuenta el siguiente arreglo:
 */

const numeros = [10, 20, 30, 40, 50];

// Formas de visualizar un arreglo:
// Foma A:
console.log(numeros);
// Forma B
console.table(numeros);

/**
 * Para acceder a la pocicion del Arreglo, una vez creados solo
 * ponemos el nombre del Arreglo y entre corchetes el numero de
 * pocicion que queremos mostrar, recuerda que las pociciones
 * empiezan en 0.
 */
console.log(numeros[0]);
console.log(numeros[1]);

/**
 * Si ponemos un numero de pocicion que no existe JavaScrip nos
 * dara un undefined como resultado.
 */

console.log(numeros[10]);

/**
 * Tambien los areglos pueden ser bidimencionales o
 * tridimencionales
 */
const numeros2 = [1, 2, 3, 4, 5, 6, [10, 20, 30, 40, 50, 60]];

console.log(numeros2[6][1]);
