import React from 'react';
import './index.css';
import Logo from './Logo.png';

const index = () => {
  return (
   <div className="container" /*style={{height: '100vh'}}8*/>
  <div id="screenInit">
    <form id="formOne">
      <h1>Bienvenid@s <br /> a BAMS</h1>
      <p>¿Eres administrador de un condominio?
        <br />
        Regístrate y mantén en orden las cuotas.</p>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Nombre(s)</label>
        <input type="input" className="form-control" id="inputName" placeholder="Ingresa tu nombre" />
      </div>
      <div className="mb-3">
        <label htmlFor="inputLastName" className="form-label">Apellidos</label>
        <input type="input" className="form-control" id="inputLastName" placeholder="Ingresa tus apellidos" />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPhoneNumber" className="form-label">Telefono</label>
        <input type="telephone" className="form-control" id="inputPhoneNumber" placeholder="Ingresa tu telefono" />
      </div>
      <div className="mb-3">
        <label htmlFor="inputBirthday" className="form-label">Fecha de nacimiento</label>
        <input type="date" className="form-control" id="inputBirthday" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">Continuar</button>
      <p id="footer">¿Ya estas registrado? <a href="#screenLogin" className="text-decoration-none">inicia sesion</a> </p>
    </form>
  </div>
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
        <button type="submit" className="btn btn-primary btn-lg">Registrar</button>
        <p id="footer">¿Ya estas registrado? <a href="#screenLogin" className="text-decoration-none">inicia sesion</a> </p>
      </form>
    </div>
  </div>
  <div className="d-inline-flex flex-row justify-content-center align-items-center" id="screenLogin">
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
        <button type="submit" className="btn btn-primary btn-lg">Iniciar sesión</button>
        <p id="footer">¿Olvidaste tu contraseña? <a href="#formOne" className="text-decoration-none">Recuperarla</a> </p>
      </form>
    </div>
  </div>
</div>
  )
}

export default index
