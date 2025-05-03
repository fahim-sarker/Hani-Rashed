import { useQueryClient } from "@tanstack/react-query";
import { IdeaPopup } from "@/components/dashboard/idea/IdeaPopup";
import IdeaPost from "@/components/dashboard/idea/IdeaPost";

const Idea = () => {
  const queryClient = useQueryClient();

  const refetchIdeas = () => {
    queryClient.invalidateQueries("ideas");
  };

  return (
    <>
      <div className="flex mt-4 sm:mt-0 mx-3 sm:mx-0 pb-5 justify-between items-center">
        <p className="text-lg sm:text-2xl font-medium text-[#212B36]">
          Recently Posted Idea
        </p>
        <IdeaPopup refetchIdeas={refetchIdeas} />
      </div>
      <hr />
      <div className="bg-white mt-5 sm:mt-7 shadow-lg rounded-lg p-4 sm:p-7 space-y-8 sm:space-y-12">
        <IdeaPost />
      </div>
    </>
  );
};

export default Idea;

// import { useState } from "react";
// import share from "../../../assets/icons/share.png";
// import eye from "../../../assets/icons/eye.png";
// import likeImg from "../../../assets/icons/like.png";
// import comment from "../../../assets/icons/comment.png";
// import { FcLike } from "react-icons/fc";
// import useFetchData from "@/components/Hooks/Api/UseFetchData";
// import useAxios from "@/components/Hooks/Api/UseAxios";

// const IdeaPost = () => {
//   const [expandedItem, setExpandedItem] = useState(null);
//   const token = JSON.parse(localStorage.getItem("authToken"));
//   const { data: ideas } = useFetchData("/show-idea", token);
//   const { data } = useFetchData("/me", token);
//   const Axios = useAxios();

//   const [likeStates, setLikeStates] = useState({});
//   const [likeCounts, setLikeCounts] = useState({});

//   const formatCount = (count) => {
//     if (count >= 1000) return (count / 1000).toFixed(1) + "k";
//     return count;
//   };

//     if (ideas?.data) {
//       ideas.data.forEach(async (item) => {
//         const res = await Axios.get(`/count-like/${item.id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setLikeCounts((prev) => ({
//           ...prev,
//           [item.id]: res.data.like,
//         }));
//       });
//     }

//   const handleLike = async (id) => {
//     const prevLiked = likeStates[id] || false;
//     const newLiked = !prevLiked;

//     setLikeStates((prev) => ({ ...prev, [id]: newLiked }));
//     setLikeCounts((prev) => ({
//       ...prev,
//       [id]: newLiked ? (prev[id] || 0) + 1 : (prev[id] || 0) - 1,
//     }));

//     try {
//       await Axios.post(
//         `/like-idea/${id}`,
//         { type: newLiked ? "like" : "dislike" },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     } catch (error) {
//       console.error("Error liking post:", error);
//       setLikeStates((prev) => ({ ...prev, [id]: prevLiked }));
//       setLikeCounts((prev) => ({
//         ...prev,
//         [id]: prevLiked ? (prev[id] || 0) + 1 : (prev[id] || 0) - 1,
//       }));
//     }
//   };

//   return (
//     <>
//       {ideas?.data?.map((item) => {
//         const isExpanded = expandedItem === item.id;
//         const shouldTruncate = item.description.length > 350;
//         const liked = likeStates[item.id] || false;
//         const likeCount = likeCounts[item.id] || 0;

//         return (
//           <div key={item.id}>
//             <div className="flex items-center justify-between mb-5">
//               <div className="flex gap-3 sm:gap-5">
//                 <figure className="sm:w-14 sm:h-14 w-12 h-12 rounded-full">
//                   <img
//                     src={data?.data?.avatar}
//                     alt="user_profile"
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </figure>
//                 <h3 className="text-lg sm:text-2xl text-[#212B36] font-medium font-roboto">
//                   {data?.data?.name}
//                 </h3>
//               </div>
//               <p className="text-gray-500 text-sm">{item?.created_at_diff}</p>
//             </div>

//             <p className="xl:text-lg 2xl:w-3/4 text-[#525252] mb-5">
//               {isExpanded
//                 ? item.description
//                 : `${item.description.slice(0, 350)} `}
//               {!isExpanded && shouldTruncate && (
//                 <button
//                   onClick={() => setExpandedItem(item.id)}
//                   className="text-[#2F80ED]"
//                 >
//                   .....view more
//                 </button>
//               )}
//               {isExpanded && shouldTruncate && (
//                 <button
//                   onClick={() => setExpandedItem(null)}
//                   className="text-[#2F80ED] ml-2"
//                 >
//                   show less
//                 </button>
//               )}
//             </p>

//             <figure className="h-[220px] sm:h-[350px] rounded mb-5 sm:mb-7">
//               <img
//                 src={item.image}
//                 alt="thumbnail"
//                 className="w-full h-full object-cover rounded"
//               />
//             </figure>

//             <div className="inline-flex px-2 py-2 sm:px-3 sm:py-[6px] border-gray-200 gap-4 sm:gap-6 items-center border rounded-full">
//               <button
//                 onClick={() => handleLike(item.id)}
//                 className="flex text-xs sm:text-base gap-1 items-center"
//               >
//                 {liked ? (
//                   <FcLike className="text-xl" />
//                 ) : (
//                   <img src={likeImg} alt="like" className="w-5 h-5" />
//                 )}
//                 <p>{formatCount(likeCount)}</p>
//               </button>

//               <button className="flex text-xs sm:text-base gap-1 items-center">
//                 <img src={comment} alt="comment" className="w-5 h-5" />
//                 <p>{item.interaction?.comment ?? 0}</p>
//               </button>

//               <button className="flex text-xs sm:text-base gap-1 items-center">
//                 <img src={eye} alt="eye" className="w-5 h-5" />
//                 <p>{item.interaction?.view ?? 0} views</p>
//               </button>

//               <button className="flex text-xs sm:text-base gap-1 items-center">
//                 <img src={share} alt="share" className="w-5 h-5" />
//                 <p>{item.interaction?.share ?? 0} shared</p>
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default IdeaPost;
