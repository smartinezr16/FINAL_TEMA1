// src/components/Signup.js
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/tasks");
    } catch (error) {
      console.error("Error al registrarse:", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <img
          src="/checklist_small.png" 
          alt="Login"
          className="login-image"
        />
        <form onSubmit={handleSignup}>
          <h2>Regístrate</h2>
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
            Registrarse
          </button>
        </form>
        <p
          onClick={() => navigate("/login")}
          className="toggle-auth"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </p>
      </div>
    </div>
  );
};

export default Signup;
