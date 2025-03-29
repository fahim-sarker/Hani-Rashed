import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

const Collaborate = () => {
  return (
    <section className="my-20 container">
      <span className="rounded w-36 sm:w-44 flex justify-center text-center mx-auto tracking-widest text-[#01B883] font-medium uppercase text-sm bg-[#effcf8] py-2 sm:py-3 mb-5 border border-[#01B883]">
        how it works
      </span>
      <h3 className="text-[#013973] text-center mb-10 font-semibold text-2xl sm:text-3xl">
        Easily Connect, Collaborate, <br className="hidden sm:block" /> and Grow
      </h3>
      <div className="space-y-10 lg:space-y-5">
        <div className="grid gap-5 lg:gap-0 lg:grid-cols-12 items-center">
          <img
            src={c1}
            alt=""
            className="w-full object-cover sm:h-80 lg:h-auto col-span-5"
          />
          <div className="border hidden lg:block bg-primaryGreen mx-auto h-full w-2 rounded relative">
            <span className="absolute top-1/2 -translate-y-1/2 -left-5 text-white w-12 h-12 rounded-full grid place-items-center font-semibold text-2xl bg-[#01B883]">
              1
            </span>
          </div>
          <div
            className="col-span-5"
          >
            <h4 className="text-xl sm:text-2xl mb-3 font-semibold text-[#0B2948]">
              Sign Up & Explore Ideas
            </h4>
            <p className="text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem
              ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Pellentesque sit amet sapien. Lorem ipsum dolor sit amet
              consectetur adipis.{" "}
            </p>
          </div>
        </div>
        <div className="grid gap-5 lg:gap-0 lg:grid-cols-12 items-center">
          <div
            className="col-span-5 order-1 lg:order-0"
          >
            <h4 className="text-xl sm:text-2xl mb-3 font-semibold text-[#0B2948]">
              Engage, Collaborate & Develop Solutions
            </h4>
            <p className="text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem
              ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Pellentesque sit amet sapien. Lorem ipsum dolor sit amet
              consectetur adipis.{" "}
            </p>
          </div>
          <div className="border order-0 lg:order-1 hidden lg:block bg-primaryGreen mx-auto h-full w-2 rounded relative">
            <span className="absolute top-1/2 -translate-y-1/2 -left-5 text-white w-12 h-12 rounded-full grid place-items-center font-semibold text-2xl bg-[#01B883]">
              2
            </span>
          </div>
          <img
            src={c2}
            alt=""
            className="w-full object-cover sm:h-80 lg:h-auto lg:order-2 col-span-5"
          />
        </div>
        <div className="grid gap-5 lg:gap-0 lg:grid-cols-12 items-center">
          <img
            src={c3}
            alt=""
            className="w-full object-cover sm:h-80 lg:h-auto col-span-5"
          />
          <div className="border hidden lg:block bg-primaryGreen mx-auto h-full w-2 rounded relative">
            <span className="absolute top-1/2 -translate-y-1/2 -left-5 text-white w-12 h-12 rounded-full grid place-items-center font-semibold text-2xl bg-[#01B883]">
              3
            </span>
          </div>
          <div
            className="col-span-5"
          >
            <h4 className="text-xl sm:text-2xl mb-3 font-semibold text-[#0B2948]">
              Collaborate & Develop Solutions
            </h4>
            <p className="text-gray-400 text-justify">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem
              ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              Pellentesque sit amet sapien. Lorem ipsum dolor sit amet
              consectetur adipis.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
