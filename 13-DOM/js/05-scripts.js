/**
 * En esta seccion veremos la variante del querrySelector, 
 * se llama querrySelectorAll
 * 
 * Es muy sumilar en sintaxis y funcionalidad
 * 
 * La diferencia radica en que si encuentra varios elementos con
 * el mismo nombre nos retornara todos los elementos que
 * cumplan con la condicion del selector.
 * 
 * El querrySelector nos devolvera un NoteList el cual es muy 
 * similar a un arreglo.
 * 
 * Veamos el ejemplo de car de la vez pasada:
 */

const card=document.querySelectorAll('.card');
console.log(card);

/**
 * Si un elemento no existe nos devolvera un NoteList pero que 
 * estara vacio
 */

const noExiste=document.querySelectorAll('.noExiste');
console.log(noExiste);