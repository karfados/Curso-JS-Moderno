/**
 * Ahora veremos otra forma de crear objetos, a esta forma se le
 * conose como Object Constructor.
 *
 *  Hasta ahora emos utilizado la forma llamada Object Literal la cual
 * consiste en definir manualmente el objeto por medio de codigo.
 *
 * La ventaja de utilizar el Object Constructor es que es uan base
 * para crear automaticamente objetos cuando se requieren de varios.
 */

//Object Literal
const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
};

//Object Constructor

function Producto(nombre,presio){
    this.nombre  = nombre;
    this.presio  = nombre;
    this.nombre  = true;
}
// Una vez tenemos el object constructor ponemos crear multiples objetos
const producto2= new Producto("Monitor 24\"",500);
const producto3= new Producto("Monitor 27\"",700);

console.log(producto2);
console.log(producto3);

