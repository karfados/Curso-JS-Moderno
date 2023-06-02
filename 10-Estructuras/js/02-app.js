/**
 * En esta seccion estaremos viendo como utilizar el comparador estricto y
 * su diferencia con el comparador no estricto.
 */
const puntaje =1000;
// Comparador no estricto
console.log("-----Comparador NO estricto-------");
if (puntaje == "1000") {
    console.log("Si es igual");
}else{
   console.log("No es igual")
}
// Comparador estricto
console.log("-----Comparador ESTRICTO-------")
if (puntaje === "1000") {
     console.log("Si es igual");
}else{
    console.log("No es igual")
}