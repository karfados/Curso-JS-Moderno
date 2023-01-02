/*
    Concatenar cadenas de texto es unirlas entre si, para esto
    tenemos varias formas de realizar el proseso.

    *Una de ellas es haciendo uso de simbolo +
    *Otra forma es por medio del metodo concat
    *Por ultima pero es la forma mas nueba es hasiendo uso de
     la sintaxis de `${}`
*/ 

const producto="Monitor de 20 pulgadas";
const presio=" 30 USD";

//Por medio del operador de suma.
console.log(producto+presio); 
//Por medio del metodo concat()
console.log(producto.concat(presio));
//Por medio de la forma template strings o tambien llamada template literal:
console.log(`El producto ${producto} tiene un presio de ${presio}`);