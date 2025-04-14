import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import likeImg from "../../../assets/icons/like.png";
import commentImg from "../../../assets/icons/comment.png";
import { Link } from "react-router-dom";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import useAxios from "@/components/Hooks/Api/UseAxios";

const CompanyPost = ({ data }) => {
  const { company_name, company_logo, posted_time, interaction } = data;

  const [follow, setFollow] = useState(false);
  const [comments, setComments] = useState({});
  const [showComment, setShowComment] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data: timelinedata } = useFetchData("/show-all-idea", token);
  const axios = useAxios();
  const [commentText, setCommentText] = useState({});

  const [likedPosts, setLikedPosts] = useState(() => {
    const savedLikedPosts = localStorage.getItem("likedPosts");
    return savedLikedPosts ? JSON.parse(savedLikedPosts) : {};
  });

  const handleLike = async (postId) => {
    try {
      const currentType = likedPosts[postId]?.type;
      const newType = currentType === "like" ? "dislike" : "like";

      const response = await axios.post(
        `/like-idea/${postId}`,
        { type: newType },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      const { type } = response.data.data;
      const updatedLikedPosts = { ...likedPosts, [postId]: { type } };
      setLikedPosts(updatedLikedPosts);
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  const handlecomment = async (postId, comment) => {
    if (!comment?.trim()) {
      console.warn("Comment is empty or undefined.");
      return;
    }

    try {
      const response = await axios.post(
        `/comment/${postId}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      const newComment = response.data.data;

      setComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComment],
      }));

      setCommentText((prev) => ({
        ...prev,
        [postId]: "",
      }));
    } catch (error) {
      console.log(
        "Error posting comment:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      {timelinedata?.data?.map((item, index) => {
        const isExpanded = expandedItem === item.id;
        const shouldTruncate = item.description.length > 150;

        return (
          <div key={index} className="">
            <div className="border-b pb-5">
              <div className="flex items-center justify-between mb-3 sm:mb-5 xl:mb-7">
                <div className="flex gap-4 sm:gap-5 items-center">
                  <Link
                    to="/dashboard/smallBusiness/otherCompany"
                    className="flex gap-3 sm:gap-5 items-center"
                  >
                    <figure className="w-12 h-12 sm:w-14 sm:h-14 rounded-full">
                      <img
                        src={item?.user.avatar}
                        alt="company_logo"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </figure>
                    <h3 className="text-xl sm:text-2xl hover:underline text-[#212B36] font-medium font-roboto">
                      {item?.user.name}
                    </h3>
                  </Link>
                  <button
                    onClick={() => setFollow(!follow)}
                    className="text-[#3A83CD] text-sm sm:text-base font-medium"
                  >
                    {follow ? "Following" : "+ Follow"}
                  </button>
                </div>
                <p className="text-gray-500 hidden sm:block">{posted_time}</p>
              </div>

              <p className="xl:text-lg 2xl:w-3/4 text-[#525252] mb-5">
                {isExpanded
                  ? item.description
                  : `${item.description.slice(0, 150)} `}
                {!isExpanded && shouldTruncate && (
                  <button
                    onClick={() => setExpandedItem(item.id)}
                    className="text-[#2F80ED]"
                  >
                    .....view more
                  </button>
                )}
                {isExpanded && shouldTruncate && (
                  <button
                    onClick={() => setExpandedItem(null)}
                    className="text-[#2F80ED] ml-2"
                  >
                    show less
                  </button>
                )}
              </p>

              <figure className="h-[200px] sm:h-[280px] xl:h-[350px] rounded mb-7">
                <img
                  src={item?.image}
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded"
                />
              </figure>

              <div className="flex gap-3 sm:gap-6 items-center">
                <button
                  onClick={() => handleLike(item.id)}
                  className="text-xs sm:text-base flex gap-1 items-center pr-3 sm:pr-5 border-r"
                >
                  {likedPosts[item.id]?.type === "like" ? (
                    <FcLike className="text-xl" />
                  ) : likedPosts[item.id]?.type === "dislike" ? (
                    <img src={likeImg} alt="like" className="w-5 h-5" />
                  ) : (
                    <img
                      src={likeImg}
                      alt="like"
                      className="w-5 h-5 opacity-50"
                    />
                  )}
                  <p>{interaction.like}k</p>
                </button>

                <button
                  onClick={() => setShowComment(item.id)}
                  className="text-xs sm:text-base flex gap-1 items-center pr-3 sm:pr-5 border-r"
                >
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

            {showComment === item.id && (
              <div className="relative mb-3 sm:mb-4">
                <textarea
                  rows={1}
                  id={`commentText-${item.id}`}
                  type="text"
                  className="border border-primaryGreen outline-none pr-16 pl-2 text-sm sm:text-base sm:pl-5 py-2 sm:py-5 rounded w-full"
                  placeholder="Comment here...."
                  value={commentText[item.id] || ""}
                  onChange={(e) =>
                    setCommentText((prev) => ({
                      ...prev,
                      [item.id]: e.target.value,
                    }))
                  }
                />

                <button
                  onClick={() => handlecomment(item.id, commentText[item.id])}
                  className="absolute right-2 sm:right-4 bottom-3 sm:bottom-5 bg-primaryGreen text-white w-8 h-7 sm:w-11 sm:h-10 grid place-items-center rounded"
                >
                  <IoIosSend className="text-lg sm:text-2xl text-white" />
                </button>
              </div>
            )}

            {comments[data.id]?.map((c, idx) => (
              <div
                key={idx}
                className="bg-white p-3 sm:p-5 border rounded-lg mb-3"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-3 sm:gap-5 items-center">
                    <figure className="w-7 h-7 sm:w-11 sm:h-11 rounded-full">
                      <img
                        src={c.user?.avatar || company_logo}
                        alt="user"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </figure>
                    <h3 className="text-lg sm:text-xl text-[#212B36] font-medium font-roboto">
                      {c.user?.name || company_name}
                    </h3>
                    <button className="text-sm sm:text-base text-[#3A83CD] font-medium">
                      + Follow
                    </button>
                  </div>
                  <div className="hidden sm:flex gap-1 sm:gap-3 items-center">
                    <p className="text-gray-500">{posted_time}</p>
                    <button>
                      <BsThreeDotsVertical className="text-2xl" />
                    </button>
                  </div>
                </div>
                <p className="text-[#525252] mb-5">{c.comment}</p>
                <div className="inline-flex px-2 sm:px-4 border py-1 sm:py-2 rounded-full gap-4 bg-[#F4F6FB] items-center">
                  <button className="text-sm sm:text-base flex gap-1 items-center">
                    <img src="dfdsf" alt="like" className="w-5 h-5" />
                    <p>{interaction.like}k</p>
                  </button>
                  <button className="text-sm sm:text-base flex gap-1 items-center">
                    <img src={commentImg} alt="comment" className="w-5 h-5" />
                    <p>{interaction.comment}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default CompanyPost;
