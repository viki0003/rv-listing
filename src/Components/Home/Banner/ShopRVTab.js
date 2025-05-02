import React from "react";
import SmallCamper from "../../../Assets/Images/Home/RVIcons/Small-camper.png";
import ToyHauler from "../../../Assets/Images/Home/RVIcons/Toy-hauler.png";
import TravelTrailer from "../../../Assets/Images/Home/RVIcons/Travel-trailer.png";
import TruckCamper from "../../../Assets/Images/Home/RVIcons/Truck-camper.png";
import ClassA from "../../../Assets/Images/Home/RVIcons/Class-A.png";
import ClassB from "../../../Assets/Images/Home/RVIcons/class-B.png";
import FifthWheel from "../../../Assets/Images/Home/RVIcons/Fifth-Wheel.png";
import ClassC from "../../../Assets/Images/Home/RVIcons/Class-C.png";
import DestinationTrailer from "../../../Assets/Images/Home/RVIcons/Destination-trailer.png";
import PopUp from "../../../Assets/Images/Home/RVIcons/Pop-up.png";
import { Link, useNavigate } from "react-router-dom";
import RightArrow from "../../../Assets/Icons/RightArrow";
import { useSuggestedRV } from "../../../ApiContext/SuggestedRVContext";

const rvTypes = [
  { label: "Small Camper", type: "small-camper", image: SmallCamper },
  { label: "Toy Hauler", type: "toy-hauler", image: ToyHauler },
  { label: "Travel Trailer", type: "travel-trailer", image: TravelTrailer },
  { label: "Truck Camper", type: "truck-camper", image: TruckCamper },
  { label: "Class A", type: "class a", image: ClassA },
  { label: "Class B", type: "class b", image: ClassB },
  { label: "5th Wheel", type: "5th wheel", image: FifthWheel },
  { label: "Class C", type: "class c", image: ClassC },
  {
    label: "Destination Trailer",
    type: "destination-trailer",
    image: DestinationTrailer,
  },
  { label: "Pop Up", type: "pop-up", image: PopUp },
];

const ShopRVTab = () => {
 const navigate = useNavigate();
   const { setVehicleType } = useSuggestedRV();
 
   const handleRVTypeClick = (type, label) => {
     setVehicleType(label); // Set label as vehicleType in context
     navigate(`/products?vehicle_type=${encodeURIComponent(type)}`);
   };
 
  return (
    <div className="tab-content">
      <h1>Shop Your RV</h1>
      <div className="rv-type-list">
        {rvTypes.map(({ label, image, type }) => (
          <div
            key={label}
            className="rv-type-item"
            onClick={() => handleRVTypeClick(type, label)}
            style={{ cursor: "pointer" }}
          >
            <div className="rv-type-img">
              <img src={image} alt={label} />
            </div>
            <h2>{label}</h2>
          </div>
        ))}
      </div>

      <div className="rv-type-btn">
        <Link to="/products">
          SHOP ALL RVs
          <span className="btn-icon">
            <RightArrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ShopRVTab;
