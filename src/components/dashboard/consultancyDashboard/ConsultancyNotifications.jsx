import { BiCheckDouble } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const notificationsData = [
    {
        id: 1,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
    {
        id: 2,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
    {
        id: 3,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
    {
        id: 4,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
    {
        id: 5,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
    {
        id: 6,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
    {
        id: 7,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
    {
        id: 8,
        company_logo: 'https://i.ibb.co.com/ZpXhj1kJ/n1.png',
        desc: 'John Doe has submitted a leave request for .....',
        date: 'Nov 21, 2024',
        time: '09:00 PM'
    },
]

const ConsultancyNotifications = ({ showNotification, setShowNotification, }) => {
    return (
        <div>
            {
                showNotification && <div className="fixed custom-scrollbar right-60 top-24 w-[380px] border bg-slate-100 h-[450px] overflow-y-scroll shadow-xl rounded-xl">
                    <div className="flex px-5 pt-5 justify-between items-center">
                        <h5 className="text-xl ss font-medium">Notifications</h5>
                        <button onClick={() => setShowNotification(false)}><RxCross1 className="text-xl" /></button>
                    </div>
                    <p className="text-gray-500 px-5 py-3 text-sm">Stay Updated with your latest Notifications</p>
                    <div className="bg-[#DFE3E8] px-4 py-3 flex justify-between items-center">
                        <div className="flex text-gray-500 text-sm items-center gap-2">
                            <button>All</button>
                            <button>Unread (12)</button>
                        </div>
                        <div className="text-[#3BB515] text-sm flex items-center gap-1">
                            <BiCheckDouble className="text-xl" />
                            <p>Mark all as read</p>
                        </div>
                    </div>
                    <div className="space-y-4 px-5 py-5">
                        {
                            notificationsData.map(data => <div className="flex gap-3 items-center" key={data.id}>
                                <div className="col-span-2">
                                    <figure className="w-[70px] h-[70px] rounded-lg">
                                        <img src={data.company_logo} alt="" className="w-full h-full object-cover rounded" />
                                    </figure>
                                </div>
                                <div className="col-span-10">
                                    <p className="text-base">{data.desc}</p>
                                    <div className="flex text-sm mt-2 text-gray-500 items-center gap-2">
                                        <span className="border-r pr-2">{data.date}</span>
                                        <span>{data.time}</span>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="px-5 pb-5">
                        <Link onClick={() => setShowNotification(false)} to='/dashboard/smallBusiness/notifications'><button className="block w-full py-3 text-center text-white bg-primaryGreen rounded">See All</button></Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ConsultancyNotifications;