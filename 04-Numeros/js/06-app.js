/*
    Metodos utiles a la hora de ver numeros.
*/ 
const numero1="20";
const numero2="20.2";
const numero3="Uno";
const numero4=20;

//Para convertir un string a un valor numerico entero utilizamos el metodo parceInt()
console.log(parseInt(numero1));

//Para convertir un string a un valor numerico flotante utilizamos el metodo parceFloat()
console.log(parseFloat(numero2));

/*
    Si tratamos de convertir un valor que no es una reprecentacion en caracteres
    como es el caso de la variable numero3 JavaScrip nos devolverar un NaN
*/

console.log(parseInt(numero3));

// Recordemos que si queremos saber el tipo de datos de la variable utilizamos el metodo typeof
console.log(typeof(numero1));
console.log(typeof(numero4));

// tambien hay metodos para saver si un numero es entero o flotante
console.log(Number.isInteger(numero1));
console.log(Number.isFinite(numero1));
console.log(Number.isNaN(numero1));