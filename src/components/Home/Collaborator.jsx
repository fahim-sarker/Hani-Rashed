import useFetchData from "../Hooks/Api/UseFetchData";

const Collaborator = () => {
  const { data } = useFetchData("home-page");
  console.log(data);

  return (
    <section className="my-20 container">
      <span className="rounded w-36 sm:w-44 flex justify-center text-center mx-auto tracking-widest text-[#01B883] font-medium uppercase text-sm bg-[#effcf8] py-2 sm:py-3 mb-5 border border-[#01B883]">
        how it works
      </span>
      <h3 className="text-[#013973] text-center mb-10 font-semibold text-2xl sm:text-3xl">
        Easily Connect, Collaborate, <br className="hidden sm:block" /> and Grow
      </h3>

      <div className="space-y-10 lg:space-y-5">
        {data?.data?.map((step, idx) => (
          <div
            className={`flex flex-col gap-5 lg:gap-24 ${idx % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            key={idx}
          >
            <figure className="w-full h-[375px] sm:h-80 rounded-[5px] overflow-hidden flex-1 flex-shrink-0">
              <img
                src={step?.image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </figure>
            <div className="border hidden lg:block bg-primaryGreen mx-auto w-2 rounded relative">
              <span className="absolute top-1/2 -translate-y-1/2 -left-5 text-white w-12 h-12 rounded-full grid place-items-center font-semibold text-2xl bg-[#01B883]">
                {idx + 1}
              </span>
            </div>
            <div className="flex-1  flex-shrink-0 flex flex-col justify-center">
              <h4 className="text-xl sm:text-2xl mb-3 font-semibold text-[#0B2948]">
                {step?.title}
              </h4>
              <p className="text-gray-400 text-justify">{step?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborator;
