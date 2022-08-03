import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function SignUp() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [nuevoError, setNuevoError] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ingresoNombre = (ev) => {
    setNombre(ev.target.value);
  };
  const ingresoPassword = (ev) => {
    setPassword(ev.target.value);
  };
  const ingresoMail = (ev) => {
    setMail(ev.target.value);
  };

  const registrarUsuario = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1234/sign-up", {
        method: "POST",
        body: JSON.stringify({ nombre, password, mail }),
        headers: { "Content-Type": "application/json" },
      });
      handleOpen();
      if (!response.ok) {
        throw new Error("El nombre de usuario ya existe");
      }
      const fetchResponse = await response.json();
      console.log(fetchResponse);
    } catch (error) {
      console.log(error);
      setNuevoError(true);
    }
  };

  return (
    <div className="registro">
      <Link className="link" to="/">
        <span className="material-icons arrowBackSignUp">arrow_back</span>
      </Link>
      <h1 className="signUp">Sign-Up</h1>
      <form className="form-sign-up" action="" onSubmit={registrarUsuario}>
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
        {nuevoError && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">Este nombre de usuario ya existe</Alert>
          </Stack>
        )}
        <label className="labelSignUp" htmlFor="psw">
          Ingrese su contraseña:
          <input
            className="inputSignUp"
            onChange={ingresoPassword}
            type="password"
            name="psw"
            placeholder="Ingresar contraseña"
            minLength={8}
          />
        </label>
        <label className="labelSignUp" htmlFor="user">
          Ingrese un e-mail:
          <input
            className="inputSignUp"
            onChange={ingresoMail}
            type="email"
            name="user"
            placeholder="Ingresar e-mail"
          />
        </label>
        <button className="botonRegistrarse">Registrarse</button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="h2">
            <b>¡USUARIO CREADO CON ÉXITO!</b>
          </Typography>
          <Link to="/">
            <button className="boton-modal">Ve a loguearte!</button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}

export default SignUp;
