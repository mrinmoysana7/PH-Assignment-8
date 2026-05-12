"use client";

import { useState } from "react";
import TileCard from "../homepage/TileCard";

const AllTiles = ({ tiles }) => {
  const [searchTiles, setSearchTiles] = useState("");

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchTiles.toLowerCase()),
  );

  return (
    <div className="container mx-auto my-10 px-5">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10">
        <div>
          <h2 className="font-bold text-2xl">All Tiles</h2>
        </div>

        {/* Search */}
        <div className="flex border-yellow-500 border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search tiles..."
            value={searchTiles}
            onChange={(e) => setSearchTiles(e.target.value)}
            className="input border-none"
          />

          <button className="btn border-none bg-yellow-500">Search</button>
        </div>
      </div>

      {/* No Tiles */}
      {filteredTiles.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold">No Tiles Found</h2>
        </div>
      )}

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredTiles.map((tile) => (
          <TileCard tile={tile} key={tile.id} />
        ))}
      </div>
    </div>
  );
};

export default AllTiles;
