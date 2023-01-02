/**
 * En esta seccion veremos la diferencia entre las formas de declarar
 * las funciones:
 * Utilizaremos las funciones que creamos anteriormente para realizar el
 * ejemplo, para eso moveremos la llamada de la funcion a una linea de
 * codigo que este antes de la declaracion de la funcion.
 */
myFuncion();
function myFuncion() {
  console.log("Estoy dentro de la funcion");
}


otherFuncion();
const otherFuncion = function () {
  console.log("estoy dentro de la otra funcion");
};

/**
 * Si ejecutamos el codigo anterior veremos que otherFuncion() dara un
 * error, el cual dice que no a sido declarado, pero myFincion() no
 * dara nungun problema, esto se debe al hoisting.]
 * 
 * Hoisting es el proceso por el cual Javascrip lee y asigna los valores
 * de las variables y funciones de nuestro codigo. Se hace en 2 etapas
 * en la primera crea las asignaciones, pero cuando ve una funcion,
 * guarda tambien el contenido de esta y en la segunda pasada
 * asigna los valores a las variables
 * 
 * Al momento de ejecutar otherFuncion() en la primera pasada el 
 * interprete crea la variable otherfuncion y en la segunda antes
 * de poder agregar el contenido de la fucion ve que se llama la
 * funcion other funcion pero aun es una variable y no una funcion,
 * por eso se da el error.
 * 
 */