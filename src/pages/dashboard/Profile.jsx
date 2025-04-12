import CompanyInfo from "../../components/dashboard/profile/CompanyInfo";
import WhoToFollow from "../../components/dashboard/profile/WhoToFollow";

const Profile = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-5">
      <div className="lg:col-span-8 2xl:col-span-9">
        <CompanyInfo />
      </div>
      <div className="lg:col-span-4 2xl:col-span-3">
        <WhoToFollow />
      </div>
    </div>
  );
};

export default Profile;
