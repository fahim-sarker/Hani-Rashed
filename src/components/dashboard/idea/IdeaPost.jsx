import { useState } from "react";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import likeImg from "../../../assets/icons/like.png";
import comment from "../../../assets/icons/comment.png";
import { FcLike } from "react-icons/fc";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import useAxios from "@/components/Hooks/Api/UseAxios";
import profileImg from "../../../assets/profile.png";

const IdeaPost = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [showComments, setShowComments] = useState({});
  const [like, setLike] = useState(false);
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data: ideas } = useFetchData("/show-idea", token);
  const { data } = useFetchData("/me", token);
  const Axios = useAxios();

  const handleLike = async (id) => {
    try {
      const newLikeState = !like;
      setLike(newLikeState);
      await Axios.post(
        `/like-idea/${id}`,
        { type: newLikeState ? "like" : "dislike" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const toggleCommentsVisibility = (id) => {
    setShowComments((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      {ideas?.data?.map((item) => {
        const isExpanded = expandedItem === item.id;
        const shouldTruncate = item.description.length > 350;

        const avatar =
          item?.type === "shared"
            ? item?.share_ideas_owner?.avatar?.trim() || profileImg
            : data?.data?.avatar?.trim() || profileImg;

        const name =
          item?.type === "shared"
            ? item?.share_ideas_owner?.name
            : data?.data?.name;

        return (
          <div key={item.id}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-3 sm:gap-5">
                <figure className="sm:w-14 sm:h-14 w-12 h-12 rounded-full">
                  <img
                    src={avatar}
                    alt="user_profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </figure>
                <h3 className="text-lg sm:text-2xl text-[#212B36] font-medium font-roboto">
                  {name}
                </h3>
              </div>
              <p className="text-gray-500 text-sm">{item?.created_at_diff}</p>
            </div>

            <p className="xl:text-lg 2xl:w-3/4 text-[#525252] mb-5">
              {isExpanded
                ? item.description
                : `${item.description.slice(0, 350)} `}
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

            <div className="flex gap-4">
              {item.ideaimage.map((img, idx) => (
                <figure
                  className="w-full rounded mb-5 sm:mb-7"
                  key={idx}
                >
                  <img
                    src={img.image}
                    alt="thumbnail"
                    className="w-full h-full object-cover rounded"
                  />
                </figure>
              ))}
            </div>

            <div className="inline-flex px-2 py-2 sm:px-3 sm:py-[6px] border-gray-200 gap-4 sm:gap-6 items-center border rounded-full">
              <button
                onClick={() => handleLike(item.id)}
                className="flex text-xs sm:text-base gap-1 items-center relative group"
              >
                {item?.likes_count === 1 ? (
                  <FcLike className="text-xl text-red-500" />
                ) : like ? (
                  <FcLike className="text-xl text-red-500" />
                ) : (
                  <img src={likeImg} alt="like" className="w-5 h-5" />
                )}
                <p>{item?.likes_count} likes</p>

                <div className="absolute top-[-50px] left-[-10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={avatar}
                    alt="user"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                </div>
              </button>

              <button
                onClick={() => toggleCommentsVisibility(item.id)}
                className="flex text-xs sm:text-base gap-1 items-center"
              >
                <img src={comment} alt="comment" className="w-5 h-5" />
                <p>{(item?.comments?.length || 0) + " comments"}</p>
              </button>

              <button className="flex text-xs sm:text-base gap-1 items-center">
                <img src={eye} alt="eye" className="w-5 h-5" />
                <p>{item.interaction?.view ?? 0} views</p>
              </button>
              <button className="flex text-xs sm:text-base gap-1 items-center">
                <img src={share} alt="share" className="w-5 h-5" />
                <p>{item?.share_ideas_count || 0} shared</p>
              </button>
            </div>

            {showComments[item.id] && (
              <div className="mt-4">
                {(item?.comments || []).map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 border rounded-lg mb-2"
                  >
                    <div className="flex gap-3 items-center mb-2">
                      <figure className="w-9 h-9 rounded-full overflow-hidden">
                        <img
                          src={c?.user_avatar?.trim() || profileImg}
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </figure>
                      <h4 className="text-base font-semibold">{c.user_name}</h4>
                    </div>
                    <p className="text-gray-700">{c.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default IdeaPost;
