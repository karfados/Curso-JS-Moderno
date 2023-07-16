/**
 * En esta seccion veremos los eventos de formularios
 */

const formulario=document.querySelector("#formulario");
/**
 * Submit
 * 
 * Se ejecuta caundo envioamos la informacion por medio del boton 
 * del formulario
 */
formulario.addEventListener("submit",(event)=>{

    event.preventDefault();//Detiene la accion por defould. En este caso es para evitar que el mensaje desaparesca por el envio de la informacion por el metodo POST

    console.log(event.target.action)
});
