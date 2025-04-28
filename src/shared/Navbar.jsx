import logo from "../assets/logoTop.png";
import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useFetchData from "@/components/Hooks/Api/UseFetchData";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data: userData } = useFetchData("/me", token);
  const role = JSON.parse(localStorage.getItem("role"));
  console.log(userData);

  return (
    <nav className="py-5 sticky top-0 bg-white z-[999] shadow">
      <div className="container flex justify-between items-center">
        {/* Nav Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-32 sm:w-auto" />
          </Link>
        </div>
        <div className="md:block hidden">
          {/* Nav Links */}
          <ul className="flex gap-10 lg:gap-14 items-center text-gray-700 text-lg font-medium">
            {token ? (
              <li>
                <NavLink
                  to={
                    role === "smallbusiness"
                      ? "/dashboard/smallBusiness/profile"
                      : "/dashboard/consultancyFirms/profile"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            )}

            <li>
              <NavLink to="/aboutUs">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          {/* Nav Btn */}
          {token ? (
            <Link
              to={
                role === "smallbusiness"
                  ? "/dashboard/smallBusiness/timeLine"
                  : "/dashboard/consultancyFirms/timeline"
              }
            >
              <button className="px-4 py-2 rounded font-medium flex items-center gap-2 text-gray-100 bg-primaryGreen">
                <img
                  src={userData?.data?.avatar}
                  alt=""
                  className="border w-6 h-6 rounded-full object-cover"
                />
                <span>{userData?.data?.name}</span>
              </button>
            </Link>
          ) : (
            <Link
              to="/auth/registration"
              className="px-2 md:px-5 text-xs md:text-base py-[6px] sm:py-2 rounded font-medium flex items-center gap-2 text-gray-100 bg-primaryGreen"
            >
              <FaRegUserCircle className="text-sm md:text-lg" />
              <span>Sign up</span>
            </Link>
          )}

          {/* Mobile Menu */}

          {/* bar */}
          <button onClick={() => setOpen(!isOpen)} className="md:hidden">
            <FaBarsStaggered className="text-2xl" />
          </button>

          {/* Blur Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-50 md:hidden ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          ></div>

          {/* Nav links */}
          <div
            className={`w-[240px] shadow-lg transition-transform duration-500 z-50 md:hidden bg-white py-10 fixed top-0 left-0 h-full border px-5 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Link onClick={() => setOpen(false)} to="/">
              <img src={logo} alt="logo" className="w-32 sm:w-auto" />
            </Link>
            <ul className="mt-10 text-lg font-medium space-y-5">
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/"
                  className="w-full duration-200 hover:text-primaryGreen"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/aboutUs"
                  className="w-full duration-200 hover:text-primaryGreen"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/contactUs"
                  className="w-full duration-200 hover:text-primaryGreen"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  to="/blog"
                  className="w-full duration-200 hover:text-primaryGreen"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            {/* cancel btn */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <RxCross2 className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
