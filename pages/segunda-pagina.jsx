import React from "react";
import Indicador from "../components/Indicador";

const segundaPagina = () => {
  return (
    <div>
      <p>segunda-pagina</p>
      <p>Hola</p>
      <Indicador title={"Inducidas"} number={0} />
      <Indicador title={"Fallidas"} number={5} />
      <Indicador title={"Missorting"} number={3} />
    </div>
  );
};

export default segundaPagina;
