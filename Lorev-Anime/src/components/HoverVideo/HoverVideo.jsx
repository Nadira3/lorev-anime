import React, { useRef } from "react";
import "./hovervideo.css";

function HoverVideo({ src }) {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.pause();
    }
  };
  const handleClick = (e) => {
    if (e.target === overlayRef.current) {
      overlayRef.current.classList.add("hide");
    }
  };

  return (
    <div className="hover-video">
      <video
        ref={videoRef}
        src={src}
        width="100%"
        muted
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="overlay" onClick={handleClick} ref={overlayRef}>
        Tap to play
      </div>
    </div>
  );
}

export default HoverVideo;
