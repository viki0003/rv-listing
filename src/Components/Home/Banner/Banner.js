import { Link } from "react-router";
import RightArrow from "../../../Assets/Icons/RightArrow";
import "./banner.css";

const Banner = () => {
  return (
    <div className="home-banner">
      <div className="container">
        <h1>“Lorem ipsum dolor sit amet consectetur. Commodo”</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mattis sed amet dolor a
          praesent. Dolor maecenas nunc hac nulla vitae convallis.
        </p>
        <Link to="/products">
          Shop Now
          <span className="btn-icon">
            <RightArrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
