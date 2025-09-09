import { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md bg-[#FFF5D0]   md:px-20 px-10 py-4 flex  md:items-center justify-between md:relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-15"/>
        <h1 className="text-[2rem] font-bold text-gray-800">Pet Connect</h1>
      </div>

      {/* Burger Menu Button (Mobile) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {/* Hamburger icon */}
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

      {/* Navigation */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-4 mt-12 md:mt-0 md:flex md:flex-row items-center md:bg-[#FFF5D0] bg-amber-50 md:gap-6 text-gray-700 font-medium md:relative absolute right-5`}
      >
        <a href="#" className="hover:text-orange-500 transition">
          Home
        </a>
        <a href="#" className="hover:text-orange-500 transition">
          Adopt
        </a>
        <a href="#" className="hover:text-orange-500 transition">
          Form
        </a>
        <a href="#" className="hover:text-orange-500 transition">
          About
        </a>

        {/* Login Button */}
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 rounded-lg md:ml-4">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
