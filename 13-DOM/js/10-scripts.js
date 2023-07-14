/**
 * En esta seccion veremos como jenerar HTML por medio de JS.
 * 
 * Para esto utilizamos el objeto document y su metodo createElement
 * en el cual le pasaremos como parametro el tipo de elemento que 
 * queremos crear
 */

const enlace=document.createElement("a");

/**
 * En esta seccion no se a agregado al Dom pero antes de agregarlo
 * lo que aremos es que le daremos los parametros de texto
 * y de direccion a la que nos dirijira
 */

// Agregando texto
enlace.textContent="Nuevo Enlace";

// Agregando href
enlace.href="/nuevo-enlace";

// otros parametos que podemos crear

enlace.target="_blanck";//abre la pagina en una nueva pestaña.

enlace.setAttribute("data-enlace","nuevo-enlace");
enlace.classList.add("alguna-clace");

// enlace.onclick= miFuncion;

/**
 * Ahora que tenemos el elemento base montado tenemos que mostrarlo
 * para eso en la pagina que estamos montando tenemos una seccion
 * donde estan los enlases al principo. Hay lo pondremos para
 * este ejercicio.
 * 
 * Lo primero que tenemos que hacer es seleccionar la navegacion.
 */

const navegacion=document.querySelector(".navegacion");

/**
 * Para agregar el elemento hijo tenemos el metodo appendChind que
 * lo agregara al final de la lista de hijos que tengamos.
 */

// navegacion.appendChild(enlace);

/**
 * En caso que queramos tener mas control podemos usar el metodo
 * insertBefore, el cual requiere de 2 argumentos y un hijo que
 * tenga el padre. En este caso lo insertara antes de la posicion 
 * que le demos.
 */

navegacion.insertBefore(enlace,navegacion.children[1]);


// console.log(enlace);

// function miFuncion(){
//     alert("Diste Click");
// }

/**
 * Como practica crea una seccion mar a "que hacer" usa como guia
 * los elementos hermanos de la seccion card:
 */

/**
 * Primero crearemos los parafos de descipcion del elemento
 */

//Parafo 1= Tipo de evento
const parafo1=document.createElement("p");
parafo1.textContent="Concierto";
parafo1.classList.add("categoria","concierto");

//Parafo 2= Descipcion
const parafo2=document.createElement("p");
parafo2.textContent="Concierto de Rock";
parafo2.classList.add("titulo");

//Parafo 3= Precio
const parafo3=document.createElement("p");
parafo3.textContent="800 por persona";
parafo3.classList.add("precio");

//Creacion del div de informacion
const info=document.createElement("div");
info.classList.add("info");
info.appendChild(parafo1);
info.appendChild(parafo2);
info.appendChild(parafo3);

//Creacion de la imagen
const imagen=document.createElement("img");
imagen.src="img/hacer2.jpg";

//Creacion de la seccion del carrito
const carrito=document.createElement("div");
carrito.classList.add("card");
carrito.appendChild(imagen);
carrito.appendChild(info);

//Agregado en la seccion que hacer:
const seccionHacer=document.querySelector(".contenedor-cards");
seccionHacer.appendChild(carrito);

console.log(carrito);