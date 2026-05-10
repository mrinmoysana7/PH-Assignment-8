// 'use client'
import Image from "next/image";
import logo from "@/assets/marbleva4.png";
import Navlink from "./Navlink";
// import Navlink from "./Navlink";
// import {Bars, Pencil, SquarePlus, TrashBin} from "@gravity-ui/icons";
// import {Button, Description, Dropdown, Header, Kbd, Label, Separator} from "@heroui/react";

const Navbar = () => {
  return (
    // <div className="px-20">
    //   <div className="flex items-center justify-between">
    //     <div className="left-side">
    //       <Image src={logo} height={10} width={100} alt=""></Image>
    //     </div>
    //     <div className="middle">
    //       <ul className="flex gap-5">
    //         <li>
    //           <Navlink href="/">Home</Navlink>
    //         </li>
    //         <li>
    //           <Navlink href="/all-tiles">All Tiles</Navlink>
    //         </li>
    //         <li>
    //           <Navlink href="/my-profile">My Profile</Navlink>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex items-center gap-5">
    //       <h2>Welcome Mrinmoy</h2>
    //       <button className="px-3 py-2 text-white font-semibold bg-purple-500 rounded-lg">
    //         Logout
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="navbar bg-yellow-500 px-5 md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <Image src={logo} height={5} width={200} alt=""></Image>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5">
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
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
