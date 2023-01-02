/*
    En esta seccion veremos los tipo de datos booleans
*/

const bolean1=true;
const bolean2=false;
const bolean3="true";

console.log(bolean1);
console.log(bolean2);

/*
    Si comparamos los booleans con un operador no esticto con un
    string veremos que no pasa igual que con los numeros.
*/
console.log(bolean1 == bolean3);
/*
    De igual forma funciona con el comparador estricto.
*/
console.log(bolean1 === bolean3);

/*
    Pero truc si se compara con un numero con el comparador no
    estricto puede provocar un falso verdadero.
*/
console.log(bolean1 == 01);
console.log(bolean2 == 00);

console.log(bolean1 === 01);
console.log(bolean2 === 00);

/*
    Por ultimo hay otra forma de crear balores booleanos que es 
    por medio del metodo new boleean
*/

const bolean4= new Boolean(true)
/*
    Lo que hay que tener en cuenta es que si vemos el tipo de
    dato que es boolean4, nos dira que es un objeto.
*/
console.log(typeof bolean4)

/*
    Veamos que pasa si lo comparamos con el comaprador 
    stricto con la variable bolean1
*/
console.log(bolean1===bolean4)
/*
    Pero si se compara contra una cadena de texto no hay problema
*/
console.log("Contra cadena"+ bolean2 === "false");