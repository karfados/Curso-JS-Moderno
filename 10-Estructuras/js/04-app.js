/**
 * En esta seccion veremos como se usa el else if que se utiliza cuando 
 * queremos comparar mas de una obcion en nuestro codigo.
 */

const dinero=1000;
const tarjeta=true;
const totalAPagar=1001;

if (dinero >= totalAPagar) {
    console.log("Si podemos pagar!");
} else if(tarjeta){
    console.log("Si podemos pagar por que tenemos tarjeta")
}else{
    console.log("Fondos insuficientes!!!!!")
}