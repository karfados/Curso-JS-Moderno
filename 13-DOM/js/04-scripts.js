/**
 * En esta seccion veremos el querySelector
 * 
 * La sintaxis utilizada con querrySelectior es muy similar a 
 * crear clases en CSS
 * 
 * Veamos un ejemplo:
 */

const card=document.querySelector('.card');
console.log(card);

/**
* Tambien podemos utilizar selectores espesificos como en CSS:
*/

const info=document.querySelector('.premium .info');
console.log(info);

/**
 * Seleccionar el segundo elemento de card de hospedaje:
 */

const segondCard=document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segondCard);

/**
 * Veamos como seleccionar el formulario:
 */

const formulario=document.querySelector('.contenido-hero #formulario');
console.log(formulario);

/**
 * Tambien se pueden seleccionar elementos HTML:
 */

const navegacion= document.querySelector("nav");
console.log(navegacion);

/**
 * Tengamos en cuenta que querrySelector nos va a retornar, un
 * elemento, y en caso de que existan varios con el mismo nombre
 * nos devolbera el primero que encuentre.
 * 
 * En caso que nos devuelva null es que no existe nungun elemento
 * como el que espesificamos.
 */