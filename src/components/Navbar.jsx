"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // একটিভ লিঙ্ক হাইলাইট করার জন্য
import { toast } from "react-toastify";
import { LuLayoutGrid, LuLogOut, LuUser } from "react-icons/lu"; // মডার্ন আইকন

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const pathname = usePathname();

    const handleSignout = async () => {
        await authClient.signOut();
        toast.warning("Logged out successfully!");
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Tiles", href: "/all-tiles" },
        { name: "Profile", href: "/my-profile" },
    ];

    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-sm">
            <div className="navbar container mx-auto px-4 lg:px-8">
                
                {/* LEFT - LOGO & MOBILE MENU */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-2xl w-64 border border-zinc-100">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        className={pathname === link.href ? "text-[#7D2237] font-bold" : ""}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-[#7D2237] p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
                            <LuLayoutGrid size={20} />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-zinc-800">
                            TILE<span className="text-[#7D2237]">GALLERY</span>
                        </span>
                    </Link>
                </div>

                {/* CENTER - DESKTOP MENU */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-zinc-600">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href}
                                    className={`hover:text-[#7D2237] transition-colors ${pathname === link.href ? "text-[#7D2237] border-b-2 border-[#7D2237] pb-1" : ""}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT - AUTH SECTION */}
                <div className="navbar-end gap-3">
                    {user ? (
                        <div className="flex items-center gap-3 bg-zinc-50 p-1 pr-3 rounded-full border border-zinc-200">
                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm ring-1 ring-zinc-100 relative">
                                {user?.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || "User"}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-[#7D2237] text-white flex items-center justify-center text-xs font-bold">
                                        {user?.name?.charAt(0)}
                                    </div>
                                )}
                            </div>
                            
                            <div className="hidden md:block">
                                <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Welcome</p>
                                <p className="text-xs font-bold text-zinc-800 leading-tight truncate max-w-[80px]">
                                    {user?.name?.split(" ")[0]}
                                </p>
                            </div>

                            <button
                                onClick={handleSignout}
                                className="p-2 hover:bg-red-50 text-zinc-400 hover:text-red-600 rounded-full transition-colors"
                                title="Logout"
                            >
                                <LuLogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link href="/signin" className="hidden sm:block text-sm font-bold text-zinc-600 hover:text-[#7D2237] px-4">
                                Sign In
                            </Link>
                            <Link href="/signup">
                                <button className="btn btn-sm md:btn-md bg-[#7D2237] hover:bg-zinc-900 text-white border-none rounded-full px-6 shadow-md shadow-[#7D2237]/20">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;