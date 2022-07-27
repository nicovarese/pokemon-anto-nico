import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaginaPpal.css";
import { Link } from "react-router-dom";

function PaginaPpal() {
  const navegar = useNavigate();
  const [nombre, setNombre] = useState([]);
  const [password, setPassword] = useState([]);

  const verify = async () => {
    try {
      const response = await fetch("http://localhost:1234/login", {
        method: "POST",
        body: JSON.stringify({ nombre, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Datos ingresados incorrectamente");
      }
      const fetchResponse = await response.json();
      localStorage.token = fetchResponse.token;
      navegar("/pokemon");
      console.log(fetchResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const ingresoNombre = (ev) => {
    setNombre(ev.target.value);
  };

  const ingresoPassword = (ev) => {
    setPassword(ev.target.value);
  };

  return (
    <div className="ppal">
      <label className="label1" htmlFor="user">
        Usuario:
        <input
          className="inputLogin"
          type="text"
          name="user"
          //   value={usuario}
          placeholder="Ingresar usuario"
          onChange={ingresoNombre}
        />
      </label>
      <label className="label2" htmlFor="psw">
        Contraseña:
        <input
          className="inputLogin"
          type="password"
          name="psw"
          placeholder="Ingresar contraseña"
          onChange={ingresoPassword}
        />
      </label>
      <button className="btn btn1" onClick={verify}>
        Ingresar
      </button>
      <Link className="linkLista" to="/pokemon">
        » Vista previa «
      </Link>
    </div>
  );
}

export default PaginaPpal;
