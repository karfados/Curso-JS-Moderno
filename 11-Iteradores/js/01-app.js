/**
 * Es esta seccion veremos el siclo for.
 * 
 * Aunque en otras ocaciones emos utilizado el siclo for para 
 * esplicar el secciones de codigo, en esta seccion
 */

const carrito = [
    { nombre: 'Monitor 22"', precio: 200 },
    { nombre: 'Monitor 24"', precio: 250 },
    { nombre: 'Monitor 27"', precio: 500 },
    { nombre: "8Gb ram", precio: 75 },
    { nombre: "16Gb ram", precio: 130 },
    { nombre: "Intel i3", precio: 125 },
    { nombre: "Intel i5", precio: 180 },
    { nombre: "Intel i7", precio: 220 },
    { nombre: "gtx 1060", precio: 300 },
  ];

  /**
   * Vemos como podemos acceder a los valores del arreglo de carrito
   */

  for (let i = 0; i < carrito.length; i++) {
    console.table(carrito[i]);
  }