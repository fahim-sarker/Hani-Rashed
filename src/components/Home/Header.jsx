import { Link } from "react-router-dom";
import smallBanner from "../../assets/smallBanner.png";
import { FaRegUserCircle } from "react-icons/fa";
import useFetchData from "../Hooks/Api/UseFetchData";
const Header = () => {
  const { data } = useFetchData("hero-banner");
  console.log(data);

  return (
    <>
      {data?.data?.map((hero, index) => (
        <header key={index} className="grid gap-10 lg:gap-0 pb-10 lg:pb-0 lg:grid-cols-2 xl:grid-cols-9 items-center lg:h-[650px]">
          <div className="xl:col-span-5 lg:h-[650px] h-[230px] sm:h-0 ">
            <img
              src={hero?.image}
              className="w-full hidden xl:block h-full object-cover"
            />
            <img
              src={smallBanner}
              className="w-full sm:hidden md:block xl:hidden h-full object-cover"
            />
          </div>
          <div className="xl:col-span-4 ps-5 sm:ps-8 md:ps-12">
            <span className="rounded px-3 sm:px-5 md:px-7 tracking-widest font-medium uppercase text-xs sm:text-sm bg-[#2458aa] py-3 border border-[#118896] text-white">
              {hero?.btn_text}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 mb-5 lg:mb-10 text-white tracking-wide font-semibold">
             {hero?.title}
            </h1>
            <p className="text-gray-300 md:w-3/4 text-lg mb-7">
              {hero?.description}
            </p>
            <Link
              to="/auth/login"
              className="px-5 py-2 sm:px-8 sm:py-3 rounded font-medium inline-flex hover:bg-transparent border-2 duration-500 hover:text-primaryGreen border-primaryGreen items-center gap-2 text-gray-100 bg-primaryGreen"
            >
              <FaRegUserCircle className="text-xl" />
              <span>sign in</span>
            </Link>
          </div>
        </header>
      ))}
    </>
  );
};

export default Header;
