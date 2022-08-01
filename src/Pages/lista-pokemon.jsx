import React from "react";
import Pokemon from "../Components/Pokemon/Pokemon";
import pokeball from "../Materiales/Pokeball.png";
import "./lista-pokemon.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import imgAgregar from "../Materiales/Pokeball.png";
import imgIniciarSesion from "../Materiales/usuario.png";

function ListaPokemon() {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [lista, setLista] = useState([]);
  useEffect(() => {
    cargarPokemones();
  }, []);

  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
  };

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

  const buscarPokemon = (ev) => {
    let resultadoFiltrado = lista.filter((pokemon) => {
      return pokemon.nombre
        .toLowerCase()
        .includes(ev.target.value.toLowerCase());
    });
    setListaPokemon(resultadoFiltrado);
  };

  const [ordenarPorNumero, setOrdenarPorNumero] = useState(false);

  const ordenarListaPokemon = () => {
    if (ordenarPorNumero) {
      setListaPokemon(lista);
      setOrdenarPorNumero(!ordenarPorNumero);
    } else {
      let listaOrdenadaPorNumero = [...listaPokemon].sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );
      setListaPokemon(listaOrdenadaPorNumero);
      setOrdenarPorNumero(!ordenarPorNumero);
    }
  };

  return (
    <>
      <div className="contenedor">
        <header>
          <img className="pokeball-icono" src={pokeball} alt="" />
          <h1 className="pokedex">Pokédex</h1>
          <Link to="/agregar-pokemon"></Link>

          <Link to="/">
            <button
              onClick={logOut}
              className="botonLista"
              style={{ display: token ? "flex" : "none" }}
            >
              📴
            </button>
          </Link>
          <div className="filtro" onClick={ordenarListaPokemon}>
            <span>{!ordenarPorNumero ? "🔢" : "🔠"}</span>
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
