const OtherCompanyProfile = () => {
    return (
        <div>
            {/* Company Bio */}
            <h3 className="text-[#141414] mb-5 mt-3 font-semibold text-xl">Company Bio</h3>
            <div className="text-[#141414] mb-10 text-sm sm:text-base">
                <p>[Your Consultancy Name] is a forward-thinking consultancy firm dedicated to empowering businesses of all sizes to achieve their goals. Established with a vision to drive innovation and foster growth, we specialize in delivering tailored solutions across strategy, marketing, operations, and financial planning.</p>
                <br />
                <p>Our team of seasoned experts combines industry insights with cutting-edge methodologies to help our clients overcome challenges, seize opportunities, and thrive in a competitive landscape. With a client-first approach and a proven track record of success, we are committed to transforming visions into reality and building lasting partnerships that fuel sustainable success.</p>
                <br />
                <p>Mission: To provide innovative, results-driven solutions that inspire growth and empower businesses to reach their full potential.</p>
                <p> Vision: To be a trusted partner and industry leader in delivering impactful, scalable business solutions worldwide.</p>
            </div>
            {/* Company Information */}
            <div className="mb-10">
                <h3 className="text-[#141414] mb-5 font-semibold text-xl">Company Information</h3>
                <form className="border p-5 sm:px-7 sm:py-7 border-gray-300 rounded-lg grid sm:grid-cols-2 gap-x-5 md:gap-x-8 gap-y-3 sm:gap-y-5">
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Company Name</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="Company Name" />
                    </div>
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Country</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="Saudi Arabian" />
                    </div>
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Description</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="Your Consultancy Name is a forward-thinking..." />
                    </div>
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Industry</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="Small Business" />
                    </div>
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Website</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="www.xyz.com" />
                    </div>
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Company Stage</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="Incorporation" />
                    </div>
                </form>
            </div>
            {/* Primary Contact Information */}
            <div className="">
                <h3 className="text-[#141414] mb-5 font-semibold text-xl">Primary Contact Information</h3>
                <form className="border p-5 sm:px-7 sm:py-7 border-gray-300 rounded-lg grid sm:grid-cols-2 gap-x-5 md:gap-x-8 gap-y-3 sm:gap-y-5">
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2"> Primary Contact Name</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="Jane Cooper" />
                    </div>
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Email Address</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="hanirashed@gmail.com" />
                    </div>
                    <div className="">
                        <label className="text-[#252C32] block font-medium text-lg mb-2">Phone Number</label>
                        <input readOnly className="block text-gray-400 w-full px-3 py-2 text-sm sm:text-base sm:px-5 sm:py-3 border outline-none rounded" defaultValue="+966-2-6067221" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OtherCompanyProfile;