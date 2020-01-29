/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov),
  this.direccion = direccion;
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor=ZombieConductor;
/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  
  if(this.direccion == "H"){

    if(this.x>this.rangoMov.hasta){
      this.velocidad *= -1;
    } else if(this.x<this.rangoMov.desde){
      this.velocidad *= -1;
    }
    this.x+=this.velocidad;

  } else {
    if(this.y>this.rangoMov.hasta){
      this.velocidad *= -1;
    } else if(this.y<this.rangoMov.desde){
      this.velocidad *= -1;
    }
    this.y+=this.velocidad; 
  }
  
}

Enemigo.prototype.atacar = function (jugador) {
  Jugador.perderVidas(jugador.vidas);
}