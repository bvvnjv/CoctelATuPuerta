import "./Home.css";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <div className="container-fluid px-0 text-center text-white">
            <h1 className="titulo">CoctelATuPuerta</h1>
            <p className="subtitulo">
              Los mejores cócteles directo a tu casa
            </p>

            <button className="btn btn-warning mt-3">
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>

      {/* MÁS VENDIDOS */}
      <section className="mas-vendidos">
        <div className="container-fluid px-0 text-center">
          <h2 className="text-center mb-5">Más vendidos</h2>

          <div className="row">
            {[1, 2, 3].map((item) => (
              <div className="col-md-4 mb-4" key={item}>
                <div className="card producto-card">
                  {/* IMAGEN */}
                  <div className="img-placeholder">
                    {/* REEMPLAZAR */}
                    Imagen del producto
                  </div>

                  <div className="card-body text-center">
                    <h5>Nombre Cóctel</h5>
                    <p>$5.990</p>
                    <button className="btn btn-warning">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;