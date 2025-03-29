import { BiDotsHorizontalRounded } from "react-icons/bi";

const NotificationItem = ({ data }) => {
    const { company_logo, company_name, desc, notification_time, notification_date, notification_duration } = data;
    return (
        <div className="flex gap-3 sm:gap-5 border-t border-b px-3 py-3 bg-white">
            {/* Company Logo */}
            <figure className="w-10 h-10 sm:w-16 sm:h-16 flex-shrink-0 rounded">
                <img src={company_logo} alt="company_logo" className="w-full h-full rounded object-cover" />
            </figure>
            {/* desc */}
            <div className="flex-grow">
                <div className="flex gap-[5px] mb-1 flex-grow justify-between">
                    <p className="text-[13px] sm:text-base"><span className="font-medium">{company_name} posted an update: </span>{desc}</p>
                    <p><BiDotsHorizontalRounded className="text-xl sm:text-2xl" /></p>
                </div>
                <div className="flex gap-[5px] flex-grow items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <p className="text-[#637381] border-r pr-3 text-xs sm:text-sm">{notification_date}</p>
                        <p className="text-[#637381] text-xs sm:text-sm">{notification_time}</p>
                    </div>
                    <p className="text-[#637381] text-xs sm:text-sm">{notification_duration}</p>
                </div>
            </div>
        </div>
    );
};

export default NotificationItem;