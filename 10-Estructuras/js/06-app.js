/**
 * En esta seccion veremos como hacer uso del operador &&
 * Este funciona para poder evaluar mas de una condicion en nuestras 
 * estructuras de control. Lo mas importante que tenemos que tener
 * es que para que la estructura de control ejecute las sentencias en su
 * interior todas las condiciones que se le inpongan deben de ser 
 * verdaderas
 */

const usueario=false;
const puedePagar=false;

if (usueario && puedePagar) {
    console.log(`Si puedes pagar!`);
} else if(!usueario && !puedePagar){
    console.log(`No puedes comprar!`);
}else if(!usueario){
    console.log(`Inicia secion en la cuenta`)
}else if(!puedePagar){
    console.log(`Fondos insuficientes`)
}