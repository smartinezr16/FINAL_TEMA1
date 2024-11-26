// src/components/Navbar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import "./Navbar.css";

const Navbar = () => {
  const [showTeam, setShowTeam] = useState(false); // Estado para mostrar los nombres del equipo
  const navigate = useNavigate();

  const toggleTeam = () => {
    setShowTeam(!showTeam); // Cambiar el estado de showTeam al hacer clic
  };


  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/tasks")} className="navbar-title">
        Tareas App - Tema 1
      </h1>

      <div className="navbar-links">
        <button onClick={() => navigate("/login")} className="navbar-button">
          Login
        </button>
        <button onClick={() => navigate("/signup")} className="navbar-button">
          Signup
        </button>

        <button onClick={toggleTeam} className="navbar-button">
          Nuestro Equipo
        </button>

      </div>


      {showTeam && (
        <div className="team-members">
          <ul>
            <li>Santiago Martínez Rodríguez CODIGO: 0000293970</li>
            <li>Esteban Hernández CODIGO: 0000307597</li>
            <li>Juan Manuel Deutsch CODIGO: 0000242530</li>
          </ul>
        </div>
      )}



    </nav>
  );
};

export default Navbar;
