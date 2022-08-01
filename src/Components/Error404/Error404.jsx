import React from "react";
import "./Error404.css";
import pikachuLlorando from "../../Materiales/angry-pikachu.gif";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="contenedor-error">
      <p>¡POKEMON NO ENCONTRADO!</p>
      <img className="pikachu" src={pikachuLlorando} alt="" />
      <Link to={"/pokemon"} style={{ textDecoration: "none" }}>
        <button className="botonVolver">
          <b>Volver a página principal</b>
        </button>
      </Link>
    </div>
  );
}

export default Error404;
