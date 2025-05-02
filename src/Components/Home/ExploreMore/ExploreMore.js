import React from "react";
import TT from "../../../Assets/Images/Home/travel-trailer.png";
import FH from "../../../Assets/Images/Home/fifth-wheel.png";
import VC from "../../../Assets/Images/Home/van-camper.png";
import "./exploremore.css";
import Categories from "../Categories/Categories";
import { useNavigate } from "react-router-dom";
import { useSuggestedRV } from "../../../ApiContext/SuggestedRVContext";

const rvTypes = [
  { label: "Travel Trailer", type: "travel-trailer", image: TT },
  { label: "5th Wheel", type: "5th wheel", image: FH },
  { label: "Motorhome", type: "Motorhome", image: VC },
];

const ExploreMore = () => {

  const navigate = useNavigate();
  const { setVehicleType } = useSuggestedRV();

  const handleRVTypeClick = (type, label) => {
    setVehicleType(label); // Set label as vehicleType in context
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
