/*
    En esta seccion veremos como comparar 2 tipos de dato
    que son de los mas dificiles de comprender en JavaScrip, estos
    son:
            Null
            Undefined
    Ya que poseen cirtos trucos.
*/

// undefined

/*
   Veamos un ejemplo de Undefined, pare esto crearemos una 
   variable pero no le asignaremos ningun valor.
*/

let numero;

console.log(numero);

/*
    El resultado del codigo anterior imprime en consola la
    palabra undefined, ya que el valor de la variable no esta\
    definido.
    Si vemos el tipo de datos que es la variable numero dira que 
    es de tipo undefined.
*/

console.log(typeof numero)

// Null

/*
    En el caso de las de tipo null hay que asignarles el valor

*/

let numero2=null;

console.log(numero2);
console.log(typeof numero2);

/*
    Como curiosidad al ver el tipo de dato de la variable veremos
    que es de tipo objeto, ya que en la espesificacion de ecma
    dice que los null son de tipo objeto.
*/

// Comapracion de estos valores
/*
    Si comparamos un undefined con un null con un comparador no
    estricto JavaScrip va a devolver true.
*/
console.log(numero==numero2);
/*
    Es por eso que es mas recomendable utilizar el comparador
    estricto, para evotar la ejecucion de codigo cuando no se
    decea por estos falsos true.
*/

console.log(numero===numero2);