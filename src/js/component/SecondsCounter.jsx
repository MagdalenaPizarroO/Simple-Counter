import React from "react";

function SecondsCounter(props) {
  return (
    <div className="container-flex p-5 mx-5 align-items-center">
    <div className="row align-items-center">
      <div className="col reloj">
      <i className="fas fa-clock"></i>
      </div>
      <div className="col reloj">
       0
      </div>
      <div className="col reloj">
        0
      </div>
      <div className="col reloj">
        0
      </div>
      <div className="col reloj">
        0
      </div>
      <div className="col reloj">
        0
      </div>
      <div className="col reloj">
        0
      </div>
    </div>
  </div>
  );
}

export default SecondsCounter;
