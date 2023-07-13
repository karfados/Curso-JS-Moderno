/**
 * En esta seccion veremos el DOM
 * 
 * El DOM(Document Objet Model) es una de las partes mas importantes
 * de JavaScript, es un estandar para la representacion de documentos
 * HTML y XML lo cual nos permite interactuar con los elementos de nuestra
 * pagina.
 * 
 * El objeto prinsipal es el Documento
 */

let elemento;

/**
 * Los elementos que esten tachados por la mitad es por que actualmente
 * el interprede de vscode interpreta como que esa etiqueta esta en 
 * desuso
 */
elemento=document.all;//selecciona todo el HTML
elemento=document.head;//selecciona el head
elemento=document.body;//seleciona el body
elemento=document.domain;//nos dice la direccion de dominio
elemento=document.forms;//nos retorna todos los formularios
/**
 * Lo que nos retorna se le conose como HTML colections, pero se
 * manejan muy similar a los arreglos.
 */
elemento=document.forms[0];
elemento=document.forms[0].id;
elemento=document.forms[0].method;
elemento=document.forms[0].classList;
elemento=document.forms[0].action;

elemento=document.links;//este nos data todos los enlases
elemento=document.links[4];
elemento=document.links[4].classList;
elemento=document.links[4].className;

elemento=document.images;

elemento=document.scripts;

console.log(elemento)