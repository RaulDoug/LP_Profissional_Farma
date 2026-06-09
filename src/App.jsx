import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Medicamentos from './pages/Medicamentos/Medicamentos';
import Ofertas from './pages/Ofertas/Ofertas';
import AboutSubPage from './pages/AboutPage/AboutSubPage';
import ContatoPage from './pages/contato/ContatoPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Medicamentos />} />
        <Route path='/ofertas' element={<Ofertas />} />
        <Route path='/sobre' element={<AboutSubPage />} />
        <Route path='/contato' element={<ContatoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
