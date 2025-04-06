import Title from "../reuseableComponents/Title";
import useFetchData from "../Hooks/Api/UseFetchData";



const OurVision = () => {

  const {data} = useFetchData("about-us")
  const step2 = data?.data?.[1];


  return (
    <section className="container mt-10 mb-20">
      <Title className="text-center" title={step2?.title}></Title>
      <img src={step2?.image} className="md:w-2/3 lg:w-1/2 mx-auto" />
      <p className="mt-10">
       {step2?.description}
      </p>
      <br />
      <p>
        Nec nec porttitor morbi at aliquam. Habitasse ut quis nunc mattis
        tristique. Quis malesuada donec quis eu duis id cursus id.
      </p>
    </section>
  );
};

export default OurVision;
