import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Catalogo = () => <h1 className="text-center mt-5">Catálogo</h1>;
const Nosotros = () => <h1 className="text-center mt-5">Nosotros</h1>;
const Contacto = () => <h1 className="text-center mt-5">Contacto</h1>;

function App() {
  return (
    <>
      <Navbar />

      <div className="container-fluid px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;