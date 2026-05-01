"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    // const [user, setUser] = useState(false);
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);

    const handleSinguot = async () => {
        await authClient.signOut();
    }


    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto relative">

                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="navbar-center hidden lg:flex absolute left-1/2 -translate-x-1/2">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/all-tiles">All Tiles</Link></li>
                        <li><Link href="/profile">Profile</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        <div className=" flex gap-2 items-center">
                        <div>
                            <p>hello, {user?.name}</p>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                {user?.image ? <Image 
                                    src={user.image}
                                    alt={user.name}
                                    height={80}
                                    width={80}
                                    /> : <span className="text-xl">{user?.name?.charAt(0)}</span>}
                               
                            </div>
                        </div>
                        <div>
                            <button onClick={handleSinguot} className="btn">Logout</button>
                        </div>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <div>
                            <Link href={'/signin'}><button className="btn btn-outline">SingIn</button></Link>
                            </div>
                            <div>
                            <Link href={'/signup'}><button className="btn btn-outline">Singout</button></Link>
                            </div>
                            

                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;