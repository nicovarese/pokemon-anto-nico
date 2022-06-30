import React from "react";
import "./PokemonDescripto.css";
import height from "../../Materiales/Height.svg";
import weight from "../../Materiales/Weight.svg";
import { Link, useParams } from "react-router-dom";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

function PokemonDescripto({ lista }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "light" ? `${pokemon.about.color}` : "#308fe8",
    },
  }));

  console.log(lista);
  const { nombre } = useParams();
  const pokemon = lista.find(
    (pokemon) => pokemon.nombre.toLowerCase() === nombre.toLowerCase()
  );
  const posicionPokemon = lista.findIndex(
    (pokemon) => pokemon.nombre.toLowerCase() === nombre.toLowerCase()
  );
  const siguientePokemonDeLista = lista[posicionPokemon + 1];
  const anteriorPokemonDeLista = lista[posicionPokemon - 1];

  const imagen = require(`../../Materiales/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <>
      <div
        className="contenedor-pokemon"
        style={{ backgroundColor: pokemon.about.color }}
      >
        <header className="header-pokemon">
          <Link className="link" to="/">
            <span className="material-icons">arrow_back</span>
          </Link>
          <h1 className="nombre-pokemon">{pokemon.nombre}</h1>
          <div className="numero-pokemon">{pokemon.numero}</div>
        </header>
        <div className="imagen-y-flecha">
          <Link
            className="otro-link"
            to={`/descripcion-pokemon/${anteriorPokemonDeLista.nombre}`}
          >
            <span id="flechita-izq" className="material-symbols-outlined">
              chevron_left
            </span>
          </Link>
          <img className="foto-pokemon" src={imagen} alt="" />
          <Link
            className="otro-link"
            to={`/descripcion-pokemon/${siguientePokemonDeLista.nombre}`}
          >
            <span id="flechita-der" className="material-symbols-outlined">
              chevron_right
            </span>
          </Link>
        </div>
        <div className="informacion-pokemon">
          <div className="categorias">
            <h3
              className="categoria"
              style={{ backgroundColor: pokemon.colorcategoria[0] }}
            >
              {pokemon.categoria[0]}
            </h3>
            <h3
              className="categoria-2"
              style={{
                backgroundColor: pokemon.colorcategoria[1],
                display: pokemon.colorcategoria[1] ? "flex" : "none",
              }}
            >
              {pokemon.categoria[1]}
            </h3>
          </div>
          <h2 className="about" style={{ color: pokemon.about.color }}>
            About
          </h2>
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
              <div className="contenido-moves">
                <p className="p-moves">
                  {pokemon.about.moves[0]} <br />
                </p>
                <p
                  className="p-moves"
                  style={{ display: pokemon.about.moves[1] ? "flex" : "none" }}
                >
                  {pokemon.about.moves[1]}
                </p>
              </div>
              <h5 className="moves">Moves</h5>
            </div>
          </div>
          <div className="contenedor-descripcion">
            <p className="pokemon-descripcion">{pokemon.about.descripcion}</p>
          </div>
          <h2 className="base-stats" style={{ color: pokemon.about.color }}>
            Base Stats
          </h2>

          <ul className="lista-stats">
            <li className="item-lista-stats">
              <p className="p-lista">HP</p>
              <p className="p-lista-stats">{pokemon.basestats.hp}</p>
              <BorderLinearProgress
                className="barra"
                variant="determinate"
                value={pokemon.basestats.hp}
              />
            </li>
            <li className="item-lista-stats">
              <p className="p-lista">ATK</p>
              <p className="p-lista-stats">{pokemon.basestats.atk}</p>
              <BorderLinearProgress
                className="barra"
                variant="determinate"
                value={pokemon.basestats.atk}
              />
            </li>
            <li className="item-lista-stats">
              <p className="p-lista">DEF</p>
              <p className="p-lista-stats">{pokemon.basestats.def}</p>
              <BorderLinearProgress
                className="barra"
                variant="determinate"
                value={pokemon.basestats.def}
              />
            </li>
            <li className="item-lista-stats">
              <p className="p-lista">SATK</p>
              <p className="p-lista-stats">{pokemon.basestats.satk}</p>
              <BorderLinearProgress
                className="barra"
                variant="determinate"
                value={pokemon.basestats.satk}
              />
            </li>
            <li className="item-lista-stats">
              <p className="p-lista">SDEF</p>
              <p className="p-lista-stats">{pokemon.basestats.sdef}</p>
              <BorderLinearProgress
                className="barra"
                variant="determinate"
                value={pokemon.basestats.sdef}
              />
            </li>
            <li className="item-lista-stats">
              <p className="p-lista">SPD</p>
              <p className="p-lista-stats">{pokemon.basestats.spd}</p>
              <BorderLinearProgress
                className="barra"
                variant="determinate"
                value={pokemon.basestats.spd}
              />
            </li>
          </ul>
        </div>
        <div className="pokeball"></div>
      </div>
    </>
  );
}

export default PokemonDescripto;
