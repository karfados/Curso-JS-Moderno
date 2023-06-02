/**
 * Cuando se tienen multiples condiciones que revisar puede ser mejor en
 * ocaciones realizarlo con un switch
 */

const metodoDePago = "sinpe";

switch (metodoDePago) {
  case "efectivo":
    console.log("Pagaste con efectivo!!!");
    break;
  case "tarjeta":
    console.log("Pagaste con tarjeta!!!");
    break;
  case "transferencia":
    console.log("Pagaste con transferencia!!!");
    break;
  case "cheque":
    console.log("Pagaste con cheque!!!");
    break;
  default:
    console.log("No hay metodo de pago!");
    break;
}

/**
 * Ten encuaneta que un case puede ejecutan cualquier tipo de 
 * codigo en su interior!!
 */