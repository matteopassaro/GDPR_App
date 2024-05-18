import Strategie from "./Strategie";
import Header from "./Header";
import Vulnerability from "./Vulnerability";
import Fasi from "./Fasi";
import Articoli from "./Articoli";
import MCV from "./MCV";
import UserCard from "./User_Card";

function Sidebar() {
  return (
    <div className="w-48 fixed top-0 left-0 h-screen flex flex-col items-center bg-green-200">
      <Header />
      <div className="button-container space-y-4 flex flex-col items-center mt-20">
        <Strategie />
        <Vulnerability />
        <Fasi />
        <Articoli />
        <MCV />
        <UserCard />
      </div>
    </div>
  );
}

export default Sidebar;
