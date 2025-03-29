import EngagementChart from "@/components/dashboard/statics/EngagementChart";
import InboundChart from "@/components/dashboard/statics/InboundChart";
import OfferedChart from "@/components/dashboard/statics/OfferedChart";
import ProfileViewingChart from "@/components/dashboard/statics/ProfileViewingChart";
import StaticsContainer from "@/components/dashboard/statics/StaticsContainer";
import { useState } from "react";

const Statics = () => {
    const [activeBtn, setActiveBtn] = useState('engagement')
    return (
        <div>
            {/* Btns */}
            <div className="flex gap-3 mt-5 mx-5 sm:mt-0 sm:mx-0 flex-wrap lg:gap-5 items-center mb-8">
                <button onClick={() => setActiveBtn('engagement')} className={`${activeBtn === 'engagement' ? 'bg-primaryGreen' : 'bg-[#919EAB]'} px-5 md:px-8 lg:px-12 py-2 md:py-3 font-medium border text-gray-50 rounded-[6px]`}>Engagement</button>
                <button onClick={() => setActiveBtn('profileOverview')} className={`${activeBtn === 'profileOverview' ? 'bg-primaryGreen' : 'bg-[#919EAB]'} px-5 md:px-8 lg:px-12 py-2 md:py-3 font-medium border text-gray-50 rounded-[6px]`}>Profile Overview</button>
                <button onClick={() => setActiveBtn('offered')} className={`${activeBtn === 'offered' ? 'bg-primaryGreen' : 'bg-[#919EAB]'} px-5 md:px-8 lg:px-12 py-2 md:py-3 font-medium border text-gray-50 rounded-[6px]`}>Offered</button>
                <button onClick={() => setActiveBtn('inbound')} className={`${activeBtn === 'inbound' ? 'bg-primaryGreen' : 'bg-[#919EAB]'} px-5 md:px-8 lg:px-12 py-2 md:py-3 font-medium border text-gray-50 rounded-[6px]`}>Inbound</button>
            </div>

            {/* Status Container */}
            <StaticsContainer />

            {/* Charts */}
            {
                activeBtn === 'engagement' && <EngagementChart />
            }
            {
                activeBtn === 'profileOverview' && <ProfileViewingChart />
            }
            {
                activeBtn === 'offered' && <OfferedChart />
            }
            {
                activeBtn === 'inbound' && <InboundChart />
            }

        </div>
    );
};

export default Statics;