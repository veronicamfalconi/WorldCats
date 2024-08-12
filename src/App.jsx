import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from "./componentes/navegador/Navegador";
import Home from "./componentes/Home/Home";
import Footer from "./componentes/footer/Footer";
import Razas from "./componentes/razas/Razas";
import ListaVeterinarios from "./componentes/Veterinarios/ListaVeterinarios";
import 'animate.css';
import React, { useEffect } from 'react';
import WOW from 'wowjs';


function App() {

  return (
    <Router>
      <div className="contenedor1">
        <p className="wow animate__animated animate__fadeIn"></p>
        <Navegador />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/razas" element={<Razas />} />
            <Route path="/veterinarios" element={<ListaVeterinarios />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
