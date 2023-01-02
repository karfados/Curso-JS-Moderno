/**
 * En esta seccion veremos como podemos pasarle parametos a los
 * arrow funcions
 *
 * Como lo comentamos anteriormente si le pasamos solo un parametro,
 * no es necesario poner los parentesis; pero si le ponemos mas de uno
 * o le agregamos valores por defecto si son nesesarios.
 */

const aprendo = (tecnologia) => `Estoy aprendiendo ${tecnologia}`;
console.log(aprendo("Node Js"));

const aprendo2 = (tecnologia = "") => `Estoy aprendiendo ${tecnologia}`;
console.log(aprendo2());

const aprendo3 = (a, b) => `Estoy aprendiendo ${a} y ${b}`;
console.log(aprendo3("Node Js", "html"));
