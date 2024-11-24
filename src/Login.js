import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css"; // Asegúrate de incluir este archivo de estilos.

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://via.placeholder.com/150"
          alt="Login"
          className="login-image"
        />
        <form onSubmit={handleLogin}>
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
