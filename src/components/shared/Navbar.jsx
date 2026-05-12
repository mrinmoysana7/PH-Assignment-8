"use client";

import Image from "next/image";
import Navlink from "./Navlink";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data, isPending } = useSession();

  const user = data?.user;

  const handleLogout = async () => {
    try {
      await signOut();

      toast.success("Logout successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      toast.error("Failed to logout.");
    }
  };

  return (
    <div className="navbar bg-white shadow-lg px-4 md:px-8 lg:px-16 py-3 sticky top-0 z-50">
      <ToastContainer />
      {/* LEFT */}
      <div className="navbar-start gap-2">
        {/* MOBILE MENU */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-100 p-3 shadow-xl bg-white rounded-2xl w-60 space-y-1"
          >
            <li>
              <Navlink href="/">Home</Navlink>
            </li>

            <li>
              <Navlink href="/all-tiles">All Tiles</Navlink>
            </li>

            <li>
              <Navlink href="/my-profile">My Profile</Navlink>
            </li>
          </ul>
        </div>

        {/* LOGO */}
        <Link href="/">
          <h2 className="font-bold text-2xl">M<span className="text-yellow-500">arbleva</span></h2>
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <Navlink href="/">Home</Navlink>
          </li>

          <li>
            <Navlink href="/all-tiles">All Tiles</Navlink>
          </li>

          <li>
            <Navlink href="/my-profile">My Profile</Navlink>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        {isPending ? (
          <span className="loading loading-spinner text-warning"></span>
        ) : user ? (
          <div className="flex items-center gap-2 md:gap-4">
            {/* USER INFO */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-right leading-tight">
                <p className="text-xs text-black/70">Welcome</p>

                <p className="text-sm md:text-base font-semibold truncate max-w-22.5 md:max-w-35">
                  {user.name}
                </p>
              </div>

              <Image
                src={user?.image || "https://i.pravatar.cc/150"}
                width={42}
                height={42}
                alt="User Avatar"
                className="rounded-full border-2 border-white shadow-md object-cover"
              />
            </div>

            {/* LOGOUT BUTTON */}
            <Link href="/">
              <Button
                className="px-4 py-1 text-sm font-bold bg-white rounded-2xl hover:bg-gray-100 transition-colors"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Link>
          </div>
        ) : (
          <Link href="/login">
            <Button
              radius="sm"
              className="bg-blue-600 text-white rounded-xl hover:scale-105 transition-all duration-300 py-1 px-5 md:px-8 font-medium shadow-lg"
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
