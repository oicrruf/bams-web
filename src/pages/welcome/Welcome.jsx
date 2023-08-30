import React from 'react';
import './index.css';
import Logo from './Logo.png';

import { Link } from 'react-router-dom';

const Welcome = () => {
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
      <Link to='register' className="btn btn-primary btn-lg">Continuar</Link>
      <p id="footer">¿Ya estas registrado? <a href="#screenLogin" className="text-decoration-none">inicia sesion</a> </p>
    </form>
  </div>

</div>
  )
}

export default Welcome
