import React from "react";

const Indicador = ({ title, number }) => {
  return (
    <div id="indicator">
      <img src="x" />
      <div>
        <h4>{title}</h4>
        <h4>{number}</h4>
      </div>
    </div>
  );
};

export default Indicador;
