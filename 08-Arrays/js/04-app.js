/**
 * En esta seccion veremos como agregar elementos a un arreglo.
 * Veamos el siguiente ejemplo:
 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.log("----------Tabla original----------");
console.table(meses);
console.log("----------Tabla modificada----------");
/**
 * Para modificar el valor de una seccion del Array podemos hacerlo
 * mediante el = y accediendo a la pocicicon que queremos cambiar:
 */

meses[1] = "Nuevo Mes";
/**
 * Para agregar un valor nuevo solo nesesitamos asignar a un indice
 * vacio el nuevo valor que deseamos:
 */
meses[6]="Ultimo mes";

/**
 * Si agregamos un indice que sea mucho mayor al ultimo indice
 * javascrip lo creara saltantose las pociciones que falten:
 */
meses[9]="Mes adelantado";
console.table(meses);