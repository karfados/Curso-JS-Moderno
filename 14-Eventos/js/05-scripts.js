/**
 * En esta seccion veremos eventos que suseden con el scroll del 
 * mouse.
 */

function movimiento(evt){
    /**
     * Esta es otra forma de poder declarar la funcion en  el
     * addEventListener de JS, no abria que pasarle el argumento
     * en la declracion de la funcion porque JS junto a el metodo
     * addEventListener ya vienen preparados para pasarlos 
     * automaticamente.
     */
    const scrollPX= window.scrollY
    console.log(scrollPX);
} 

window.addEventListener("scroll",movimiento)


/**
 * Con el codigo anterior podemos saber cuantos px nos hemos 
 * desplasado en Y, por lo cual modriamos buscar la pocicion de otro
 * elemento que nos interese para poder disparar un animacion
 * como por ejemplo:
 */

function elementoDeInteres(event){
    const premium=document.querySelector(".premium");
    const ubicacion=premium.getBoundingClientRect();
    /**
     * getBoundingClientRect(): 
     * 
     * Esta Funcion nos da la uvicacion espesifica del elemento, 
     * en ella los encontraremos como atributos.
     * 
     * En este caso la que nos intereza en top
     */
    console.log(ubicacion.top)

    if(ubicacion.top<400){
            console.log("Elemento encontrado!!!!!!");
    }else{
        console.log("El elemento no es visible");
    }
}
window.addEventListener("scroll",elementoDeInteres)