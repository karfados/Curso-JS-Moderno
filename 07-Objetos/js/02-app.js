/*
    En esta seccion veremos como acceder a las propiedades
    de un objerto, veamos el siguiente objeto:
*/
const producto={
    nombre:"Monitor de 20\"",
    presio:200,
    disponible:true
};

/*
    Para acceder a los elementos que componen el objeto utilizamos
    la sintaxisde punto. 
 */

console.log(producto.nombre)

/*
    Existe otra forma que es por medio del uso de corchetes, 
    veamosla
*/
console.log(producto["nombre"]);