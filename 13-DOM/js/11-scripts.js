/**
 * Un ejemplo mas avansado de eventos.
 * 
 * En el siguiente capitulo lo veremos mas a profundidad/
 * 
 */

const btnFlotante=document.querySelector(".btn-flotante");
const footer=document.querySelector(".footer");

/**
 * Este es un ejemplo con arrow funcion 
 * 
btnFlotante.addEventListener("click",()=>{
    console.log("diste click en el boton")
});
 */

btnFlotante.addEventListener("click",mostarOcultarFooter);

function mostarOcultarFooter(){
    if (footer.classList.contains("activo")) {
        footer.classList.remove("activo");
        this.classList.remove("activo");
        this.textContent="Idioma y Moneda";
    } else {
        footer.classList.add("activo");
        this.classList.add("activo");
        this.textContent="Cerrar";
    }
};