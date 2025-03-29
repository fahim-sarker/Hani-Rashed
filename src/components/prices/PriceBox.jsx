import { useState } from "react";
import PriceCard from "../reuseableComponents/PriceCard";
const priceBoxArr = [
  {
    plan: "Per month",
    price: "120",
    discount: "Save 20%",
    package: "For New Starter - Regular",
    feathers: [
      "HR form and template.",
      "Staffing and hiring planning.",
      "HR vendor selection services.",
      "HR coaching and industry.",
      "Structured process and resources.",
      "Alumni network establishment.",
    ],
  },
  {
    plan: "Per month",
    price: "150",
    discount: "Save 20%",
    package: "For Pro Business - Medium",
    feathers: [
      "Initial consultation plan.",
      "Customized action plan.",
      "Email support for 30 days.",
      "Phone and email support.",
      "Comprehensive business analysis.",
      "Implementation support.",
    ],
  },
  {
    plan: "Per month",
    price: "299",
    discount: "Save 20%",
    package: "For Advance Business - Custom",
    feathers: [
      "In-depth industry research.",
      "Quarterly progress reports.",
      "Ongoing email and phone.",
      "Competitive analysis.",
      "Strategic planning.",
      "Money-Back Guarantee.",
    ],
  },
];

const PriceBox = () => {
  const [activeBtn, setActiveBtn] = useState("month");
  return (
    <section className="container mb-28">
      <div className="lg:-mt-72">
        <div className="relative">
          <div className="flex absolute -top-32 lg:-top-12 left-1/2 -translate-x-1/2 border-[7px] border-primarySky gap-2 rounded-full items-center w-[200px] justify-center py-2 mx-auto mb-2 bg-white">
            <button
              onClick={() => setActiveBtn("month")}
              className={` ${
                activeBtn === "month"
                  ? "bg-primaryGreen text-white px-5 py-2 rounded-full"
                  : "bg-[#cff2e8] text-primaryGreen px-5 font-medium py-2 rounded-full"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setActiveBtn("year")}
              className={` ${
                activeBtn === "year"
                  ? "bg-primaryGreen text-white px-5 py-2 rounded-full"
                  : "bg-[#cff2e8] text-primaryGreen px-5 font-medium py-2 rounded-full"
              }`}
            >
              Year
            </button>
          </div>
          <div className="grid mt-20 lg:-mt-5 lg:grid-cols-3 gap-5 xl:gap-10">
            {priceBoxArr.map((box) => (
              <PriceCard box={box} key={box.price}></PriceCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBox;
