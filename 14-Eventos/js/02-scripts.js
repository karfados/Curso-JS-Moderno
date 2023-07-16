/**
 * En esta seccion veremos algunos eventos que se pueden
 * utilizar con el mouse.
 */

const nav=document.querySelector("nav");
nav.style.padding="2rem"
nav.style.backgroundColor="red"

// Ejemplos de Eventos

/**
 * Click
 * 
 * Al dar click sobre el elemento se activara el evento
 */
nav.addEventListener("click",()=>{
    console.log("Click en Nav");
});

/**
 * mousedawn
 * 
 * Al precionar el boton de activa el evento(muy similar a click)
 */
nav.addEventListener("mousedown",()=>{
    console.log("Mousedawn en Nav");
});

/**
 * MouseUp
 * 
 * Cuando se sulta el click se activa el evento.
 */
nav.addEventListener("mouseup",()=>{
    console.log("MouseUp en Nav");
});

/**
 * dblClick
 * 
 * Al dar doble Click se activa el evento
 */

nav.addEventListener("dblclick",()=>{
    console.log("Dbl Click en Nav");
});

/**
 * Mouse Enter
 * 
 * Al colocar el cursor ensima del elemento se activa ele vento
 */
nav.addEventListener("mouseenter",()=>{
    nav.style.backgroundColor="green";
    console.log("En sima del Nav");
});

/**
 * Mouse out
 * 
 * Al colocar el cursor ensima del elemento se activa ele vento
 */
nav.addEventListener("mouseout",()=>{
    nav.style.backgroundColor="red";
    console.log("Saliendo del Nav");
});

/**
 * Hay una gran cantidad de eventos disponibles, puedes 
 * jugar con ellos
 */