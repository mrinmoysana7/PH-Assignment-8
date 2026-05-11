import TileCard from "@/components/homepage/TileCard";
import { getAllTiles } from "@/lib/data";

const AllTilesPage = async () => {
  const tiles = await getAllTiles();
  return (
    <div className="container mx-auto my-10 p-5">
      {/* <h2>Featured Tiles</h2> */}
      <h2 className="font-bold text-2xl mb-5">All Tiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {tiles.map((tile) => {
          return <TileCard tile={tile} key={tile.id}></TileCard>;
        })}
      </div>
    </div>
  );
};

export default AllTilesPage;
