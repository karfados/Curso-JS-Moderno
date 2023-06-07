/**
 * En esta seccion veremos mas sobre el spread operator
 */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// -------------------------------------------------------------------
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// -------------------------------------------------------------------

/**
 * Veamos como añadir elementos con el espread oerator
 */

//Con una arreglo de elementos con indices:

const meses2=[...meses,"Agosto"];
console.table(meses2);

/**
 * Ten en cuenta que si usamos el spread operator en un string
 * este nos creara un indice por cada elemento del string:
 */

meses3=[...meses,..."Agosto"];
console.table(meses3);

/**
 * Ahora veamos el agregar un objeto a un arreglo de objetos:
 */

const producto={nombre:"Disco duro", precio:300};

const carrito2=[...carrito,producto];
console.table(carrito2)

/**
 * ten en cuenta que si le pones un spread operator a un objeto nos dara
 * un error por que los objetos no son iterables ocn el spread operator.
 */