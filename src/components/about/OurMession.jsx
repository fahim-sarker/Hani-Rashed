import mission from "../../assets/mission.png";
import Title from "../reuseableComponents/Title";
const OurMession = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-10 lg:gap-20 container my-10 lg:my-20">
      <div className="lg:col-span-1 h-[230px] sm:h-[300px] md:h-[350px] lg:h-auto">
        <img
          src={mission}
          alt=""
          className="border mx-auto w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="lg:col-span-2">
        <Title title="Our Mission" />
        <p className="text-justify text-gray-800">
          Typically refers to a project or assignment where a consulting firm or
          an independent consultant is hired to provide expert advice, guidance,
          or solutions for a specific business challenge, process, or
          opportunity. These missions can vary in scope, from strategic planning
          and management support to more specific technical or operational
          tasks. These missions can vary in scope, from strategic planning and
          management support to more specific technical or operational tasks
        </p>
      </div>
    </section>
  );
};

export default OurMession;
