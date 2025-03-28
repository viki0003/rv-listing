import React from "react";
import TT from "../../../Assets/Images/Home/travel-trailer.png";
import FH from "../../../Assets/Images/Home/fifth-wheel.png";
import VC from "../../../Assets/Images/Home/van-camper.png";
import "./exploremore.css";
import { Link } from "react-router";
import Categories from "../Categories/Categories";

const ExploreMore = () => {
  return (
    <>
    <div className="expore-more-ui">
      <div className="container">
        <div className="heading">
          <h2>Explore more</h2>
          <span className="divider"></span>
        </div>
        <div className="explore-more-list">
          <Link to="" className="explore-more-item">
            <img src={TT} alt="explore-more-1" />
            <div className="em-text">
              <span>Travel Trailer</span>
            </div>
          </Link>
          <Link to="" className="explore-more-item">
            <img src={FH} alt="explore-more-1" />
            <div className="em-text">
              <span>Fifth Wheel</span>
            </div>
          </Link>
          <Link to="" className="explore-more-item">
            <img src={VC} alt="explore-more-1" />
            <div className="em-text">
              <span>Van Camper</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <span className='responsive-categories'><Categories/></span>
    </>
  );
};

export default ExploreMore;
