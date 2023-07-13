/**
 * En esta seccion veremos como maniputar el CSS con JS:
 * 
 * Las mismas propiedades que se encuentran en CSS las vamos a 
 * encontrar en JS pero con la diferecia que estas no llevan el 
 * guion y la primera letra de la siguiente palabra enpieza en 
 * mayuscula, como por ejemplo:
 * 
 * En CSS:
 *          background-color
 * En JS:
 *          backgroundColor
 */

const encabezado=document.querySelector("h1");
// console.log(encabezado.style)
// encabezado.style.backgroundColor="red";
// encabezado.style.fontFamily="Comic";
// encabezado.style.textTransform="uppercase";

/**
 * Lo recomendado es que CSS sea el que se encargue de manejar la
 * aperiencia visual del documento, lo anterior esta bien para 
 * cambios sutiles, pero en general lo recomendable es agregar o
 * quitar clases.
 * 
 * Veamos el siguiente ejemplo:
 * 
 */
// Agregar clases
const card=document.querySelector(".card");
card.classList.add("nueva-clase","segunda-clase");
console.log(card.classList);
// eliminar clases
card.classList.remove("segunda-clase");
console.log(card.classList);