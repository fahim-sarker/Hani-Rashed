import aboutBg from "../../assets/aboutBg.png";

const AboutBanner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
      id="about"
      className="h-52 sm:h-96 flex justify-center items-center"
    >
      <h3 className="text-2xl sm:text-4xl font-semibold text-white">
        About Us
      </h3>
    </section>
  );
};

export default AboutBanner;
