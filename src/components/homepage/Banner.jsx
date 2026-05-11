import Link from "next/link";

const BannerPage = () => {
  return (
    <div className="hero min-h-[69vh] md:min-h-[65vh] flex bg-yellow-500">
      <div className="px-10 md:px-30 hero-content text-neutral-content">
        <div className="max-w-md space-y-5">
          <h1 className="font-semibold text-lg">PREMIUM COLLECTION</h1>
          <p className="font-bold text-5xl">
            DISCOVER THE <br></br> PERFECT TILE
          </p>
          <p className="font-semibold">
            Luxury tiles for every space. <br></br> Elevate your home with
            timeless beauty.
          </p>
          <Link href="/all-tiles">
            <button className="btn btn-primary">Browse Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
