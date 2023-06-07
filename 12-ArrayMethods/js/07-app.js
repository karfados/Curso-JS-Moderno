/**
 * En esta seccion veremos el metodo concat
 * 
 * El metodo concat nos permite unur arreglos.
 */

// -------------------------------------------------------------------
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2=["Agosto","Setiembre"];

const meses3=["Octubre","noviembre"];
// -------------------------------------------------------------------
//con metodo concat
const resultado=meses.concat(meses2,meses3);
console.log(resultado);

//con el spread operator
const resultado2=[...meses,...meses2,...meses3];
console.log(resultado2)