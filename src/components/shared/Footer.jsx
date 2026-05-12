// components/shared/Footer.jsx

import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
import Link from "next/link";
import { FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Twitter,
// } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* Top Section */}
      <div className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            {/* Logo */}
            <Link href="/">
              <h2 className="text-4xl font-black tracking-wide text-yellow-500">
                Merbleva
              </h2>
            </Link>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Discover premium luxury tile collections crafted for modern
              interiors, elegant architecture, and timeless aesthetic living
              spaces.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-white/5 hover:bg-yellow-500 hover:text-black transition-all duration-300 p-3 rounded-full border border-white/10"
              >
                <LogoFacebook></LogoFacebook>
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-white/5 hover:bg-yellow-500 hover:text-black transition-all duration-300 p-3 rounded-full border border-white/10"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="bg-white/5 hover:bg-yellow-500 hover:text-black transition-all duration-300 p-3 rounded-full border border-white/10"
              >
                <LogoLinkedin></LogoLinkedin>
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="bg-white/5 hover:bg-yellow-500 hover:text-black transition-all duration-300 p-3 rounded-full border border-white/10"
              >
                <FaSquareXTwitter />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/all-tiles"
                  className="hover:text-yellow-500 transition-colors"
                >
                  All Tiles
                </Link>
              </li>

              <li>
                <Link
                  href="/my-profile"
                  className="hover:text-yellow-500 transition-colors"
                >
                  My Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Tile Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Collections</h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-yellow-500 transition-colors cursor-pointer">
                Marble Tiles
              </li>

              <li className="hover:text-yellow-500 transition-colors cursor-pointer">
                Ceramic Tiles
              </li>

              <li className="hover:text-yellow-500 transition-colors cursor-pointer">
                Mosaic Designs
              </li>

              <li className="hover:text-yellow-500 transition-colors cursor-pointer">
                Outdoor Tiles
              </li>

              <li className="hover:text-yellow-500 transition-colors cursor-pointer">
                Luxury Interiors
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

            <div className="space-y-5 text-gray-400">
              {/* Address */}
              <div className="flex items-start gap-4">
              <FaMapMarkerAlt />

                <p>
                  Sector V, Bidhannagar,
                  <br />
                  Kolkata, West Bengal
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
               <MdEmail />

                <p>mrinmoysana7@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
               <FaPhone />

                <p>+91 6290983331</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Subscribe Newsletter</h4>

              <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-white/5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-3 outline-none text-sm"
                />

                <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 px-5 py-3 text-black font-semibold">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Merbleva. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Designed & Developed by
            <span className="text-yellow-500 font-semibold ml-2">
              Mrinmoy Sana
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
