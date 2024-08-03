import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegador from "./componentes/navegador/Navegador";
import Home from "./componentes/Home/Home";
import Footer from "./componentes/footer/Footer";
import Razas from "./componentes/razas/Razas";

function App() {
  return (
    <Router>
      <div className="contenedor1">
        <Navegador />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/razas" element={<Razas />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
