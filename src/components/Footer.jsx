const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f1e9dc",
        fontFamily: "Lexend, sans-serif",
        paddingTop: "40px",
      }}
    >
      <div className="container py-4">
        <div className="row text-center text-md-start">
          
          {/* LOGO / MARCA */}
          <div className="col-md-4 mb-3">
            {/* REEMPLAZAR CON TU IMAGEN */}
            <img
              src="/ruta-de-tu-logo.png"
              alt="Logo"
              style={{ width: "60px", marginBottom: "10px" }}
            />
            <h5>CoctelATuPuerta</h5>
            <p>Los mejores cócteles directo a tu casa</p>
          </div>

          {/* LINKS */}
          <div className="col-md-4 mb-3">
            <h6>Navegación</h6>
            <ul className="list-unstyled">
              <li>Inicio</li>
              <li>Catálogo</li>
              <li>Nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="col-md-4 mb-3">
            <h6>Contacto</h6>
            <p>Email: contacto@coctelapuerta.cl</p>
            <p>Tel: +56 9 1234 5678</p>
          </div>
        </div>

        <hr />

        <div className="text-center">
          <small>© 2026 CoctelATuPuerta - Todos los derechos reservados</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;