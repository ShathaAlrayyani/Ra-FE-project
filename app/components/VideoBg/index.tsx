"use client"
import { useRef, useEffect } from "react";

export const VideoBg = () => {
  const videoRef = useRef<any>(null);
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnded = () => {
      // Restart the video when it finishes
      videoElement.currentTime = 0;
      videoElement.play();
    };

    // Add event listener for the 'ended' event
    videoElement.addEventListener("ended", handleVideoEnded);

    // Clean up the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnded);
    };
  }, []);
  return (
    <div className="videoWrapper">
      Hello
      {/* <video
        ref={videoRef}
        width="100%"
        height="100vh"
        autoPlay
        muted
        preload="none"
      >
        <source src=".\ShowReel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};
