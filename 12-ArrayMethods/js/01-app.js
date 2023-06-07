const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

/**
 * Hay metodos que son muy utilies para los arreglos.
 * 
 * En esta seccion veremos una serie de metodos con arreglos, que pueden
 * reemplazar los bucles.
 * 
 * El metodo .inclide y .some nos retorna un booleano(true si es verdadero o false
 * si es falso) si existe en un array. La diferencia es que some se usa 
 * para arreglos que contengan objetos.
 */

// comparar si un valor exte en un arreglo
meses.forEach(mes=>{
    if(mes==="Enero"){
        console.log("Enero existe");
    }
})

const resultado=meses.includes("Enero");
console.log(resultado);

const existe=carrito.some(producto=>{
    return producto.nombre==='Celular';
})
console.log(existe);