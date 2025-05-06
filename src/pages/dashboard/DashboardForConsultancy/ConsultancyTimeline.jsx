import ConsultancyIdeaPost from "@/components/dashboard/consultancyDashboard/ConsultancyIdeaPost";
import WhoToFollow from "@/components/dashboard/profile/WhoToFollow";
const ideaData = [
  {
    id: 1,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "7 minutes ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 1.2, comment: 500, view: 24, share: 100 },
  },
  {
    id: 2,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "15 minutes ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 2.3, comment: 450, view: 30, share: 110 },
  },
  {
    id: 3,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "30 minutes ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 3.1, comment: 600, view: 45, share: 90 },
  },
  {
    id: 4,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "1 hour ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 1.8, comment: 400, view: 20, share: 80 },
  },
  {
    id: 5,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "2 hours ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 2.0, comment: 550, view: 50, share: 120 },
  },
  {
    id: 6,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "3 hours ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 1.5, comment: 300, view: 35, share: 70 },
  },
  {
    id: 7,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "5 hours ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 2.7, comment: 620, view: 55, share: 140 },
  },
  {
    id: 8,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "6 hours ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 1.9, comment: 480, view: 40, share: 105 },
  },
  {
    id: 9,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "8 hours ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 3.5, comment: 700, view: 60, share: 150 },
  },
  {
    id: 10,
    userName: "youSENTit",
    userProfile: "https://i.ibb.co.com/6RV007gQ/profile.png",
    postedTime: "10 hours ago",
    desc: "It seems like you are asking for an image related to post management...",
    thumbnail: "https://i.ibb.co.com/27kgJyhy/thumbnail.png",
    interaction: { like: 2.1, comment: 520, view: 42, share: 130 },
  },
];

const ConsultancyTimeline = () => {
  return (
    <div>
      {/* Create post */}
      <div className="bg-white gap-[10px] sm:gap-5 rounded-lg border border-gray-100 mb-5 flex justify-between items-center p-2 sm:p-4">
        <figure className="w-12 h-12 flex-shrink-0 rounded-full">
          <img
            src="https://i.ibb.co.com/4RMKSy7m/pexels-olly-3785079.jpg"
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </figure>
        <input
          type="text"
          placeholder="Start post an idea"
          className="w-full px-3 sm:px-5 py-2 sm:py-3 outline-none border rounded"
        />
        <button className="sm:px-10 px-3 font-roboto py-2 sm:py-3 rounded-[5px] shadow text-white bg-primaryGreen">
          Post
        </button>
      </div>

      {/* All Posts */}
      <div className="grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 2xl:col-span-9 space-y-6 sm:space-y-8 bg-white p-3 sm:p-5 rounded-lg shadow-lg">
          <ConsultancyIdeaPost />
        </div>
        <div className="lg:col-span-4 2xl:col-span-3">
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
};

export default ConsultancyTimeline;
