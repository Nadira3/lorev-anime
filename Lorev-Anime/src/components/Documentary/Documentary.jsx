import HoverVideo from "../HoverVideo/HoverVideo.jsx";
import video_1 from "../../assets/video-1.mp4";
import "./documentary.css";

const Documentary = () => {
  return (
    <div className="documentaries">
      <h3>Documentaries</h3>
      <div className="works">
        <HoverVideo src={video_1} description="Documentary 1"/>
        <HoverVideo src={video_1} description="Documentary 1"/>
        <HoverVideo src={video_1} description="Documentary 1"/>
      </div>
    </div>
  );
};

export default Documentary;
