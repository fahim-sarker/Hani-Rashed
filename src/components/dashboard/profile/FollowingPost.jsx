import { useState } from "react";

const FollowingPost = ({ data }) => {
    const [following, setFollowing] = useState(false)
    const { company_profile, company_name, desc, following_date, following_time } = data;

    return (
        <div className="grid sm:grid-cols-12 gap-3 sm:gap-5 py-3">
            <div className="sm:col-span-2 xl:col-span-1 flex justify-between items-center">
                <figure className="w-12 h-12 sm:w-14 sm:h-14 rounded-full">
                    <img src={company_profile} alt="company_profile" className="w-full h-full object-cover rounded-full" />
                </figure>
                <button onClick={() => setFollowing(!following)} className="border-2 sm:hidden border-[#2F80ED] text-[#2F80ED] rounded-full px-3 py-1 text-sm">
                    {
                        following ? 'Unfollow' : 'follow'
                    }
                </button>
            </div>
            <div className="sm:col-span-8">
                <h5 className="text-lg font-medium mb-2">{company_name}</h5>
                <p className="text-gray-700 mb-2 text-sm sm:text-base">{desc}</p>
                <div className="flex gap-2 text-sm text-[#637381] items-center">
                    <p className="border-r-2 pe-3">Followed {following_date}</p>
                    <p>{following_time}</p>
                </div>
            </div>
            <div className="sm:col-span-2 hidden sm:block xl:col-span-3 justify-self-end">
                <button onClick={() => setFollowing(!following)} className="border-2 border-[#2F80ED] text-[#2F80ED] rounded-full px-5 py-2">
                    {
                        following ? 'Unfollow' : 'follow'
                    }
                </button>
            </div>
        </div >
    );
};

export default FollowingPost;