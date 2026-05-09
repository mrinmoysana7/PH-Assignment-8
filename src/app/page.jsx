import Image from "next/image";

const getAllTiles = async () => {
  const res = await fetch(`https://json-server-marbleva.onrender.com/tiles`);
  const tiles = await res.json();
  return tiles;
};

const HomePage = async () => {
  const tiles = await getAllTiles();

  return (
    <div className="container px-5 mx-auto py-5 md:py-20">
      <h2 className="font-bold text-4xl">Luxury Tiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 md:py-20">
        {tiles.map((tile) => {
          return (
            <div className="p-5 border-2 border-cyan-800 rounded-xl" key={tile.id}>
              <p>Title: {tile.title}</p>
              <p>Description: {tile.description}</p>
              <Image src={tile.image} width={300} height={200} alt=""></Image>
              <p>Category: {tile.category}</p>
              <p>Price: {tile.price}</p>
              <p>Currency: {tile.currency}</p>
              <p>Dimensions: {tile.dimensions}</p>
              <p>Material: {tile.material}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;