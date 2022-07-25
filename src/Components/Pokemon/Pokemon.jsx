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
      console.log(pokemonFetch);
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
  const imagen = require(`../../Materiales/${pokemon.nombre.toLowerCase()}.png`);
  return (
<<<<<<< HEAD
    <Link className="link" to={`/descripcion-pokemon/${pokemon.id}`}>
      <div
        id={pokemon.id}
        className="item"
        style={{ borderColor: pokemon.about.color }}
=======
    <>
      <div
        className="botonBorrar"
        onClick={borrarPokemon}
        style={{
          color: "black",
          display: token ? "inline-block" : "none",
        }}
>>>>>>> 84ae27512423a10913a7af65d8359e572d41c96e
      >
        x
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
