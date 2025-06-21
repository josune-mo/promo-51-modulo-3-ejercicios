import './styles/App.scss'
import callToApi from './services/api'
import React, { useEffect, useState } from 'react'
import SeriesList from './components/SeriesList'

function App() {

const[series, setSeries] = useState([]);
const [search, setSearch] = useState("");

useEffect(() => {
 callToApi().then(data => {
   setSeries(data);
   console.log(data);
 } )

}, [])


const handleChange = (ev) => {
    setSearch(ev.target.value);

  }

  return (
    <>
      <h1>Buscador de series</h1>
      <label htmlFor="search">Buscar serie</label>
      <input
        type="text"
        placeholder='Busca tu serie'
        value={search}
        onChange={handleChange}
        id="search"
        name='search'

        ></input>

        <SeriesList series={series} />
      
    </>
  )
}

export default App;
