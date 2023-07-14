/**
 * En esta seccion veremos como atravesar el dom con JS, a esto
 * se le conose en ingles como traversing the dom.
 */

// const navegacion=document.querySelector("nav");

// console.log(navegacion.firstElementChild);//Selecciona el primer enlase de navegacion
// console.log(navegacion.lastElementChild);//Selecciona el ultimo enlase de navegacion
// console.log(navegacion);
// console.log(navegacion.childNodes);//los espacios en blanco son considerados elementos
// console.log(navegacion.children);//solo los elementos HTML son considerados

// console.log(navegacion.children[1]);//acseder a los elementos como en un array

// console.log(navegacion.children[1].nodeName);//Nos dice la etiqueta
// console.log(navegacion.children[1].nodeType);

/**
 * En la documentacion de JS nos dira los tipos de nodos y 
 * dependiendo del que sea podemos realizar acciones 
 * correspondientes. Por ejemplo, si queremos extraer solo los
 * elementos de tipotexto y sabemos que el nodeType tiene que 
 * ser igual a 3 podemos hacer un programa que verfique el nodeType
 * de todos los elementos y que nos indique u extraiga cuales son.
 */

// const card= document.querySelector(".card");

// card.children[1].children[1].textContent="Nuevo Heading desde traversing the dom";

// console.log(card.children[1].children[1]);

/**
 * Con children vamos recorriendo los elementos hijos, si tenemos
 * varios elementos podemos seleccionarlos por medio de la 
 * sintaxis de los arrays ya que devolveria un HTMLColection
 * que es similar a un array.
 */


/**
 * Tambien de la misma forma podemos cambiar la imagen:
 */

// card.children[0].src="img/hacer3.jpg"
// console.log(card.children[0]);

/**
 * Tambien podemos navegar de hijo a padre:
 */

// console.log(card.parentNode);
// console.log(card.parentElement);
// console.log(card.parentElement.parentElement.parentElement);

/**
 * La diferencia entre parentNode y parentElement es que 
 * verifica eleventos que sean validos .
 * Podemos tener la cantidad de parentElement por medio de la 
 * sintaxis de punto, esto ara que vallamos dirijiendonos a elemento
 * padre hasta llegar a la raiz.
 */

/**
 * -----------------------------------------------------------
 * Seleccionar elementos hermanos
 * 
 * Para seleccionar elementos hermanos utilizamos el metodo
 * nextElementSibling esto lo que ara es que seleccionara el
 * siguiente elemento Hermano. 
 * Por medio de la sintaxis de punto podemos encadenarlos y
 * movernos a otros hermanos.
 */

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling)

/**
 * Tambien existe un metodo para referirnos a un hermanos que esta 
 * antes del que queremos seleccionar que se llama
 * previousElementSibling.
 */

const ultiomoCard= document.querySelector(".card:nth-child(4)");
console.log(ultiomoCard);
console.log(ultiomoCard.previousElementSibling);