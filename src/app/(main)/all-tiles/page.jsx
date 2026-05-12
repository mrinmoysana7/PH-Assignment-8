import AllTiles from "@/components/shared/AllTiles";
import { getAllTiles } from "@/lib/data";

const AllTilesPage = async () => {
  const tiles = await getAllTiles();

  return (
    <div>
     <AllTiles tiles={tiles}></AllTiles>
    </div>
  );
};

export default AllTilesPage;
