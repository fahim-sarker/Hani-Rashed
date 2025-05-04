import { useState } from "react";
import dummyThumbnail from "@/assets/dummy-thumbnail.jpg";
import { cn } from "@/lib/utils";

const VideoWithThumbnail = ({ item, adjustable = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!isPlaying ? (
        <div
          className={`relative h-full ${
            adjustable ? "w-full" : "aspect-video"
          } cursor-pointer`}
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={item.thumbnail || dummyThumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <video
          src={item.video}
          controls
          autoPlay
          playsInline
          muted
          className={`h-full ${
            adjustable ? "w-full" : "aspect-video"
          } object-cover object-center`}
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoWithThumbnail;
