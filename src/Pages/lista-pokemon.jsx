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

  return (
    <>
      <div className="contenedor">
        <header>
          <img className="pokeball-icono" src={pokeball} alt="" />
          <h1>Pokédex</h1>
          <div className="filtro">
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
          {listaPokemon.map((e) => (
            <Pokemon e={e} key={e.numero} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaPokemon;
