"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignout = async () => {
        await authClient.signOut();
        toast.warning("signOut Succesfull!");
    };

    
    const navLinks = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-tiles">All Tiles</Link></li>
            <li><Link href="/my-profile">Profile</Link></li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto px-4">
                
                {/* LEFT - LOGO & MOBILE MENU */}
                <div className="navbar-start">
                    
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                            {navLinks}
                        </ul>
                    </div>
                    
                    <Link href="/" className="btn btn-ghost text-xl">
                        TileGallery
                    </Link>
                </div>

                {/* CENTER - ONLY DESKTOP */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>

                {/* RIGHT - AUTH BUTTONS */}
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <p className="hidden sm:block text-sm whitespace-nowrap">
                                Hello, {user?.name}
                            </p>

                            <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral text-neutral-content flex items-center justify-center border border-base-300">
                                {user?.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || "User"}
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                ) : (
                                    <span className="text-xs">
                                        {user?.name?.charAt(0)}
                                    </span>
                                )}
                            </div>

                            <button
                                onClick={handleSignout}
                                className="btn btn-xs sm:btn-sm btn-ghost border-base-300"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link href="/signin">
                                <button className="btn btn-sm btn-outline">Sign In</button>
                            </Link>
                            <Link href="/signup">
                                <button className="btn btn-sm btn-[#7D2237]">Sign Up</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;