/*
    En esta seccion veremos repeat y split, los cuales son 2
    metodos muy utiles.
*/
// const producto="Monitor de 20 pulgadas ";

// console.log(producto);

// Repeat
// console.log(producto.repeat(3.9));
/*
    Si intentas pasarle un numero que no es entero el numero
    se redondea hacia abaho!, prueva con 3.4 y con 3.9
*/ 
// console.log(`${producto}`)

// Split
/*
    Con este metodo dividiremos la cadema en base al parametro
    que queramos, en el siguiente ejemplo se dividira la cadena
    por los espacios.
*/
const actividad="Estoy aprendiendo JavaScrip Moderno"
// console.log(actividad.split(" "))
let arr=actividad.split(" ");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]=`${arr[i]} ${arr[i].length}`)
};
console.table(arr)

