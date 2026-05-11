import { getSingleTileDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const tile = await getSingleTileDetails(id);

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-100 via-white to-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden p-6 lg:p-10">
          {/* Left Image */}
          <div className="">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={tile.image}
                width={700}
                height={10}
                alt={tile.title}
                className="w-full md:h-125 object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              {tile.title}
            </h1>

            <p className="text-gray-600 leading-7 mb-6">{tile.description}</p>

            {/* Price */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-indigo-600">
                ${tile.price}
              </h2>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-sm text-gray-500">Material</p>
                <h3 className="font-semibold text-lg">{tile.material}</h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-sm text-gray-500">Finish</p>
                <h3 className="font-semibold text-lg">{tile.finish}</h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-sm text-gray-500">Dimensions</p>
                <h3 className="font-semibold text-lg">{tile.dimensions}</h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-4">
                <p className="text-sm text-gray-500">Brand</p>
                <h3 className="font-semibold text-lg">{tile.brand}</h3>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {tile.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="">
              <Link
                href="/all-tiles"
                className="border border-gray-300 hover:border-black hover:text-black transition px-5 py-3 rounded-xl font-semibold text-gray-700"
              >
                Back To Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TilesDetailsPage;
