/**
 * En esta seccion veremos como eliminar elementos de un Array
 */

const carrito = [];

// Definicion de productos

const producto1={
    nombre:"Monitor de 24in",
    precio: 200
}

const producto2={
    nombre:"Teclado",
    precio: 50
}

const producto3={
    nombre:"Mouse",
    precio: 25
}

const producto4={
    nombre:"Parlantes",
    precio: 25
}
const producto5={
    nombre:"ram",
    precio: 25
}

// Agregar elementos al arreglo:
carrito.push(producto1);
carrito.push(producto2);

carrito.push(producto3);

carrito.push(producto4);
carrito.push(producto5);
/**
 * Eliminar el ultimo elemento de un arreglo.
 * 
 * Para eso hacemos uso del metodo pop()
 */
carrito.pop()

/**
 * Eliminar el primar elemento de un Array
 * 
 * Para eso utilizamos el metodo shift()
 */
carrito.shift()

/**
 * Eilimar en cualquier pocicion
 * 
 * Para eso se utilia el metodo splice() esta lleva 2 parametros
 * uno que dice en que pocicion empieza a eliminar y cuantos 
 * elementos queremos eliminar.
 */

carrito.splice(1,1)
// Estado del carrito
console.table(carrito);
