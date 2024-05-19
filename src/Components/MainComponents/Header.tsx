import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full">
      <div className="fixed w-48 px-4 py-4 text-lg font-semibold bg-green-600 rounded-b-xl shadow-lg flex items-center justify-center">
        <Link to="/Homepage">
          <h1>PrivacyPatterns</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
