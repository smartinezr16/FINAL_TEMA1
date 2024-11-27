// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/LoginLogic";
import Signup from "./components/signup/SignupLogic";
import Tasks from "./components/task/TaskLogic"; // Página principal después de iniciar sesión
import Navbar from "./components/navbar/NavbarLogic"; // Menú superior

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
