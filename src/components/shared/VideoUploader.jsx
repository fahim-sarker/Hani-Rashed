import { useState, useRef, useEffect } from "react";
import { X, ImageIcon } from "lucide-react";
import dummyThumbnail from "@/assets/dummy-thumbnail.jpg";
import uploadLogo from "@/assets/icons/uploadLogo.png";
import useAxios from "../Hooks/Api/UseAxios";
import { useQueryClient } from "@tanstack/react-query";

export default function VideoUploader({
  setUploadedVideo,
  setUploadedThumbnails,
  videodataUrl = null,
}) {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const videoInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [previousVideo, setPreviousVideo] = useState(videodataUrl);

  // console.log("uploadedVideo", uploadedVideo);
  // console.log("uploadedThumbnails", uploadedThumbnails);
  // console.log(previousVideo, "previousVideo");
  const Axios = useAxios();
  const token = JSON.parse(localStorage.getItem("authToken"));

  useEffect(() => {
    setUploadedVideo(uploadedVideos.map((video) => video.file));
    setUploadedThumbnails(uploadedVideos.map((video) => video.thumbnail));
  }, [uploadedVideos]);

  const handleVideoChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const newVideos = Array.from(e.target.files).filter((file) => {
        return (
          uploadedVideos.length === 0 ||
          !uploadedVideos.some(
            (video) =>
              video.file.name === file.name && video.file.size === file.size
          )
        );
      });

      // Create a dummy thumbnail file
      const response = await fetch(dummyThumbnail);
      const blob = await response.blob();
      const dummyThumbnailFile = new File([blob], "dummy-thumbnail.jpg", {
        type: blob.type,
      });

      const videoData = newVideos.map((file) => ({
        file,
        videoUrl: URL.createObjectURL(file),
        thumbnail: dummyThumbnailFile,
        thumbnailUrl: dummyThumbnail,
      }));

      setUploadedVideos((prev) => [...prev, ...videoData]);
    }

    // Reset the input value to allow re-uploading the same file
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
  };

  const handleThumbnailChange = (e) => {
    if (
      e.target.files &&
      e.target.files.length > 0 &&
      selectedVideoIndex !== null
    ) {
      const thumbnailFile = e.target.files[0];
      const thumbnailUrl = URL.createObjectURL(thumbnailFile);

      const updatedVideos = [...uploadedVideos];
      updatedVideos[selectedVideoIndex] = {
        ...updatedVideos[selectedVideoIndex],
        thumbnail: thumbnailFile,
        thumbnailUrl,
      };

      setUploadedVideos(updatedVideos);
      setSelectedVideoIndex(null);
    }
  };

  const removeVideo = (index) => {
    const updatedVideos = [...uploadedVideos];
    URL.revokeObjectURL(updatedVideos[index].videoUrl);
    if (updatedVideos[index].thumbnailUrl) {
      URL.revokeObjectURL(updatedVideos[index].thumbnailUrl);
    }
    updatedVideos.splice(index, 1);
    setUploadedVideos(updatedVideos);
  };

  const queryClient = useQueryClient();

  const handleRemoveVideoUrl = async (id) => {
    setPreviousVideo((prev) => prev.filter((video) => video.id !== id));
    try {
      const response = await Axios.delete(
        `delete-idea-image/${id}?type=video`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      queryClient.invalidateQueries([`/idea-details/${id}`]);
      // console.log("Video deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const addThumbnail = (index) => {
    setSelectedVideoIndex(index);
    thumbnailInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="block font-medium mb-2">Attach Videos (Optional)</p>
        <label htmlFor="videoUpload" className="block cursor-pointer w-full">
          <div className="text-center border bg-[#def9f1] py-2 rounded">
            <img src={uploadLogo} alt="Upload" className="mx-auto w-7 h-7" />
            <p className="text-xs text-gray-500 mt-1">Click to upload</p>
          </div>
        </label>
        <input
          id="videoUpload"
          ref={videoInputRef}
          type="file"
          accept="video/*"
          multiple
          className="hidden"
          onChange={handleVideoChange}
        />

        <input
          ref={thumbnailInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleThumbnailChange}
        />
      </div>
      <div
        className={`${
          (uploadedVideos.length > 0 || previousVideo?.length > 0) && "mt-4"
        } grid grid-cols-1 md:grid-cols-2 gap-4`}
      >
        {previousVideo?.length > 0 && (
          <>
            {previousVideo.map((video, index) => (
              <div
                key={index}
                className="relative border rounded-md p-3 bg-white shadow-sm"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 h-20 aspect-video bg-gray-100 rounded overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={`Thumbnail for ${video.thumbnail}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      video {index + 1}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveVideoUrl(video.id)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 text-red-500 hover:text-red-700 shadow"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </>
        )}
        {uploadedVideos.length > 0 && (
          <>
            {uploadedVideos.map((video, index) => (
              <div
                key={index}
                className="relative border rounded-md p-3 bg-white shadow-sm"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 h-20 aspect-video bg-gray-100 rounded overflow-hidden">
                    <img
                      src={video.thumbnailUrl}
                      alt={`Thumbnail for ${video.file.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {video.file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(video.file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>

                    <div className="mt-2 flex space-x-2">
                      <button
                        type="button"
                        onClick={() => addThumbnail(index)}
                        className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded flex items-center"
                      >
                        <ImageIcon className="w-3 h-3 mr-1" />
                        {video.thumbnail ? "Change" : "Upload"}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeVideo(index)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 text-red-500 hover:text-red-700 shadow"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
