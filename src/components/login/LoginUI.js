import React from "react";
import "../Login.css";

const LoginUI = ({ email, password, onEmailChange, onPasswordChange, onSubmit, onNavigateToSignup }) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="/checklist_small.png"
          alt="Login"
          className="login-image"
        />
        <form onSubmit={onSubmit}>
          <h2>Inicia Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={onEmailChange}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={onPasswordChange}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        <p onClick={onNavigateToSignup} className="toggle-auth">
          ¿No tienes cuenta? Regístrate
        </p>
      </div>
    </div>
  );
};

export default LoginUI;