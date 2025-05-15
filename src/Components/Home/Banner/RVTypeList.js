import React from "react";
import { useNavigate } from "react-router-dom";
import { useSuggestedRV } from "../../../ApiContext/SuggestedRVContext";

const RVTypeList = ({ rvTypes }) => {
  const navigate = useNavigate();
  const { setVehicleType } = useSuggestedRV();

  const handleRVTypeClick = (type, label) => {
    setVehicleType(label);
    navigate(`/products?vehicle_type=${encodeURIComponent(type)}`);
  };

  return (
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
  );
};

export default RVTypeList;
