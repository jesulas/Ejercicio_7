import{ partida
 }from "./modelo";
/*
import { dameURLCarta,
          revisarPartida,
          mostrarURLCarta,
          reiniciar,
          actualizarPuntosTotales,
          actualizarText
 } from "./ui";
*/

  
export function numeroAleatorio(){
    return (Math.floor(Math.random()*(10)))
}

export function dameCarta(numeroAleatorio){
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2;
    }
    if (numeroAleatorio < 1){
      return 1;
    }
    return numeroAleatorio;
  }

export function obtenerPuntosCarta(carta){
    if (carta > 7){
      return 0.5;
    }
    return carta;
}
export function sumarPuntos(puntos){
    console.log("Puntos actuales al sumar.")
    console.log(partida.puntosTotales)
    return (partida.puntosTotales + puntos);
}

export function dameEstadoPartida(){
if(partida.puntosTotales === 7.5){
return "ganar";
}
else if (partida.puntosTotales > 7.5){
return "perder";
}
else if (partida.puntosTotales < 4){
return "conservador";
}
else if ((partida.puntosTotales >= 4) && (partida.puntosTotales <= 5)){
return "cangelo";
}
return "seguir_jugando";
}