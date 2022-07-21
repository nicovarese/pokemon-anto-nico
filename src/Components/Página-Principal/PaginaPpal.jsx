import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaginaPpal.css";

function PaginaPpal() {
  const navegar = useNavigate();
  const [name, setNombre] = useState([]);
  const [password, setPassword] = useState([]);

  useEffect(() => {
    verify();
  }, []);

  const verify = async () => {
    try {
      const response = await fetch("http://localhost:1234/login", {
        method: "POST",
        body: JSON.stringify({ name, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Datos ingresados incorrectamente");
      }
      const fetchResponse = await response.json();
      localStorage.token = fetchResponse.token;
      navegar("/");
      console.log(fetchResponse);
    } catch (error) {
      console.log("Error");
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
      <h1>Bienvenidos!</h1>
      <label htmlFor="user">
        Usuario:
        <input
          type="text"
          name="user"
          //   value={usuario}
          placeholder="Ingresar usuario"
          onChange={ingresoNombre}
        />
      </label>
      <label htmlFor="psw">
        Contraseña:
        <input
          type="password"
          name="psw"
          placeholder="Ingresar contraseña"
          onChange={ingresoPassword}
        />
      </label>
      <button onClick={verify}>Ingresar</button>
    </div>
  );
}

export default PaginaPpal;
