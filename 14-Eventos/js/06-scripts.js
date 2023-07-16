/**
 * En esta seccion beremos que es el Event Bubbling
 * 
 * Es cuando un evento se propaga por otros lugares, dando
 * resultado a comportamientos que no son esperados
 * 
 * Por ejemplo, en el siguiente ejemplo tenemos 3 elementos, el
 * cual uno es hijo del anterior(titulo es hijo de info e info es 
 * hijo de card) por lo cual si le damos click en cualquiera de 
 * los hijos por defecto el evento se progarara al padre.
 * 
 * Para evitar esto se usa el metodo stopPropagation()
 */

const cardDiv= document.querySelector(".card");
const infoDiv= document.querySelector(".info");
const titulo= document.querySelector(".titulo");

cardDiv.addEventListener("click",event=>{
    event.stopPropagation();
    console.log("Click en card");
});

infoDiv.addEventListener("click",event=>{
    event.stopPropagation();
    console.log("Click en informacion");
});

titulo.addEventListener("click",event=>{
    event.stopPropagation();//Comentar para que el evento se propague
    console.log("Click en titulo");
});