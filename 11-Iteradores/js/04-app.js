/**
 * En esta seccion veremos el siclo while
 * 
 * Es otro de los siclos mas comunes, pero este se ejecutara mientras una condicion sea verdadera
 */
let i=0;

while (i<10) {
    console.log(i);
    i++;
}

let contador=0;

while(contador<=20){
    
    if(contador%2==0){
        console.log(`El numero ${contador} es par`);
    }else{
        console.log(`El numero ${contador} es impar`);
    }
    contador++;
}