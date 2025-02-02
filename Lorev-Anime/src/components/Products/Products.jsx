import HoverVideo from "../HoverVideo/HoverVideo.jsx";
import video_1 from "../../assets/video-1.mp4";
import video_2 from "../../assets/video-2.mp4";
import video_3 from "../../assets/video-3.mp4";
import "./products.css";

const Products = () => {
  return (
    <div className="products">
      <h3>Products</h3>
      <div className="works">
        <HoverVideo src={video_1} description="Product 1" />
        <HoverVideo src={video_2} description="Product 2" />
        <HoverVideo src={video_3} description="Product 3" />
      </div>
    </div>
  );
};

export default Products;
