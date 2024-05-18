import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Sidebar from "./Components/MainComponents/Sidebar";
import Footer from "./Components/MainComponents/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
