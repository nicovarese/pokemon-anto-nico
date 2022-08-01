import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaginaPpal.css";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function PaginaPpal() {
  const navegar = useNavigate();
  const [nombre, setNombre] = useState([]);
  const [password, setPassword] = useState([]);
  const [nuevoError, setNuevoError] = useState(false);

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
      setNuevoError(true);
    }
  };

  const ingresoNombre = (ev) => {
    setNombre(ev.target.value);
  };

  const ingresoPassword = (ev) => {
    setPassword(ev.target.value);
  };
  const token = localStorage.getItem("token");

  return (
    <div className="ppal">
      <Link
        style={{ textDecoration: "inherit" }}
        className="linkLista"
        to="/pokemon"
      >
        » Vista previa «
      </Link>
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
      {nuevoError && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Usuario y/o contraseña no válido</Alert>
        </Stack>
      )}
      <p style={{ display: token ? "none" : "block" }} className="pRegistro">
        No tienes usuario?
      </p>

      <Link to="/sign-up" style={{ textDecoration: "inherit" }}>
        <button
          className="botonRegistrarseLogin"
          style={{ display: token ? "none" : "block" }}
        >
          Regístrate
        </button>
      </Link>
    </div>
  );
}

export default PaginaPpal;
