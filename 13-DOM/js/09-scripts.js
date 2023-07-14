/**
 * En esta seccion veremos como eliminar elementos del DOM.
 *
 */

const primerEnlace=document.querySelector("a");
console.log(primerEnlace);

primerEnlace.remove();//Elimina el elemento con un metodo propio.

const navegacion=document.querySelector("nav");
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);//Elimina el elemento por medio de metodo remuveChild pero este ocupa que le pasemos la referencia.

