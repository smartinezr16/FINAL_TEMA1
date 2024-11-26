// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Tasks from "./components/task/Tasks"; // Página principal después de iniciar sesión
import Navbar from "./components/navbar/Navbar"; // Menú superior

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
