"use client";

import UserModal from "@/components/UserModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FiEdit2, FiLogOut, FiMail, FiUser } from "react-icons/fi";

const ProfilePage = () => {
  const router = useRouter();
  const session = authClient.useSession();
  const user = session.data?.user;
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleSignout = async () => {
    setLoggingOut(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.info("Logged out successfully");
          router.push("/signin");
        },
      },
    });
  };

  if (session.isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <span className="loading loading-spinner loading-lg text-[#7D2237]"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-10">
      <UserModal open={open} setOpen={setOpen} />

      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-sm border border-zinc-200 overflow-hidden">
        {/* top benner */}
        <div className="h-32 bg-[#7D2237]/10 w-full flex items-end justify-center">
            {/* profile */}
            <div className="relative -mb-12">
                {user?.image ? (
                <Image
                    src={user.image}
                    alt={user?.name || "User"}
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-4 border-white shadow-md w-24 h-24"
                />
                ) : (
                <div className="w-24 h-24 rounded-full bg-[#7D2237] border-4 border-white shadow-md flex items-center justify-center text-white text-3xl font-bold italic">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                )}
            </div>
        </div>

        {/* content */}
        <div className="pt-16 pb-10 px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-zinc-900">{user?.name || "Premium User"}</h2>
            <p className="text-zinc-500 text-sm mt-1">Personal Account Information</p>
          </div>

          <div className="space-y-4 mb-8">
            {/* user details */}
            <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="bg-white p-2 rounded-lg shadow-xs text-[#7D2237]"><FiUser /></div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Full Name</p>
                    <p className="text-zinc-700 font-medium">{user?.name}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="bg-white p-2 rounded-lg shadow-xs text-[#7D2237]"><FiMail /></div>
                <div className="truncate">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Email Address</p>
                    <p className="text-zinc-700 font-medium truncate">{user?.email}</p>
                </div>
            </div>
          </div>

          {/* btn */}
          <div className="grid grid-cols-2 gap-3">
            <button 
                onClick={() => setOpen(true)} 
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#7D2237] text-white hover:bg-zinc-900 transition-all duration-300 font-bold text-sm shadow-md shadow-[#7D2237]/20"
            >
              <FiEdit2 size={16} /> Edit Profile
            </button>

            <button 
                onClick={handleSignout} 
                disabled={loggingOut}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all duration-300 font-bold text-sm"
            >
              <FiLogOut size={16} /> {loggingOut ? "Signing out..." : "Logout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;