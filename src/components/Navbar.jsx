import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/book_the_court_2.png";
import nav_logo from "../assets/nav_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuthStore } from "../store/authUser";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  console.log("USER", user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
    }
  }, [isMenuOpen]);

  return (
    <div className="w-full flex justify-between items-center p-4 md:p-6 lg:p-8 z-50 h-28 relative">
      {/* Logo - Centered on Small Devices */}
      <div className="absolute left-[20%] transform -translate-x-[20%] md:static md:translate-x-0 md:left-auto md:flex md:justify-center">
        <Link to="/">
          <img src={nav_logo} alt="logo1" className="w-full h-10" />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer ml-auto z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Fullscreen Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white  flex flex-col justify-center p-8 gap-6 text-[18px] font-[500] transition-all duration-300 ease-in-out ${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden`}
      >
        <p onClick={toggleMenu}>About </p>
        <p onClick={toggleMenu}>Resources</p>
        <Link to="/business" onClick={toggleMenu}>
          <p>For Business</p>
        </Link>

        {user && (
          <div className="border border-green-300 p-2 rounded-xl">
            <h4 className="text-center mb-[10px]">
              USER <span className="text-green-500">PROFILE</span>
            </h4>
            <p className="text-sm mb-[10px]">Username: {user.username}</p>
            <p className="text-sm mb-[10px]">Email: {user.email}</p>
          </div>
        )}

        {user && (
          <div
            className="text-red-600 border border-red-500 p-2 rounded-lg text-center"
            onClick={logout}
          >
            Log Out
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-white text-[18px] font-[500]">
        <p>About Us</p>
        <p>Resources</p>
        <Link to="/business">
          <p>For Business</p>
        </Link>
      </div>

      {/* Buttons - Hidden on Small Devices */}
      <div className="hidden md:flex gap-2">
        {!user && (
          <>
            <button className="bg-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="bg-inherit border border-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md text-[#A2DF00]">
              <Link to={"/signup"}>Sign Up</Link>
            </button>
          </>
        )}

        {user && (
          <div className="flex h-13 gap-2 p-2">
            {/* <button
              className="bg-inherit border border-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md text-[#A2DF00]"
              onClick={logout}
            >
              <Link to="#">Log Out</Link>
            </button> */}
            <img
              src={user.image}
              alt="avtar"
              className="h-10 items-center rounded cursor-pointer"
            />
            <IoIosLogOut
              className="size-10 cursor-pointer"
              onClick={logout}
              color="red"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
