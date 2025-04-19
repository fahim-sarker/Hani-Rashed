import { useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { SearchPopup } from "../components/dashboard/timeline/SearchPopup";
import chatIcon from "../assets/icons/chatIcon.png";
import notificationIcon from "../assets/icons/notificationIcon.png";
import ConsultancyNotifications from "@/components/dashboard/consultancyDashboard/ConsultancyNotifications";
import { FaBars } from "react-icons/fa";
import SideDashboard from "@/shared/SideDashboard";
import toast from "react-hot-toast";
import useAxios from "@/components/Hooks/Api/UseAxios";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import Defaultprofile from "../assets/icons/defaultprofile.jpg"

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Axiosinstance = useAxios();
  const [isActive, setIsActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const token = JSON.parse(localStorage.getItem("authToken"));
  const role = JSON.parse(localStorage.getItem("role"));

  const { data } = useFetchData("/me", token);
  console.log("jsagdehasgf", data?.data?.avatar);

  const handleLogout = async () => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    console.log("Retrieved token:", token);
    try {
      if (!token) {
        toast.error("No token found, redirecting to login.");
        navigate("/auth/login");
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
      toast.success("Logged out successfully!");
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <section className="min-h-screen max-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="hidden xl:block min-h-full max-h-full overflow-y-auto w-[280px] xl:w-[300px] py-8 2xl:py-10 shadow bg-[#0B2948] text-white">
        {/* Logo */}
        <Link to={ role === "smallbusiness" ? "/dashboard/smallBusiness/timeline" : "/dashboard/consultancyFirms/timeline" }>
          <img src={logo} alt="logo" className="w-48 mx-auto" />
        </Link>
        {/* Profile card */}
        {location.pathname === "/dashboard/smallBusiness/timeline" && (
          <div className="flex mt-8 px-3 py-1 max-w-[210px] ms-auto gap-3 bg-white rounded-tl rounded-bl shadow items-center">
            <figure className="w-10 h-10 rounded-full border-2">
              <img
                src={data?.data?.avatar ? data?.data?.avatar : Defaultprofile}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
            <div className="">
              <span className="text-xs -mt-[2px] block text-[#212B36] font-publicSans">
                {data?.data?.name}
              </span>
            </div>
          </div>
        )}
        {/* links */}

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

      {/* Dashboard Content */}
      <div className="min-h-full max-h-full w-full xl:w-[calc(100%-320px)] bg-[#F5F6FB]">
        {/* Dashboard Header */}
        <div className="bg-white border-b grid sm:grid-cols-2 lg:grid-cols-3 items-center py-3 sm:py-5 px-3 sm:px-5">
          <div className="hidden sm:block">
            <SearchPopup />
          </div>
          <ul className="hidden lg:flex gap-10 justify-self-center text-primaryGreen">
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
          <div className="flex items-center gap-4 md:gap-7 justify-between sm:justify-self-end">
            <div className="flex items-center gap-5">
              {role !== "smallBusiness" && (
                <button
                  className="hidden sm:block"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <img className="w-7" src={notificationIcon} alt="" />
                </button>
              )}
              {role !== "smallBusiness" && (
                <button className="hidden sm:block">
                  <Link to="/dashboard/smallBusiness/messages">
                    <img className="w-7" src={chatIcon} alt="" />
                  </Link>
                </button>
              )}
              <figure className="w-10 h-10 outline outline-2 outline-primaryGreen outline-offset-2 rounded-full">
                <Link to='/dashboard/smallBusiness/editProfile'>
                <img
                  src={data?.data?.avatar ? data?.data?.avatar : Defaultprofile }
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
                </Link>
              </figure>
              <p className="font-roboto font-medium text-[#334155]">
                {data?.data?.email}
              </p>
            </div>

            {/* Hamburger btn */}
            <button
              onClick={() => setIsActive(!isActive)}
              className="w-10 xl:hidden shadow h-9 rounded bg-[#0B2948] text-white grid place-items-center"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Outlet */}
        <div
          onClick={() => setShowNotification(false)}
          className="overflow-y-scroll min-h-[calc(100%-82px)] max-h-[calc(100%-82px)]  sm:p-5 xl:p-6"
        >
          <ScrollRestoration />
          <Outlet />
        </div>
      </div>

      {/* Side Dashboard */}
      <SideDashboard
        isActive={isActive}
        setIsActive={setIsActive}
        role={role}
      />

      {/* Notifications */}
      <ConsultancyNotifications
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
    </section>
  );
};

export default DashboardLayout;
