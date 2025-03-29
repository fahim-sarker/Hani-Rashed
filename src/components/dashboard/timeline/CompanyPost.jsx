import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import likeImg from "../../../assets/icons/like.png";
import commentImg from "../../../assets/icons/comment.png";
import { Link } from "react-router-dom";

const CompanyPost = ({ data }) => {
    const { id, company_name, company_logo, posted_time, desc, thumbnail, interaction } = data;
    const [isExpanded, setIsExpanded] = useState(false);
    const [showComment, setShowComment] = useState(null);
    const [like, setLike] = useState(false);
    const [follow, setFollow] = useState(false);
    const [comment, setComment] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(true);
    };
    const shouldTruncate = desc.length > 150;

    const handleComment = () => {
        const commentText = document.getElementById('commentText').value;
        if (commentText.length > 0) {
            setComment(commentText)
        }
    }

    return (
        <>
            <div className="border-b pb-5">
                <div className="flex items-center justify-between mb-3 sm:mb-5 xl:mb-7">
                    <div className="flex gap-4 sm:gap-5 items-center">
                        <Link to='/dashboard/smallBusiness/otherCompany' className="flex gap-3 sm:gap-5 items-center">
                            <figure className="w-12 h-12 sm:w-14 sm:h-14 rounded-full">
                                <img src={company_logo} alt="company_logo" className="w-full h-full rounded-full object-cover" />
                            </figure>
                            <h3 className="text-xl sm:text-2xl hover:underline text-[#212B36] font-medium font-roboto">{company_name}</h3>
                        </Link>
                        <button onClick={() => setFollow(!follow)} className="text-[#3A83CD] text-sm sm:text-base font-medium">
                            {
                                follow ? 'Following' : '+ Follow'
                            }
                        </button>
                    </div>
                    <p className="text-gray-500 hidden sm:block">{posted_time}</p>
                </div>
                {/* Description with Read More */}
                <p className="xl:text-lg text-[15px] sm:text-base text-[#525252] mb-5">
                    {isExpanded ? desc : `${desc.slice(0, 350)} `}
                    {!isExpanded && shouldTruncate && (
                        <button onClick={toggleReadMore} className="text-gray-500">.....more</button>
                    )}
                </p>
                <figure className="h-[200px] sm:h-[280px] xl:h-[350px] rounded mb-7">
                    <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover rounded" />
                </figure>
                <div className="flex gap-3 sm:gap-6 items-center">
                    <button onClick={() => setLike(!like)} className="text-xs sm:text-base flex gap-1 items-center pr-3 sm:pr-5 border-r">
                        {
                            like ? <FcLike className="text-xl" /> : <img src={likeImg} alt="like" className="w-5 h-5" />
                        }
                        <p>{interaction.like}k</p>
                    </button>
                    <button onClick={() => setShowComment(id)} className="text-xs sm:text-base flex gap-1 items-center pr-3 sm:pr-5 border-r">
                        <img src={commentImg} alt="share" className="w-5 h-5" />
                        <p>{interaction.comment}</p>
                    </button>
                    <button className="text-xs sm:text-base flex gap-1 items-center pr-3 sm:pr-5 border-r">
                        <img src={eye} alt="eye" className="w-4 h-4" />
                        <p>{interaction.view} views</p>
                    </button>
                    <button className="text-xs sm:text-base flex gap-1 items-center">
                        <img src={share} alt="share" className="w-4 h-4" />
                        <p>{interaction.share} shared</p>
                    </button>
                </div>
            </div>

            {/* reply comment */}
            {
                showComment === data.id && <div className='relative mb-3 sm:mb-4' >
                    <textarea rows={1} id="commentText" type="text" className="border border-primaryGreen outline-none pr-16 pl-2  text-sm sm:text-base sm:pl-5 py-2 sm:py-5 rounded w-full" placeholder="Comment here...." />
                    <button onClick={handleComment} className="absolute right-2 sm:right-4 bottom-3 sm:bottom-5 bg-primaryGreen text-white w-8 h-7 sm:w-11 sm:h-10 grid place-items-center rounded"><IoIosSend className="text-lg sm:text-2xl text-white" /></button>
                </div>
            }
            {/* read comment */}
            {
                comment && <div className="bg-white p-3 sm:p-5 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-3 sm:gap-5 items-center">
                            <figure className="w-7 h-7 sm:w-11 sm:h-11 rounded-full">
                                <img src={company_logo} alt="company_logo" className="w-full h-full rounded-full object-cover" />
                            </figure>
                            <h3 className="text-lg sm:text-xl text-[#212B36] font-medium font-roboto">{company_name}</h3>
                            <button className="text-sm sm:text-base text-[#3A83CD] font-medium">+ Follow</button>
                        </div>
                        <div className="hidden sm:flex gap-1 sm:gap-3 items-center">
                            <p className="text-gray-500">{posted_time}</p>
                            <button>
                                <BsThreeDotsVertical className="text-2xl" />
                            </button>
                        </div>
                    </div>
                    <p className="text-[#525252] mb-5">{comment ? comment : ""}</p>
                    <div className="inline-flex px-2 sm:px-4 border py-1 sm:py-2 rounded-full gap-4 bg-[#F4F6FB] items-center">
                        <button className="text-sm sm:text-base flex gap-1 items-center">
                            <img src={like} alt="share" className="w-5 h-5" />
                            <p>{interaction.like}k</p>
                        </button>
                        <button className="text-sm sm:text-base flex gap-1 items-center">
                            <img src={commentImg} alt="share" className="w-5 h-5" />
                            <p>{interaction.comment}</p>
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default CompanyPost;
