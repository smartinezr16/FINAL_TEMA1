import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarUI from "./NavbarUI";

const NavbarContainer = () => {
  const [showTeam, setShowTeam] = useState(false);
  const navigate = useNavigate();

  const handleToggleTeam = () => {
    setShowTeam((prevState) => !prevState);
  };

  const handleNavigateToTasks = () => {
    navigate("/tasks");
  };

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleNavigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <NavbarUI
      onNavigateToTasks={handleNavigateToTasks}
      onNavigateToLogin={handleNavigateToLogin}
      onNavigateToSignup={handleNavigateToSignup}
      onToggleTeam={handleToggleTeam}
      showTeam={showTeam}
    />
  );
};

export default NavbarContainer;