/**
 * En esta seccion veremos el metodo filter
 * 
 * Filter te crea un nuevo arreglo en base a un parametro que le pasas
 * 
 * Veamos un ejemplo:
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

let resultado= carrito.filter(producto=>producto.precio>400);
console.log(resultado)