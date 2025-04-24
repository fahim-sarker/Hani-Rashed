import { useForm } from "react-hook-form";
import plusIcon from "../../../assets/icons/plusIcon.png";
import { FiLink } from "react-icons/fi";
import uploadLogo from "../../../assets/icons/uploadLogo.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ConsultancyIdeaPopup() {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedPicture, setUploadedPicture] = useState(null);
  const [uploadedDocs, setUploadedDocs] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const allIdeaData = [uploadedDocs, uploadedVideo, uploadedPicture, ...data];
    console.log(allIdeaData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex gap-2 items-center text-sm sm:text-base sm:px-3 px-2 py-1 sm:py-2 rounded text-white bg-primaryGreen">
          <span>Add new Idea</span>
          <img src={plusIcon} alt="plusIcon" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[797px] max-h-[calc(100vh-25px)] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-[22px] text-[#252C32] text-center block">
            Create Idea
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Port Type */}
          <div>
            <label className="text-[#252C32] block font-medium mb-2">
              Port Type
            </label>
            <select
              defaultValue=""
              className="block w-full px-2 py-2 border outline-none rounded"
              {...register("portType", { required: true })}
            >
              <option value="" disabled>
                Select Port Type
              </option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              <option value="Type 3">Type 3</option>
            </select>
            {errors.portType && (
              <span className="text-red-500 text-sm block pt-1">
                Select a port type
              </span>
            )}
          </div>
          {/*  Name */}
          <div className="">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="After school enrichment activities"
              className="block w-full px-2 py-2 border outline-none rounded"
            />
            {errors.name && (
              <span className="text-red-500 text-sm block pt-1">
                {errors.name.message}
              </span>
            )}
          </div>
          {/*  Description */}
          <div className="">
            <label htmlFor="description" className="block font-medium mb-2">
              Idea Description
            </label>
            <textarea
              rows={5}
              className="block text-sm w-full px-2 py-2 border outline-none rounded"
              placeholder="We offer after school clubs and enrichment activities throughout the year such as: art, board games, sports, yoga, guitar, crafting, cooking, crochet, dance, chess, and stem/robotics. "
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm block pt-1">
                {errors.name.message}
              </span>
            )}
          </div>
          {/* Industry */}
          <div>
            <label className="text-[#252C32] block font-medium mb-2">
              Industry
            </label>
            <select
              defaultValue=""
              className="block w-full px-2 py-2 border outline-none rounded"
              {...register("industry", { required: true })}
            >
              <option value="" disabled>
                Select Industry
              </option>
              <option value="Industry 1">Industry 1</option>
              <option value="Industry 2">Industry 2</option>
              <option value="Industry 3">Industry 3</option>
            </select>
            {errors.industry && (
              <span className="text-red-500 text-sm block pt-1">
                Select an industry
              </span>
            )}
          </div>
          {/* Idea Stage */}
          <div>
            <label className="text-[#252C32] block font-medium mb-2">
              Idea Stage
            </label>
            <select
              defaultValue=""
              className="block w-full px-2 py-2 border outline-none rounded"
              {...register("ideaStage", { required: true })}
            >
              <option value="" disabled>
                Select Idea Stage
              </option>
              <option value="Stage 1">Stage 1</option>
              <option value="Stage 2">Stage 2</option>
              <option value="Stage 3">Stage 3</option>
            </select>
            {errors.ideaStage && (
              <span className="text-red-500 text-sm block pt-1">
                Select idea stage
              </span>
            )}
          </div>
          {/*  Insert Video */}
          <div className="">
            <label htmlFor="insertVideo" className="block font-medium mb-2">
              Insert Video
            </label>
            <div className="relative">
              <input
                id="insertVideo"
                type="text"
                {...register("insertVideo")}
                placeholder="Insert a video"
                className="block w-full px-2 py-2 border outline-none rounded"
              />
              <FiLink className="text-lg absolute right-3 top-3" />
            </div>
          </div>

          {/*  Attach a Video */}
          <p className="block font-medium mb-2">Attach a Video</p>
          <label htmlFor="fileUpload" className="block cursor-pointer w-full">
            <div className="text-center border bg-[#def9f1] py-2 rounded">
              <img src={uploadLogo} alt="logo" className="mx-auto w-7 h-7" />
              <p className="font-medium mt-1 text-xs text-gray-500">
                Click to upload
              </p>
            </div>
          </label>
          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => setUploadedVideo(e.target.files[0])}
          />

          {/*  Attach a Pictures */}
          <p className="block font-medium mb-2">Attach a Pictures</p>
          <label htmlFor="fileUpload" className="block cursor-pointer w-full">
            <div className="text-center border bg-[#def9f1] py-2 rounded">
              <img src={uploadLogo} alt="logo" className="mx-auto w-7 h-7" />
              <p className="font-medium mt-1 text-xs text-gray-500">
                Click to upload
              </p>
            </div>
          </label>
          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => setUploadedPicture(e.target.files[0])}
          />

          {/*  Attach a Docs */}
          <p className="block font-medium mb-2">Attach a Docs</p>
          <label htmlFor="fileUpload" className="block cursor-pointer w-full">
            <div className="text-center border bg-[#def9f1] py-2 rounded">
              <img src={uploadLogo} alt="logo" className="mx-auto w-7 h-7" />
              <p className="font-medium mt-1 text-xs text-gray-500">
                Click to upload
              </p>
            </div>
          </label>
          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => setUploadedDocs(e.target.files[0])}
          />

          {/* submit btn */}
          <div className="flex gap-3 items-center justify-end pt-5 ">
            <DialogClose asChild>
              <button className="bg-transparent text-gray-900 border border-gray-300 px-7 py-2 font-medium rounded-[6px]">
                Cancel
              </button>
            </DialogClose>
            <button
              type="submit"
              role="button"
              className="bg-primaryGreen text-white px-8 py-2 font-medium rounded-[6px]"
            >
              Post
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
