import './banner.css';
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedVehicleType = searchParams.get("vehicle_type");

  const headingText = selectedVehicleType
    ? `${selectedVehicleType.replace(/-/g, ' ')} RVs`
    : "Shop your RV's";

  return (
    <div className="pl-banner pl-bnr-cstm">
      <div className="container">
        <div className="pl-bg">
          <div className="pl-bg-content">
            <h2>{headingText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
