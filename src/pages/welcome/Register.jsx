import './index.css';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';
import logoBamsAzul from '../../assets/logoBams_azul.svg'

const Register = () => {
  return (
   <div className="container">
  <div className="d-inline-flex flex-row justify-content-between align-items-center" id="screenSignUp">
    <div className="logo">
      <img src={Logo} alt="High_Building" className="img-fluid" />
    </div>
    <div>
      <form id="formRegister">
        <h1>Bienvenid@s <br /> a <img src={logoBamsAzul}/></h1>
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
        <Link to='../Login'className="btn btn-primary btn-lg">Register</Link> 
        <p id="footer">¿Ya estas registrado? <Link to='Login' className="text-decoration-none">inicia sesion</Link> </p>
      </form>
    </div>
  </div>
</div>
  )
}

export default Register
