import React from "react";
import Pokemon from "../Components/Pokemon/Pokemon";
import pokeball from "../Materiales/Pokeball.png";
import PokemonDescripto from "../Components/PokemonDescripto/PokemonDescripto";

function DescripcionPokemon({ pokemon }) {
  return <PokemonDescripto pokemon={pokemon} />;
}

export default DescripcionPokemon;
