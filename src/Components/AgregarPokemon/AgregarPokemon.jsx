import React from "react";
import { useState } from "react";
import "./AgregarPokemon.css";
import { Link } from "react-router-dom";
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
  const [numero, setNumero] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria1, setCategoria1] = useState("");
  const [categoria2, setCategoria2] = useState("");
  const [colorCategoria1, setcolorCategoria1] = useState("");
  const [colorCategoria2, setColorCategoria2] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [moves1, setMoves1] = useState("");
  const [moves2, setMoves2] = useState("");
  const [color, setColor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ingresoNombre = (ev) => {
    setNombre(ev.target.value);
  };

  const ingresoNumero = (ev) => {
    setNumero(ev.target.value);
  };

  const ingresoImagen = (ev) => {
    setImagen(ev.target.value);
  };

  const ingresoCategoria1 = (ev) => {
    setCategoria1(ev.target.value);
  };

  const ingresoCategoria2 = (ev) => {
    setCategoria2(ev.target.value);
  };

  const ingresoColorCategoria1 = (ev) => {
    setcolorCategoria1(ev.target.value);
  };

  const ingresoColorCategoria2 = (ev) => {
    setColorCategoria2(ev.target.value);
  };

  const ingresoWeight = (ev) => {
    setWeight(ev.target.value);
  };

  const ingresoHeight = (ev) => {
    setHeight(ev.target.value);
  };

  const ingresoMoves1 = (ev) => {
    setMoves1(ev.target.value);
  };

  const ingresoMoves2 = (ev) => {
    setMoves2(ev.target.value);
  };

  const ingresoColor = (ev) => {
    setColor(ev.target.value);
  };

  const ingresoDescripcion = (ev) => {
    setDescripcion(ev.target.value);
  };

  const ingresoHp = (ev) => {
    setHp(ev.target.value);
  };

  const ingresoAtk = (ev) => {
    setAtk(ev.target.value);
  };

  const ingresoDef = (ev) => {
    setDef(ev.target.value);
  };

  const ingresoSatk = (ev) => {
    setSatk(ev.target.value);
  };

  const ingresoSdef = (ev) => {
    setSdef(ev.target.value);
  };

  const ingresoSpd = (ev) => {
    setSpd(ev.target.value);
  };

  const token = localStorage.getItem("token");

  const agregarPokemonNuevo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1234/agregar-pokemon", {
        method: "POST",
        body: JSON.stringify({
          nombre,
          numero,
          imagen,
          categoria: [categoria1, categoria2],
          colorcategoria: [colorCategoria1, colorCategoria2],
          about: {
            weight,
            height,
            moves: [moves1, moves2],
            color,
            descripcion,
          },
          basestats: {
            hp,
            atk,
            def,
            satk,
            sdef,
            spd,
          },
        }),
        headers: { "Content-Type": "application/json", "auth-token": token },
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      handleOpen();
      if (!response.ok) {
        throw new Error("Datos ingresados incorrectamente");
      }
      const fetchResponse = await response.json();
      console.log(fetchResponse);
    } catch (error) {
      console.log("no se pudo conectar con el back end");
    }
  };

  return (
    <div className="formularioAgregarPokemon">
      <Link className="link" to="/pokemon">
        <span className="material-icons arrowBack">arrow_back</span>
      </Link>
      <form action="" className="form" onSubmit={agregarPokemonNuevo}>
        <label htmlFor="user">
          Ingrese nombre del pókemon:
          <input
            onChange={ingresoNombre}
            type="text"
            name="user"
            placeholder="Ingresar nombre"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese numero del pókemon:
          <input
            onChange={ingresoNumero}
            type="number"
            name="user"
            placeholder="Ingresar número"
            required
            min={1}
          />
        </label>
        <label htmlFor="user">
          Ingrese URL de la imagen del pokemon:
          <input
            onChange={ingresoImagen}
            type="text"
            name="user"
            placeholder="Ingresar imagen"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese la primer categoria del Pókemon:
          <input
            onChange={ingresoCategoria1}
            type="text"
            name="user"
            placeholder="Ingresar categoría"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese la segunda categoría del Pókemon:
          <input
            onChange={ingresoCategoria2}
            type="text"
            name="user"
            placeholder="Ingresar categoría"
          />
        </label>
        <label htmlFor="user">
          Ingrese el color de la primer categoría:
          <input
            onChange={ingresoColorCategoria1}
            type="text"
            name="user"
            placeholder="Ingresar color"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese el color de la segunda categoría:
          <input
            onChange={ingresoColorCategoria2}
            type="text"
            name="user"
            placeholder="Ingresar color"
          />
        </label>
        <label htmlFor="user">
          Ingrese su weight:
          <input
            onChange={ingresoWeight}
            type="text"
            name="user"
            placeholder="Ingresar peso"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese su height:
          <input
            onChange={ingresoHeight}
            type="text"
            name="user"
            placeholder="Ingresar altura"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese el primer movimiento:
          <input
            onChange={ingresoMoves1}
            type="text"
            name="user"
            placeholder="Ingresar movimiento"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese el segundo movimiento:
          <input
            onChange={ingresoMoves2}
            type="text"
            name="user"
            placeholder="Ingresar movimiento"
          />
        </label>
        <label htmlFor="user">
          Ingrese color del pókemon:
          <input
            onChange={ingresoColor}
            type="text"
            name="user"
            placeholder="Ingresar color Pokemon"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese descripción del pókemon:
          <input
            onChange={ingresoDescripcion}
            type="text"
            name="user"
            placeholder="Ingresar descripción"
            required
          />
        </label>
        <label htmlFor="user">
          Ingrese su hp:
          <input
            onChange={ingresoHp}
            type="number"
            name="user"
            placeholder="Ingresar HP"
            required
            min={1}
            max={200}
          />
        </label>
        <label htmlFor="user">
          Ingrese su atk:
          <input
            onChange={ingresoAtk}
            type="number"
            name="user"
            placeholder="Ingresar ATK"
            required
            min={1}
            max={200}
          />
        </label>
        <label htmlFor="user">
          Ingrese su def:
          <input
            onChange={ingresoDef}
            type="number"
            name="user"
            placeholder="Ingresar DEF"
            required
            min={1}
            max={200}
          />
        </label>
        <label htmlFor="user">
          Ingrese su satk:
          <input
            onChange={ingresoSatk}
            type="number"
            name="user"
            placeholder="Ingresar SATK"
            required
            min={1}
            max={200}
          />
        </label>
        <label htmlFor="user">
          Ingrese su sdef:
          <input
            onChange={ingresoSdef}
            type="number"
            name="user"
            placeholder="Ingresar SDEF"
            required
            min={1}
            max={200}
          />
        </label>
        <label htmlFor="user">
          Ingrese su spd:
          <input
            onChange={ingresoSpd}
            type="number"
            name="user"
            placeholder="Ingresar SPD"
            required
            min={1}
            max={200}
          />
        </label>
        <button className="botonAgregar">Agregar</button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" component="h2">
            <b>¡POKEMON AGREGADO CON ÉXITO!</b>
          </Typography>
          <p className="compartir-pokemon">
            <b> Compartí tu pokemon: </b>
            <a
              href={`/descripcion-pokemon/${numero}`}
            >{`http://localhost:3000/descripcion-pokemon/${numero}`}</a>
          </p>
          <Link to="/pokemon">
            <button className="boton-modal">Ir a página principal</button>
          </Link>
          <span>
            <a href="agregar-pokemon">
              <button className="boton-modal">Agregar otro pokemon</button>
            </a>
          </span>
        </Box>
      </Modal>
    </div>
  );
}

export default SignUp;
