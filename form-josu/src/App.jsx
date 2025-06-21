import "./styles/App.scss";
import React from "react";
import { useState } from "react";
import Galeria from "./components/Galeria.jsx";
import data from "./data/galeria.json";

function App() {
  const [galeria, setGaleria] = useState(data);
  const [valueSearch, setValueSearch] = useState("");
  const handleChangeSearch = (ev) => {
    setValueSearch(ev.target.value);
  };
  const filterFotos = galeria.filter(foto => foto.title.toLowerCase().includes(valueSearch.toLowerCase()));

  return (
    <>
      <h1>Galería</h1>
      <input
        type="text"
        placeholder="Buscar foto"
        id="search"
        value={valueSearch}
        onChange={handleChangeSearch}
      />
      <Galeria fotos={filterFotos}></Galeria>
    </>
  );
}

export default App;
