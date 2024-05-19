import React, { useState } from "react";
import Login from "./Components/MainComponents/Login";
import Registrazione from "./Components/MainComponents/Registrazione";

const Autenticazione: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");

  function switchToRegister() {
    setActiveTab("register");
    console.log("register");
  }

  function switchToLogin() {
    setActiveTab("login");
    console.log("login");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-6 text-center"></div>
      <div className="flex justify-center">
        {activeTab === "login" ? (
          <Login switchToRegister={switchToRegister} />
        ) : (
          <Registrazione switchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
};

export default Autenticazione;
