/**
 * En esta seccion veremos el operador OR.
 * El operador OR se usa cuando en una estructura de control tenemos 
 * varias condiciones que pueden activar una porcion de codigo.
 * A diferencia que el operador and, el or solo ocupa que una de todas 
 * las condiciones se cumpla para que de paso al codigo.
 */

const efectivo=300;
const credito=400;
const disponible=efectivo+credito;
const totalAPagar=600;

if( efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar){
    console.log(`Si podemos pagar`);
}else  {
    console.log(`Fondos insuficientes`)
}