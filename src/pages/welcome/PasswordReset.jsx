import { Link } from "react-router-dom"

const PasswordReset = () => {
  return (
    <>
        <div className="container">
        <div className="col-12 col-md-6 col-lg-12 col-xl-12">
        <form id="formPasswordReset">
        <h1><b>BAMS</b></h1>
        <p>Ingresa tu correo de usuario para restaurar tu contraseña</p>
        <div className="mb-3">
          <label htmlFor="inputMail" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="inputMail" placeholder="Ingresa tu correo electrónico" />
        </div>
        <Link to='../password-update' className="button my-3">Recuperar contraseña</Link> 
        {/* <button type="submit" className="btn btn-primary btn-lg">Registrar</button> */}
        <p id="footer" className="mt-3">¿Ya estas registrado? <Link to ='../Login' className="text-decoration-none">inicia sesion</Link> </p>
        </form>
        </div>
        </div>
    </>
  )
}

export default PasswordReset