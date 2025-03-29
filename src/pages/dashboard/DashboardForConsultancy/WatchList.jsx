import { CiSearch } from "react-icons/ci";
import filter from "../../../assets/icons/filter.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import WatchListPost from "./WatchListPost";

const WatchList = () => {
    const { data: watchListData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['watchListData'],
        queryFn: async () => {
            const res = await axios.get('/watchlist.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...';

    return (
        <div>
            <div className="flex p-3 sm:p-0 justify-between flex-wrap gap-3 items-center !pb-3">
                <div className="">
                    <h4 className="text-[22px] font-medium text-[#252C32]">Watchlist</h4>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#212B36]">Sort by:</span>
                        <select className="border-none bg-transparent outline-none text-[#212B36] font-medium">
                            <option value="">Recently added</option>
                            <option value="">First Name</option>
                            <option value="">Last Name</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <input type="text" className="border outline-none ps-9 pe-2 py-2 rounded sm:w-[250px]" placeholder="Search here...." />
                        <button className="absolute left-2 top-2"><CiSearch className="text-2xl text-gray-500" /></button>
                    </div>
                    <div className="flex text-[#2F80ED] font-medium gap-2 text-lg items-center">
                        <img src={filter} alt="filter" />
                        <p>Filter</p>
                    </div>
                </div>
            </div>
            <hr />

            {/* All Watch List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-7 gap-5">
                {
                    watchListData.map(data => <WatchListPost data={data} key={data.id} />)
                }
            </div>
        </div>
    );
};

export default WatchList;