/**
 * En esta seccion veremos el metodo reduce
 * 
 * Este se encarga de resumir una caracteristica o dato de un arreglo
 * u objeto, como por ejemplo darnos el resultado de la suma de 
 * los presios de varios objetos de un arreglo.
 */
// -------------------------------------------------------------------
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// -------------------------------------------------------------------

//Con un foreach
let total=0;
carrito.forEach(producto=>total+=producto.precio);
console.log(total);

//Con un reduce
let resultado=carrito.reduce((total,producto)=>total+producto.precio,0);
console.log(resultado);