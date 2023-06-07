/**
 * En esta seccion veremos otro forma del siclo for que seria el for in
 *
 * Es muy similar al for of pero el for in es mas para objeros
 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

for (let mes in meses) {
  console.log(mes);
}
console.log('------------------------------------------')

let producto={ nombre: "gtx 1060", precio: 300 };

for (let caracteristica in producto) {
    console.log(`${producto[caracteristica]}`);
}
