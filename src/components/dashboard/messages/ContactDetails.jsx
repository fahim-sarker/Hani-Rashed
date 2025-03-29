import { HiOutlineDotsHorizontal } from "react-icons/hi";
import contactDetails from "../../../assets/contactDetails.png";
import contact from "../../../assets/contact.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import m1 from "../../../assets/m1.png";
import m2 from "../../../assets/m2.png";
import m3 from "../../../assets/m3.png";

const ContactDetails = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-5">
                <p className="text-lg font-medium">Contact Detail</p>
                <button>
                    <HiOutlineDotsHorizontal className="text-xl" />
                </button>
            </div>
            <div className="p-2 mb-5 rounded space-y-4 bg-[#F5F6FA]">
                <div className="bg-white p-3 rounded">
                    <figure className="w-14 h-14 rounded-full mb-3">
                        <img src={contactDetails} alt="" className="w-full h-full rounded-full" />
                    </figure>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <h4 className="text-[#252C32] font-medium mb-1">Walton</h4>
                            <p className="text-[#6B7280] text-sm">(971) 123-4567</p>
                        </div>
                        <figure>
                            <img src={contact} alt="contact" />
                        </figure>
                    </div>
                </div>
                <div className="">
                    <h4 className="text-[#252C32] font-medium mb-1">Email</h4>
                    <p className="text-[#6B7280] text-sm">info@rashed.org</p>
                </div>
                <div className="">
                    <h4 className="text-[#252C32] font-medium mb-1">Date</h4>
                    <p className="text-[#6B7280] text-sm">Nov 23, 2024 23:50:23 AM</p>
                </div>
            </div>
            <div className="flex justify-between items-center mb-3">
                <p className="font-medium">Media, link, doc</p>
                <button>
                    <RiArrowDropDownLine className="text-3xl" />
                </button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
                <img src={m1} alt="" />
                <img src={m2} alt="" />
                <img src={m3} alt="" />
            </div>
        </div>
    );
};

export default ContactDetails;