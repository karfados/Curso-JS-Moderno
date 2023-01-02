/*
    En este capitulo veremos metodos que nos permitan eliminar el 
    espacio en blanco al inicio de una cadena o al final.
*/
const producto="              Monitor de 20 pulgadas        ";

// Eliminar del inicio
console.log(producto.trimStart())
// Eliminar el espacio al final
console.log(producto.trimEnd())
// En JavaScrip se puden encademar los metodos, a esto se le llama chaining 
console.log(producto.trimStart().trimEnd())
// Anteriormente se usaba el metodo trim que elimina en todas direcciones.
console.log(producto.trim())