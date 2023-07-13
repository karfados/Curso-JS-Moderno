/**
 * En esta seccion veremos como atravesar el dom con JS, a esto
 * se le conose en ingles como traversing the dom.
 */

// const navegacion=document.querySelector("nav");
// console.log(navegacion);
// console.log(navegacion.childNodes);//los espacios en blanco son considerados elementos
// console.log(navegacion.children);//solo los elementos HTML son considerados

// console.log(navegacion.children[1]);//acseder a los elementos como en un array

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card= document.querySelector(".card");

card.children[1].children[1].textContent="Nuevo Heading desde traversing the dom";

console.log(card.children[1].children[1]);

/**
 * Tambien de la misma forma podemos cambiar la imagen:
 */

card.children[0].src="img/hacer3.jpg"
console.log(card.children[0]);

/**
 * Tambien podemos navegar de hijo a padre:
 */

console.log(card.parentNode);
console.log(card.parentElement);