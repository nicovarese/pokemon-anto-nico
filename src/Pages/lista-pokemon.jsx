import React from 'react'
import Pokemon from '../Components/Pokemon/Pokemon'
import pokeball from '../Materiales/Pokeball.png'
import './lista-pokemon.css'
import arrow from '../Materiales/Arrow.svg'

function ListaPokemon({lista}) {
  return (
    <>
    <div className="contenedor">
    <header>
        <img className="pokeball-icono"src={pokeball} alt="" />
        <h1>Pokédex</h1>
        <div className="filtro">
          <span>#</span>
          <img className="flechita" src={arrow} alt="" />
        </div>
    </header>
    <input type="search" placeholder='Buscar'/>
    {lista.map((e)=> <Pokemon e={e}/>)}
    </div>
    </>   
  )
}

export default ListaPokemon