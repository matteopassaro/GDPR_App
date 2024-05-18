import Header from "./Header";
import UserCard from "./User_Card";
import Categorie from "./Categorie";

function Sidebar() {
  return (
    <div className="w-48 fixed top-0 left-0 h-screen flex flex-col items-center bg-green-200">
      <Header />
      <div className="button-container space-y-4 flex flex-col items-center mt-20">
        <Categorie />
        <UserCard />
      </div>
    </div>
  );
}

export default Sidebar;
