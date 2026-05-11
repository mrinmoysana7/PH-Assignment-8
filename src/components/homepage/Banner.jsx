import Link from "next/link";

const BannerPage = () => {
  return (
    <div className="hero min-h-[73vh] flex bg-yellow-500">
      <div className="px-10 md:px-30 hero-content text-neutral-content">
        <div className="max-w-md space-y-5">
          <h1 className="font-semibold text-lg text-white">PREMIUM COLLECTION</h1>
          <p className="font-bold text-5xl text-black">
            DISCOVER THE <br></br> PERFECT TILE
          </p>
          <p className="font-semibold text-white">
            Luxury tiles for every space. <br></br> Elevate your home with
            timeless beauty.
          </p>
          <Link href="/all-tiles">
            <button className="btn border-none bg-orange-600 text-white">Browse Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
