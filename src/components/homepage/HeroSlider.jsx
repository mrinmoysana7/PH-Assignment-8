"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      title: "Luxury Marble Collection",
      subtitle:
        "Transform your interiors with premium marble elegance and timeless modern aesthetics.",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop",
      title: "Modern Interior Aesthetic",
      subtitle:
        "Discover world-class ceramic and designer tiles crafted for sophisticated living spaces.",
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
      title: "Premium Designer Tiles",
      subtitle:
        "Elevate every corner of your home with luxury textures, patterns, and modern finishes.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Slide */}
            <div
              className="relativec h-[80vh] md:h-[75vh] w-full bg-cover py-15 bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/55"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-5 h-full flex items-center">
                <div className="max-w-3xl">
                  {/* Small Tag */}
                  <div className="inline-block mb-6">
                    <span className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 px-5 py-2 rounded-full text-sm tracking-widest uppercase">
                      Premium Tile Collection
                    </span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-7 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                    {slide.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-5">
                    <Link
                      href="/all-tiles"
                      className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 px-8 py-4 rounded-xl text-black font-bold text-center"
                    >
                      Explore Collection
                    </Link>

                    <Link
                      href="/all-tiles"
                      className="border border-white/30 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold text-center backdrop-blur-sm"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
