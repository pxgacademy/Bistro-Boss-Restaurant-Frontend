import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/fav-icon.png";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const navLinks = (
    <>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/">
        Home
      </NavLink>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/contact-us">
        contact us
      </NavLink>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/dashboard">
        dashboard
      </NavLink>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/our-menu">
        our menu
      </NavLink>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/our-shop">
        our shop
      </NavLink>
    </>
  );
  return (
    <header className="fixed z-20 w-full max-w-screen-2xl bg-black/40 backdrop-blur-sm px-5 py-4 text-white">
      <nav className="flex items-center justify-between cursor-default">
        {/* Left side menu */}
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => setIsMobileMenu(true)}
            className="text-xl lg:hidden"
          >
            <FaBars />
          </button>
          <div className="uppercase font-Cinzel flex items-center gap-x-3">
            <img className="w-12" src={logo} alt="Logo" />
            <div>
              <h1 className="font-bold text-lg md:text-2xl">Bistro Boss</h1>
              <p className="tracking-[.14em] md:tracking-[.41em]">restaurant</p>
            </div>
          </div>
        </div>

        {/* Right side menu */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-x-3 uppercase font-semibold">
            {navLinks}
          </div>
          <div>
            <button className="uppercase font-semibold">signin</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0  h-screen py-8 w-80 px-5 bg-red-600 overflow-hidden transition-all duration-500 ${
            isMobileMenu ? "left-0 opacity-100" : "-left-[110%] opacity-0"
          }`}
        >
          <button
            onClick={() => setIsMobileMenu(false)}
            className="absolute top-2 right-4 btn btn-sm btn-circle btn-neutral text-white"
          >
            <IoClose />
          </button>
          <div className="uppercase font-Cinzel border-b pb-1 border-white/50">
            <img className="w-40" src={logo} alt="Logo" />
            <div>
              <h1 className="font-bold text-2xl">Bistro Boss</h1>
              <p className="tracking-[.41em]">restaurant</p>
            </div>
          </div>

          <div className="mt-3 flex flex-col uppercase gap-y-1 font-semibold">
            {navLinks}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
