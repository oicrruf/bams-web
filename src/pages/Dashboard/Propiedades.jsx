import "./index.css";
import { Link } from "react-router-dom";

const Propiedades = () => {
  return (
    <>
      <div>
        {/*Barra de navegacion superior*/}
        <nav className="navbar bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              BAMS
            </a>
            <div className="d-flex flex-row justify-content-center align-items-center text-light">
              <p className="mb-0 pe-2 text-light">
                Jaqueline flores <br /> Administrador
              </p>

              <Link to="../Login">
                <i className="bi bi-person-circle text-light fs-2 d-inline-block align-text-top"></i>
              </Link>
            </div>
          </div>
        </nav>
        {/* Visualizador de contenido */}
        <div className="contentViewer d-flex ">
          {/*Barra de navegacion lateral*/}
          <div
            className="d-flex justify-content-center"
            style={{ width: "18%", height: "100vh", paddingTop: "2%" }}
          >
            <nav className="nav flex-column">
              <Link
                to="../Dashboard"
                className="nav-link text-dark icon-link icon-link-hover "
                style={{ bsIconLinkTransform: "translate3d(0, -.125rem, 0)" }}
              >
                <i
                  className="bi bi-speedometer2 fs-2 text-primary d-flex justify-content-center"
                  style={{ paddingRight: "10px" }}
                />
                Dashboard
              </Link>
              <Link
                to="../Buildings"
                className="nav-link text-dark icon-link icon-link-hover"
                style={{ bsIconLinkTransform: "translate3d(0, -.125rem, 0)" }}
              >
                <i
                  className="bi bi-building fs-2 text-primary d-flex justify-content-center"
                  style={{ paddingRight: "10px" }}
                />
                Inmuebles
              </Link>
              <Link
                to="../Users"
                className="nav-link text-dark icon-link icon-link-hover"
                style={{ bsIconLinkTransform: "translate3d(0, -.125rem, 0)" }}
              >
                <i
                  className="bi bi-person fs-2 text-primary d-flex justify-content-center"
                  style={{ paddingRight: "10px" }}
                />
                Usuarios
              </Link>
              <Link
                to="../"
                className="nav-link text-dark icon-link icon-link-hover"
                style={{ bsIconLinkTransform: "translate3d(0, -.125rem, 0)" }}
              >
                <i
                  className="bi bi-box-arrow-right fs-2 text-primary d-flex justify-content-center"
                  style={{ paddingRight: "10px" }}
                />
                Cerrar sesión
              </Link>
            </nav>
          </div>
          {/*Area de visualizacion*/}
          <div
            className="bg-body-secondary d-flex flex-column"
            style={{ width: "100%" }}
          >
            <h3 className="text-start ms-3 mt-3 text-dark">Pago de mantenimiento</h3>
            {/* Contenedor de app */}
            <div
              className="d-flex flex-column shadow p-3 mb-5 bg-body-tertiary rounded"
              style={{ width: "96%", height: "80%", margin: "2%" }}
            >
              {/* Barra de navegacion del contenido */}
              <div className="navbarContent d-flex flex-row  align-items-center w-100">
                <div className="form form-control d-flex flex-row justify-content-center align-items-center">
                  <i className="bi bi-search me-2" />
                  <input
                    type="text"
                    className="form-control form-input border-0"
                    placeholder="Search anything..."
                  />
                  <span className="left-pan">
                    <i className="fa fa-microphone" />
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary mx-2 d-flex flex-row"
                >
                  <i className="bi bi-search me-2 text-primary" />
                  Buscar
                </button>
                <Link to="../AddBuild" className="btn btn-primary">
                  + Agregar inmueble
                </Link>
              </div>
              {/* Tabla de datos */}
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Departamento</th>
                    <th scope="col">Adeudos anteriores</th>
                    <th scope="col">Cuota extraordinaria</th>
                    <th scope="col">Pago mantenimiento</th>
                    <th scope="col">Total de adeudo</th>
                    <th scope="col">Pagos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">101</th>
                    <td>AL CORRIENTE</td>
                    <td> - </td>
                    <td>$ 400</td>
                    <td>$ 0</td>
                    <td>
                    <Link to="/PagoBill">
                      <i className="bi bi-check2-square" />
                    </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">102</th>
                    <td>AL CORRIENTE</td>
                    <td> - </td>
                    <td>$ 400</td>
                    <td>$ 0</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">201</th>
                    <td>Adeudo $1000</td>
                    <td> - </td>
                    <td>$ 0 </td> 
                    <td>$ 1400</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">202</th>
                    <td>AL CORRIENTE</td>
                    <td> - </td>
                    <td>$ 400</td>
                    <td>$ 0</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">301</th>
                    <td>AL CORRIENTE</td>
                    <td> - </td>
                    <td>$ 400</td>
                    <td>$ 0</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">302</th>
                    <td>AL CORRIENTE</td>
                    <td> - </td>
                    <td>$ 400</td>
                    <td>$ 0</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">401</th>
                    <td>AL CORRIENTE</td>
                    <td> - </td>
                    <td>$ 400</td>
                    <td>$ 0</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">402</th>
                    <td>AL CORRIENTE</td>
                    <td> - </td>
                    <td>$ 400</td>
                    <td>$ 0</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr className="table-primary">
                    <th scope="row">Total</th>
                    <td> - </td>
                    <td>  </td>
                    <td> $ 2800</td>
                    <td> $ 1400</td>
                    <td>
                      <i className="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Propiedades;
