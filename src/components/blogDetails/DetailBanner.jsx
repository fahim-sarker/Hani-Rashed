import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DetailsImg from "../../assets/blogDetails.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DetailBanner = () => {
  return (
    <section className="mb-14 lg:mb-60 xl:mb-32 2xl:mb-60">
      <div className="bg-primarySky pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pb-40 xl:pb-80 text-white relative">
        <div className="container">
          <div className="bannerTop max-w-3xl mx-auto">
            <span className="flex gap-2 mb-2 items-center text-lg text-white">
              Blog <MdOutlineKeyboardArrowRight className="text-lg" /> Details
            </span>
            <h3 className="text-2xl sm:text-4xl mb-7 tracking-wider leading-tight font-semibold">
              Blog title heading will go here
            </h3>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-40">
              <div className="flex gap-3">
                <Avatar className="w-12 h-12 rounded-full">
                  <AvatarImage
                    src="https://i.ibb.co.com/s6B8T0W/author.jpg"
                    className="object-cover w-full h-full rounded-full"
                  />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <div className="">
                  <h5 className="font-medium text-lg">Joan Doe</h5>
                  <div className="flex gap-2 text-sm text-gray-300">
                    <span>11 january, 2025</span> .<span>5 min read</span>
                  </div>
                </div>
              </div>
              <div className="social_link flex items-center gap-3">
                <a
                  className="w-8 h-8 duration-500 hover:bg-primaryGreen rounded-full grid place-items-center border border-green-700 text-primaryGreen hover:text-white"
                  href="https://www.facebook.com"
                  target="_black"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="w-8 h-8 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border border-green-700 text-primaryGreen hover:text-white"
                  href="https://www.facebook.com"
                  target="_black"
                >
                  <FaXTwitter />
                </a>
                <a
                  className="w-8 h-8 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border border-green-700 text-primaryGreen hover:text-white"
                  href="https://www.linkedin.com"
                  target="_black"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="w-8 h-8 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border border-green-700 text-primaryGreen hover:text-white"
                  href="https://www.youtube.com"
                  target="_black"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl text-center mt-14 hidden lg:block absolute left-1/2 -translate-x-1/2">
            <img
              src={DetailsImg}
              alt="Details"
              className="w-full h-full border rounded-3xl object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailBanner;
