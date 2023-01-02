/**
 * En esta seccion veremos funciones en objetos y como accedes a
 * los valores que estan dentro de los oibjetos.
 */
let nombre="nombre incorrecto"; 
let presio="precio incorrecto";
/**
 * Para referirnos a un valor que esta dentro de un objeto utilizamos
 * la palabra reservada this. this es la referencia del objeto, por 
 * lo cual depende de donde se ponga tendra un valor distinto, por
 * ejemplo, si ponemos this dentro del objeto producto el valor de 
 * this sera la referencia del Objeto producto; pero si lo ponemos
 * dentro del objeto producto2 la referencia sera el objeto Producto2
 * 
 */
const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El producto: ${this.nombre} tiene un presio de ${this.presio}`)
  }
};

producto.mostrarInfo();

/**
 * Si no utilizamos this el objeto no neceariamente buscara el valor
 * de las variable que le demos dentro de el mismo, veamos el caso
 * de producto 2, que como ponemos en la funcion mosrarInfo las 
 * variables nombre y presio, la cuales estan definidas fuera, 
 * el valor que aparese es el de ellas y no el que esta en el objeto.
 */

const producto2 = {
    nombre: 'Monitor de 20"',
    presio: 200,
    disponible: true,
    mostrarInfo: function(){
      console.log(`El producto: ${nombre} tiene un presio de ${presio}`)
    }
  };
  
  producto2.mostrarInfo();

  /**
   * En pocas palabras la el this evita que se mesclen los valores.
   */