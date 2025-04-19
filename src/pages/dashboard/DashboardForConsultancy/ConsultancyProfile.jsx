import WhoToFollow from "@/components/dashboard/profile/WhoToFollow";
import { useEffect, useState } from "react";
import role from "../../../assets/role.png"
import g1 from "../../../assets/g1.png"
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import useAxios from "@/components/Hooks/Api/UseAxios";
import Defaultprofile from "../../../assets/icons/defaultprofile.jpg"

const ConsultancyProfile = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const Axiosinstance =  useAxios();
    const [profiledata, setProfiledata] = useState();
    const token = JSON.parse(localStorage.getItem("authToken"));
    console.log(token);
    console.log(uploadedFile)


      useEffect(() => {
        Axiosinstance.get("me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setProfiledata(response.data.data);
            console.log(response.data.data);
          })
          
          .catch((error) => {
            console.error("Error fetching profile data:", error);
          });
      }, []);

      
    return (
        <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-8 2xl:col-span-9">
                {/* Cover image */}
                <figure className="w-full relative h-[180px] sm:h-[213px] sm:rounded" style={{
                    backgroundImage: `linear-gradient(90deg, rgba(10, 55, 96, 0.70) 0.01%, rgba(21, 113, 198, 0.01) 99.99%) , url(${profiledata?.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    <label htmlFor="fileUpload">
                        {/* <div className="absolute top-2 right-2 border rounded-full cursor-pointer">
                            <img src={update} alt="update" />
                        </div> */}
                    </label>
                    <input id="fileUpload" type="file" className="hidden" onChange={(e) => setUploadedFile(e.target.files[0])} />
                </figure>
                <div className="flex z-50 gap-3 sm:gap-7">
                    {/* Profile image */}
                    <figure className="w-32 h-32 sm:w-40 sm:h-40 relative z-50 rounded-full -mt-16 sm:-mt-20 ml-10 border-[3px]">
                        <img src={profiledata?.avatar ? profiledata?.avatar : Defaultprofile } alt="profile" className="w-full h-full object-cover rounded-full" />
                        <label htmlFor="fileUpload">
                            {/* <div className="absolute top-2/3 right-0 border rounded-full cursor-pointer">
                                <img src={update} alt="update" />
                            </div> */}
                        </label>
                        <input id="fileUpload" type="file" className="hidden" onChange={(e) => setUploadedFile(e.target.files[0])} />
                    </figure>
                    {/* Company Name */}
                    <h3 className="text-[#141414] mt-3 font-medium text-lg sm:text-2xl">{profiledata?.name}</h3>
                </div>
                <div className="p-5 shadow-sm rounded mt-5 flex bg-white gap-5 flex-wrap items-center justify-between">
                    <p className="text-[#141414] font-medium">Transforming Visions into Success!</p>
                    <div className="flex gap-3 items-center">
                        <div className="2xl:px-3 px-[5px] sm:px-2 py-1 2xl:py-2 border-2 border-primaryGreen rounded-full flex items-center gap-2 2xl:gap-3">
                            <img src={role} alt="role" className="w-8 h-8 sm:w-10  sm:h-10 rounded-full" />
                            <p className="font-medium text-sm sm:text-base">Rashed, CEO</p>
                        </div>
                        <div className=" px-[5px] sm:px-2 py-1 sm:py-2 border-2 border-primaryGreen rounded-full flex items-center gap-3">
                            <img src={role} alt="role" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                            <p className="font-medium text-sm sm:text-base">Rashed, CEO</p>
                        </div>
                    </div>
                </div>
                <div className="flex px-3 sm:px-0 justify-between mt-5 mb-5 items-center">
                    <h3 className="text-[#141414] mt-3 font-semibold text-xl"></h3>
                    <div className="flex items-center gap-3">
                        <Link to='/dashboard/consultancyFirms/profileInformation'>
                            <button className="bg-primaryGreen flex gap-2 items-center text-white px-3 py-2 sm:px-4 sm:py-3 rounded sm:rounded-lg">
                                <FaRegEdit className="text-xl" />
                                <span>Profile Information</span>
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Company Bio */}
                <h3 className="text-[#141414] px-3 sm:px-0 mt-5 mb-3 font-semibold text-xl">Company Bio</h3>
                <div className="text-[#141414] px-3 text-sm sm:text-base sm:px-0 mb-10">
                    <p>{profiledata?.description}</p>
                    {/* <br />
                    <p>Our team of seasoned experts combines industry insights with cutting-edge methodologies to help our clients overcome challenges, seize opportunities, and thrive in a competitive landscape. With a client-first approach and a proven track record of success, we are committed to transforming visions into reality and building lasting partnerships that fuel sustainable success.</p>
                    <br />
                    <p>Mission: To provide innovative, results-driven solutions that inspire growth and empower businesses to reach their full potential.</p>
                    <p> Vision: To be a trusted partner and industry leader in delivering impactful, scalable business solutions worldwide.</p> */}
                </div>

                {/* Others */}
                <h3 className="text-[#141414 px-3 sm:px-0] mt-5 mb-3 font-semibold text-xl">Gallery</h3>
                <div className="grid grid-cols-3 px-3 sm:px-0 2xl:grid-cols-4 gap-3 sm:gap-5 mb-5 sm:mb-10">
                    <img src={g1} alt="g1" className="w-full sm:h-[200px] rounded object-cover" />
                    <img src={g1} alt="g1" className="w-full sm:h-[200px] rounded object-cover" />
                    <label htmlFor="galleryImg" className="bg-white sm:h-[200px] text-sm sm:text-base text-[#7A7A7A] font-medium cursor-pointer shadow-sm rounded w-full flex justify-center gap-1 sm:gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 25 24" fill="none">
                            <g clipPath="url(#clip0_24091_13402)">
                                <path d="M12.5 0C5.8828 0 0.5 5.3828 0.5 12C0.5 18.6172 5.8828 24 12.5 24C19.1172 24 24.5 18.6163 24.5 12C24.5 5.38373 19.1172 0 12.5 0ZM12.5 22.141C6.90898 22.141 2.35902 17.592 2.35902 12C2.35902 6.40805 6.90898 1.85902 12.5 1.85902C18.091 1.85902 22.641 6.40805 22.641 12C22.641 17.592 18.092 22.141 12.5 22.141Z" fill="#7A7A7A" />
                                <path d="M17.1465 10.9864H13.4285V7.2684C13.4285 6.7553 13.013 6.33887 12.499 6.33887C11.9849 6.33887 11.5694 6.7553 11.5694 7.2684V10.9864H7.85141C7.33738 10.9864 6.92188 11.4029 6.92188 11.916C6.92188 12.4291 7.33738 12.8455 7.85141 12.8455H11.5694V16.5635C11.5694 17.0766 11.9849 17.4931 12.499 17.4931C13.013 17.4931 13.4285 17.0766 13.4285 16.5635V12.8455H17.1465C17.6606 12.8455 18.0761 12.4291 18.0761 11.916C18.0761 11.4029 17.6606 10.9864 17.1465 10.9864Z" fill="#7A7A7A" />
                            </g>
                            <defs>
                                <clipPath id="clip0_24091_13402">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Add New</span>
                    </label>
                    <input type="file" className="hidden" id="galleryImg" />
                </div>
            </div>
            <div className="lg:col-span-4 2xl:col-span-3">
                <WhoToFollow />
            </div>
        </div>
    );
};

export default ConsultancyProfile;