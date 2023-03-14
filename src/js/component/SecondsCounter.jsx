import React from "react";

function SecondsCounter(props) {
  let texto = props.seconds.toString();
  let unidades = texto[texto.length - 1];
  let decenas = texto[texto.length - 2];
  let centenas = texto[texto.length - 3];
  let mil = texto[texto.length - 4];
  let diez = texto[texto.length - 5];
  let cien = texto[texto.length - 6];
  
  return (
    <div className="container-flex p-5 mx-5 align-items-center">
    <div className="row align-items-center">
      <div className="col reloj"><i className="fas fa-clock"></i></div>
      <div id="cien" className="col reloj">{cien==undefined?0:cien}</div>
      <div id="diez" className="col reloj">{diez==undefined?0:diez}</div>
      <div id="mil" className="col reloj">{mil==undefined?0:mil}</div>
      <div id="centenas" className="col reloj">{centenas==undefined?0:centenas}</div>
      <div id="decenas" className="col reloj">{decenas==undefined?0:decenas}</div>
      <div id="unidades" className="col reloj">{unidades}</div>
    </div>
  </div>
  );
}



export default SecondsCounter;

// como número
// let unidades = props.seconds%10;
// let decenas = Math.floor(props.seconds/10)%10;
// let centenas = Math.floor(props.seconds/100)%10;
// let mil = Math.floor(props.seconds/1000)%10;
// let diez = Math.floor(props.seconds/1000)%10;
// let cien = Math.floor(props.seconds/10000)%10;

//opción de Pedro
// const ano = Math.floor(counter / 31104000); 
// const mes = Math.floor(counter / 2592000); 
// const dia = Math.floor(counter / 86400); 
// const hora = Math.floor(counter / 3600); 
// const minutos = Math.floor((counter % 3600) / 60); 
// const segundos = counter % 60;