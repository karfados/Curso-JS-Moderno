/**
 * En esta seccion veremos los metodos de propiedad.
 *
 * Esto es un sintaxis que permite utilizar las funciones como
 * si fueran metodos de un objeto
 */

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },
  pausar: function () {
    console.log(`Pausa`);
  },
  borrar: function (id) {
    console.log(`Borrando cancion con el id ${id}`);
  },
  crearPlaylist:function (name) {
    console.log(`Creando play list ${name}`);
  },
  reproducirPlaylist:function(name){
    console.log(`Reproduciendo ${name}`)
  }
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist("Rock");
reproductor.reproducirPlaylist("Rock");