/*
    En esta seccion empesaremos a ver los objetos.
    Estos son una de las partes mas importante de javaScrip,
    ya que por ejemplo, supongamos que tenemos que crear 3
    variables para poder tener datos de un producto:
*/
const nombre="Monitor de 20\"";
const presio=200;
const disponible=true;

/*
    En lugar de crear esas 3 variables, podemos crear un objeto
    que agrupe todos los valores que nesesitemos en una sola
    variable:
*/


const producto={
    nombre:"Monitor de 20\"",
    presio:200,
    disponible:true
};

/*
    A lo anterior se le conose como Objec Literal ya que es
    estamos definiendo un objeto a mano.
*/

console.log(producto)

/*
    El resultado anterior nos museta en consola el objeto, el cual
    se pude expandir y ver su contenido.

    Ademas hay otra forma de crear objeros llamada 
    Object Constructor
*/