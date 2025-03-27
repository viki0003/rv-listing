// import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductOne from "../../../Assets/Images/Home/rv-image.png";
import "./imagecontainer.css";

export default function ImageContainer() {
  return (
    <div className="gallery-container">
      <div className="image-wrapper">
        <img src={ProductOne} alt="Image1" className="main-image" />
        <button className="nav-button left">
          {/* <ChevronLeft size={24} /> */}Left
        </button>
        <button className="nav-button right">
          {/* <ChevronRight size={24} /> */} Right
        </button>
      </div>
      {/* <div className="thumbnail-container">
        <img src={ProductOne} alt="I1" />
      </div> */}
    </div>
  );
}
