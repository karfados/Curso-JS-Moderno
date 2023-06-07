/**
 * En esta seccion veremos findIndez.
 * 
 * Este nos permitira saber en que indice se encuienta el elemento
 * que estamos buscando en nuestro arreglo.
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

meses.forEach((mes,indice)=>{
    // console.log(indice,mes);
    if(mes==="Abril"){
        console.log(`Encontrado en el indice: ${indice}`);
    }
})

let pocicion=meses.findIndex(mes=>mes==="Abril");
console.log(pocicion);

let pocicion2=carrito.findIndex(carrito=>carrito.precio===100);
console.log(pocicion2);
/**
 * El retornara la pocicion en la cual se encuentra el elemento que
 * buscamos, si no existe, retornara un -1
 */
