import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger" | "success";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <Link to="/Autenticazione">
      <button
        className="transition-all duration-100 w-36 py-1 item-center bg-green-600 text-black rounded-full transition-background hover:bg-green-700"
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
