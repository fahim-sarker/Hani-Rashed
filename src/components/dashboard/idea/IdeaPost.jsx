import { useEffect, useState } from "react";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import likeImg from "../../../assets/icons/like.png";
import comment from "../../../assets/icons/comment.png";
import { FcLike } from "react-icons/fc";
import useAxios from "@/components/Hooks/Api/UseAxios";
import useFetchData from "@/components/Hooks/Api/UseFetchData";

const IdeaPost = () => {
  const [like, setLike] = useState(false);
  const [profiledata, setProfiledata] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const Axiosinstance = useAxios();
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data: ideas } = useFetchData("/show-idea", token);

  useEffect(() => {
    Axiosinstance.get("me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setProfiledata(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  return (
    <>
      {ideas?.data?.map((item) => {
        const isExpanded = expandedItem === item.id;
        const shouldTruncate = item.description.length > 350;

        return (
          <div key={item.id}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-3 sm:gap-5">
                <figure className="sm:w-14 sm:h-14 w-12 h-12 rounded-full">
                  <img
                    src={profiledata?.avatar}
                    alt="user_profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </figure>
                <h3 className="text-lg sm:text-2xl text-[#212B36] font-medium font-roboto">
                  {profiledata?.email}
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

            <figure className="h-[220px] sm:h-[350px] rounded mb-5 sm:mb-7">
              <img
                src={item.image}
                alt="thumbnail"
                className="w-full h-full object-cover rounded"
              />
            </figure>

            <div className="inline-flex px-2 py-2 sm:px-3 sm:py-[6px] border-gray-200 gap-4 sm:gap-6 items-center border rounded-full">
              <button
                onClick={() => setLike(!like)}
                className="flex text-xs sm:text-base gap-1 items-center"
              >
                {like ? (
                  <FcLike className="text-xl" />
                ) : (
                  <img src={likeImg} alt="like" className="w-5 h-5" />
                )}
                <p>{item.interaction?.like ?? 0}k</p>
              </button>
              <button className="flex text-xs sm:text-base gap-1 items-center">
                <img src={comment} alt="comment" className="w-5 h-5" />
                <p>{item.interaction?.comment ?? 0}</p>
              </button>
              <button className="flex text-xs sm:text-base gap-1 items-center">
                <img src={eye} alt="eye" className="w-5 h-5" />
                <p>{item.interaction?.view ?? 0} views</p>
              </button>
              <button className="flex text-xs sm:text-base gap-1 items-center">
                <img src={share} alt="share" className="w-5 h-5" />
                <p>{item.interaction?.share ?? 0} shared</p>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default IdeaPost;
