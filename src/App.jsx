import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './pages/Contato';
import Home from "./pages/Home";
import Projetos from './pages/Projetos';
import Skills from './pages/Skills';

import "./App.css"
import Sobre from './pages/Sobre';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="sobre" element={<Sobre/>} />
    <Route path="projetos" element={<Projetos/>} />
    <Route path="skills" element={<Skills/>} />
    <Route path="contato" element={<Contato/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
