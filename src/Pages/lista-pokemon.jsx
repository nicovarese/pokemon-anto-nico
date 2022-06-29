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
    setOrdenarPorNumero(!ordenarPorNumero);
    if (ordenarPorNumero) {
      let listaOrdenadaPorNumero = listaPokemon.sort((a, b) => {
        if (a.numero < b.numero) {
          return 1;
        } else return 0;
      });
      setListaPokemon(listaOrdenadaPorNumero);
    } else {
      let listaOrdenadaAlfabeticamente = listaPokemon.sort((a, b) => {
        if (a.nombre < b.nombre) {
          return 1;
        } else return 0;
      });
      setListaPokemon(listaOrdenadaAlfabeticamente);
    }
  };

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
