import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "/fav-icon.png";
import { IoClose } from "react-icons/io5";
import { useContextValue } from "../../../hooks/useContextValue";
import Swal from "sweetalert2";

const Header = () => {
  const { user, signOutUser } = useContextValue();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const { pathname } = useLocation();

  const handleLogout = () => {
    const loggingOut = async () => {
      try {
        await signOutUser();
        Swal.fire({
          title: "Logged Out",
          text: "You have been successfully logged out",
          icon: "success",
          showConfirmButton: false,
          position: "center",
          timer: 2000,
        });
      } catch (error) {
        Swal.fire({
          title: error.message,
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        loggingOut();
      }
    });
  };

  const navLinks = (
    <>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/">
        Home
      </NavLink>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/our-menu">
        our menu
      </NavLink>
      <NavLink
        onClick={() => setIsMobileMenu(false)}
        to="/our-shop/salad"
        className={({ isActive }) =>
          isActive || pathname.startsWith("/our-shop/") ? "active" : ""
        }
      >
        our shop
      </NavLink>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/contact-us">
        contact us
      </NavLink>
      <NavLink onClick={() => setIsMobileMenu(false)} to="/dashboard">
        dashboard
      </NavLink>
    </>
  );

  const logoutButton = (
    <button onClick={handleLogout} className="uppercase font-semibold btn">
      Logout
    </button>
  );

  const cartIcon = (
    <Link>
      <button className="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <div className="badge badge-secondary">0</div>
      </button>
    </Link>
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
            {user ? (
              <div className="flex items-center gap-x-4">
                <div className="hidden md:block">{cartIcon}</div>
                <div className="hidden md:block">{logoutButton}</div>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full border border-gray-500">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-slate-800"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="uppercase font-semibold btn ">Login</button>
              </Link>
            )}
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
          <div className="uppercase font-Cinzel text-center border-b pb-1 border-white/50">
            <img className="w-40 mx-auto" src={logo} alt="Logo" />
            <div>
              <h1 className="font-bold text-2xl">Bistro Boss</h1>
              <p className="tracking-[.41em]">restaurant</p>
            </div>
          </div>

          {user && (
            <div className="flex md:hidden items-center justify-center mt-3 gap-x-4">
              {cartIcon}
              {logoutButton}
            </div>
          )}

          <div className="mt-3 flex flex-col uppercase gap-y-1 font-semibold text-center">
            {navLinks}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
