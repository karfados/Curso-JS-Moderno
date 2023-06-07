/**
 * En esta seccion veremos como usar las sentencias Break y continue.
 * 
 * Estas permiten tomar valores espesificos y realizar 2 acciones:
 *          
 *          -break rompe el bucle
 *          -continue no salta una ejecucion del bucle.
 */
console.log("-----Este es el ejemplo de break-----")
for (let i = 0; i <= 20; i++) {
    if(i===9){
        console.log(`Este es el numero ${i}`);
        break;
    }
    console.log(i);
}

console.log("-----Este es el ejemplo de continue-----")

for(let i=1; i<=20; i++){
    if(i%5==0){
        console.log(`El numero ${i} es multiplo de 5`);
        console.log(`Saltando un valor`);
        continue;
    }
    console.log(i);//cuando es multiplo de 5 el numero no se muestra en esta impresion de consola
}


