import Image from "next/image";

const TileCard = ({ tile }) => {
  return (
    <div >
      <div>
        <div className="flex-1">
          <Image
            src={tile.image}
            width={400}
            height={0}
            alt=""
            className="rounded-xl mb-5"
          ></Image>
        </div>
        <div className="flex-1">
          <p>Title: {tile.title}</p>
          <p>Description: {tile.description}</p>

          <p>Category: {tile.category}</p>
          <p>Price: {tile.price}</p>
          <p>Currency: {tile.currency}</p>
          <p>Dimensions: {tile.dimensions}</p>
          <p>Material: {tile.material}</p>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
