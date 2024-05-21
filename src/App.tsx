import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import React from "react";
import Autenticazione from "./Autenticazione";
import PrinciplePage from "./Components/MainComponents/PrinciplePage";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Autenticazione" element={<Autenticazione />} />
          <Route path="/TestRoute" element={<PrinciplePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
