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
