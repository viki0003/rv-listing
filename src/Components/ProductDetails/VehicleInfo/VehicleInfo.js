import React from "react";
import "./vehicleinfo.css";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
const VehicleInfo = ({ product }) => {
  return (
    <>
      <div className="vehicle-info-container">
        <div className="vehicle-details">
          <VehicleDetails  product={product}/>
        </div>
        <div className="empty-space"></div>
      </div>
    </>
  );
};

export default VehicleInfo;
