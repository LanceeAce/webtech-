import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from "../assets/logo.png";


const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false); 
    setIsOpen(false); 
    navigate('/');
  };

  return (
    <header className="shadow-md bg-[#FFF5D0] md:px-20 px-10 py-4 flex md:items-center justify-between md:relative">
      
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-15"/>
        <h1 className="text-[2rem] font-bold text-gray-800">Pet Connect</h1>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-4 mt-12 md:mt-0 md:flex md:flex-row items-center md:bg-[#FFF5D0] bg-amber-50 md:gap-6 text-gray-700 font-medium md:relative absolute right-5`}
      >
        <Link to="/" className="hover:text-orange-500 transition">
          Home
        </Link>
        <Link to="/adopt" className="hover:text-orange-500 transition">
          Adopt
        </Link>
        <Link to="/form" className="hover:text-orange-500 transition">
          Form
        </Link>
        <Link to="/about" className="hover:text-orange-500 transition">
          About
        </Link>
        <Link to="/post" className="hover:text-orange-500 transition">
          Post a Pet
        </Link>
        
        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 rounded-lg md:ml-4"
            >
              Profile
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div className="p-4 text-sm text-gray-600 border-b border-gray-200">
                  <p className="font-semibold"></p>
                  <p className="truncate">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 rounded-b-md transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signin">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 rounded-lg md:ml-4">
              Login
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
