import React from "react";
import TT from "../../../Assets/Images/Home/travel-trailer.png";
import FH from "../../../Assets/Images/Home/fifth-wheel.png";
import VC from "../../../Assets/Images/Home/van-camper.png";
import "./exploremore.css";
import Categories from "../Categories/Categories";
import { useNavigate } from "react-router-dom";

const rvTypes = [
  { label: "Travel Trailer", type: "small-camper", image: TT },
  { label: "Fifth Wheel", type: "5th wheel", image: FH },
  { label: "Motor Home", type: "Motorhome", image: VC },
];

const ExploreMore = () => {

    const navigate = useNavigate();
  
    const handleRVTypeClick = (type, label) => {
      navigate(`/products?vehicle_type=${encodeURIComponent(type)}`);
    };
  

  
  return (
    <>
      <div className="expore-more-ui">
        <div className="container">
          <div className="heading">
            <h2>Explore more</h2>
            <span className="divider"></span>
          </div>
          <div className="explore-more-list">
            {/* <Link to="" className="explore-more-item">
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
              <span>Motor home</span>
            </div>
          </Link> */}
            {rvTypes.map(({ label, image, type }) => (
              <div
                key={label}
                className="explore-more-item"
                onClick={() => handleRVTypeClick(type, label)}
                style={{ cursor: "pointer" }}
              >
                <img src={image} alt={label} />
                <div className="em-text">
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="responsive-categories">
        <Categories />
      </span>
      
    </>
  );
};

export default ExploreMore;
