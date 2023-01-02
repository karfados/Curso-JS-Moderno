/*
    En esta seccion veremos las formas que tenemos para 
    crear numeros

    Analisemos el siguiente codigo:
*/ 
 
let num1=20;
let num2="20";

// Numero
console.log(num1);

// String
console.log(num2);

/*
    Si vemos esos datos en consola veremos que
    el num1 esta de otro color, esto significa que el tipo de dato
    es numerico.
    De esta forma podemo saber el tipo de dato:
*/

console.log(typeof(num1));
console.log(typeof(num2));

/*
    Los tipo de datos numerico pueden contener flotante, numerico,
    negativos, etc.

    Existe otra sintaxis para crear numeros, la cual es crear un
    objeto, se hace de la siguiente forma:
*/

let num3= new Number(80);

console.log(num3)