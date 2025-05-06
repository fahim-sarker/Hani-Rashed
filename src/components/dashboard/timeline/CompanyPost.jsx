import { useEffect, useState } from "react";
import share from "../../../assets/icons/share.png";
import eye from "../../../assets/icons/eye.png";
import likeImg from "../../../assets/icons/like.png";
import comment from "../../../assets/icons/comment.png";
import { FcLike } from "react-icons/fc";
import useFetchData from "@/components/Hooks/Api/UseFetchData";
import useAxios from "@/components/Hooks/Api/UseAxios";
import profileImg from "../../../assets/profile.png";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

import { GrDocumentPdf } from "react-icons/gr";
import DropdownMenuComponent from "@/components/shared/DropdownMenuComponent";
import VideoWithThumbnail from "@/components/shared/VideoWithThumbnail";
import { IdeaUpdatePopup } from "../idea/IdeaUpdatePopup";

const CompanyPost = () => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);
  const [show, setShow] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showComments, setShowComments] = useState({});
  const [like, setLike] = useState(false);
  const token = JSON.parse(localStorage.getItem("authToken"));
  const { data: fetchedIdeas } = useFetchData("/show-all-idea", token);
  const [ideas, setIdeas] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [ideaData, setIdeaData] = useState(null);
  const [ideaId, setIdeaId] = useState(null);

  // console.log("fetchedIdeas", fetchedIdeas);
  // console.log("fetchedIdeas ideas", ideas);

  useEffect(() => {
    if (fetchedIdeas?.data) {
      setIdeas(fetchedIdeas.data);
    }
  }, [fetchedIdeas]);
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

  const handleDeleteFromUI = (id) => {
    setIdeas((prev) => prev.filter((idea) => idea.id !== id));
  };
  // useEffect(() => {
  //   const images = ideas.ideaimage.map(img => ({
  //     src: img.image
  //   }));
  //   setShow(images)
  // },[ideas]);

  const toggleCommentsVisibility = (id) => {
    setShowComments((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      {ideas?.map((item) => {
        const isExpanded = expandedItem === item.id;
        const shouldTruncate = item?.description?.length > 350;

        const avatar =
          item?.type === "shared"
            ? item?.share_ideas_owner?.avatar?.trim() || profileImg
            : data?.data?.avatar?.trim() || profileImg;

        const name =
          item?.type === "shared"
            ? item?.share_ideas_owner?.name
            : data?.data?.name;

        console.log("item", item);

        return (
          <>
            <div key={item.id}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3 sm:gap-5">
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
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 text-sm">
                    {item?.created_at_diff}
                  </p>
                </div>
              </div>

              <p className="xl:text-lg 2xl:w-3/4 text-[#525252] mb-5">
                {isExpanded
                  ? item.description
                  : `${item.description.slice(0, 350)}`}
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

              {/* <div className="flex gap-4">
              {item.ideaimage.map((img, idx) => (
                <figure className="w-full rounded mb-5 sm:mb-7" key={idx}>
                  <img
                    src={img.image}
                    alt="thumbnail"
                    className="w-full h-full object-cover rounded"
                  />
                </figure>
              ))}
            </div> */}

              <div className="mb-5 sm:mb-7">
                {item?.ideaimage?.length + item?.idea_video?.length === 1 ? (
                  <figure className="rounded overflow-hidden h-[380px] w-fit">
                    {item.ideaimage[0] ? (
                      <img
                        src={item.ideaimage[0].image}
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <VideoWithThumbnail item={item.idea_video[0]} />
                    )}
                  </figure>
                ) : item?.ideaimage?.length + item?.idea_video?.length === 2 ? (
                  <div className="flex flex-wrap gap-5">
                    {[...item.ideaimage, ...item.idea_video].map(
                      (media, index) => (
                        <figure
                          key={index}
                          className="rounded overflow-hidden w-fit shrink-0 h-[380px]"
                        >
                          {"image" in media ? (
                            <img
                              src={media.image}
                              alt=""
                              className="w-full h-full object-cover object-center"
                            />
                          ) : (
                            <VideoWithThumbnail item={media} />
                          )}
                        </figure>
                      )
                    )}
                  </div>
                ) : (
                  item?.ideaimage?.length + item?.idea_video?.length >= 3 && (
                    <div className="grid grid-cols-2 gap-5 h-[750px]">
                      <figure className="rounded overflow-hidden">
                        {item.ideaimage[0] ? (
                          <img
                            src={item.ideaimage[0].image}
                            alt=""
                            className="w-full h-full object-cover object-center"
                          />
                        ) : (
                          <VideoWithThumbnail
                            item={item.idea_video[0]}
                            adjustable={true}
                          />
                        )}
                      </figure>
                      <div className="flex flex-col gap-5 h-[750px]">
                        {(item.ideaimage[0]
                          ? [...item.idea_video, ...item.ideaimage.slice(1)]
                          : [...item.ideaimage, ...item.idea_video.slice(1)]
                        )
                          .slice(0, 2)
                          .map((media, index) => (
                            <figure
                              key={index}
                              className="rounded overflow-hidden flex-1 relative"
                            >
                              {"image" in media ? (
                                <img
                                  src={media.image}
                                  alt=""
                                  className="w-full h-full object-cover object-center"
                                />
                              ) : (
                                <VideoWithThumbnail
                                  item={media}
                                  adjustable={true}
                                />
                              )}
                              {index === 1 &&
                                item?.ideaimage?.length +
                                  item?.idea_video?.length >
                                  3 && (
                                  <div
                                    className="overlay absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center text-white text-2xl md:text-3xl lg:text-5xl font-bold cursor-pointer"
                                    onClick={() => {
                                      setShow([
                                        // Map images first
                                        ...item.ideaimage.map((img) => ({
                                          src: img.image,
                                          type: "image", // Explicitly set type (optional but recommended)
                                        })),
                                        // Map videos with proper video configuration
                                        ...item.idea_video.map((vid) => ({
                                          type: "video",
                                          sources: [
                                            {
                                              src: vid.video,
                                              type: "video/mp4", // Update this if using different video formats
                                            },
                                          ],
                                          poster:
                                            "https://path-to-default-thumbnail.jpg", // Add a default thumbnail or use video frame
                                          width: 1280, // Set appropriate dimensions
                                          height: 720,
                                        })),
                                      ]);
                                      setAdvancedExampleOpen(true);
                                    }}
                                  >
                                    {item?.ideaimage?.length +
                                      item?.idea_video?.length -
                                      3}
                                    +
                                  </div>
                                )}
                            </figure>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-between">
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
                        <h4 className="text-base font-semibold">
                          {c.user_name}
                        </h4>
                      </div>
                      <p className="text-gray-700">{c.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        );
      })}
      <Lightbox
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        slides={show}
        plugins={[Video]}
        video={{
          controls: true,
          autoPlay: false,
        }}
      />
      {ideaId && (
        <IdeaUpdatePopup
          key={ideaId}
          isOpenPopup={isOpenPopup}
          setIsOpenPopup={setIsOpenPopup}
          ideaData={ideaData}
          id={ideaId}
        />
      )}
    </>
  );
};

export default CompanyPost;
