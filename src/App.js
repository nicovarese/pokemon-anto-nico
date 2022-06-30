import "./App.css";
import ListaPokemon from "./Pages/lista-pokemon";
import DescripcionPokemon from "./Pages/descripcion-pokemon";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const lista = [
    {
      nombre: "Bulbasaur",
      numero: "#001",
      categoria: ["Grass", "Poison"],
      colorcategoria: ["#74cb48", "#a43e9e"],
      about: {
        weight: "6,9kg",
        height: "0,7m",
        moves: ["Chlorophyll", "Overgrow"],
        color: "#74cb48",
        descripcion:
          "There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger",
      },
      basestats: {
        hp: "045",
        atk: "049",
        def: "049",
        satk: "065",
        sdef: "065",
        spd: "045",
      },
    },
    {
      nombre: "Charmander",
      numero: "#004",
      imagen: "imagen",
      categoria: ["Fire"],
      colorcategoria: ["#f57d31"],
      about: {
        weight: "8,5kg",
        height: "0,6m",
        moves: ["Mega-Punch", "Fire-Punch"],
        color: "#f57d31",
        descripcion:
          "It has a preference for hot things. When it rains, steam is said to spaut from the tip of its tail",
      },
      basestats: {
        hp: "039",
        atk: "052",
        def: "043",
        satk: "060",
        sdef: "050",
        spd: "065",
      },
    },
    {
      nombre: "Squirtle",
      numero: "#007",
      imagen: "imagen",
      categoria: ["Water"],
      colorcategoria: ["#6493eb"],
      about: {
        weight: "9,0kg",
        height: "0,5m",
        moves: ["Torrent", "Rain-Dish"],
        color: "#6493eb",
        descripcion:
          "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      },
      basestats: {
        hp: "044",
        atk: "048",
        def: "065",
        satk: "050",
        sdef: "064",
        spd: "043",
      },
    },
    {
      nombre: "Butterfree",
      numero: "#012",
      imagen: "imagen",
      categoria: ["Bug", "Flying"],
      colorcategoria: ["#a7b723", "#a891ec"],
      about: {
        weight: "32kg",
        height: "1,1m",
        moves: ["Compound-Eyes", "Tinted-Lens"],
        color: "#a78723",
        descripcion:
          "In battle, it flaps at great speed to release highly toxic dust into the air",
      },
      basestats: {
        hp: "060",
        atk: "045",
        def: "050",
        satk: "090",
        sdef: "080",
        spd: "070",
      },
    },
    {
      nombre: "Pikachu",
      numero: "#025",
      imagen: "imagen",
      categoria: ["Electric"],
      colorcategoria: ["#f9cf30"],
      about: {
        weight: "6,0kg",
        height: "0,4m",
        moves: ["Mega-Punch", "Pay-Day"],
        color: "#f9cf30",
        descripcion:
          "Pikachu that can  generate powerful  electricity have cheek sacs that are extra soft and super stretchy.",
      },
      basestats: {
        hp: "035",
        atk: "055",
        def: "040",
        satk: "050",
        sdef: "050",
        spd: "090",
      },
    },
    {
      nombre: "Gastly",
      numero: "#092",
      imagen: "imagen",
      categoria: ["Ghost", "Type"],
      colorcategoria: ["#70559d", "#666666"],
      about: {
        weight: "0,1kg",
        height: "1,3m",
        moves: ["Levitate"],
        color: "#70559b",
        descripcion:
          "Born from gases, anyone would faint if engulfed by its gaseous body, wich contains poison.",
      },
      basestats: {
        hp: "030",
        atk: "035",
        def: "030",
        satk: "100",
        sdef: "035",
        spd: "085",
      },
    },
    {
      nombre: "Ditto",
      numero: "#132",
      imagen: "imagen",
      categoria: ["Normal"],
      colorcategoria: ["#aaa67f"],
      about: {
        weight: "4kg",
        height: "0,3m",
        moves: ["Limber", "Imposter"],
        color: "#aaa67f",
        descripcion:
          "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes",
      },
      basestats: {
        hp: "048",
        atk: "048",
        def: "048",
        satk: "048",
        sdef: "048",
        spd: "048",
      },
    },
    {
      nombre: "Mew",
      numero: "#152",
      imagen: "imagen",
      categoria: ["Psychic"],
      colorcategoria: ["#fb5584"],
      about: {
        weight: "4,0kg",
        height: "0,4m",
        moves: ["Synchronize"],
        color: "#fb5584",
        descripcion:
          "When viewed through a microscope, this Pokemon's short, fine, delicate hair can be seen.",
      },
      basestats: {
        hp: "100",
        atk: "100",
        def: "100",
        satk: "100",
        sdef: "100",
        spd: "100",
      },
    },
    {
      nombre: "Aron",
      numero: "#304",
      imagen: "imagen",
      categoria: ["Steel", "Rock"],
      colorcategoria: ["#b789d0", "#b69e31"],
      about: {
        weight: "60kg",
        height: "0,4m",
        moves: ["Sturdy", "Rock-Head"],
        color: "#b789d0",
        descripcion:
          "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
      },
      basestats: {
        hp: "050",
        atk: "070",
        def: "100",
        satk: "040",
        sdef: "040",
        spd: "030",
      },
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaPokemon lista={lista} />} />
        <Route
          path="/descripcion-pokemon/:nombre"
          element={<DescripcionPokemon lista={lista} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
