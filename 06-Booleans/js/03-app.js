/*
    Consejos para utilizar boleans
*/

/*
    Cuando se usa un if y conparamos si un valor es igual a
    true se hace de la siguiente forma
 */
let autenticado = false;

if(autenticado){
    console.log("Puedes ver el contenido")
};

//No lo hagas de la siguiente forma:
// if(autenticado == true){
//     console.log("Puedes ver el contenido")
// };

/*
    Ya que de da por implisido que se esta comparando contra el
    true.
*/
/*
    Otra forma es usanfo el operador ternario:
*/

console.log(autenticado? "Si puedes ver el contenido":"No esta autenticado")