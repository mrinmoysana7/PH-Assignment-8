import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import HeroSlider from "@/components/homepage/HeroSlider";
import MarqueePage from "@/components/shared/Marquee";
import { getAllTiles } from "@/lib/data";

const HomePage = async () => {
  const tiles = await getAllTiles();
  return (
    <div className="">
      <HeroSlider />
      <MarqueePage></MarqueePage>
      <FeaturedTiles tiles={tiles}></FeaturedTiles>
    </div>
  );
};

export default HomePage;
