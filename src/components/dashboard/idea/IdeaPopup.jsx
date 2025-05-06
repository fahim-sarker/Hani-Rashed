import { useForm } from "react-hook-form";
import plusIcon from "../../../assets/icons/plusIcon.png";
import { FiLink, FiX } from "react-icons/fi";
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
import VideoUploader from "@/components/shared/VideoUploader";
import { ClipLoader } from "react-spinners";

export function IdeaPopup({ refetchIdeas }) {
  const [uploadedVideo, setUploadedVideo] = useState([]);
  const [uploadedPictures, setUploadedPictures] = useState([]);
  const [uploadedThumbnails, setUploadedThumbnails] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);

    setUploadedPictures((prev) => {
      const existingFiles = new Set(prev.map((file) => file.name + file.size));
      const uniqueFiles = newFiles.filter(
        (file) => !existingFiles.has(file.name + file.size)
      );
      return [...prev, ...uniqueFiles];
    });
  };

  const removeImage = (index) => {
    setUploadedPictures((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle multiple video uploads
  // const handleVideoChange = (e) => {
  //   const newVideos = Array.from(e.target.files);

  //   setUploadedVideo((prev) => {
  //     const existingFiles = new Set(prev.map((file) => file.name + file.size));
  //     const uniqueVideos = newVideos.filter(
  //       (file) => !existingFiles.has(file.name + file.size)
  //     );
  //     return [...prev, ...uniqueVideos];
  //   });
  // };

  // Remove a specific video
  // const removeVideo = (index) => {
  //   setUploadedVideo((prev) => prev.filter((_, i) => i !== index));
  // };

  const [uploadedDocs, setUploadedDocs] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const Axios = useAxios();
  const token = JSON.parse(localStorage.getItem("authToken"));

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

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
      console.log(data);

      setIsOpen(false);
      toast.success("Idea created successfully");
      reset();
      refetchIdeas && refetchIdeas();
      setUploadedVideo(null);
      setUploadedPictures([]);
      setUploadedDocs(null);
      setUploadedThumbnails([]);
      setIsLoading(false);
    },
    onError: (error) => {
      console.log("Error:", error);
      toast.error("Upload failed: " + error.message);
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("port_type", data.portType);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("industry", data.industry);
    formData.append("idea_stage", data.ideaStage);
    formData.append("insted_video", data.insertVideo);
    uploadedVideo.forEach((file) => formData.append("video[]", file));
    uploadedPictures.forEach((file) => formData.append("image[]", file));
    uploadedThumbnails.forEach((file) => formData.append("thumbnail[]", file));
    if (uploadedDocs) formData.append("pdf", uploadedDocs);
    console.log([...formData.entries()]);
    mutate(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            <label className="block font-medium mb-2">Port Type</label>
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
              <span className="text-red-500 text-sm">
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
              <span className="text-red-500 text-sm">
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
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div>
            <label className="block font-medium mb-2">Industry</label>
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
              <span className="text-red-500 text-sm">
                {errors.industry.message}
              </span>
            )}
          </div>

          <div>
            <label className="block font-medium mb-2">Idea Stage</label>
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
              <span className="text-red-500 text-sm">
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
                {...register("insertVideo")}
                placeholder="Insert a video link"
                className="block w-full px-2 py-2 pr-12 border outline-none rounded"
              />
              <FiLink className="absolute right-3 top-3 text-lg" />
            </div>
          </div>

          {/* Video Upload */}
          <VideoUploader
            uploadedVideo={uploadedVideo}
            setUploadedVideo={setUploadedVideo}
            uploadedThumbnails={uploadedThumbnails}
            setUploadedThumbnails={setUploadedThumbnails}
          />

          {/* Picture Upload */}
          <div>
            <p className="block font-medium mb-2">
              Attach a Picture (Optional)
            </p>
            <label
              htmlFor="pictureUpload"
              className="block cursor-pointer w-full"
            >
              <div className="text-center border bg-[#def9f1] py-2 rounded">
                <img
                  src={uploadLogo}
                  alt="Upload"
                  className="mx-auto w-7 h-7"
                />
                <p className="text-xs text-gray-500 mt-1">Click to upload</p>
              </div>
            </label>
            <input
              id="pictureUpload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />

            {uploadedPictures.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {uploadedPictures.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="max-h-[120px] rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500 hover:text-red-700 shadow"
                    >
                      <FiX />
                    </button>
                    <p className="text-xs text-gray-600 mt-1 break-words">
                      {file.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Document Upload */}
          <div>
            <p className="block font-medium mb-2">
              Attach a Document (Optional)
            </p>
            <label htmlFor="docsUpload" className="block cursor-pointer w-full">
              <div className="text-center border bg-[#def9f1] py-2 rounded">
                <img
                  src={uploadLogo}
                  alt="Upload"
                  className="mx-auto w-7 h-7"
                />
                <p className="text-xs text-gray-500 mt-1">Click to upload</p>
              </div>
            </label>
            <input
              id="docsUpload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setUploadedDocs(e.target.files[0])}
            />
            {uploadedDocs && (
              <div className="flex items-center justify-between mt-1 p-2 bg-gray-100 rounded">
                <p className="text-sm text-gray-600 truncate">
                  {uploadedDocs.name}
                </p>
                <button
                  onClick={() => setUploadedDocs(null)}
                  type="button"
                  className="text-red-500 hover:text-red-700"
                >
                  <FiX />
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-3 justify-end pt-5">
            <DialogClose asChild>
              <button className="bg-transparent text-gray-900 border border-gray-300 px-7 py-2 font-medium rounded-[6px] min-w-[110px]">
                Cancel
              </button>
            </DialogClose>
            <button
              type="submit"
              className="bg-primaryGreen text-white px-8 py-2 font-medium rounded-[6px] flex items-center justify-center min-h-full min-w-[110px]"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={18} />
              ) : (
                "Create Idea"
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
