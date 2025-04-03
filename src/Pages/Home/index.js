import React from "react";
import Banner from "../../Components/Home/Banner/Banner";
import Brands from "../../Components/Home/Brands/Brands";
import CTABanner from "../../Components/Home/CTABanner/CTABanner";
import ExploreMore from "../../Components/Home/ExploreMore/ExploreMore";
import PopularSales from "../../Components/Home/PopularSales/PopularSales";
import ResponsiveBrands from "../../Components/Home/ResponsiveBrands/ResponsiveBrands";

const Home = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 772);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Banner />
      <ExploreMore />
      {isMobile?<ResponsiveBrands/>:''}
      <PopularSales />
      {isMobile?'':<Brands />}
      <CTABanner />
    </>
  );
};
export default Home;
