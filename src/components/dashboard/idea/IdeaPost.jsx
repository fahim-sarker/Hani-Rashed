import { useState } from "react";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import likeImg from "../../../assets/icons/like.png";
import comment from "../../../assets/icons/comment.png";
import { FcLike } from "react-icons/fc";

const IdeaPost = ({ data }) => {
    const { user_name, user_profile, posted_time, desc, thumbnail, interaction } = data;
    const [isExpanded, setIsExpanded] = useState(false);
    const [like, setLike] = useState(false);
    const toggleReadMore = () => {
        setIsExpanded(true);
    };
    const shouldTruncate = desc.length > 150;

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex gap-3 sm:gap-5">
                    <figure className="sm:w-14 sm:h-14 w-12 h-12 rounded-full">
                        <img src={user_profile} alt="user_profile" className="w-full h-full rounded-full object-cover" />
                    </figure>
                    <h3 className="text-lg sm:text-2xl text-[#212B36] font-medium font-roboto">{user_name}</h3>
                </div>
                <p className="text-gray-500 text-sm">{posted_time}</p>
            </div>
            {/* Description with Read More */}
            <p className="xl:text-lg 2xl:w-3/4 text-[#525252] mb-5">
                {isExpanded ? desc : `${desc.slice(0, 350)} `}
                {!isExpanded && shouldTruncate && (
                    <button onClick={toggleReadMore} className="text-[#2F80ED]">.....view more</button>
                )}
            </p>
            <figure className="h-[220px] sm:h-[350px] rounded mb-5 sm:mb-7">
                <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded" />
            </figure>
            <div className="inline-flex px-2 py-2 sm:px-3 sm:py-[6px] border-gray-200 gap-4 sm:gap-6 items-center border rounded-full">
                <button onClick={() => setLike(!like)} className="flex text-xs sm:text-base gap-1 items-center">
                    {
                        like ? <FcLike className="text-xl" /> : <img src={likeImg} alt="like" className="w-5 h-5" />
                    }
                    <p>{interaction.like}k</p>
                </button>
                <button className="flex text-xs sm:text-base gap-1 items-center">
                    <img src={comment} alt="share" className="w-5 h-5" />
                    <p>{interaction.comment}</p>
                </button>
                <button className="flex text-xs sm:text-base gap-1 items-center">
                    <img src={eye} alt="eye" className="w-5 h-5" />
                    <p>{interaction.view} views</p>
                </button>
                <button className="flex text-xs sm:text-base gap-1 items-center">
                    <img src={share} alt="share" className="w-5 h-5" />
                    <p>{interaction.share} shared</p>
                </button>
            </div>
        </div>
    );
};

export default IdeaPost;
