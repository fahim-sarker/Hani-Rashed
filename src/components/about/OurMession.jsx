import useFetchData from "../Hooks/Api/UseFetchData";
import Title from "../reuseableComponents/Title";
const OurMession = () => {


  const {data} = useFetchData("about-us")
  const step1 = data?.data?.[0];
  

  return (
    <section className="grid lg:grid-cols-3 gap-10 lg:gap-20 container my-10 lg:my-20">
      <div className="lg:col-span-1 h-[230px] sm:h-[300px] md:h-[350px] lg:h-auto">
        <img
          src={step1?.image}
          alt=""
          className="border mx-auto w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="lg:col-span-2">
        <Title title={step1?.title} />
        <p className="text-justify text-gray-800">
          {step1?.description}
        </p>
      </div>
    </section>
  );
};

export default OurMession;
