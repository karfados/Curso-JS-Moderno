/**
 * En esta seccion veremos como agregar elementos a un arreglo por
 * medio del spread operator.
 * 
 * Antes de eso veremos los conseptos de trabajo de forma inperativa
 * y declarativa, ya que estos son muy usados dentrod e la programacion
 * de javascrip.
 * 
 * Imperativa:
 * 
 * Consiste en trabajar directamente con las variables que vamos 
 * creando por lo cual las modificaremos durante la ejecucuin del 
 * programa.
 * 
 * Declarativa:
 * 
 * Consiste en trabajar sin modificar las variables originales. Para
 * esto hacemos uso de copias para no tocar modificar las variables.
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

// Agregar elementos al arreglo:
let resultado=[...carrito,producto1];
resultado=[...resultado,producto2];
resultado=[producto3,...resultado];

// Estado del carrito
console.table(carrito);
console.table(resultado);