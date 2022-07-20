import React, { useState, useEffect } from "react";
import "./PokemonDescripto.css";
import height from "../../Materiales/Height.svg";
import weight from "../../Materiales/Weight.svg";
import { Link, useParams } from "react-router-dom";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

function PokemonDescripto() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    ///////// mostrar Pokemon seleccionado
    const pokemonEncontrado = async () => {
      const token = localStorage.getItem("token");
      try {
        const repuesta = await fetch(`http://localhost:1234/pokemon/${id}`, {
          headers: { "auth-token": token },
        });

        if (!repuesta.ok) {
          throw new Error("Error en el servidor");
        }

        const pokemonesFetch = await repuesta.json();

        setPokemon(pokemonesFetch);
      } catch (error) {
        console.log("No se pudo conectar con el backend");
      }
    };
    pokemonEncontrado();
  }, [id]);

  // const pokemonABorrar

  // codigo para la barrita (importada de MUI)
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

  // linea 53 importamos imagenes de cada pokemon, de acuerdo al pokemon que necesitemos
  const imagen =
    pokemon.nombre &&
    require(`../../Materiales/${pokemon.nombre.toLowerCase()}.png`);

  return (
    pokemon.nombre && (
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
          {/*linea 71: hicimos que linkee al pokemon anterior al apretar flechita. linea 72: cuando llegaba al primer pokemon, que se esconda flechita*/}
          <div className="imagen-y-flecha">
            {pokemon.prev && (
              <Link
                className="otro-link"
                to={`/descripcion-pokemon/${pokemon.prev}`}
              >
                <span id="flechita-izq" className="material-symbols-outlined">
                  chevron_left
                </span>
              </Link>
            )}
            <img className="foto-pokemon" src={imagen} alt="" />
            {/*linea 81: hicimos que linkee al siguiente pokemon al apretar flechita. linea 82: cuando llegaba al ultimo pokemon, que se esconda flechita*/}
            {pokemon.next && (
              <Link
                className="otro-link"
                to={`/descripcion-pokemon/${pokemon.next}`}
              >
                <span id="flechita-der" className="material-symbols-outlined">
                  chevron_right
                </span>
              </Link>
            )}
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
                    style={{
                      display: pokemon.about.moves[1] ? "flex" : "none",
                    }}
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

            <div className="contendor-lista-y-nombre">
              <ul className="nombres">
                <li>
                  <p className="p-lista" style={{ color: pokemon.about.color }}>
                    HP
                  </p>
                  <p className="p-lista" style={{ color: pokemon.about.color }}>
                    ATK
                  </p>
                  <p className="p-lista" style={{ color: pokemon.about.color }}>
                    DEF
                  </p>
                  <p className="p-lista" style={{ color: pokemon.about.color }}>
                    SATK
                  </p>
                  <p className="p-lista" style={{ color: pokemon.about.color }}>
                    SDEF
                  </p>
                  <p className="p-lista" style={{ color: pokemon.about.color }}>
                    SPD
                  </p>
                </li>
              </ul>
              <ul className="lista-stats">
                <li className="item-lista-stats">
                  <p className="p-lista-stats">{pokemon.basestats.hp}</p>
                  <BorderLinearProgress
                    className="barra"
                    variant="determinate"
                    value={pokemon.basestats.hp}
                  />
                </li>
                <li className="item-lista-stats">
                  <p className="p-lista-stats">{pokemon.basestats.atk}</p>
                  <BorderLinearProgress
                    className="barra"
                    variant="determinate"
                    value={pokemon.basestats.atk}
                  />
                </li>
                <li className="item-lista-stats">
                  <p className="p-lista-stats">{pokemon.basestats.def}</p>
                  <BorderLinearProgress
                    className="barra"
                    variant="determinate"
                    value={pokemon.basestats.def}
                  />
                </li>
                <li className="item-lista-stats">
                  <p className="p-lista-stats">{pokemon.basestats.satk}</p>
                  <BorderLinearProgress
                    className="barra"
                    variant="determinate"
                    value={pokemon.basestats.satk}
                  />
                </li>
                <li className="item-lista-stats">
                  <p className="p-lista-stats">{pokemon.basestats.sdef}</p>
                  <BorderLinearProgress
                    className="barra"
                    variant="determinate"
                    value={pokemon.basestats.sdef}
                  />
                </li>
                <li className="item-lista-stats">
                  <p className="p-lista-stats">{pokemon.basestats.spd}</p>
                  <BorderLinearProgress
                    className="barra"
                    variant="determinate"
                    value={pokemon.basestats.spd}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="pokeball"></div>
        </div>
      </>
    )
  );
}

export default PokemonDescripto;
