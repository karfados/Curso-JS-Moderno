/**
 * En esta seccion veremos que podemos modificar con JavaScript
 * 
 * Veamos los siguientes Ejemplos:
 */

const encabezado=document.querySelector(".contenido-hero h1");
console.log(encabezado);

// console.log(encabezado.innerText)//Si tiene la propiedad vicibilite hiden ya que esta propiedad lo oculta.
// console.log(encabezado.textContent);//si trae el texto sin importa la propiedad.
// console.log(encabezado.innerHTML);//Se trae el html

/**
 * Ejemplo de interaccion con el elementos de la pagina:
 * 
 * Nota: resaltar que tambien se puede usar el encadenamiento.
 */

// document.querySelector('.contenido-hero h1').textContent="nuevo heading";

/**
 * Veamos como modificar una imagen:
 */

const imagen = document.querySelector(".card img");

imagen.src="img/hacer2.jpg";