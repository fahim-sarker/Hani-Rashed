import Title from "../reuseableComponents/Title";
import visionImg from "../../assets/vision.png";
const OurVision = () => {
  return (
    <section className="container mt-10 mb-20">
      <Title className="text-center" title="Our Vision"></Title>
      <img src={visionImg} className="md:w-2/3 lg:w-1/2 mx-auto" />
      <p className="mt-10">
        Lorem ipsum dolor sit amet consectetur. Consequat malesuada lectus massa
        id nibh. Viverra gravida porttitor iaculis feugiat tellus. In nunc at
        metus ut vel. Ante augue vulputate felis in lectus. Rutrum rhoncus nulla
        duis nam vestibulum. Auctor bibendum imperdiet vestibulum felis ac. Leo
        urna est a at consequat pretium. Sed enim consectetur dignissim quis
        congue fames aliquam. Velit nibh felis etiam eget integer. Duis nam
        vestibulum. Auctor bibendum imperdiet vestibulum felis ac. Leo urna est
        a at consequat pretium. Sed enim consectetur dignissim quis congue fames
        aliquam. Velit nibh felis etiam eget integer
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
