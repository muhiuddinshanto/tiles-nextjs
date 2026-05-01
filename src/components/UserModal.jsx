"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const UserModal = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const image = e.target.image.value;

        try {
            await authClient.updateUser({
                image,
                name,
            });
            // আপডেট সফল হলে মোডাল বন্ধ হবে
            setOpen(false);
        } catch (error) {
            console.error("Update failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
            <div className="modal-box max-w-sm border border-zinc-200 dark:border-zinc-800 p-0 overflow-hidden bg-base-100 shadow-2xl">
                
                {/* Header */}
                <div className="bg-zinc-50 dark:bg-zinc-900 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-sm">
                        Edit Profile
                    </h3>
                    <button 
                        onClick={() => setOpen(false)} 
                        className="btn btn-sm btn-circle btn-ghost"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6">
                    <form onSubmit={onSubmit} className="space-y-5">
                        
                        {/* Name Field */}
                        <div className="form-control w-full">
                            <label className="label py-1">
                                <span className="label-text font-bold uppercase text-[10px] tracking-widest text-zinc-500">Full Name</span>
                            </label>
                            <input 
                                name="name" 
                                type="text" 
                                required
                                className="input input-bordered w-full focus:border-[#7D2237] focus:outline-none transition-all" 
                                placeholder="Enter your name" 
                            />
                        </div>

                        {/* Image URL Field */}
                        <div className="form-control w-full">
                            <label className="label py-1">
                                <span className="label-text font-bold uppercase text-[10px] tracking-widest text-zinc-500">Profile Image URL</span>
                            </label>
                            <input 
                                name="image" 
                                type="url" 
                                className="input input-bordered w-full focus:border-[#7D2237] focus:outline-none transition-all" 
                                placeholder="https://example.com/photo.jpg" 
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 pt-4">
                            <button 
                                className="btn flex-1 bg-[#7D2237] hover:bg-[#5a1827] text-white border-none rounded-md uppercase tracking-widest text-xs" 
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? <span className="loading loading-spinner loading-xs"></span> : "Save Changes"}
                            </button>
                            
                            <button 
                                onClick={() => setOpen(false)}
                                className="btn btn-ghost border border-zinc-200 dark:border-zinc-700 rounded-md uppercase tracking-widest text-xs" 
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* মোডালের বাইরে ক্লিক করলে বন্ধ হবে */}
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setOpen(false)}>close</button>
            </form>
        </dialog>
    );
};

export default UserModal;