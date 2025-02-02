import HoverVideo from "../HoverVideo/HoverVideo.jsx";
import video_1 from "../../assets/video-1.mp4";
import video_2 from "../../assets/video-2.mp4";
import video_3 from "../../assets/video-3.mp4";
import "./events.css";

const Events = () => {
  return (
    <div className="events">
      <h3>Events</h3>
      <div className="works">
        <HoverVideo src={video_1} description="Event 1"/>
        <HoverVideo src={video_2} description="Event 2"/>
        <HoverVideo src={video_3} description="Event 3"/>
      </div>
    </div>
  );
};

export default Events;
