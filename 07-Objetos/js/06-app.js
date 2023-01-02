/**
 * En esta seccion veremos como implementar destructurina a
 * objetos que se encuientran dentro de objetos. Para eso veremos
 * el sigueinte ejemplo:
 */

const producto = {
  nombre: 'Monitor de 20"',
  presio: 200,
  disponible: true,
  informacion: {
    peso: "1000g",
    color: "red",
    caracteristicas: {
      panel: "IPS",
      frecuencia: "75Hz",
    },
  },
};

/**
 * En este caso para aceder al objeto dentro del objeto lo
 * aremos con la sintaxis de :{} que se muestra a continuacion:
 */

const {informacion:{caracteristicas:{panel}}} = producto;

console.log(panel);