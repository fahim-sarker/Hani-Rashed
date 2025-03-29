import { IdeaPopup } from "@/components/dashboard/idea/IdeaPopup";
import IdeaPost from "@/components/dashboard/idea/IdeaPost";
const ideaData = [
    {
        id: 1,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "7 minutes ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 1.2, comment: 500, view: 24, share: 100 }
    },
    {
        id: 2,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "15 minutes ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 2.3, comment: 450, view: 30, share: 110 }
    },
    {
        id: 3,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "30 minutes ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 3.1, comment: 600, view: 45, share: 90 }
    },
    {
        id: 4,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "1 hour ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 1.8, comment: 400, view: 20, share: 80 }
    },
    {
        id: 5,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "2 hours ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 2.0, comment: 550, view: 50, share: 120 }
    },
    {
        id: 6,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "3 hours ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 1.5, comment: 300, view: 35, share: 70 }
    },
    {
        id: 7,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "5 hours ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 2.7, comment: 620, view: 55, share: 140 }
    },
    {
        id: 8,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "6 hours ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 1.9, comment: 480, view: 40, share: 105 }
    },
    {
        id: 9,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "8 hours ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 3.5, comment: 700, view: 60, share: 150 }
    },
    {
        id: 10,
        userName: "youSENTit",
        userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
        postedTime: "10 hours ago",
        desc: "It seems like you are asking for an image related to post management...",
        thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
        interaction: { like: 2.1, comment: 520, view: 42, share: 130 }
    }
];
const Idea = () => {

    return (
        <>
            <div className="flex mt-4 sm:mt-0 mx-3 sm:mx-0 pb-5 justify-between items-center">
                <p className="text-lg sm:text-2xl font-medium text-[#212B36]">Recently Posted Idea</p>
                <IdeaPopup />
            </div>
            <hr />
            {/* All Ideas */}
            <div className="bg-white mt-5 sm:mt-7 shadow-lg rounded-lg p-4 sm:p-7 space-y-8 sm:space-y-12">
                {
                    ideaData.map(data => <IdeaPost data={data} key={data.id}></IdeaPost>)
                }
            </div>
        </>
    );
};

export default Idea;