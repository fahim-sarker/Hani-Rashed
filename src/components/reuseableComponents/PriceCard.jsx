import { MdOutlineCheckCircleOutline } from "react-icons/md";

const PriceCard = ({ box }) => {
  return (
    <div
      className={`border rounded-2xl p-5 xl:p-10 shadow-2xl border-gray-100 ${
        box?.price === "150"
          ? "bg-primaryGreen border border-primaryGreen text-white"
          : "bg-white"
      }`}
    >
      <span
        className={`mb-3 inline-block font-medium ${
          box?.price === "150" ? "text-gray-200" : "text-gray-500"
        }`}
      >
        {box.plan}
      </span>
      <div className="flex gap-2 items-center mb-4">
        <h2
          className={`text-4xl font-semibold ${
            box?.price === "150" ? "text-gray-100" : "text-gray-950"
          }`}
        >
          ${box.price}
        </h2>
        <span
          className={`rounded-full font-medium py-[1px] px-3 text-sm ${
            box?.price === "150" ? "bg-[#3cd6aa]" : "bg-gray-300"
          }`}
        >
          {box.discount}
        </span>
      </div>
      <p className="font-medium text-lg">{box.package}</p>
      <hr className="mb-7 mt-3" />
      <div className="space-y-3 mb-6">
        {box.feathers.map((feather, idx) => (
          <p key={idx} className="flex text-sm sm:text-base gap-2 items-center">
            <MdOutlineCheckCircleOutline
              className={`text-lg ${
                box?.price === "150" ? "text-gray-200" : "text-gray-600"
              }`}
            />
            <span
              className={`${
                box?.price === "150" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              {feather}
            </span>
          </p>
        ))}
      </div>
      <button
        className={`hover:bg-transparent duration-300 cursor-pointer hover:text-primaryGreen border-2 border-primaryGreen w-full bg-primaryGreen font-medium py-2 sm:py-3 rounded-lg ${
          box?.price === "150"
            ? "bg-white text-gray-800 border-white hover:text-white"
            : "text-white"
        }`}
      >
        Try Free 30 Days
      </button>
    </div>
  );
};

export default PriceCard;
