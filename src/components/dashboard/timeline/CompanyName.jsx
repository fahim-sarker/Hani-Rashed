import companyBg from "../../../assets/companyBg.png"
import companyLogo from "../../../assets/profile.png"

const CompanyName = () => {
    return (
        <div className="bg-white sm:rounded-lg border">
            <figure className="h-[100px]">
                <img src={companyBg} alt="companyBg" className="w-full h-full object-cover sm:rounded-t-lg" />
            </figure>
            <div className="w-36 h-36 mx-auto -mt-14 z-50 rounded-full">
                <img src={companyLogo} alt="companyLogo" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-medium mt-2 text-center mb-10">Company name</h3>
            <div className="">
                <p className="flex text-lg py-3 px-7 justify-between border-t border-b">
                    <span>Following</span>
                    <span>20</span>
                </p>
                <p className="flex text-lg py-3 px-7 justify-between">
                    <span>Follower</span>
                    <span>80</span>
                </p>
                <p className="flex text-lg py-3 pb-7 px-7 justify-between border-t">
                    <span>Total Post</span>
                    <span>07</span>
                </p>
            </div>
        </div>
    );
};

export default CompanyName;