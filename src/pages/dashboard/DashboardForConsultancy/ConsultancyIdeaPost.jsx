import date from "../../../assets/icons/calendar.png"
import react from "../../../assets/icons/love_react.png"
import msg from "../../../assets/icons/msg.png"
import offers from "../../../assets/icons/offers.png"
import watchList from "../../../assets/icons/watchlist.png"
import offer from "../../../assets/icons/offer.png"
import download from "../../../assets/icons/download.png"
import { Link } from "react-router-dom"

const ConsultancyIdeaPost = ({ data }) => {
    const { id, thumbnail, company_logo, company_name, title, desc, more } = data;
    return (
        <div className="bg-white shadow p-3 sm:p-5 rounded-lg grid lg:grid-cols-12 gap-5 2xl:gap-7">
            <div className="lg:col-span-4 2xl:col-span-3">
                <figure className="h-[200px] sm:h-[300px] rounded">
                    <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded" />
                </figure>
            </div>
            <div className="lg:col-span-8 2xl:col-span-9">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <figure className="w-12 h-12 sm:w-14 sm:h-14 rounded-full">
                        <img src={company_logo} alt="company_logo" className="w-full h-full object-cover rounded-full" />
                    </figure>
                    <h3 className="font-medium text-lg sm:text-xl">{company_name}</h3>
                </div>
                <Link to={`/dashboard/consultancyFirms/ideaDetails/${id}`}>
                    <h3 className="text-[#212B36] font-medium text-lg sm:text-[22px] mb-2">{title}</h3>
                </Link>
                <p className="text-[#797676] text-sm sm:text-base mb-3">{desc.slice(0, 220)}<span className="text-xl">........</span></p>
                <button className="flex items-center gap-2 bg-[#E0FFF6] border border-primaryGreen px-3 py-1 text-sm sm:text-base sm:px-4 sm:py-2 rounded-full">
                    <img src={download} alt="download" />
                    <span className="text-gray-600">PDF</span>
                </button>
                <div className="flex flex-wrap gap-5 mt-3 sm:mt-5 justify-between items-center">
                    <div className="flex gap-4 sm:gap-5 items-center">
                        <button className="sm:flex hidden bg-[#F4F6FB] px-2 py-1 text-xs sm:px-4 sm:py-2 rounded-full border-gray-100 shadow-sm border gap-1 sm:text-sm text-gray-700 items-center">
                            <img src={date} alt="" className="w-5 h-5" />
                            <span>{more.date}</span>
                        </button>
                        <button className="flex bg-[#F4F6FB] px-2 py-1 text-xs sm:px-4 sm:py-2 rounded-full border-gray-100 shadow-sm border gap-1 sm:text-sm text-gray-700 items-center">
                            <img src={react} alt="" className="w-5 h-5" />
                            <span>{more.reach}K</span>
                        </button>
                        <button className="flex bg-[#F4F6FB] px-2 py-1 text-xs sm:px-4 sm:py-2 rounded-full border-gray-100 shadow-sm border gap-1 sm:text-sm text-gray-700 items-center">
                            <img src={msg} alt="" className="w-5 h-5" />
                            <span>{more.comment}K</span>
                        </button>
                        <button className="flex bg-[#F4F6FB] px-2 py-1 text-xs sm:px-4 sm:py-2 rounded-full border-gray-100 shadow-sm border gap-1 sm:text-sm text-gray-700 items-center">
                            <img src={offers} alt="" className="w-5 h-5" />
                            <span>{more.offer} offers</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex rounded px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-[10px] items-center gap-1 sm:gap-2 bg-primaryGreen text-white">
                            <img src={watchList} alt="" className="w-5 h-5" />
                            <p>Watch List</p>
                        </button>
                        <button className="flex rounded px-3 py-2 text-sm sm:text-base sm:px-4 sm:py-[10px] items-center gap-1 sm:gap-2 bg-primaryGreen text-white">
                            <img src={offer} alt="" className="w-5 h-5" />
                            <p>Sent Offer</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultancyIdeaPost;