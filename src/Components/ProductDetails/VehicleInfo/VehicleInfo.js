import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import "./vehicleinfo.css";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import TPForm from "../../TPForm/TPForm";
const VehicleInfo = ({ product }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="vehicle-info-container">
        <div className="vehicle-details">
          <VehicleDetails product={product} />
        </div>
        <div className="empty-space"></div>
      </div>
      <div className="vic-buttons">
      <Button label="Get Today's Price" className="vic-pre-approved" onClick={() => setVisible(true)} />
            <Dialog visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}>
                <TPForm/>
            </Dialog>
        <button className="vic-info">Value My Trade</button>
      </div>
    </>
  );
};

export default VehicleInfo;
