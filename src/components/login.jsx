import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    // Realizar la lógica de autenticación y establece isAdmin en true si es un administrador válido
    setIsAdmin(true);
    history.push('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
}

export default Login;