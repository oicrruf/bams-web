import './index.css';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
   <div className="container" /*style={{height: '100vh'}}8*/>
  
  <div className="d-inline-flex flex-row justify-content-center align-items-center" id="screenSignUp">
    <div className="logo">
      <img src={Logo} alt="High_Building" className="img-fluid" />
    </div>
    <div>
      <form id="formTwo">
        <h1>Bienvenid@s <br /> a BAMS</h1>
        <p>¿Eres administrador de un condominio?
          <br />
          Regístrate y mantén en orden las cuotas.</p>
        <div className="mb-3">
          <label htmlFor="inputMail" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="inputMail" placeholder="Ingresa tu correo electrónico" />
          <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="inputPassword" placeholder="Ingresa tu contraseña" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputVerifyPassword" className="form-label">Confirma tu contraseña</label>
          <input type="password" className="form-control" id="inputVerifyPassword" placeholder="Ingresa tu contraseña" />
        </div>
        <Link to='login'>Register</Link> 
        {/* <button type="submit" className="btn btn-primary btn-lg">Registrar</button> */}
        <p id="footer">¿Ya estas registrado? <a href="#screenLogin" className="text-decoration-none">inicia sesion</a> </p>
      </form>
    </div>
  </div>
 
</div>
  )
}

export default Register
