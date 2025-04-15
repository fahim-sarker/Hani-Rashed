import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import commentImg from "../../../assets/icons/comment.png";
import { Link } from "react-router-dom";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import useAxios from "@/components/Hooks/Api/UseAxios";
import profileImg from "../../../assets/profile.png";
import toast from "react-hot-toast";

const CompanyPost = () => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  const axios = useAxios();

  const { data: userData } = useFetchData("/me", token);
  const currentUserId = userData?.data?.id;

  const { data: timelinedata } = useFetchData("/show-all-idea", token);
  console.log(timelinedata);
  

  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const [showComment, setShowComment] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const followKey = `followStates-${currentUserId}`;
  const likeKey = `likedPosts-${currentUserId}`;

  const [followStates, setFollowStates] = useState({});
  const [likedPosts, setLikedPosts] = useState({});

  useEffect(() => {
    const followStored = localStorage.getItem(followKey);
    const likeStored = localStorage.getItem(likeKey);
    setFollowStates(followStored ? JSON.parse(followStored) : {});
    setLikedPosts(likeStored ? JSON.parse(likeStored) : {});
  }, [currentUserId]);

  const toggleFollow = async (postId) => {
    const isFollowing = followStates[postId];

    try {
      const res = await axios.post(
        `/follow/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      console.log(res);

      const updated = { ...followStates, [postId]: !isFollowing };
      setFollowStates(updated);
      localStorage.setItem(followKey, JSON.stringify(updated));
    } catch (error) {
      console.error(
        "Failed to toggle follow:",
        error.response?.data || error.message
      );
    }
  };

  const handleLike = async (postId) => {
    const currentType = likedPosts[postId]?.type;
    const newType = currentType === "like" ? "dislike" : "like";

    try {
      const res = await axios.post(
        `/like-idea/${postId}`,
        { type: newType },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      const { type } = res.data.data;
      const updated = { ...likedPosts, [postId]: { type } };
      setLikedPosts(updated);
      localStorage.setItem(likeKey, JSON.stringify(updated));
    } catch (err) {
      console.error("Error updating like:", err);
    }
  };

  const handleComment = async (postId, comment) => {
    if (!comment?.trim()) return;

    try {
      const res = await axios.post(
        `/comment/${postId}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      const newComment = res.data.data;

      setComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComment],
      }));

      setCommentText((prev) => ({ ...prev, [postId]: "" }));
      setShowComment(null);
    } catch (err) {
      console.log("Error posting comment:", err.response?.data || err.message);
    }
  };

  const handleshare = async (postId) => {
    try {
      const res = await axios.post(
        `/share-idea/${postId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      toast.success("you shared this post")
      console.log("Post shared:", res.data.message || res.data);
    } catch (error) {
      toast.error("Error sharing post")
      console.error(
        "Error sharing post:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      {timelinedata?.data?.map((item) => {
        const isExpanded = expandedItem === item.id;
        const shouldTruncate = item.description.length > 150;

        return (
          <div key={item.id} className="mb-6">
            <div className="border-b pb-5">
              {/* Top Section */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-4 items-center">
                  <Link
                    to="/dashboard/smallBusiness/otherCompany"
                    className="flex gap-4 items-center"
                  >
                    <figure className="w-12 h-12 rounded-full overflow-hidden border-2">
                      <img
                        src={item.user?.avatar?.trim() || profileImg}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <h3 className="text-xl hover:underline font-medium text-[#212B36]">
                      {item.user?.name}
                    </h3>
                  </Link>
                  {currentUserId && (
                    <button
                      onClick={() => toggleFollow(item.id)}
                      className="text-blue-500 text-sm"
                    >
                      {followStates[item.id] ? "Following" : "+ Follow"}
                    </button>
                  )}
                </div>
                <p className="text-gray-500">{item.posted_time}</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-5">
                {isExpanded
                  ? item.description
                  : `${item.description.slice(0, 150)} `}
                {shouldTruncate && (
                  <button
                    onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                    className="text-blue-600 ml-2"
                  >
                    {isExpanded ? "Show less" : "View more"}
                  </button>
                )}
              </p>

              {/* Image */}
              {item.image && (
                <figure className="h-64 rounded mb-5">
                  <img
                    src={item.image}
                    alt="post"
                    className="w-full h-full object-cover rounded"
                  />
                </figure>
              )}

              {/* Interaction buttons */}
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1"
                >
                  {likedPosts[item.id]?.type === "like" ? (
                    <AiFillHeart className="text-red-500 text-xl" />
                  ) : (
                    <AiOutlineHeart className="text-gray-500 text-xl" />
                  )}
                  <p>{item.likes_count} likes</p>
                </button>

                <button
                  onClick={() =>
                    setShowComment((prev) =>
                      prev === item.id ? null : item.id
                    )
                  }
                  className="flex items-center gap-1"
                >
                  <img src={commentImg} alt="comment" className="w-5 h-5" />
                  <p>{item.comments?.length || 0} comments</p>
                </button>

                <div className="flex items-center gap-1">
                  <img src={eye} alt="views" className="w-4 h-4" />
                  <p>22 views</p>
                </div>

                <button
                  onClick={() => handleshare(item.id)}
                  className="flex items-center gap-1"
                >
                  <img src={share} alt="share" className="w-4 h-4" />
                  <p>{item.share_count || 0} shares</p>
                </button>
              </div>
            </div>

            {/* Comment input and list */}
            {showComment === item.id && (
              <>
                <div className="relative my-4">
                  <textarea
                    rows={1}
                    className="w-full border p-2 rounded pr-16 h-[100px]"
                    placeholder="Comment here..."
                    value={commentText[item.id] || ""}
                    onChange={(e) =>
                      setCommentText((prev) => ({
                        ...prev,
                        [item.id]: e.target.value,
                      }))
                    }
                  />
                  <button
                    onClick={() => handleComment(item.id, commentText[item.id])}
                    className="absolute right-2 bottom-10 bg-primaryGreen text-white w-10 h-10 rounded-full grid place-items-center"
                  >
                    <IoIosSend className="text-xl" />
                  </button>
                </div>

                <div className="mt-4">
                  {(comments[item.id] || item.comments)?.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 border rounded-lg mb-2"
                    >
                      <div className="flex gap-3 items-center mb-2">
                        <figure className="w-9 h-9 rounded-full overflow-hidden">
                          <img
                            src={c.user?.avatar || commentImg}
                            alt="user"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <h4 className="text-base font-semibold">
                          {c.user?.name || "User"}
                        </h4>
                      </div>
                      <p className="text-gray-700">{c.comment}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default CompanyPost;
