/**
 * En esta seccion veremos otra forma de detener el Event Bubbling
 * 
 * En la anterior vimos que usando el metodo stopPropagation(). Pero
 * tambien podemo hacerlo con Delegation, la cual es una
 * forma de escrtitura que nos permite conoser que elemento
 * estamos precionando y que hacer en cada caso.
 */

const cardDiv= document.querySelector(".card");

cardDiv.addEventListener("click",event=>{
    //El truco es saber que estamos precionando con event.target
    //console.log(event.target);

    /**
     * Una vez sabemos a que le estamos dando click, podemos con
     * la ayuda de un if y por ejemplo el metodo classList.contains
     * saber que classe tiene el elemento y en vase a eso hacer una
     * accion.
     */
    if(event.target.classList.contains("titulo")){
        console.log("Diste click en titulo");
    }
    if(event.target.classList.contains("precio")){
        console.log("Diste click en precio");
    }
    if(event.target.classList.contains("card")){
        console.log("Diste click en card");
    }
});

/**
 * La ventaja de este codigo es que nos permite mas control miestras
 * lo vamos escribiendo.
 */