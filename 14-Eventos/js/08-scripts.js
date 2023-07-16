// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
//-----------------------------------------------

parrafo3.onclick=function(){
    nuevafuncion(1);
}

//-----------------------
// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

/**
 * El Event Bubbling tambien se puede prevenir por medio de una
 * funcion, en esta seccion veremos como hacerlo 
 * 
 * La forma de hacerlo es agregandole una funcion mientras creamos
 * el contenido HTML con JS
 */

function nuevafuncion(id){
    console.log("Desde nueva Funcion",id)
}

/**
 * En caso de que requiera pasar parametros la sintaxis es distinta
 * ya que si se ponen detro de la llamada nos invocara la funcion
 * automaticamente.
 * 
 * Papara esto podemos hacerlo por medio de una funcion anonima
 * o por medio de un arrow funcion.
 */