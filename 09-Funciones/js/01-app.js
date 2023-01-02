/**
 * En esta seccion veremos que son las Funciones en JavaScrip
 *
 * Las funciones permiten dividir el codugo en secciones reutilizables,
 * ademas de esto permite reutilizar el codigo que tenemos en otros
 * proyectos.
 *
 * Para declarar una funcion utilizamos la palabra reserbada
 * funcion, veamos el siguiente ejemplo:
 */

function myFuncion() {
  /**
   * todo lo que este dentro de esta seccion se le conose
   * como cuerpo de la funcion
   */
  console.log("Estoy dentro de la funcion");
}

myFuncion();


/**
 * Existe otra forma de crear funciones llamada Exprecion de Funcion
 * veamos un ejemplo:
 */

const otherFuncion = function(){
    console.log("estoy dentro de la otra funcion")
}

otherFuncion();