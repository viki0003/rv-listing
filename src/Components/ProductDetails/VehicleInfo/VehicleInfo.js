import React from "react";
import "./vehicleinfo.css";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
const VehicleInfo = () => {
  return (
    <>
      <div className="vehicle-info-container">
        <div className="vehicle-details">
          <VehicleDetails />
        </div>
        <div className="empty-space"></div>
      </div>
    </>
  );
};

export default VehicleInfo;
