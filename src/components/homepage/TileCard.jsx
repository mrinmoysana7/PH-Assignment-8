import Image from "next/image";
import Link from "next/link";

const TileCard = ({ tile }) => {
  return (
    <div className="shadow-lg rounded-2xl flex p-5 flex-col gap-2">
      <div className="flex-1">
        <Image
          src={tile.image}
          width="300"
          height="200"
          alt=""
          className="w-full h-48 object-cover rounded-2xl"
        />
      </div>

      <div className="p-5 space-y-2">
        <p className="font-bold">{tile.title}</p>
        <p className="font-semibold">{tile.dimensions}</p>
        <p className="font-bold">${tile.price.toFixed(2)}</p>
        <Link href={`/tile/${tile.id}`}>
          <button className="py-2 px-3 bg-amber-300 rounded-xl">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default TileCard;
