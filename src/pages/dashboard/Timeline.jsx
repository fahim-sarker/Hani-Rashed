// import CompanyName from "../../components/dashboard/timeline/CompanyName";
// import world from "../../assets/world.png";
import WhoToFollow from "@/components/dashboard/profile/WhoToFollow";
import CompanyPost from "../../components/dashboard/timeline/CompanyPost";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import Defaultprofile from "../../assets/icons/defaultprofile.jpg";

const Timeline = () => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data } = useFetchData("/me", token);

  return (
    <div className="grid lg:grid-cols-12 gap-5">
      {/* Right */}
      <div className="lg:col-span-8 2xl:col-span-9">
        {/* Create post */}
        <div className="bg-white gap-3 md:gap-5 rounded-lg border border-gray-100 mb-5 flex justify-between items-center p-4">
          <figure className="!w-12 hidden sm:block flex-shrink-0 !h-12 rounded-full border-2 ">
            <img
              src={data?.data?.avatar ? data?.data?.avatar : Defaultprofile}
              alt=""
              className="w-full h-full rounded-full object-cover "
            />
          </figure>
          <input
            type="text"
            placeholder="Start post an idea"
            className="md:w-[400px] w-full 2xl:w-[682px] px-3 sm:px-5 py-2 sm:py-3 outline-none border rounded"
          />
          <button className="px-5 sm:px-10 font-roboto py-2 sm:py-3 rounded-[5px] shadow text-white bg-primaryGreen">
            Post
          </button>
        </div>

        {/* All Posts */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-7 space-y-6 sm:space-y-10">
          <CompanyPost />
        </div>
      </div>
      <div className="lg:col-span-4 2xl:col-span-3">
        <WhoToFollow />
      </div>
    </div>
  );
};

export default Timeline;
