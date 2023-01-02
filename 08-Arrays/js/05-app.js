/**
 * En esta seccion veremos como agregar elementos al principio o al
 * final de un arreglo.
 *
 * Para eso hacemos uso de los metodos que tenemos disponibles
 * para los Areglos. Estos tienen la ventaja que podemos usarlos sin
 * saber la dimencion del arreglo.
 */
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.log("----------Tabla original----------");
console.table(meses);
console.log("----------Tabla modificada----------");
/**
 * Agregar al final de del Array
 *
 * Para eso utilizamos el metodo push(), a este le pasamos como
 * argumento lo que queremos agregar.
 */

meses.push("Julio");
console.log("----------Tabla modificada 1----------");
console.table(meses);


/**
 * Agregar al inicio de del Array
 *
 * Para eso utilizamos el metodo unshift(), a este le pasamos como
 * argumento lo que queremos agregar.
 */

meses.unshift("Diciembre");
console.log("----------Tabla modificada 2----------");
console.table(meses);
