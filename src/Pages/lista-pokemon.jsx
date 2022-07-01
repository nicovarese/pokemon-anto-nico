import React from "react";
import Pokemon from "../Components/Pokemon/Pokemon";
import pokeball from "../Materiales/Pokeball.png";
import "./lista-pokemon.css";
import arrow from "../Materiales/Arrow.svg";
import { useState } from "react";

function ListaPokemon({ lista }) {
  //La línea 11 la utilizamos para darle estado a nuestra lista que importamos desde app.js, la cual tenemos como prop en la linea 8.
  const [listaPokemon, setListaPokemon] = useState(lista);
  //esta funcion, la creamos para buscar los pokemon en el input search.
  //puntos a tener en cuenta:
  // 1) includes: "que incluya lo que va dentro del paréntesis"
  // 2) toLowerCase: pasar todo a minúscula
  // 3) setListaPokemon en la linea 23 es para que cambie el estado cada vez que usamos la función, si no, no va a cambiar nada.
  const buscarPokemon = (ev) => {
    let resultadoFiltrado = lista.filter((pokemon) => {
      return pokemon.nombre
        .toLowerCase()
        .includes(ev.target.value.toLowerCase());
    });
    setListaPokemon(resultadoFiltrado);
  };

  //este useState, lo usamos para hacer una especie de toggle (botoncito on/off)
  const [ordenarPorNumero, setOrdenarPorNumero] = useState(false);
  //esta funcion la usamos para ordenar alfabeticamente o numericamente.
  //puntos a tener en cuenta:
  // 1) usar una copia de la lista ([...listaPokemon])
  // 2) ternario para que si es verdadero(?) que hay que ordenar por numero (gracias al toggle), que lo ordene por numero
  // y de lo contrario(:), que lo ordene alfabeticamente.
  // 3)setListaPokemon en la linea 40 es para que cambie el estado cada vez que usamos la función, si no, no va a cambiar nada.
  // 4)setOrdenarPorNumero lo usamos para que cada vez que usemos la funcion(clickeemos en el botón), pase a su estado invertido.
  const ordenarListaPokemon = () => {
    let listaOrdenadaPorNumero = [...listaPokemon].sort((a, b) =>
      ordenarPorNumero
        ? a.numero.localeCompare(b.numero)
        : a.nombre.localeCompare(b.nombre)
    );
    setListaPokemon(listaOrdenadaPorNumero);
    setOrdenarPorNumero(!ordenarPorNumero);
    console.log(listaOrdenadaPorNumero);
  };

  //linea 60: usamos MAP para cambiar la forma de cada elemento de la lista, y le pasamos a los elementos el componente Pokemon con sus props.
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
        <input type="search" placeholder="🔍Buscar" onChange={buscarPokemon} />
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
