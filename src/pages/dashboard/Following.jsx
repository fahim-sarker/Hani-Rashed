import { CiSearch } from "react-icons/ci";
import filter from "../../assets/icons/filter.png";
import FollowingCompany from "@/components/dashboard/following/FollowingCompany";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Following = () => {
    const { data: followingData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['followingData'],
        queryFn: async () => {
            const res = await axios.get('/followingData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...';

    return (
        <div>
            <h3 className="text-2xl hidden md:block font-medium mb-3">Following</h3>
            <div className="bg-white shadow-lg p-5 rounded-lg">
                {/* Upper part */}
                <div className="flex flex-wrap gap-5 justify-between items-center">
                    <div className="">
                        <h4 className="text-xl font-medium text-[#252C32] mb-3">2100k Following</h4>
                        <div className="flex gap-2 items-center">
                            <span className="text-[#212B36]">Sort by:</span>
                            <select className="border-none outline-none text-[#212B36] font-medium">
                                <option value="">Recently added</option>
                                <option value="">First Name</option>
                                <option value="">Last Name</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="relative">
                            <input type="text" className="border outline-none ps-9 pe-2 py-2 rounded w-full sm:w-[250px]" placeholder="Search here...." />
                            <button className="absolute left-2 top-2"><CiSearch className="text-2xl text-gray-500" /></button>
                        </div>
                        <div className="flex text-[#2F80ED] font-medium gap-2 text-lg items-center">
                            <img src={filter} alt="filter" />
                            <p>Filter</p>
                        </div>
                    </div>
                </div>
                {/* Lower part */}
                <div className="mt-10">
                    {
                        followingData.map(data => <FollowingCompany key={data.id} data={data}></FollowingCompany>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Following;