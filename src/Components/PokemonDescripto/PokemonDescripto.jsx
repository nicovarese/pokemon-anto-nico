import React from "react";
import "./PokemonDescripto.css";
import height from "../../Materiales/Height.svg";
import weight from "../../Materiales/Weight.svg";

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
          <div className="contenedor-datos">
            <div className="contenedor-weight">
              <div className="img">
                <img src={weight} alt="" />
                <p>{pokemon.about.weight}</p>
              </div>
              <h5 className="weight">Weight</h5>
            </div>
            <div className="contenedor-height">
              <div className="img">
                <img src={height} alt="" />
                <p>{pokemon.about.height}</p>
              </div>
              <h5 className="height">Height</h5>
            </div>
            <div className="contenedor-moves">
              <div className="img">
                <p>{pokemon.about.moves}</p>
              </div>
              <h5 className="moves">Moves</h5>
            </div>
          </div>
          <p>{pokemon.about.descripcion}</p>
          <h2 className="base-stats">Base Stats</h2>
          {/* <div className="contenedor-valores">
            <ul className="listado-stats">
              <li>HP</li>
              <li>ATK</li>
              <li>DEF</li>
              <li>SATK</li>
              <li>SDEF</li>
              <li>SPD</li>
            </ul>
            <ul className="listado-pokemon">
              <li>{pokemon.basestats.hp}</li>
              <li>{pokemon.basestats.atk}</li>
              <li>{pokemon.basestats.def}</li>
              <li>{pokemon.basestats.satk}</li>
              <li>{pokemon.basestats.sdef}</li>
              <li>{pokemon.basestats.spd}</li>
            </ul>
          </div> */}
        </div>
        <div className="pokeball"></div>
      </div>
    </>
  );
}

export default PokemonDescripto;
