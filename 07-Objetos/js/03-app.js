/*
    En esta seccion veremos como agregar y 
    eliminar propiedades de un objeto.Continuemos con el 
    objeto que manejamos anteriormente:
*/
const producto={
    nombre:"Monitor de 20\"",
    presio:200,
    disponible:true
};
/*
    Para poder agregar una nueva propiedad a un objeto podemos
    hacer uso de la sintaxos del punto:
*/

producto.imagen= "imgaen.png";

//Si imprimimos el obgeto anterior en pantalla veremos que se a
//agregado la propiedad imagen.
console.log(producto);

/*
    Para eliminar una propiedad lo podemos realizar de la siguiente 
    forma:
    Suponmgamos que no queremos enviar la propiedad de disponible
    del objeto, para eso usamos la funcion delete.
*/

delete producto.disponible

console.log(producto)

/*
    Si imprimimos el objeto en pantalla veremos que ya no exiuste
    la propiedad disponible.
*/
