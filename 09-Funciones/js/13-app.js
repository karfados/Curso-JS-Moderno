/**
 * Practica de arrow funcions
 * Implerentaremos arrow funcions en el siguiente codigo:
 * 
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

 */

const reproductor = {
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log(`Pausa`),
  borrar: (id) => console.log(`Borrando cancion con el id ${id}`),
  crearPlaylist: (name) => console.log(`Creando play list ${name}`),
  reproducirPlaylist: (name) => console.log(`Reproduciendo ${name}`),
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist("Rock");
reproductor.reproducirPlaylist("Rock");
