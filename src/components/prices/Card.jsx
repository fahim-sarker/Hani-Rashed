import relume from "../../assets/relume.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <section className="py-20 bg-primarySky text-white">
      <div className="container">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10 sm:mb-20 tracking-wider leading-tight font-semibold">
          Highlight key features of the <br className="hidden sm:block" />{" "}
          product or service
        </h3>
        <div className="grid lg:grid-cols-3 gap-5 xl:gap-8">
          <div className="p-5 md:p-10 rounded-lg shadow text-center space-y-3 bg-[#1a46ab]">
            <img src={relume} alt="" className="mx-auto" />
            <h4 className="text-xl sm:text-2xl font-medium">
              Describe feature one and its <br className="hidden sm:block" />
              benefits
            </h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <a
              href="#"
              className="flex font-medium justify-center gap-1 items-center text-primaryGreen"
            >
              <span>Learn More</span>
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </a>
          </div>
          <div className="p-5 md:p-10 rounded-lg shadow text-center space-y-3 bg-[#1a46ab]">
            <img src={relume} alt="" className="mx-auto" />
            <h4 className="text-xl sm:text-2xl font-medium">
              Describe feature one and its
              <br className="hidden sm:block" /> benefits
            </h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <a
              href="#"
              className="flex font-medium justify-center gap-1 items-center text-primaryGreen"
            >
              <span>Learn More</span>
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </a>
          </div>
          <div className="p-5 md:p-10 rounded-lg shadow text-center space-y-3 bg-[#1a46ab]">
            <img src={relume} alt="" className="mx-auto" />
            <h4 className="text-xl sm:text-2xl font-medium">
              Describe feature one and its <br className="hidden sm:block" />{" "}
              benefits
            </h4>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <a
              href="#"
              className="flex font-medium justify-center gap-1 items-center text-primaryGreen"
            >
              <span>Learn More</span>
              <MdOutlineKeyboardArrowRight className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
