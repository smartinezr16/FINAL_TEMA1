import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginUI from "./LoginUI";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/tasks");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const handleNavigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <LoginUI
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleLogin}
      onNavigateToSignup={handleNavigateToSignup}
    />
  );
};

export default LoginContainer;