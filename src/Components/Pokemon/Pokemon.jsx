import React from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";

function Pokemon({ e }) {
  const imagen = require(`../../Materiales/${e.nombre.toLowerCase()}.png`);
  return (
    <Link className="link" to="/descripcion-pokemon">
      <div
        id={e.numero}
        className="item"
        style={{ borderColor: e.about.color }}
      >
        <div className="numero" style={{ color: e.about.color }}>
          {e.numero}
        </div>
        <img className="foto-lista" src={imagen} alt="" />
        <div className="nombre" style={{ backgroundColor: e.about.color }}>
          {e.nombre}
        </div>
      </div>
    </Link>
  );
}

export default Pokemon;
