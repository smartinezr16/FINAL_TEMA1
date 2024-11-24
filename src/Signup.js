import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css"; // Usa los mismos estilos que el login.

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado exitosamente");
    } catch (error) {
      alert("Error al registrarse: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSignup}>
          <h2>Registro</h2>
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
      </div>
    </div>
  );
};

export default Signup;
