import React, { useState } from "react";
import "./categories.css";
import { useNavigate } from "react-router-dom";
import { useSuggestedRV } from "../../../ApiContext/SuggestedRVContext";
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

const rvTypess = [
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

export default function Categories() {
  const navigate = useNavigate();
  const { setVehicleType } = useSuggestedRV();

  const handleRVTypeClick = (type, label) => {
    setVehicleType(label);
    navigate(`/products?vehicle_type=${encodeURIComponent(type)}`);
  };

  const [viewAll, setViewAll] = useState(false);

  return (
    <div className="category-container">
      <div className="category-header">
        <h2>Categories</h2>
        <button onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className={`rv-type-list category-list ${viewAll ? "grid-view" : "scroll-view"}`}>
        {rvTypess.map(({ label, image, type }) => (
          <div
            key={label}
            className="rv-type-item"
            onClick={() => handleRVTypeClick(type, label)}
            style={{ cursor: "pointer" }}
          >
            <div className="rv-type-img">
              <img src={image} alt={label} />
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
