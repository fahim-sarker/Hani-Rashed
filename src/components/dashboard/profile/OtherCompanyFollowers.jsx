import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FollowerPost from "./FollowerPost";

const OtherCompanyFollowers = () => {
    const { data: followerData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['followerData'],
        queryFn: async () => {
            const res = await axios.get('/followerData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...'

    return (
        <>
            {/* Upper part */}
            <div className="flex justify-between items-center">
                <div className="">
                    <h4 className="text-xl font-medium text-[#252C32] mb-1 sm:mb-3">2100k Following</h4>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#212B36]">Sort by:</span>
                        <select className="border-none bg-transparent outline-none text-[#212B36] font-medium">
                            <option value="">Recently added</option>
                            <option value="">First Name</option>
                            <option value="">Last Name</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Lower part */}
            <div className="mt-5 sm:mt-10">
                {
                    followerData.map(data => <FollowerPost key={data.id} data={data}></FollowerPost>)
                }
            </div>
        </>
    );
};

export default OtherCompanyFollowers;