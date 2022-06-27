import React from 'react'
import Pokemon from '../Components/Pokemon/Pokemon'
import pokeball from '../Materiales/Pokeball.png'

function ListaPokemon({lista}) {
  return (
    <>
    <div>
        <img src={pokeball} alt="" />
        <h1>Pokedex</h1>
    </div>
    <input type="search" />
    {lista.map((e)=> <Pokemon e={e}/>)}
    </>   
  )
}

export default ListaPokemon