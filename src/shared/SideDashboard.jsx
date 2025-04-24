import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logoBottom.png";
import d1 from "../assets/icons/d1.png";
import d2 from "../assets/icons/d2.png";
import d3 from "../assets/icons/d3.png";
import d4 from "../assets/icons/d4.png";
import d5 from "../assets/icons/d5.png";
import d6 from "../assets/icons/d6.png";
import d7 from "../assets/icons/d7.png";
import d8 from "../assets/icons/d8.png";
import d9 from "../assets/icons/d9.png";
import d10 from "../assets/icons/d10.png";
import useAxios from "@/components/Hooks/Api/UseAxios";
import toast from "react-hot-toast";

const SideDashboard = ({ isActive, setIsActive, role }) => {
  const Axiosinstance = useAxios();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const role = JSON.parse(localStorage.getItem("role"));

      if (!token) {
        toast.error("No token found, redirecting to login.");
        navigate("/login");
        return;
      }

      await Axiosinstance.post(
        "logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("authToken");
      localStorage.removeItem("role",role);
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div>
      {/* Blur Overlay */}
      <div
        onClick={() => setIsActive(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-50 xl:hidden ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Nav Links */}
      <div
        className={`w-[280px] py-8 2xl:py-10 bg-[#0B2948] text-white overflow-y-auto  transition-transform duration-500 z-50 xl:hidden fixed top-0 left-0 h-full ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <Link
          onClick={() => setIsActive(false)}
          to="/dashboard/smallBusiness/timeline"
        >
          <img src={logo} alt="logo" className="w-48 mx-auto" />
        </Link>
        {/* Nav links */}
        <ul
          id="dashboardLinks"
          className="font-roboto mt-10 font-medium space-y-5 text-[19px]"
        >
          {role === "smallbusiness" ? (
            <li>
              <NavLink
                to="/dashboard/smallBusiness/timeline"
                className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
              >
                <img src={d1} alt="d1" />
                <span>Timeline</span>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/dashboard/consultancyFirms/timeline"
                className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
              >
                <img src={d1} alt="d1" />
                <span>Timeline</span>
              </NavLink>
            </li>
          )}
          {role === "smallbusiness" ? (
            <li>
              <NavLink
                to="/dashboard/smallBusiness/profile"
                className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
              >
                <img src={d2} alt="d2" />
                <span>Profile</span>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/dashboard/consultancyFirms/profile"
                className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
              >
                <img src={d2} alt="d2" />
                <span>Profile</span>
              </NavLink>
            </li>
          )}
          {role === "smallbusiness" ? (
            <li>
              <NavLink
                to="/dashboard/smallBusiness/idea"
                className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
              >
                <img src={d3} alt="d3" />
                <span>Idea</span>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/dashboard/consultancyFirms/idea"
                className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
              >
                <img src={d1} alt="d1" />
                <span>Idea</span>
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              to="/dashboard/smallBusiness/following"
              className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
            >
              <img src={d4} alt="d4" />
              <span>Following</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/smallBusiness/follower"
              className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
            >
              <img src={d5} alt="d5" />
              <span>Follower</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/smallBusiness/messages"
              className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
            >
              <img src={d6} alt="d6" />
              <span>Messages</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/smallBusiness/notifications"
              className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
            >
              <img src={d7} alt="d7" />
              <span>Notifications</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/smallBusiness/statics"
              className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
            >
              <img src={d8} alt="d8" />
              <span>Statics</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/consultancyFirms/watchList"
              className="flex hover:bg-primaryGreen hover:text-white duration-300 transition-all py-[10px] px-10 gap-3 items-center"
            >
              <img src={d9} alt="d9" />
              <span>Watch List</span>
            </NavLink>
          </li>

          <li className="mx-5 pt-4">
            <button
              onClick={handleLogout}
              className="flex w-full text-lg justify-center text-center bg-white text-[#0A3760] font-medium rounded-lg py-[10px] px-10 gap-3 items-center"
            >
              <img src={d10} alt="d10" />
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideDashboard;
