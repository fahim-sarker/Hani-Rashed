import { useState } from "react";

const FollowerCompany = ({ data }) => {
    const [follow, setFollow] = useState(false)
    const { company_profile, company_name, desc, following_date, following_time } = data;

    return (
        <div className="grid md:grid-cols-12 gap-2 md:gap-8 border-t py-5 lg:pe-10">
            <div className="md:col-span-1 flex items-center justify-between">
                <figure className="w-12 h-12 lg:w-14 lg:h-14 rounded-full">
                    <img src={company_profile} alt="company_profile" className="w-full h-full object-cover rounded-full" />
                </figure>
                <button onClick={() => setFollow(!follow)} className="border-2 md:hidden text-sm border-[#2F80ED] text-[#2F80ED] rounded-full px-3 py-1">
                    {
                        follow ? 'Following' : 'Follow'
                    }
                </button>
            </div>
            <div className="md:col-span-8">
                <h5 className="text-lg font-medium mb-2">{company_name}</h5>
                <p className="text-gray-700 text-sm sm:text-base mb-2">{desc}</p>
                <div className="flex gap-2 text-sm text-[#637381] items-center">
                    <p className="border-r-2 pe-3">Followed {following_date}</p>
                    <p>{following_time}</p>
                </div>
            </div>
            <div className="md:col-span-3 hidden justify-self-end md:flex gap-7 items-center">
                <button onClick={() => setFollow(!follow)} className="border-2 border-[#2F80ED] text-[#2F80ED] rounded-full px-5 py-2">
                    {
                        follow ? 'Following' : 'Follow'
                    }
                </button>
            </div>
        </div >
    );
};

export default FollowerCompany;