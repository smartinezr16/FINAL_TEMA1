import React from "react";
import "../Login.css";

const SignupUI = ({ email, password, onEmailChange, onPasswordChange, onSubmit, onNavigateToLogin }) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="/checklist_small.png"
          alt="Login"
          className="login-image"
        />
        <form onSubmit={onSubmit}>
          <h2>Regístrate</h2>
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
            Registrarse
          </button>
        </form>
        <p onClick={onNavigateToLogin} className="toggle-auth">
          ¿Ya tienes cuenta? Inicia sesión
        </p>
      </div>
    </div>
  );
};

export default SignupUI;