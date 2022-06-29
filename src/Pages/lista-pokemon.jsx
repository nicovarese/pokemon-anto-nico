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

  const [ordenarPorNumero, setOrdenarPorNumero] = useState(true);
  const ordenarListaPokemon = () => {
    console.log(listaPokemon);
    let listaOrdenadaPorNumero = [...listaPokemon].sort((a, b) =>
      ordenarPorNumero
        ? a.numero.localeCompare(b.numero)
        : a.nombre.localeCompare(b.nombre)
    );
    setListaPokemon(listaOrdenadaPorNumero);
    setOrdenarPorNumero(!ordenarPorNumero);
  };

  return (
    <>
      <div className="contenedor">
        <header>
          <img className="pokeball-icono" src={pokeball} alt="" />
          <h1 className="pokedex">Pokédex</h1>
          <div className="filtro" onClick={ordenarListaPokemon}>
            <span>{!ordenarPorNumero ? "#" : "a/z"}</span>
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
