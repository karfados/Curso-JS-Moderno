/**
 * En esta seccion veremos eventos que suseden con los impust, como
 * es el caso de cuadros de texto que el usuario tendra que llenar, 
 * entre otros.
 */

const busqueda=document.querySelector(".busqueda");

/**
 * Key Dawn
 * 
 * Se ejecuta cuando se preciona cualquier tecla
 */
busqueda.addEventListener("keydown",()=>{
    console.log("precionando tecla.....");
});

/**
 * Key Up
 * 
 * Se ejecuta cuando se preciona cualquier tecla
 */
busqueda.addEventListener("keyup",()=>{
    console.log("soltando tecla.....");
});

/**
 * blur
 * 
 * cuando el input pierde el foco
 */
busqueda.addEventListener("blur",()=>{
    console.log("se perdio el foco de busqueda");
});

/**
 * copy
 * 
 * Se ejecuata cuando se copia algo en el portapapeles
 */
busqueda.addEventListener("copy",()=>{
    console.log("copiando");
});

/**
 * paste
 * 
 * Se ejecuata cuando se pega algo del portapapeles
 */
busqueda.addEventListener("paste",()=>{
    console.log("pegando");
});

/**
 * imput
 * 
 * Se ejecuta cuando se activan cualquiera de los eventos anteriores
 * esptuando el blur
 */

/*

busqueda.addEventListener("input",()=>{
    console.log("entrada");
});

*/

/**
 * Tambien el el parentesis de la funcion podemos pasarle como 
 * parametro el evento que esta captanto. Convenciones hay muchas
 * como event,e,evt pero se hace referencia al evento.
 * En el hay mucha informacion con respecto al evento como:
 *  En que lugar se esta presentando el evento.
 *  En que tipo de elemento.
 *  El target
 * 
 * Ademas en el podemos aceder a sus propiedades
 */

busqueda.addEventListener("input",(event)=>{
    console.log(`Estas en un elemento ${event.type} con un contenido de ${event.target.value}`);
});