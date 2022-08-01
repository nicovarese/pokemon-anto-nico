import "./App.css";
import ListaPokemon from "./Pages/lista-pokemon";
import DescripcionPokemon from "./Pages/descripcion-pokemon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPpal from "./Components/Página-Principal/PaginaPpal";
import SignUp from "./Components/SignUp/SignUp";
import AgregarPokemon from "./Components/AgregarPokemon/AgregarPokemon";
import Error404 from "./Components/Error404/Error404";

function App() {
  return (
    ///Acá pusimos los routes, el path es la ruta que se verá en el URL,
    ///y el elemento sería la página que trabajamos como componente, con su/sus props(propiedades correspondientes)
    <BrowserRouter>
      <Routes>
        <Route path="404-not-found" element={<Error404 />} />
        <Route path="/agregar-pokemon" element={<AgregarPokemon />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<PaginaPpal />} />
        <Route path="/pokemon" element={<ListaPokemon />} />
        <Route
          path="/descripcion-pokemon/:id"
          element={<DescripcionPokemon />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
