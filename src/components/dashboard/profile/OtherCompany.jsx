import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OtherCompanyIdeas from './OtherCompanyIdeas';
import OtherCompanyFollowing from './OtherCompanyFollowing';
import OtherCompanyFollowers from './OtherCompanyFollowers';
import OtherCompanyProfile from './OtherCompanyProfile';
import cover from "../../../assets/companyCover.png"
import profile from "../../../assets/profile.png"
import 'react-tabs/style/react-tabs.css';
import WhoToFollow from './WhoToFollow';

const OtherCompany = () => {
    return (
        <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-8 2xl:col-span-9">
                <>
                    {/* Cover image */}
                    <figure className="w-full h-[180px] sm:h-[213px] sm:rounded" style={{
                        backgroundImage: `linear-gradient(90deg, rgba(10, 55, 96, 0.70) 0.01%, rgba(21, 113, 198, 0.01) 99.99%) , url(${cover})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}>
                    </figure>
                    <div className="flex z-50 gap-3 sm:gap-7 mb-3 sm:mb-5">
                        {/* Profile image */}
                        <figure className="w-32 h-32 sm:w-40 sm:h-40 z-50 rounded-full -mt-16 sm:-mt-20 ml-6 sm:ml-10 border-[3px]">
                            <img src={profile} alt="profile" className="w-full h-full object-cover rounded-full" />
                        </figure>
                        {/* Company Name */}
                        <h3 className="text-[#141414] mt-3 font-medium text-xl sm:text-2xl">Company Name</h3>
                    </div>

                    {/* Tabs here */}
                    <div className='p-2 sm:p-0'>
                        <Tabs>
                            <TabList>
                                <Tab>Company Profile</Tab>
                                <Tab>Ideas</Tab>
                                <Tab>Following</Tab>
                                <Tab>Followers</Tab>
                            </TabList>
                            <TabPanel>
                                <OtherCompanyProfile />
                            </TabPanel>
                            <TabPanel>
                                <OtherCompanyIdeas />
                            </TabPanel>
                            <TabPanel>
                                <OtherCompanyFollowing />
                            </TabPanel>
                            <TabPanel>
                                <OtherCompanyFollowers />
                            </TabPanel>
                        </Tabs>
                    </div>
                </>
            </div>
            <div className="lg:col-span-4 2xl:col-span-3">
                <WhoToFollow />
            </div>
        </div>
    );
};

export default OtherCompany;