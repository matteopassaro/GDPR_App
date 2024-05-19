import Header from "./Header";
import UserCard from "./User_Card";
import Categorie from "./Categorie";
import Button from "./Button";

function Sidebar() {
  return (
    <div className="w-48 fixed left-0 h-screen flex flex-col items-center justify-normal bg-green-200">
      <Header />
      <div className="button-container space-y-4 flex flex-col items-center mt-20">
        <Categorie />
      </div>
      <div className="mt-auto mb-3">
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Sidebar;
