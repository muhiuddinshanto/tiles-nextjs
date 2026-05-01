"use client";

import UserModal from "@/components/UserModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

   const [open, setOpen] = useState(false);

   const handleSinguot = async () => {
        await authClient.signOut();
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <UserModal open={open} setOpen={setOpen} />

      
      <div className="card w-full max-w-sm bg-white shadow-xl border border-[#7D2237]/10 rounded-2xl">
        
        <figure className="pt-6">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user?.name || "User"}
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-[#7D2237]/20"
            />
          ) : (
            <div className="w-[120px] h-[120px] rounded-full bg-[#7D2237] flex items-center justify-center text-white text-4xl font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}
        </figure>

        <div className="card-body items-center text-center">
          
          <h2 className="text-xl font-bold text-gray-800">
            {user?.name || "Unknown User"}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.email || "No email available"}
          </p>

          <div className="mt-4 flex gap-2">
            <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-lg bg-[#7D2237] text-white hover:bg-[#5e1a2a] transition">
              Edit Profile
              
            </button>

            <button onClick={handleSinguot} className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
              Logout
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProfilePage;