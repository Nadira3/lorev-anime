import HoverVideo from "../HoverVideo/HoverVideo.jsx";
import video_1 from "../../assets/video-1.mp4";
import "./motivational.css";

const Motivational = () => {
  return (
    <div className="motivationals">
      <h3>Motivationals</h3>
      <div className="works">
        <HoverVideo src={video_1} description="Motivation 1" />
      </div>
    </div>
  );
};

export default Motivational;
