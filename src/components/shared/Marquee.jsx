"use client";

import Marquee from "react-fast-marquee";
import { Flame, Truck, Gem, BadgePercent, Star, Gift } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Big Sale",
    subtitle: "Up to 50% OFF",
    icon: Flame,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "All Over India",
    icon: Truck,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Luxury Grade Tiles",
    icon: Gem,
    bg: "bg-violet-100",
    color: "text-violet-600",
  },
  {
    id: 4,
    title: "Best Deals",
    subtitle: "Limited Time Offer",
    icon: BadgePercent,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    id: 5,
    title: "Customer Rating",
    subtitle: "4.8/5 Trusted",
    icon: Star,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    id: 6,
    title: "Festival Offer",
    subtitle: "Diwali Mega Sale",
    icon: Gift,
    bg: "bg-pink-100",
    color: "text-pink-600",
  },
];

const MarqueeSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#f8f5ef] via-[#f5efe4] to-[#efe6d7] py-3 md:py-10 border-y border-[#e6dac7]">
      <Marquee speed={40} pauseOnHover gradient={false}>
        <div className="flex gap-8 px-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group min-w-75 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
              >
                <div className="flex items-center gap-5">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.bg}`}
                  >
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-black transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
