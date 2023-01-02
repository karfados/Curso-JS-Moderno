/**
 * En esta seccion veremos como recorrer los elementos de un arreglo.
 * Vemoslo con el siguiente ejemplo:
 */
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

/**
 * Lo primero que necesitamos parar recorrer un Arreglo lo
 * que necesitamos es conoser el tamañor del arreglo para saber
 * la cantidad de veses que tenemos que iterar el arreglo.
 */
let lastIndex = meses.length;
console.log(lastIndex);

/**
 * Para recorrer los elementos utilizamos los siguientes metodos:
 */
console.log("---------------------------------------------------")
for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
console.log("---------------------------------------------------")
let i=0;
while (i<lastIndex) {
    console.log(meses[i]);
    i++;
}