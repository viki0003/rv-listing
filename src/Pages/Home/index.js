import Banner from "../../Components/Home/Banner/Banner";
import Brands from "../../Components/Home/Brands/Brands";
import CTABanner from "../../Components/Home/CTABanner/CTABanner";
import ExploreMore from "../../Components/Home/ExploreMore/ExploreMore";
import PopularSales from "../../Components/Home/PopularSales/PopularSales";

const Home = () => {
  return (
    <>
      <Banner />
      <ExploreMore />
      <PopularSales />
      <Brands />
      <CTABanner />
    </>
  );
};
export default Home;
