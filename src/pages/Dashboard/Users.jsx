import "./index.css";
import { Link } from "react-router-dom";

const Users = () => {
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
                href="#"
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
            <div
              className="d-flex flex-column justify-content-center align-items-center shadow p-3 mb-5 bg-body-tertiary rounded"
              style={{ width: "96%", height: "80%", margin: "2%" }}
            >
              <h4>Registrar nuevo usuario</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="InputNameBuild" className="form-label">
                    Nombre (s)
                  </label>
                  <input
                    type="name"
                    className="form-control bg-body-secondary"
                    id="InputNamebuild"
                    placeholder="Ingresa el nombre"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputAdress" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="name"
                    className="form-control bg-body-secondary"
                    id="InputAdress"
                    placeholder="Ingresa el teléfono"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputCity" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="name"
                    className="form-control bg-body-secondary"
                    id="InputCity"
                    placeholder="Ingresa el correo electrónico"
                  />
                </div>
                <div className="d-flex flex-row ">
                <Link to="../Dashboard" className="btn btn-outline-primary mx-auto">
                  Cancelar
                </Link>
                <Link to="../Dashboard" className="btn btn-primary mx-auto">
                  Crear Usuario
                </Link>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
