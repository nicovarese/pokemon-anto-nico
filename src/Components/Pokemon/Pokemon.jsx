import React from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";

function Pokemon({ pokemon, cargarPokemones }) {
  const token = localStorage.getItem("token");

  const borrarPokemon = async () => {
    try {
      const respuesta = await fetch(
        `http://localhost:1234/eliminar/pokemon/${pokemon.numero}`,
        { method: "DELETE", headers: { "auth-token": token } }
      );
      cargarPokemones();
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonFetch = await respuesta.json();
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
  const imagen = pokemon.imagen;
  return (
    <>
      <div
        className="botonBorrar"
        onClick={borrarPokemon}
        style={{
          color: pokemon.about.color,
          visibility: token ? "visible" : "hidden",
        }}
      >
        ✘
      </div>
      <Link className="link" to={`/descripcion-pokemon/${pokemon.numero}`}>
        <div
          id={pokemon.numero}
          className="item"
          style={{ borderColor: pokemon.about.color }}
        >
          <div className="numero" style={{ color: pokemon.about.color }}>
            {pokemon.numero}
          </div>
          <img className="foto-lista" src={imagen} alt="" />
          <div
            className="nombre"
            style={{ backgroundColor: pokemon.about.color }}
          >
            {pokemon.nombre}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Pokemon;
