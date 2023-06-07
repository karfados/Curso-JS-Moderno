/**
 * En esta seccion veremos el metodo every
 * 
 * El metodo every comprueba una condicion y nos deuelve un booleano,
 * este solo sera verdadero si todos los elementos son verdaderos.
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

const resultado=carrito.every(producto=>producto.precio<1000);
console.log(resultado);