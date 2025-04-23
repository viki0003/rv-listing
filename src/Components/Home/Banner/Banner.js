import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./banner.css";
import { Dialog } from "primereact/dialog";
import ShopRVTab from "./ShopRVTab";

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // 0 = Shop RV, 1 = Sell RV

  return (
    <div className="home-banner">
      <div className={`container ${activeIndex === 1 ? "sell-rv-container" : ""}`}>
        <div className="banner-tab">
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
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
              </div>
            </TabPanel>
          </TabView>
        </div>

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
