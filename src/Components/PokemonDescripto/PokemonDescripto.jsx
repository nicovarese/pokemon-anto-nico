import React from "react";
import "./PokemonDescripto.css";

function PokemonDescripto({ pokemon }) {
  const imagen = require(`../../Materiales/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <>
      <div className="contenedor-pokemon">
        <header className="header-pokemon">
          <span className="material-icons">arrow_back</span>
          <h1 className="nombre-pokemon">{pokemon.nombre}</h1>
          <div className="numero-pokemon">{pokemon.numero}</div>
        </header>
        <img className="foto-pokemon" src={imagen} alt="" />
        <div className="informacion-pokemon">
          <h3 className="categoria">
            {pokemon.categoria[0]} {pokemon.categoria[1]}
          </h3>
          <h2 className="about">About</h2>
        </div>
        <div className="pokeball"></div>
      </div>
    </>
  );
}

export default PokemonDescripto;
