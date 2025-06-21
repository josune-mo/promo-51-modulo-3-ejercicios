import { Routes, Route, Link, NavLink } from 'react-router'
import './styles/App.scss';
import Overview from './components/Overview';
import Repositories from './components/Repositories';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route index path="/" element={<h1>Home</h1>}/>
      <Route path="/overview" element={<Overview/>}/>
      <Route path="/repositories" element={<Repositories/>}/>
      <Route path="/packages" element={<h1>Packages</h1>}/>
      <Route path="/people" element={<h1>People</h1>}/>
      <Route path="/teams" element={<h1>Teams</h1>}/>
      <Route path="/projects" element={<h1>Projects</h1>}/>
      <Route path="/settings" element={<h1>Settings</h1>}/>
      <Route path='*' element={<h2>Página no encontrada</h2>}/>
    </Routes>
    </>
  )
}

export default App
