import Sidebar from "./Components/MainComponents/Sidebar";
import PatternsPage from "./Components/MainComponents/PatternsPage";

function Homepage() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-grow p-4 ml-48 custom-scrollbar overflow-y-auto">
        <PatternsPage />
      </div>
    </div>
  );
}

export default Homepage;
