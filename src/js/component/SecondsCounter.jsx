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
