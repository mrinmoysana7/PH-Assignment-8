// "use client";
// import Image from "next/image";
// import logo from "@/assets/marbleva4.png";
// import Navlink from "./Navlink";
// import { signOut, useSession } from "@/lib/auth-client";
// import Link from "next/link";
// import { Button, Spinner } from "@heroui/react";
// // import Navlink from "./Navlink";
// // import {Bars, Pencil, SquarePlus, TrashBin} from "@gravity-ui/icons";
// // import {Button, Description, Dropdown, Header, Kbd, Label, Separator} from "@heroui/react";

// const Navbar = () => {
//   const { data, isPending } = useSession();

//   const user = data?.user;
//   return (
//     <div className="navbar bg-yellow-500 px-5 md:px-20">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <Navlink href="/">Home</Navlink>
//             </li>
//             <li>
//               <Navlink href="/all-tiles">All Tiles</Navlink>
//             </li>
//             <li>
//               <Navlink href="/my-profile">My Profile</Navlink>
//             </li>
//           </ul>
//         </div>
//         <Image src={logo} height={5} width={200} alt=""></Image>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="flex gap-5">
//           <li>
//             <Navlink href="/">Home</Navlink>
//           </li>
//           <li>
//             <Navlink href="/all-tiles">All Tiles</Navlink>
//           </li>
//           <li>
//             <Navlink href="/my-profile">My Profile</Navlink>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         {isPending ? (
//           <div className="flex flex-col items-center gap-2">
//             <Spinner color="warning" />
//           </div>
//         ) : user ? (
//           <div className="flex-wrap md:flex items-center gap-3">
//             <div className="flex items-center gap-2">
//               <p className="text-[10px] md:text-lg">Welcome, {user.name}</p>
//             <Image
//               src={user?.image}
//               width={40}
//               height={40}
//               alt="User Avatar"
//               className="rounded-full"
//             ></Image>
//             </div>
//             <Button
//               className="p-2 text-sm bg-white rounded-sm "
//               onClick={() => signOut()}
//             >
//               Logout
//             </Button>
//           </div>
//         ) : (
//           <Link href="/login">
//             <Button className="px-10 rounded-sm btn btn-primary">Login</Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import logo from "@/assets/marbleva4.png";
import Navlink from "./Navlink";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { Button, Spinner } from "@heroui/react";

const Navbar = () => {
  const { data, isPending } = useSession();

  const user = data?.user;

  return (
    <div className="navbar bg-white shadow-lg px-4 md:px-8 lg:px-16 py-3 sticky top-0 z-50">
      {/* LEFT */}
      <div className="navbar-start gap-2">
        {/* MOBILE MENU */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
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
          <Image
            src={logo}
            alt="Marbleva Logo"
            width={140}
            height={40}
            className="w-[100px] md:w-[130px] lg:w-[150px] object-contain"
            priority
          />
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
          <Spinner color="warning" />
        ) : user ? (
          <div className="flex items-center gap-2 md:gap-4">
            {/* USER INFO */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-right leading-tight">
                <p className="text-xs text-black/70">Welcome</p>

                <p className="text-sm md:text-base font-semibold truncate max-w-[90px] md:max-w-[140px]">
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
              onClick={() => signOut()}
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
