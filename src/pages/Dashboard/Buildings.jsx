import "./index.css";
import { Link } from "react-router-dom";

const Buildings = () => {
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
            <h3 className="text-start ms-3 mt-3 text-dark">Inmuebles</h3>
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
                    <th scope="col">Inmueble</th>
                    <th scope="col">Direccion</th>
                    <th scope="col"># de departamentos</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><Link to="../Propiedades"> Insurgentes 890 </Link></th>
                    <td>Insurgentes 890, Puebla de Zaragoza, Puebla, 72492</td>
                    <td>10</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="../Propiedades"> Las rosas </Link></th>
                    <td>Calle 2 #309, Pantitlan, CDMX, México, 09848</td>
                    <td>12</td>
                    <td>
                      <i className="bi bi-check2-square" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="../Propiedades"> Condominio sinaloa </Link></th>
                    <td>Sinaloa 195. Roma Norte, CDMX, México, 09848</td>
                    <td>8</td>
                    <td>
                      <i className="bi bi-check2-square" />
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

export default Buildings;
