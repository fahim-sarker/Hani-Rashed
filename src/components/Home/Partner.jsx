import p1 from "../../assets/p1.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import Marquee from "react-fast-marquee";

const Partner = () => {
  return (
    <section className="mb-20 container">
      <div className="flex gap-2 items-center mb-10">
        <span className="text-2xl font-semibold text-[#0B2948]">
          Our Strategic Partners
        </span>
        <span className="border-b flex-grow"></span>
      </div>
      <div className="flex gap-10 items-center flex-wrap">
        <Marquee autoFill={true} pauseOnHover={true} gradient={true}>
          <img
            src={p1}
            alt=""
            className="border px-6 py-3 rounded border-gray-100 me-10"
          />
          <img
            src={p6}
            alt=""
            className="border px-6 py-3 rounded border-gray-100 me-10"
          />
          <img
            src={p3}
            alt=""
            className="border px-6 py-3 rounded border-gray-100 me-10"
          />
          <img
            src={p4}
            alt=""
            className="border px-6 py-3 rounded border-gray-100 me-10"
          />
          <img
            src={p5}
            alt=""
            className="border px-6 py-3 rounded border-gray-100 me-10"
          />
          <img
            src={p6}
            alt=""
            className="border px-6 py-3 rounded border-gray-100 me-10"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Partner;
