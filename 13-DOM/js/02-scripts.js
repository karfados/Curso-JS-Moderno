/**
 * En esta seccion seleccionaremos elementos por medio de la clase.
 * 
 * Recordemos que todos los selectores siempre comienzan con document.
 * En estos dos ejemplos seleccionaremos las clases header y hero:
 */
// Clase header
const header=document.getElementsByClassName("header");

console.log(header);

// Clase hero
const hero=document.getElementsByClassName("hero");

console.log(hero);

/**
 * Recordemos que tantos las funciones como los parametros que estas llevan
 * son case sencitive, por lo que tenemos que poner los nombres como estan
 * en el codigo.
 * 
 * Ademas en la consola de chrome esta informacion de elemento, como
 * por ejemplos las clases que posee y caracteristicas y atributos del
 * mismo
 * 
 * Tambien podemos seleccionar multiples elementos que tengan una misma
 * clase, ya que las clases se pueden utilizar en multibles elementos
 * de HTML, veamos el siguiente ejemplo con la clase contenedores:
 */
const contenedores=document.getElementsByClassName("contenedor");

console.log(contenedores);

/**
 * Si vamos a la consola de chrome, veremos un HTML colection que tiene 
 * 4 elementos.
 * 
 * Por ultimo si con getElementsByClassName hacemos referencia a un \
 * elemento que no existe, este nos devolvera un HTML colection vacio.
 */

const noExiste=document.getElementsByClassName("no-existe");

console.log(noExiste);
