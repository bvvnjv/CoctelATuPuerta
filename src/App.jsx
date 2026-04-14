import React from 'react';
import { menuData } from './data';
import './App.css';

function App() {
  return (
    <div className="position-relative min-vh-100">
      {/* FONDO FIJO */}
      <div className="bg-overlay"></div>

      {/* CABECERA (HERO) */}
      <header className="py-5 bg-dark bg-opacity-75 text-center border-bottom border-warning border-4">
        <div className="container">
          <img 
            src="/CATP_TIPO.png" 
            alt="Cóctel a tu puerta" 
            className="img-fluid" 
            style={{ maxWidth: '350px' }} 
          />
        </div>
      </header>

      {/* SECCIÓN INTRODUCCIÓN Y BOTÓN PDF */}
      <section className="py-5 text-center shadow-sm" style={{ backgroundColor: 'rgba(241, 233, 220, 0.95)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="fw-bold mb-3 text-uppercase text-dark">
            Llevamos el sabor a tu mesa
          </h2>
          <p className="fs-5 text-secondary mb-4 px-md-4">
            En <strong>Cóctel a tu puerta</strong>, nos apasiona hacer de tus celebraciones un momento inolvidable. 
            Elaboramos productos de banquetería y coctelería con ingredientes seleccionados, gran dedicación y el mejor sabor. 
            Explora nuestra selección a continuación o descarga nuestro catálogo completo para tenerlo a mano.
          </p>
          
          <a 
            href="/Catalogo_de_productos.pdf" 
            download="Catalogo_Coctel_a_tu_puerta.pdf" 
            className="btn btn-orange btn-lg shadow rounded-pill px-4"
          >
            <i className="bi bi-file-earmark-pdf-fill me-2"></i>
            Descargar Catálogo PDF
          </a>
        </div>
      </section>

      {/* SECCIÓN MENÚ CON PLACEHOLDER DE BOOTSTRAP ICONS */}
      <main className="container py-5">
        {menuData.map((category, index) => (
          <div className="mb-5" key={index}>
            
            {/* Título de categoría */}
            <div className="text-center mb-4">
              <h2 className="fw-bold text-uppercase px-4 py-2 rounded-pill shadow-sm d-inline-block" style={{ backgroundColor: 'rgba(241, 233, 220, 0.9)' }}>
                <span className="text-orange">//</span> {category.category} <span className="text-orange">//</span>
              </h2>
            </div>
            
            <div className="row g-4">
              {category.items.map((item, idx) => (
                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                  <div className="card h-100 product-card shadow-sm border-0 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                    
                    {/* === NUEVO PLACEHOLDER CON ICONO === */}
                    <div 
                      className="d-flex flex-column justify-content-center align-items-center" 
                      style={{ height: '200px', backgroundColor: '#f1e9dc' }}
                    >
                      <i className="bi bi-camera text-orange opacity-75" style={{ fontSize: '3rem' }}></i>
                      <span className="text-orange fw-bold opacity-75 mt-2" style={{ letterSpacing: '1px' }}>
                        FOTO PRONTO
                      </span>
                    </div>
                    {/* =================================== */}

                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-0">{item.name}</h5>
                        <span className="fs-5 fw-bold text-orange">{item.price}</span>
                      </div>
                      <h6 className="card-subtitle mb-3 text-muted border-bottom pb-2">
                        {item.qty}
                      </h6>
                      <p className="card-text text-secondary mb-0 flex-grow-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* SECCIÓN DE CONTACTO */}
      <section className="py-5 border-top border-warning border-4 shadow-lg" style={{ backgroundColor: 'rgba(241, 233, 220, 0.95)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 mb-4 mb-md-0">
              <h2 className="fw-bold mb-4">Contáctanos</h2>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <i className="bi bi-envelope-fill text-orange me-3 fs-4"></i>
                  <strong>Email:</strong> todococtelatupuerta@gmail.com
                </li>
                <li className="mb-3">
                  <i className="bi bi-whatsapp text-orange me-3 fs-4"></i>
                  <strong>WhatsApp:</strong> +56 9 8484 3403
                </li>
                <li className="mb-3">
                  <i className="bi bi-instagram text-orange me-3 fs-4"></i>
                  <strong>Instagram:</strong> Proximamente...
                </li>
                <li className="mb-3">
                  <i className="bi bi-geo-alt-fill text-orange me-3 fs-4"></i>
                  <strong>Ubicación:</strong> Santiago, Chile
                </li>
                <li className="mb-3">
                  <i className="bi bi-truck text-orange me-3 fs-4"></i>
                  <strong>Zonas de Despacho:</strong> Todas las comunas de Santiago
                </li>
              </ul>
            </div>
            
            <div className="col-md-4 text-center">
              <img 
                src="/Foto_perfil.png" 
                alt="Logo Circular" 
                className="img-fluid rounded-circle shadow-lg" 
                style={{ maxWidth: '250px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="text-center py-4 text-white" style={{ backgroundColor: '#f69500' }}>
        <p className="mb-0 fw-bold fs-5">¡Llevamos el sabor directamente a tu celebración!</p>
      </footer>
    </div>
  );
}

export default App;