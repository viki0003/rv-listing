import { Link } from "react-router";
import { TabView, TabPanel } from "primereact/tabview";
import RightArrow from "../../../Assets/Icons/RightArrow";
import "./banner.css";
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
import SellRVImg from "../../../Assets/Images/Home/sellrv.png";

const Banner = () => {
  return (
    <div className="home-banner">
      <div className="container">
        <div className="banner-tab">
          <TabView>
            <TabPanel header="Shop your RV">
              <div className="tab-content">
                <h1>Shop Your RV</h1>
                <div className="rv-type-list">
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={SmallCamper} alt="SmallCamper" />
                    </div>

                    <h2>Small-camper</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={ToyHauler} alt="SmallCamper" />
                    </div>
                    <h2>Toy-hauler</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={TravelTrailer} alt="SmallCamper" />
                    </div>
                    <h2>Travel-trailer</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={TruckCamper} alt="SmallCamper" />
                    </div>
                    <h2>Truck-camper</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={ClassA} alt="SmallCamper" />
                    </div>
                    <h2>Class A</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={ClassB} alt="SmallCamper" />
                    </div>
                    <h2>class-B</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={FifthWheel} alt="SmallCamper" />
                    </div>
                    <h2>Fifth Wheel</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={ClassC} alt="SmallCamper" />
                    </div>
                    <h2>Class C</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={DestinationTrailer} alt="SmallCamper" />
                    </div>
                    <h2>Destination-trailer</h2>
                  </div>
                  <div className="rv-type-item">
                    <div className="rv-type-img">
                      <img src={PopUp} alt="SmallCamper" />
                    </div>
                    <h2>Pop-up</h2>
                  </div>
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
            </TabPanel>
            <TabPanel header="Sell Your RV">
              <div className="tab-content">
                <h1>Shop Your RV</h1>
                <div className="sell-rv-img">
                  <img src={SellRVImg} alt="sellrv" />
                </div>
                <div className="rv-type-btn">
                  <Link to="/products">
                    SELL YOUR RVs
                    <span className="btn-icon">
                      <RightArrow />
                    </span>
                  </Link>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
        {/* <h1>“Lorem ipsum dolor sit amet consectetur. Commodo”</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mattis sed amet dolor a
          praesent. Dolor maecenas nunc hac nulla vitae convallis.
        </p>
        <Link to="/products">
          Shop Now
          <span className="btn-icon">
            <RightArrow />
          </span>
        </Link> */}
      </div>
    </div>
  );
};

export default Banner;
