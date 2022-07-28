import React from "react";
import Pokemon from "../Components/Pokemon/Pokemon";
import pokeball from "../Materiales/Pokeball.png";
import "./lista-pokemon.css";
import arrow from "../Materiales/Arrow.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import imgAgregar from "../Materiales/Pokeball.png";
import imgIniciarSesion from "../Materiales/usuario.png";

function ListaPokemon() {
  ///////// mostrar lista de Pokemones
  const [listaPokemon, setListaPokemon] = useState([]);
  const [lista, setLista] = useState([]);
  useEffect(() => {
    cargarPokemones();
  }, []);

  const token = localStorage.getItem("token");
  const cargarPokemones = async () => {
    const token = localStorage.getItem("token");
    try {
      const respuesta = await fetch("http://localhost:1234/pokemon", {
        headers: { "auth-token": token },
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const pokemonesFetch = await respuesta.json();
      setLista(pokemonesFetch);
      setListaPokemon(pokemonesFetch);
    } catch (error) {
      console.log("No se pudo conectar con el backend");
    }
  };

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

  const ordenarListaPokemon = () => {
    let listaOrdenadaPorNumero = [...listaPokemon].sort((a, b) =>
      ordenarPorNumero
        ? a.numero.toString().localeCompare(b.numero.toString())
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
          {/* <Link to="/">
            <button style={{ display: token ? "none" : "flex" }}>Login</button>
          </Link> */}
          <Link to="/agregar-pokemon"></Link>

          <Link to="/">
            <button
              className="botonLista"
              style={{ display: token ? "flex" : "none" }}
            >
              Log out
            </button>
          </Link>
          <div className="filtro" onClick={ordenarListaPokemon}>
            <span>{!ordenarPorNumero ? "#" : "a/z"}</span>
            <img className="flechita" src={arrow} alt="" />
          </div>
        </header>
        <input
          className="inputBuscar"
          type="search"
          placeholder="🔍 Buscar"
          onChange={buscarPokemon}
        />
        <div className="contenedor-lista">
          <Link className="link" to="/agregar-pokemon">
            <div
              className="itemAgregar"
              style={{ display: token ? "flex" : "none" }}
            >
              <div className="numero" style={{ color: grey }}></div>
              <img className="fotoListaAgregar" src={imgAgregar} alt="" />
              <div className="nombreAgregar" style={{ backgroundColor: grey }}>
                [Agregar Pokemon]
              </div>
            </div>
          </Link>
          <Link className="link" to="/">
            <div
              className="itemIniciarSesion"
              style={{ display: token ? "none" : "flex" }}
            >
              <div className="numero"></div>
              <img
                className="fotoListaIniciarSesion"
                src={imgIniciarSesion}
                alt=""
              />
              <div className="nombreIniciarSesion">[Iniciar sesión]</div>
            </div>
          </Link>
          {listaPokemon.map((pokemon) => (
            <Pokemon
              pokemon={pokemon}
              key={pokemon.numero}
              cargarPokemones={cargarPokemones}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaPokemon;
