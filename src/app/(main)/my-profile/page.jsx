"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Camera, Loader2, Mail, Pencil, Save, User } from "lucide-react";

import { updateUser, useSession } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";

const MyProfilePage = () => {
  const { data, isPending } = useSession();

  const sessionUser = data?.user;

  const [name, setName] = useState(sessionUser?.name || "");
  const [image, setImage] = useState(sessionUser?.image || "");

  const [loading, setLoading] = useState(false);

  // Set Initial User Data

  useEffect(() => {
    if (sessionUser) {
      setName(sessionUser.name || "");
      setImage(sessionUser.image || "");
    }
  }, [sessionUser]);
  // Loading Session
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-10 h-10 text-yellow-500" />
      </div>
    );
  }

  // Update Handler
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateUser({
        name,
        image,
      });

      toast.success("Profile Updated Successfully!");
    } catch (error) {
      console.log(error);

      toast.error("Failed To Update Profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-16 px-5">
        <ToastContainer></ToastContainer>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                src={image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="profile"
                width={130}
                height={130}
                className="rounded-full object-cover border-4 border-yellow-500"
              />

              <div className="absolute bottom-1 right-1 bg-yellow-500 p-2 rounded-full">
                <Camera className="text-black w-4 h-4" />
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-6">{name}</h2>

            <p className="text-gray-500 mt-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {sessionUser?.email}
            </p>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Account Type</span>

              <span className="font-semibold">Premium User</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Membership</span>

              <span className="font-semibold text-yellow-600">Active</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-yellow-500/10 p-3 rounded-xl">
              <Pencil className="text-yellow-600 w-6 h-6" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Update Profile</h2>

              <p className="text-gray-500 mt-1">
                Manage your personal information
              </p>
            </div>
          </div>

          <form onSubmit={handleUpdateProfile} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Full Name
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4">
                <User className="text-gray-400 w-5 h-5" />

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-4 outline-none rounded-2xl"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Profile Photo URL
              </label>

              <div className="flex items-center border border-gray-200 rounded-2xl px-4">
                <Camera className="text-gray-400 w-5 h-5" />

                <input
                  type="text"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full px-4 py-4 outline-none rounded-2xl"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Email Address
              </label>

              <input
                type="email"
                value={sessionUser?.email || ""}
                disabled
                className="w-full border border-gray-200 rounded-2xl px-4 py-4 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-black flex items-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" />
                  Updating...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Changes
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
