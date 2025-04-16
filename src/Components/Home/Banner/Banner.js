import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./banner.css";

import { Dialog } from "primereact/dialog";
import ShopRVTab from "./ShopRVTab";

const Banner = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="home-banner">
      <div className="container">
        <div className="banner-tab">
          <TabView>
            <TabPanel header="Shop your RV">
              <ShopRVTab />
            </TabPanel>
            <TabPanel header="Sell Your RV">
              <div className="tab-content">
                <h1>Sell Your RV</h1>
                <iframe
                  src="https://link.nationwiderv.net/widget/survey/MTkstRjvo85hdw3v9mg0"
                  scrolling="yes"
                  id="MTkstRjvo85hdw3v9mg0"
                  title="2. New Lead Survey [HL Native Survey] - For Website"
                ></iframe>
                <script src="https://link.nationwiderv.net/js/form_embed.js"></script>
                {/* <div className="sell-rv-img">
                  <img src={SellRVImg} alt="sellrv" />
                </div>
                <div className="rv-type-btn">
                  <Link onClick={() => setVisible(true)}>
                    SELL YOUR RVs
                    <span className="btn-icon">
                      <RightArrow />
                    </span>
                  </Link>
                </div> */}
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
        <Dialog
          header="Sell your RV"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
          className="sell-rv-dialog"
        >
          <iframe
            src="https://link.nationwiderv.net/widget/survey/E8WL9iX0ktdbg6GPhUNk"
            id="E8WL9iX0ktdbg6GPhUNk"
            title="2. New Lead Survey [HL Native Survey]"
          ></iframe>
          <script src="https://link.nationwiderv.net/js/form_embed.js"></script>
        </Dialog>
      </div>
    </div>
  );
};

export default Banner;
