/*
    Comparadores de igualdad
*/ 

const numero1=20;
const numero2="20";
const numero3=30;
// Igual a
// Revicion de igualdad no estricta
console.log(numero1==numero3);
console.log(numero1==numero2);
/*
    señalar que en este caso JavaScrip dice que 20 y 
    "20" son inguales pese a ser tipos de datos diferentes
    esto se da por que al usar el comparador == no esta comparando
    los topos de dato, para eso se usa otro comparador stricto.
*/ 

// Comparador Estricto
console.log(numero1===numero3);
console.log(numero1===numero2);
/*
    Con este comparador vemos que 20 y "20" no son iguales
    por que toma en cuenta el tipo de dato
*/ 
console.log(typeof numero1);
console.log(typeof numero2);

//Diferente a
const password1="admin";
const password2="Admin";
// Comparador no estricto
console.log(password1!=password2);
console.log(password1!=numero2);
// Comparador estricto
console.log(password1!==parseInt(numero2));
