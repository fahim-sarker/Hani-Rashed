import CompanyName from "../../components/dashboard/timeline/CompanyName";
import world from "../../assets/world.png"
import CompanyPost from "../../components/dashboard/timeline/CompanyPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Timeline = () => {
    const { data: companyData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['companyData'],
        queryFn: async () => {
            const res = await axios.get('/companyData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...'

    return (
        <div className="grid lg:grid-cols-12 gap-5">
            {/* left */}
            <div className="lg:col-span-4 2xl:col-span-3">
                {/* Company Profile */}
                <CompanyName />

                {/* Recent View */}
                <div className="hidden lg:block bg-white p-6 mt-6 rounded-lg border">
                    <h3 className="text-2xl font-medium mt-2 mb-5">Recent View</h3>
                    <div className="space-y-5">
                        <p className="flex gap-3 items-center">
                            <figure className="w-5 h-5">
                                <img src={world} alt="world" className="w-full h-full object-cover" />
                            </figure>
                            <span>Small Business</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <figure className="w-5 h-5">
                                <img src={world} alt="world" className="w-full h-full object-cover" />
                            </figure>
                            <span>Business Strategy</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <figure className="w-5 h-5">
                                <img src={world} alt="world" className="w-full h-full object-cover" />
                            </figure>
                            <span>Leadership</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <figure className="w-5 h-5">
                                <img src={world} alt="world" className="w-full h-full object-cover" />
                            </figure>
                            <span>Business Grow</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="lg:col-span-8 2xl:col-span-9">

                {/* Create post */}
                <div className="bg-white gap-3 md:gap-5 rounded-lg border border-gray-100 mb-5 flex justify-between items-center p-4">
                    <figure className="!w-12 hidden sm:block flex-shrink-0 !h-12 rounded-full">
                        <img src="https://i.ibb.co.com/4RMKSy7m/pexels-olly-3785079.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                    </figure>
                    <input type="text" placeholder="Start post an idea" className="md:w-[400px] w-full 2xl:w-[682px] px-3 sm:px-5 py-2 sm:py-3 outline-none border rounded" />
                    <button className="px-5 sm:px-10 font-roboto py-2 sm:py-3 rounded-[5px] shadow text-white bg-primaryGreen">Post</button>
                </div>

                {/* All Posts */}
                <div className="bg-white shadow-lg rounded-lg p-4 sm:p-7 space-y-6 sm:space-y-10">
                    {
                        companyData.map(data => <CompanyPost data={data} key={data.id}></CompanyPost>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;