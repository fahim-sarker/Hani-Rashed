import { BiDotsHorizontalRounded } from "react-icons/bi";
import chat from "../../../assets/icons/chat.png"
import { useState } from "react";
import { Link } from "react-router-dom";

const FollowingCompany = ({ data }) => {
    const [following, setFollowing] = useState(false)
    const { company_profile, company_name, desc, following_date, following_time } = data;

    return (
        <div className="grid md:grid-cols-12 gap-8 border-t py-5">
            <div className="hidden md:block md:col-span-1">
                <figure className="w-16 h-16 rounded-full">
                    <img src={company_profile} alt="company_profile" className="w-full h-full object-cover rounded-full" />
                </figure>
            </div>
            <div className="md:col-span-7">
                <div className="md:hidden flex justify-between items-center">
                    <figure className="sm:w-16 w-14 h-14 sm:h-16 rounded-full">
                        <img src={company_profile} alt="company_profile" className="w-full h-full object-cover rounded-full" />
                    </figure>
                    <div className="flex gap-5 items-center">
                        <Link to='/dashboard/smallBusiness/messages'>
                            <img src={chat} alt="chat" className="w-7 flex-shrink" />
                        </Link>
                        <button onClick={() => setFollowing(!following)} className="border-2 border-[#2F80ED] text-[#2F80ED] rounded-full px-3 py-1 text-sm">
                            {
                                following ? 'Follow' : 'Unfollow'
                            }
                        </button>
                        <button>
                            <BiDotsHorizontalRounded className="text-2xl" />
                        </button>
                    </div>
                </div>
                <h5 className="text-lg font-medium mb-2">{company_name}</h5>
                <p className="text-gray-700 mb-2 text-sm md:text-base">{desc}</p>
                <div className="flex gap-2 text-sm text-[#637381] items-center">
                    <p className="border-r-2 pe-3">Followed {following_date}</p>
                    <p>{following_time}</p>
                </div>
            </div>
            <div className="md:col-span-4 hidden justify-self-end md:flex gap-5 items-center">
                <Link to='/dashboard/smallBusiness/messages'>
                    <img src={chat} alt="chat" className="w-8 flex-shrink" />
                </Link>
                <button onClick={() => setFollowing(!following)} className="border-2 border-[#2F80ED] text-[#2F80ED] rounded-full px-5 py-2">
                    {
                        following ? 'Follow' : 'Unfollow'
                    }
                </button>
                <button>
                    <BiDotsHorizontalRounded className="text-2xl" />
                </button>
            </div>
        </div >
    );
};

export default FollowingCompany;