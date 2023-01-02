/*
    En este capitulo veremos mas metodos de utilidad para
    el manejo de strings en JavaScrip.
*/ 

const producto="Monitor de 20 pulgadas";

console.log(producto);

//Si queremos reemplasar una seccion del String podemos usar el metodo replace
console.log(producto.replace("pulgadas",'"'))

// Si quieres cortar una seccion de una cadena utilizamos el metodo Slice
console.log(producto.slice(8))
console.log(producto.slice(2,4))
/*
    Si el primer valor del metodo slice es mator al segundo
    no ara nada

    Tambien existe un metodo llamado substring que se diferencia
    en que si le pasas un numero layor al inicio y otro menor
    luego substring invertira los parametros.
*/
console.log(producto.slice(2,1))
console.log(producto.substring(2,1))