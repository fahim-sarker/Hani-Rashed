import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import share from "../../../assets/icons/share.png";
import likeImg from "../../../assets/icons/like.png";
import commentImg from "../../../assets/icons/comment.png";

const WatchListPost = ({ data }) => {
    const [like, setLike] = useState(false);
    const { company_logo, company_name, time, date, thumbnail, post_title, author_name, more } = data;

    return (
        <div className="bg-white shadow-lg rounded-lg">
            <div className="p-5 pb-3">
                <div className="flex items-center mb-2 justify-between">
                    <div className="flex items-center gap-3">
                        <figure className="w-10 h-10 rounded-full">
                            <img src={company_logo} alt="" className="w-full h-full object-cover rounded-full" />
                        </figure>
                        <h3 className="font-medium text-xl">{company_name}</h3>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-gray-500 text-sm">{time}</p>
                        <button><BiDotsHorizontalRounded className="text-xl" /></button>
                    </div>
                </div>
                <p className="text-gray-500 text-sm">{date}</p>
            </div>
            <hr />
            <figure className="mt-5 h-[196px]">
                <img src={thumbnail} alt="" className="w-full h-full object-cover" />
            </figure>
            <div className="p-5">
                <p className="font-medium text-[17px]">{post_title}</p>
                <p className="text-gray-500 text-sm">{author_name}</p>
                <div className="inline-flex mt-3 px-3 sm:px-4 py-[6px] bg-slate-100 border-gray-200 gap-6 items-center border rounded-full">
                    <button onClick={() => setLike(!like)} className="flex gap-1 items-center">
                        {
                            like ? <FcLike className="text-xl" /> : <img src={likeImg} alt="like" className="w-5 h-5" />
                        }
                        <p>{more.react}k</p>
                    </button>
                    <button className="flex gap-1 items-center">
                        <img src={commentImg} alt="share" className="w-5 h-5" />
                        <p>{more.comment}</p>
                    </button>
                    <button className="flex gap-1 items-center">
                        <img src={share} alt="share" className="w-5 h-5" />
                        <p>{more.share} shared</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WatchListPost;