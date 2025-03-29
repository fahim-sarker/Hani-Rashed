import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FollowingPost from "./FollowingPost";

const OtherCompanyFollowing = () => {
    const { data: followingData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['followingData'],
        queryFn: async () => {
            const res = await axios.get('/followingData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...'

    return (
        <>
            {/* Upper part */}
            <div className="flex justify-between aaaaassss items-center">
                <div className="pb-4 sm:pb-7">
                    <h4 className="text-xl font-medium text-[#252C32] mb-1 sm:mb-3">2100k Following</h4>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#212B36]">Sort by:</span>
                        <select className="border-none outline-none bg-transparent text-[#212B36] font-medium">
                            <option value="">Recently added</option>
                            <option value="">First Name</option>
                            <option value="">Last Name</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-400" />
            {/* Lower part */}
            <div className="mt-5 sm:mt-10">
                {
                    followingData.map(data => <FollowingPost key={data.id} data={data}></FollowingPost>)
                }
            </div>
        </>
    );
};

export default OtherCompanyFollowing;