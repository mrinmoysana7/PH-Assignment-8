
import BannerPage from "@/components/homepage/Banner";
import FeaturedTilesPage from "@/components/homepage/FeaturedTiles";
import MarqueePage from "@/components/shared/Marquee";


const HomePage = () => {
  return (
    <div className="">
      {/* <h2>This is my home page</h2> */}
      <BannerPage></BannerPage>
      <MarqueePage></MarqueePage>
      <FeaturedTilesPage></FeaturedTilesPage>
    </div>
  );
};

export default HomePage;
