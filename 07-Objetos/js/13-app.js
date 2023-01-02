/**
 * En esta aseccion veremos otros metodos que son muy utiles para el
 * uso de objetos, tomemos el siguiente objeto como ejemplo:
 */

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un presio de ${this.presio}`
    );
  },
};

// Metodo para mostrar las llaves de un objeto:
console.log(Object.keys(producto));

// Metodo para mostrar los valores de las llaves:
console.log(Object.values(producto));

// Metodo para mostrar todos los datos juntos en forma de arreglos pares:
console.log(Object.entries(producto));