import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  let navegar = useNavigate();

  const ingresoNombre = (ev) => {
    setNombre(ev.target.value);
  };
  const ingresoPassword = (ev) => {
    setPassword(ev.target.value);
  };
  const ingresoMail = (ev) => {
    setMail(ev.target.value);
  };

  const registrarUsuario = async () => {
    try {
      const response = await fetch("http://localhost:1234/sign-up", {
        method: "POST",
        body: JSON.stringify({ nombre, password, mail }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Datos ingresados incorrectamente");
      }
      navegar("/");
    } catch (error) {
      console.log("no se pudo conectar con el back end");
    }
  };

  return (
    <div className="registro">
      <Link className="link" to="/pokemon">
        <span className="material-icons arrowBackSignUp">arrow_back</span>
      </Link>
      <h1 className="signUp">Sign-Up</h1>
      <label className="labelSignUp" htmlFor="user">
        Ingrese su nombre:
        <input
          className="inputSignUp"
          onChange={ingresoNombre}
          type="text"
          name="user"
          placeholder="Ingresar usuario"
        />
      </label>
      <label className="labelSignUp" htmlFor="psw">
        Ingrese su contraseña:
        <input
          className="inputSignUp"
          onChange={ingresoPassword}
          type="password"
          name="psw"
          placeholder="Ingresar contraseña"
        />
      </label>
      <label className="labelSignUp" htmlFor="user">
        Ingrese un e-mail:
        <input
          className="inputSignUp"
          onChange={ingresoMail}
          type="text"
          name="user"
          placeholder="Ingresar e-mail"
        />
      </label>
      <button className="botonRegistrarse" onClick={registrarUsuario}>
        Registrarse
      </button>
    </div>
  );
}

export default SignUp;
