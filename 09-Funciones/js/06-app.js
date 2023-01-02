/**
 * En esta seccion veremos que son los parametros por defauld.
 *
 * Estos se usan para prevenir errores cuando no se pueden otorgar
 * los parametros necesarios a la funcion.
 *
 * Veamos el siguiente ejemplo:
 */
function saludo(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludo("Juan");
/**
 * pero si a la funcion le damos una parametro por defauld 
 * el codigo se comportara de una forma pas predecible y nunca fallara.
 */
function saludo(nombre="", apellido="") {
    console.log(`Hola ${nombre} ${apellido}`);
  }
  
  saludo("Juan");