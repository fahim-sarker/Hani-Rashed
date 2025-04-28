import { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import commentImg from "../../../assets/icons/comment.png";
import { Link } from "react-router-dom";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import useAxios from "@/components/Hooks/Api/UseAxios";
import toast from "react-hot-toast";
import Defaultprofile from "../../../assets/icons/defaultprofile.jpg";
import { GrDocumentPdf } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";

const CompanyPost = () => {
  const token = JSON.parse(localStorage.getItem("authToken"));
  const axios = useAxios();

  const { data: userData } = useFetchData("/me", token);
  const currentUserId = userData?.data?.id;
  const { data: timelinedata } = useFetchData("/show-all-idea", token);

  const followKey = `followStates-${currentUserId}`;
  const likeKey = `likedPosts-${currentUserId}`;

  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState({});
  const [showComment, setShowComment] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const menuRef = useRef(null);

  const [followedUsers, setFollowedUsers] = useState(() => {
    const stored = localStorage.getItem(followKey);
    return stored ? JSON.parse(stored) : {};
  });

  const [likedPosts, setLikedPosts] = useState(() => {
    const stored = localStorage.getItem(likeKey);
    return stored ? JSON.parse(stored) : {};
  });

  // Sync localStorage when current user changes
  useEffect(() => {
    if (currentUserId) {
      const storedFollows = localStorage.getItem(
        `followStates-${currentUserId}`
      );
      const storedLikes = localStorage.getItem(`likedPosts-${currentUserId}`);
      setFollowedUsers(storedFollows ? JSON.parse(storedFollows) : {});
      setLikedPosts(storedLikes ? JSON.parse(storedLikes) : {});
    }
  }, [currentUserId]);

  // Handle Edit and Delete
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle follow/unfollow
  const handleToggleFollow = async (userId) => {
    const isFollowing = followedUsers[userId]?.following;
    try {
      if (isFollowing) {
        await axios.delete(`/unfollow/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
      } else {
        await axios.post(
          `/follow/${userId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
      }
      const updated = {
        ...followedUsers,
        [userId]: { following: !isFollowing },
      };
      setFollowedUsers(updated);
      localStorage.setItem(followKey, JSON.stringify(updated));
    } catch (err) {
      console.error("Error toggling follow:", err);
    }
  };

  // Handle like/dislike
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

  // Handle comment
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

  // Handle share
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
      toast.success("You shared this post");
      console.log("Post shared:", res.data.message || res.data);
    } catch (error) {
      toast.error("Error sharing post");
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
        const shouldTruncate = item.description.length > 350;

        return (
          <div
            key={item.id}
            className="mb-6 px-2 sm:px-4 max-w-[600px] mx-auto"
          >
            <div className="border-b pb-5">
              {/* Top Section */}
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="flex gap-3 sm:gap-4 items-center">
                  <Link className="flex gap-3 sm:gap-4 items-center">
                    <figure className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2">
                      <img
                        src={item.user?.avatar || Defaultprofile}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <h3 className="text-base sm:text-xl hover:underline font-medium text-[#212B36]">
                      {item.user?.name}
                    </h3>
                  </Link>
                  {currentUserId && (
                    <button
                      onClick={() => handleToggleFollow(item.user_id)}
                      className={`text-sm ${
                        followedUsers[item.user_id]?.following
                          ? "following"
                          : "follow"
                      }`}
                    >
                      {followedUsers[item.user_id]?.following
                        ? "Following"
                        : "+ Follow"}
                    </button>
                  )}
                </div>

                <div className="relative flex items-center gap-2">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.time_ago}
                  </p>
                  <button
                    onClick={() =>
                      setMenuOpenId(menuOpenId === item.id ? null : item.id)
                    }
                  >
                    <BsThreeDotsVertical className="text-lg sm:text-xl" />
                  </button>

                  {menuOpenId === item.id && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 mt-2 w-28 sm:w-32 bg-white border rounded-lg shadow-lg z-10"
                    >
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 mb-5">
                {isExpanded
                  ? item.description
                  : `${item.description.slice(0, 350)} `}
                {shouldTruncate && (
                  <button
                    onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                    className="text-blue-600 ml-2"
                  >
                    {isExpanded ? "Show less" : "View more"}
                  </button>
                )}
              </p>

              {/* Media */}
              {(item.images?.length > 0 || item.videos?.length > 0) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {[...(item.images || []), ...(item.videos || [])]
                    .slice(0, 3)
                    .map((media, index, array) => (
                      <div
                        key={index}
                        className="relative h-40 overflow-hidden rounded"
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.url}
                            alt={`uploaded-${index}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={media.url}
                            controls
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 2 &&
                          array.length <
                            [...(item.images || []), ...(item.videos || [])]
                              .length && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-semibold">
                              +
                              {[...(item.images || []), ...(item.videos || [])]
                                .length - 3}
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              )}

              {/* Interaction Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1"
                >
                  {likedPosts[item.id]?.type === "like" ? (
                    <AiFillHeart className="text-red-500 text-lg sm:text-xl" />
                  ) : (
                    <AiOutlineHeart className="text-gray-500 text-lg sm:text-xl" />
                  )}
                  <p className="text-xs sm:text-sm">{item.likes_count} likes</p>
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
                  <p className="text-xs sm:text-sm">
                    {item.comments?.length || 0} comments
                  </p>
                </button>

                <div className="flex items-center gap-1">
                  <img src={eye} alt="views" className="w-4 h-4" />
                  <p className="text-xs sm:text-sm">22 views</p>
                </div>

                <button
                  onClick={() => handleshare(item.id)}
                  className="flex items-center gap-1"
                >
                  <img src={share} alt="share" className="w-4 h-4" />
                  <p className="text-xs sm:text-sm">
                    {item.share_ideas_count || 0} shares
                  </p>
                </button>

                {item.pdf && (
                  <div className="ml-auto">
                    <a
                      href={item.pdf}
                      target="_blank"
                      download
                      className="cursor-pointer bg-[#e0fff6] border border-green-400 text-[#212B36] py-1 rounded-3xl hover:bg-[#e0fff6] hover:text-[#013289] transition duration-300 text-sm px-5 h-full flex items-center gap-1"
                    >
                      <GrDocumentPdf className="text-[#013289]" /> Pdf
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Comments */}
            {showComment === item.id && (
              <>
                <div className="relative my-4">
                  <textarea
                    rows={2}
                    className="w-full border p-2 rounded pr-16 h-[80px] sm:h-[100px]"
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
                    className="absolute right-2 bottom-2 sm:bottom-10 bg-primaryGreen text-white w-10 h-10 rounded-full grid place-items-center"
                  >
                    <IoIosSend className="text-xl" />
                  </button>
                </div>

                <div className="mt-2 sm:mt-4">
                  {(comments[item.id] || item.comments)?.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 border rounded-lg mb-2"
                    >
                      <div className="flex gap-2 sm:gap-3 items-center mb-2">
                        <figure className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden">
                          <img
                            src={c?.user_avatar || commentImg}
                            alt="user"
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <h4 className="text-sm font-semibold">{c.user_name}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700">
                        {c.comment}
                      </p>
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
