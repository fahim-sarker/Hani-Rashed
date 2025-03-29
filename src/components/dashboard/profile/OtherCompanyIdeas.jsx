import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CompanyIdeaPost from "./CompanyIdeaPost";

const OtherCompanyIdeas = () => {
    const { data: ideaData, isPending, isFetching, isLoading } = useQuery({
        queryKey: ['ideaData'],
        queryFn: async () => {
            const res = await axios.get('/ideaData.json');
            return res.data;
        }
    });
    if (isPending || isFetching || isLoading) return 'Loading...'

    return (
        <div className="mt-7 space-y-7 sm:space-y-8 md:space-y-12">
            {
                ideaData.map(data => <CompanyIdeaPost data={data} key={data.id}></CompanyIdeaPost>)
            }
        </div>
    );
};

export default OtherCompanyIdeas;