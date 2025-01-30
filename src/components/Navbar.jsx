import { Link } from "react-router-dom";
import logo1 from "../assets/book_the_court_2.png";
import nav_logo from "../assets/nav_logo.png";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between flex-row items-center p-18 z-50 h-28 ">
      <div className="text-[20px] font-bold align-middle flex  justify-center">
        <img src={nav_logo} alt="logo1" className="h-16" />
      </div>
      <div className="flex text-white gap-6 text-[18px] font-[500]">
        <p>About Us</p>
        <p>Resources</p>
        <Link to="/business">
          <p>For Business</p>
        </Link>
      </div>
      <div className="flex gap-2 ">
        <button className="bg-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md">
          Login{" "}
        </button>
        <button className="bg-inherit border border-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md text-[#A2DF00]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
