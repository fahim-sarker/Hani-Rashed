import axios from "axios";
import NotificationItem from "@/components/dashboard/notifications/NotificationItem";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BsCheck2All } from "react-icons/bs";

const Notifications = () => {
    const [activeBtn, setActiveBtn] = useState('all');
    const { data: notificationsData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['followingData'],
        queryFn: async () => {
            const res = await axios.get('/notificationsData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...';

    return (
        <div>
            <h3 className="text-2xl hidden sm:block mb-5 font-semibold">Notifications</h3>
            <div className="bg-white p-4 sm:p-6 mb-5 rounded flex w-full justify-between">
                <div className="flex gap-2 sm:gap-5 items-center">
                    <button onClick={() => setActiveBtn('all')} className={`border  text-sm sm:text-base px-3 sm:px-4 py-[4px] sm:py-[5px] rounded-full ${activeBtn === 'all' ? 'bg-primaryGreen text-white' : 'bg-[#E6FAF4]'}`}>All</button>
                    <button onClick={() => setActiveBtn('myPosts')} className={`border text-sm sm:text-base  px-3 sm:px-4 py-[4px] sm:py-[5px] rounded-full ${activeBtn === 'myPosts' ? 'bg-primaryGreen text-white' : 'bg-[#E6FAF4]'}`}>My Posts</button>
                    <button onClick={() => setActiveBtn('mentions')} className={`border text-sm sm:text-base  px-3 sm:px-4 py-[4px] sm:py-[5px] rounded-full ${activeBtn === 'mentions' ? 'bg-primaryGreen text-white' : 'bg-[#E6FAF4]'}`}>Mentions</button>
                </div>
                <div className="sm:flex gap-2 hidden items-center">
                    <p className="text-[#3BB515] text-sm sm:text-base">Mark all as read</p>
                    <BsCheck2All className="text-lg text-[#3BB515]" />
                </div>
            </div>
            {/* All notifications */}
            <div className="space-y-2 sm:space-y-3">
                {
                    notificationsData.map(data => <NotificationItem key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Notifications;