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
import useAxios from "@/components/Hooks/Api/UseAxios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export function IdeaPopup({ refetchIdeas }) {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedPicture, setUploadedPicture] = useState(null);
  const [uploadedDocs, setUploadedDocs] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const Axios = useAxios();
  const token = JSON.parse(localStorage.getItem("authToken"));
  console.log(token);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: async (formData) => {
      return Axios.post("/idea-create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (data) => {
      setIsOpen(false);
      console.log("Success:", data);
      toast.success("Idea created successfully");
      reset();
      refetchIdeas();
    },
    onError: (error) => {
      console.log("Error:", error);
      toast.error("Upload failed:", error.message);
    },
  });
  const onSubmit = (data) => {
    if (!uploadedVideo) {
      alert("Please upload a video.");
      return;
    }
    if (!uploadedPicture) {
      alert("Please upload an image.");
      return;
    }
    if (!uploadedDocs) {
      alert("Please upload a document.");
      return;
    }
    const formData = new FormData();
    formData.append("port_type", data.portType);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("industry", data.industry);
    formData.append("idea_stage", data.ideaStage);
    formData.append("insert_video", data.insertVideo);
    formData.append("video", uploadedVideo);
    formData.append("image", uploadedPicture);
    formData.append("document", uploadedDocs);
    mutate(formData);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      onDismiss={() => setIsOpen(true)}
    >
      <DialogTrigger asChild>
        <button className="flex gap-2 items-center px-2 sm:px-3 py-1 text-sm sm:text-base sm:py-2 rounded text-white bg-primaryGreen">
          <span>Add new Idea</span>
          <img src={plusIcon} alt="plusIcon" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[797px] max-h-[calc(100vh-50px)] sm:max-h-[calc(100vh-25px)] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-[22px] text-[#252C32] text-center block">
            Create Idea
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="text-[#252C32] block font-medium mb-2">
              Port Type
            </label>
            <select
              defaultValue=""
              className="block w-full px-2 py-2 border outline-none rounded"
              {...register("portType", { required: "Port type is required" })}
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
                {errors.portType.message}
              </span>
            )}
          </div>

          <div>
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

          <div>
            <label htmlFor="description" className="block font-medium mb-2">
              Idea Description
            </label>
            <textarea
              rows={5}
              className="block text-sm w-full px-2 py-2 border outline-none rounded"
              placeholder="We offer after school clubs and enrichment activities..."
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm block pt-1">
                {errors.description.message}
              </span>
            )}
          </div>

          <div>
            <label className="text-[#252C32] block font-medium mb-2">
              Industry
            </label>
            <select
              defaultValue=""
              className="block w-full px-2 py-2 border outline-none rounded"
              {...register("industry", { required: "Industry is required" })}
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
                {errors.industry.message}
              </span>
            )}
          </div>

          <div>
            <label className="text-[#252C32] block font-medium mb-2">
              Idea Stage
            </label>
            <select
              defaultValue=""
              className="block w-full px-2 py-2 border outline-none rounded"
              {...register("ideaStage", { required: "Idea stage is required" })}
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
                {errors.ideaStage.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="insertVideo" className="block font-medium mb-2">
              Insert Video
            </label>
            <div className="relative">
              <input
                id="insertVideo"
                type="text"
                {...register("insertVideo", {
                  required: "Insert video link is required",
                })}
                placeholder="Insert a video"
                className="block w-full px-2 py-2 border outline-none rounded"
              />
              <FiLink className="text-lg absolute right-3 top-3" />
            </div>
            {errors.insertVideo && (
              <span className="text-red-500 text-sm block pt-1">
                {errors.insertVideo.message}
              </span>
            )}
          </div>

          <p className="block font-medium mb-2">Attach a Video</p>
          <label htmlFor="videoUpload" className="block cursor-pointer w-full">
            <div className="text-center border bg-[#def9f1] py-2 rounded">
              <img src={uploadLogo} alt="logo" className="mx-auto w-7 h-7" />
              <p className="font-medium mt-1 text-xs text-gray-500">
                Click to upload
              </p>
            </div>
          </label>
          <input
            id="videoUpload"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => setUploadedVideo(e.target.files[0])}
          />
          {uploadedVideo && (
            <p className="text-sm mt-1 text-gray-600">{uploadedVideo.name}</p>
          )}

          <p className="block font-medium mb-2">Attach a Picture</p>
          <label
            htmlFor="pictureUpload"
            className="block cursor-pointer w-full"
          >
            <div className="text-center border bg-[#def9f1] py-2 rounded">
              <img src={uploadLogo} alt="logo" className="mx-auto w-7 h-7" />
              <p className="font-medium mt-1 text-xs text-gray-500">
                Click to upload
              </p>
            </div>
          </label>
          <input
            id="pictureUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setUploadedPicture(e.target.files[0])}
          />
          {uploadedPicture && (
            <div className="mt-1">
              <p className="text-sm text-gray-600">{uploadedPicture.name}</p>
              <img
                src={URL.createObjectURL(uploadedPicture)}
                alt="preview"
                className="mt-1 max-h-[120px] rounded"
              />
            </div>
          )}

          <p className="block font-medium mb-2">Attach a Docs</p>
          <label htmlFor="docsUpload" className="block cursor-pointer w-full">
            <div className="text-center border bg-[#def9f1] py-2 rounded">
              <img src={uploadLogo} alt="logo" className="mx-auto w-7 h-7" />
              <p className="font-medium mt-1 text-xs text-gray-500">
                Click to upload
              </p>
            </div>
          </label>
          <input
            id="docsUpload"
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            className="hidden"
            onChange={(e) => setUploadedDocs(e.target.files[0])}
          />
          {uploadedDocs && (
            <p className="text-sm mt-1 text-gray-600">{uploadedDocs.name}</p>
          )}

          <div className="flex gap-3 items-center justify-end pt-5">
            <DialogClose asChild>
              <button className="bg-transparent text-gray-900 border border-gray-300 px-7 py-2 font-medium rounded-[6px]">
                Cancel
              </button>
            </DialogClose>
            <button
              type="submit"
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
