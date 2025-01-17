import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
import HoverVideo from "../HoverVideo/HoverVideo.jsx";
import white_arrow from "../../assets/white-arrow.png";
import video_1 from "../../assets/video-1.mp4";
import video_2 from "../../assets/video-2.mp4";
import video_3 from "../../assets/video-3.mp4";
import "./events.css";

const Events = () => {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false }
  );

  return (
    // in-view class triggers animation when component is visible in viewport
    <div className={inViewport ? "events in-view" : "events"} ref={ref}>
      <h3>Events</h3>
      <div className="works">
        <HoverVideo src={video_1} />
        <HoverVideo src={video_2} />
        <HoverVideo src={video_3} />
      </div>
      <button
        className="btn dark-btn"
        onClick={() => window.open("https://www.instagram.com/peter_revol")}
      >
        See more here <img src={white_arrow} alt="white-arrow" />
      </button>
    </div>
  );
};

export default Events;
