import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const WhoToFollow = () => {
    const [follow, setFollow] = useState(null);
    const { data: whoToFollowData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['whoToFollowData'],
        queryFn: async () => {
            const res = await axios.get('/profileData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...'

    return (
        <div className="bg-white rounded-lg px-4 2xl:px-5 py-5 2xl:py-7">
            <p className="rounded-t-lg text-white text-lg ps-5 font-medium py-3 bg-[#0A3760]">Who to Follow</p>
            <div className="bg-[#F9FAFB]">
                {
                    whoToFollowData.map(data => <div className="flex border-b border-dashed px-3 py-4 justify-between items-center" key={data.id}>
                        <div className="flex items-center gap-3">
                            <figure className="sm:w-14 w-12 h-12 sm:h-14 rounded-full">
                                <img src={data.brand_logo} alt="brand_logo" className="w-full h-full rounded-full object-cover" />
                            </figure>
                            <div className="">
                                <h4 className="text-lg font-medium">{data.brand_name}</h4>
                                <p className="text-gray-400">{data.brand_type}</p>
                            </div>
                        </div>
                        <button onClick={() => setFollow(data.id)} className="text-[#3A83CD] text-sm font-medium">
                            {
                                follow === data.id ? 'Following' : '+ Follow'
                            }
                        </button>
                    </div>)
                }
            </div>
            <button className="bg-primaryGreen mt-5 text-white rounded block w-full py-3">See All</button>
        </div>
    );
};

export default WhoToFollow;