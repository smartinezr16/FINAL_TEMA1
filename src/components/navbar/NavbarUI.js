import React from "react";
import "./Navbar.css";

const NavbarUI = ({ onNavigateToTasks, onNavigateToLogin, onNavigateToSignup, onToggleTeam, showTeam }) => {
  return (
    <nav className="navbar">
      <h1 onClick={onNavigateToTasks} className="navbar-title">
        Tareas App - Tema 1
      </h1>

      <div className="navbar-links">
        <button onClick={onNavigateToLogin} className="navbar-button">
          Login
        </button>
        <button onClick={onNavigateToSignup} className="navbar-button">
          Signup
        </button>
        <button onClick={onToggleTeam} className="navbar-button">
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

export default NavbarUI;