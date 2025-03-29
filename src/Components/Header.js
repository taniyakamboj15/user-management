import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className='bg-white shadow-md py-4 px-6 flex justify-between items-center'>
      <div
        className='text-2xl font-bold text-stone-600 cursor-pointer font-mono'
        onClick={() => navigate(token ? "/users" : "/")}
      >
        TeamTweak
      </div>
      {token && (
        <button
          className='bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:cursor-pointer active:scale-95'
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
