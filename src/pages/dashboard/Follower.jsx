import { CiSearch } from "react-icons/ci";
import filter from "../../assets/icons/filter.png";
import FollowerCompany from "@/components/dashboard/follower/FollowerCompany";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Follower = () => {
    const { data: followerData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['followerData'],
        queryFn: async () => {
            const res = await axios.get('/followerData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...'

    return (
        <div>
            <h3 className="text-2xl hidden sm:block font-medium mb-3">Follower</h3>
            <div className="bg-white shadow-lg p-3 sm:p-5 rounded-lg">
                {/* Upper part */}
                <div className="flex justify-between flex-wrap gap-3 items-center">
                    <div className="">
                        <h4 className="text-xl font-medium text-[#252C32] mb-2 sm:mb-3">2100k Followers</h4>
                        <div className="flex gap-2 items-center">
                            <span className="text-[#212B36]">Sort by:</span>
                            <select className="border-none outline-none text-[#212B36] font-medium">
                                <option value="">Recently added</option>
                                <option value="">First Name</option>
                                <option value="">Last Name</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-5">
                        <div className="relative">
                            <input type="text" className="border outline-none ps-7 text-sm sm:text-base sm:ps-9 pe-2 py-[6px] sm:py-2 rounded w-[220px] sm:w-[250px]" placeholder="Search here...." />
                            <button className="absolute left-1 sm:left-2 top-[6px] sm:top-2"><CiSearch className="text-xl sm:last:text-2xl text-gray-500" /></button>
                        </div>
                        <div className="flex text-[#2F80ED] font-medium gap-2 text-lg items-center">
                            <img src={filter} alt="filter" />
                            <p className="text-[15px] sm:text-base">Filter</p>
                        </div>
                    </div>
                </div>
                {/* Lower part */}
                <div className="mt-5 sm:mt-10">
                    {
                        followerData.map(data => <FollowerCompany key={data.id} data={data}></FollowerCompany>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Follower;