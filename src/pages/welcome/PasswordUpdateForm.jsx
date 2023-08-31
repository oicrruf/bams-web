import {Link} from 'react-router-dom'

const PasswordUpdateForm = () => {
  return (
    <>
        <div className="container">
        <div className="col-12 col-md-6 col-lg-12 col-xl-12">
        <form id="formPasswordReset">
        <h1><b>BAMS</b></h1>
        <p>Crear nueva contraseña</p>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">Nueva contraseña</label>
          <input type="email" className="form-control" id="inputMail" placeholder="Ingresa tu nueva contraseña" />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordConfirmation" className="form-label">Confirma contraseña</label>
          <input type="email" className="form-control" id="inputMail" placeholder="Confirma tu nueva contraseña" />
        </div>
        <Link to='../Login' className="button my-3">Aceptar</Link> 
        {/* <button type="submit" className="btn btn-primary btn-lg">Registrar</button> */}
        <p id="footer" className='mt-3'>¿Ya estas registrado? <Link to ='../Login' className="text-decoration-none">inicia sesion</Link> </p>
        </form>
        </div>
        </div>
    </>
  )
}

export default PasswordUpdateForm