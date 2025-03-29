import { useState } from "react";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import likeImg from "../../../assets/icons/like.png";
import comment from "../../../assets/icons/comment.png";
import { FcLike } from "react-icons/fc";

const CompanyIdeaPost = ({ data }) => {
    const { user_name, user_profile, posted_time, desc, thumbnail, interaction } = data;
    const [isExpanded, setIsExpanded] = useState(false);
    const [follow, setFollow] = useState(false);
    const [like, setLike] = useState(false);
    const toggleReadMore = () => {
        setIsExpanded(true);
    };
    const shouldTruncate = desc.length > 150;

    return (
        <div>
            <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex gap-3 sm:gap-5 items-center">
                    <figure className="w-12 h-12 sm:w-14 sm:h-14 rounded-full">
                        <img src={user_profile} alt="user_profile" className="w-full h-full rounded-full object-cover" />
                    </figure>
                    <h3 className="text-base sm:text-2xl text-[#212B36] font-medium font-roboto">{user_name}</h3>
                    <button onClick={() => setFollow(!follow)} className="text-[#3A83CD] text-sm font-medium">
                        {
                            follow ? 'Following' : '+ Follow'
                        }
                    </button>
                </div>
                <p className="text-gray-500 text-sm sm:text-base">{posted_time}</p>
            </div>
            {/* Description with Read More */}
            <p className="text-sm sm:text-base xl:text-lg 2xl:w-3/4 text-[#525252] mb-5">
                {isExpanded ? desc : `${desc.slice(0, 350)} `}
                {!isExpanded && shouldTruncate && (
                    <button onClick={toggleReadMore} className="text-[#2F80ED]">.....view more</button>
                )}
            </p>
            <figure className="xl:h-[350px] h-[200px] sm:h-[300px] rounded mb-4 sm:mb-7">
                <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded" />
            </figure>
            <div className="inline-flex px-2 sm:px-5 py-[5px] sm:py-[6px] bg-white border-gray-200 gap-3 sm:gap-6 items-center border rounded-full">
                <button onClick={() => setLike(!like)} className="text-sm sm:text-base flex gap-1 items-center">
                    {
                        like ? <FcLike className="text-xl" /> : <img src={likeImg} alt="like" className="w-5 h-5" />
                    }
                    <p>{interaction.like}k</p>
                </button>
                <button className="text-sm sm:text-base flex gap-1 items-center">
                    <img src={comment} alt="share" className="w-5 h-5" />
                    <p>{interaction.comment}</p>
                </button>
                <button className="text-sm sm:text-base flex gap-1 items-center">
                    <img src={eye} alt="eye" className="w-5 h-5" />
                    <p>{interaction.view} views</p>
                </button>
                <button className="text-sm sm:text-base flex gap-1 items-center">
                    <img src={share} alt="share" className="w-4 h-4" />
                    <p>{interaction.share} shared</p>
                </button>
            </div>
        </div>
    );
};

export default CompanyIdeaPost;
