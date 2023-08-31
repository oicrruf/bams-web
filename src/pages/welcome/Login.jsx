
import './index.css';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
   <div className="container">

  <div className="d-inline-flex flex-row justify-content-between align-items-center" id="screenLogin">
    <div className="logo">
      <img src={Logo} alt="High_Building" className="img-fluid" />
    </div>
    <div>
      <form id="formLogin">
        <h1>Bienvenid@s <br /> a BAMS</h1>
        <p>Inicia sesión con tu usuario y tu contraseña</p>
        <div className="mb-3">
          <label htmlFor="inputMail" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="inputMail" placeholder="Ingresa tu correo electrónico" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="inputPassword" placeholder="Ingresa tu contraseña" />
        </div>
        <Link to='/login'>Iniciar sesión</Link> 
        {/* <button type="submit" className="btn btn-primary btn-lg">Iniciar sesión</button> */}
        <p id="footer">¿Olvidaste tu contraseña? <Link to='../password-reset' className="text-decoration-none">Recuperarla</Link> </p>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login
