const Products = () => {
  return (
    <section className="mx-5">
      <div className="container py-14 md:py-28 bg-primarySky rounded-3xl md:px-20 xl:px-40 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="">
            <h2 className="text-white tracking-wide leading-tight font-semibold text-2xl sm:text-3xl md:text-4xl mb-5">
              Call to action that invites the visitor <br /> to try your product
            </h2>
            <p className="text-gray-200 mb-5 md:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="text-white duration-300 hover:bg-transparent border-2 border-primaryGreen hover:text-primaryGreen px-6 py-2 rounded bg-primaryGreen">
              Get Started
            </button>
            <button className="text-white duration-300 hover:text-primaryGreen hover:bg-white border-2 hover:border-white border-white px-6 py-2 rounded bg-transparent">
              Chat to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
