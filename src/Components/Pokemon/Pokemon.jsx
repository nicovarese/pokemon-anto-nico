import React from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";

function Pokemon({ pokemon }) {
  const imagen = require(`../../Materiales/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <Link className="link" to="/descripcion-pokemon">
      <div
        id={pokemon.numero}
        className="item"
        style={{ borderColor: pokemon.about.color }}
      >
        <div className="numero" style={{ color: pokemon.about.color }}>
          {pokemon.numero}
        </div>
        <img className="foto-lista" src={imagen} alt="" />
        <div
          className="nombre"
          style={{ backgroundColor: pokemon.about.color }}
        >
          {pokemon.nombre}
        </div>
      </div>
    </Link>
  );
}

export default Pokemon;
