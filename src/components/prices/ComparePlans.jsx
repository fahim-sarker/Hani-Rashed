import { TableDemo } from "./TableDemo";

const comparePlans = () => {
  return (
    <section className="container my-20">
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-semibold mb-3">Compare plans</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">
        <div className="hidden xl:block"></div>
        <div className="hidden xl:block"></div>
        <div className="space-y-4">
          <span className="font-medium">Basic</span>
          <h2 className="text-5xl font-semibold">
            $19 <span className="text-lg">/mo</span>
          </h2>
          <p className="">Lorem ipsum dolor sit amet</p>
          <button className="px-14 py-2 duration-300 hover:text-primaryGreen border-2 border-primaryGreen hover:bg-transparent rounded bg-primaryGreen text-white">
            Get Started
          </button>
        </div>
        <div className="space-y-4">
          <span className="font-medium">Business</span>
          <h2 className="text-5xl font-semibold">
            $29 <span className="text-lg">/mo</span>
          </h2>
          <p className="">Lorem ipsum dolor sit amet</p>
          <button className="px-14 py-2 duration-300 hover:text-primaryGreen border-2 border-primaryGreen hover:bg-transparent rounded bg-primaryGreen text-white">
            Get Started
          </button>
        </div>
        <div className="space-y-4">
          <span className="font-medium">Enterprise</span>
          <h2 className="text-5xl font-semibold">
            $49 <span className="text-lg">/mo</span>
          </h2>
          <p className="">Lorem ipsum dolor sit amet</p>
          <button className="px-14 py-2 duration-300 hover:text-primaryGreen border-2 border-primaryGreen hover:bg-transparent rounded bg-primaryGreen text-white">
            Get Started
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-20 mb-5">Feature Category</h2>
      <TableDemo></TableDemo>
      <br />
      <br />
      <h2 className="text-2xl font-semibold mb-5">Feature Category</h2>
      <TableDemo></TableDemo>
      <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-5 mt-5">
        <div className="hidden xl:block"></div>
        <div className="hidden xl:block"></div>
        <button className="px-14 py-2 duration-300 hover:text-primaryGreen border-2 border-primaryGreen hover:bg-transparent rounded bg-primaryGreen text-white">
          Get Started
        </button>
        <button className="px-14 py-2 duration-300 hover:text-primaryGreen border-2 border-primaryGreen hover:bg-transparent rounded bg-primaryGreen text-white">
          Get Started
        </button>
        <button className="px-14 py-2 duration-300 hover:text-primaryGreen border-2 border-primaryGreen hover:bg-transparent rounded bg-primaryGreen text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};
export default comparePlans;
