import React from "react";
import Pokemon from "../Components/Pokemon/Pokemon";
import pokeball from "../Materiales/Pokeball.png";
import "./lista-pokemon.css";
import arrow from "../Materiales/Arrow.svg";
import { useState } from "react";

function ListaPokemon({ lista }) {
  const [listaPokemon, setListaPokemon] = useState(lista);
  const buscarPokemon = (ev) => {
    let resultadoFiltrado = lista.filter((pokemon) => {
      return pokemon.nombre
        .toLowerCase()
        .includes(ev.target.value.toLowerCase());
    });
    setListaPokemon(resultadoFiltrado);
  };

  const ordenarListaPokemon = () => {};

  return (
    <>
      <div className="contenedor">
        <header>
          <img className="pokeball-icono" src={pokeball} alt="" />
          <h1>Pokédex</h1>
          <div className="filtro" onClick={ordenarListaPokemon}>
            <span>#</span>
            <img className="flechita" src={arrow} alt="" />
          </div>
        </header>
        <input
          type="search"
          placeholder="&#xf007;Buscar"
          onChange={buscarPokemon}
        />
        <div className="contenedor-lista">
          {listaPokemon.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.numero} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaPokemon;
