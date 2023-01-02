/**
 * En esta seccion veremos como es que las funciones se comunican 
 * entre si. Ya que en un proyecto lo mas normal es que tengamos 
 * pequeñas funciones que se comunican entre si.
 * 
 * Veamos el siguiente ejemplo:
 */

iniciarApp()

function iniciarApp(){
    console.log("iniciando App....");
    segundaFuncion()//LLamada a la segunda fucncion
}

function segundaFuncion(){
    console.log("Ejefcutando la segunda funcion....")

    autentificandoUsuario("Pedro")//LLamada a autentificasion del usuario
}

function autentificandoUsuario(usuario){
    console.log(`Autentificando usuario......espere.....`);
    console.log(`Usuario autentificado....Bienbenido ${usuario}`)
}