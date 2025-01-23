import "./motivational.css";
import HoverVideo from "../HoverVideo/HoverVideo.jsx";
import video_1 from "../../assets/video-1.mp4";

const Motivational = () => {

  return (
    // in-view class triggers animation when component is visible in viewport
    <div className="motivational">
      <h3>Motivational</h3>
      <div className="motivation">
        <HoverVideo className="vidInherit" src={video_1} />
        <HoverVideo className="vidInherit" src={video_1} />
      </div>
    </div>
  );
};

export default Motivational;

