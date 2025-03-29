const Newsletter = () => {
  return (
    <section className="mx-5">
      <div className="container py-10 md:py-20 lg:py-28 text-center rounded-3xl md:px-20 lg:px-40 my-20 bg-primarySky">
        <div className="">
          <h2 className="text-white tracking-wide leading-tight font-semibold text-2xl sm:text-4xl mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="flex gap-2 justify-center mb-5 mt-8 items-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="ps-2 sm:ps-3 w-40 sm:w-auto md:pe-20 lg:pe-36 py-2 sm:py-[10px] rounded bg-[#1a46ab] outline-none text-white border border-blue-700"
          />
          <button className="text-white text-sm sm:text-base duration-300 hover:bg-transparent border-2 border-primaryGreen hover:text-primaryGreen px-2 sm:px-6 py-2 sm:py-[10px] rounded bg-primaryGreen">
            Sign Up
          </button>
        </div>
        <span className="text-gray-400 text-sm">
          By clicking Sign Up you are confirming that you agree with our Terms
          and Conditions.
        </span>
      </div>
    </section>
  );
};

export default Newsletter;
