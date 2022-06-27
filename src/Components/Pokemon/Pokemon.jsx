import React from 'react'
import "./Pokemon.css";

function Pokemon({e}) {
  const imagen = require(`../../Materiales/${e.nombre.toLowerCase()}.png`)
  return (
  <div className='item'>
      <p>{e.nombre}{e.numero}  <img className="foto-lista" src={imagen} alt="" />  </p>
  </div>
  )
}

export default Pokemon