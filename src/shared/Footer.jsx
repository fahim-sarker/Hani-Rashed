import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import logo from "../assets/logoBottom.png";
import { Link } from "react-router-dom";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
const Footer = () => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data } = useFetchData("/me", token);
  return (
    <footer className="">
      <div className="bg-[#0b2948] text-white py-14 lg:py-20">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-5">
          <div className="">
            <img src={logo} alt="" className="mb-5 inline-block" />
            <p className="text-gray-300 mb-7">
              Our team do comprises professional with experience. Thats why
              businesses use Dail The fastest way.
            </p>
            <div className="social_link flex items-center gap-3">
              <a
                className="w-10 h-10 duration-500 hover:bg-primaryGreen rounded-full grid place-items-center border border-gray-700"
                href="https://www.facebook.com"
                target="_black"
              >
                <FaFacebookF />
              </a>
              <a
                className="w-10 h-10 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border border-gray-700"
                href="https://www.facebook.com"
                target="_black"
              >
                <FaXTwitter />
              </a>
              <a
                className="w-10 h-10 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border border-gray-700"
                href="https://www.linkedin.com"
                target="_black"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="w-10 h-10 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border border-gray-700"
                href="https://www.youtube.com"
                target="_black"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold mt-3 mb-5 sm:mb-7">
              Company
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <Link to="/aboutUs" className="hover:underline">
                  Who we are
                </Link>
              </li>
              <li>
                <Link to="/prices" className="hover:underline">
                  Prices
                </Link>
              </li>
              <li>
                <a className="hover:underline">Latest</a>
              </li>
              <li>
                <Link to="/contactUs" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold mt-3 mb-5 sm:mb-7">
              Quick Links
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <Link to="/aboutUs" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <a className="hover:underline">News</a>
              </li>
              <li>
                <a className="hover:underline">Feedback</a>
              </li>
              <li>
                <Link to="/prices/#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold mt-3 mb-5 sm:mb-7">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Our team do comprises professional
            </p>
            <div className="relative lg:w-56 xl:w-72">
              <input
                type="email"
                placeholder={data?.data?.email}
                className="text-black outline-none w-full ps-5 py-3 rounded"
              />
              <a
                href="#"
                className=" absolute right-2 top-2 bg-primaryGreen w-8 h-8 grid place-items-center text-white rounded"
              >
                <BsFillSendFill />
              </a>
            </div>
            <p className="flex gap-2 items-center mt-3">
              <MdOutlineMail className="text-lg text-primaryGreen" />
             {data?.data?.email}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 py-7 text-lg bg-[#0a3654]">
        <p className="text-sm container md:text-base">
          Copyright © 2025 Hani_Rashed All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
