/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

  moverse: function(movX, movY,tecla){
  
    switch(tecla){
      case "izq": 
        Jugador.ancho= 30;
        Jugador.alto= 15;
        Jugador.sprite= 'imagenes/auto_rojo_izquierda.png';
        break;
      case "arriba": 
        Jugador.ancho= 15;
        Jugador.alto= 30;
        Jugador.sprite= 'imagenes/auto_rojo_arriba.png';
        break;
      case "der": 
        Jugador.ancho= 30;
        Jugador.alto= 15;
        Jugador.sprite= 'imagenes/auto_rojo_derecha.png';  
        break;
      case "abajo":
        Jugador.ancho= 15;
        Jugador.alto= 30;
        Jugador.sprite= 'imagenes/auto_rojo_abajo.png';  
        break;
    }
    Jugador.x+=movX;
    Jugador.y+=movY;
  },
  
  perderVidas: function(vidasPerdidas){
    Jugador.vidas-=vidasPerdidas;
  }

}
