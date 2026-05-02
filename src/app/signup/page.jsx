'use client';

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import Link from "next/link";

const SignUpPage = () => {
    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const image = formData.get("image");
        const password = formData.get("password");

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        if (data) {
            toast.success("Account created successfully!");
            router.push('/');
        } else if (error) {
            toast.error(error.message || "Something went wrong!");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12">
            <div className="w-full max-w-md">
                
                {/* কার্ড কন্টেইনার */}
                <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
                    
                    {/* হেডার */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-zinc-900">Create Account</h2>
                        <p className="text-zinc-500 mt-2">Join us to manage your tile gallery</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label font-semibold text-zinc-700 text-sm">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full focus:border-[#7D2237] transition-all"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label font-semibold text-zinc-700 text-sm">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                className="input input-bordered w-full focus:border-[#7D2237]"
                                required
                            />
                        </div>

                        {/* Image URL Field */}
                        <div className="form-control">
                            <label className="label font-semibold text-zinc-700 text-sm">Profile Image URL</label>
                            <input
                                name="image"
                                type="url"
                                placeholder="https://image-link.com"
                                className="input input-bordered w-full focus:border-[#7D2237]"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="form-control relative">
                            <label className="label font-semibold text-zinc-700 text-sm">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={isShowPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="input input-bordered w-full pr-12 focus:border-[#7D2237]"
                                    required
                                    minLength={6}
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#7D2237]"
                                >
                                    {isShowPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* সাবমিট বাটন  */}
                        <button 
                            className="btn w-full mt-4 bg-[#7D2237] hover:bg-zinc-900 text-white border-none rounded-xl font-bold h-12 transition-all duration-300" 
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <span className="loading loading-spinner loading-sm"></span>
                                    <span>Creating Account...</span>
                                </div>
                            ) : (
                                "Sign Up"
                            )}
                        </button>

                        {/* রিসেট বাটন */}
                        <button 
                            className="btn btn-ghost btn-sm w-full text-zinc-400 hover:text-zinc-600 font-medium" 
                            type="reset"
                            disabled={loading}
                        >
                            Reset Form
                        </button>
                    </form>

                    {/* ফুটার লিঙ্ক */}
                    <div className="text-center mt-8 pt-6 border-t border-zinc-100">
                        <p className="text-sm text-zinc-500">
                            Already have an account?{" "}
                            <Link href="/signin" className="text-[#7D2237] font-bold hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;