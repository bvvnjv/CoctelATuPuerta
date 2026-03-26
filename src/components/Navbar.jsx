import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#f69500" }}
    >
      <div className="container">
        {/* LOGO + NOMBRE */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/* REEMPLAZAR CON TU IMAGEN */}
          <img
            src="/ruta-de-tu-logo.png"
            alt="Logo CoctelATuPuerta"
            style={{ width: "40px", marginRight: "10px" }}
          />

          <span style={{ fontFamily: "Lexend, sans-serif", color: "#fff" }}>
            CoctelATuPuerta
          </span>
        </Link>

        {/* BOTON MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/catalogo">
                Catálogo
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/nosotros">
                Nosotros
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;