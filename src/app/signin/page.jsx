"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";
import Link from "next/link";

const SignInPage = () => {
    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

  
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Welcome back! Login Successful.");
            router.push("/");
        } else {
            toast.error(error.message || "Invalid email or password");
            setLoading(false);
        }
    };


    const handleGoogleSignIn = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4">
            <div className="w-full max-w-md">

                {/* কার্ড কন্টেইনার */}
                <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">

                    {/* হেডার */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-zinc-900">Sign In</h2>
                        <p className="text-zinc-500 mt-2">Enter your details to access your account</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-5">

                        {/* ইমেইল ফিল্ড */}
                        <div className="form-control">
                            <label className="label font-semibold text-zinc-700 text-sm">Email Address</label>
                            <input
                                name='email'
                                type="email"
                                className="input input-bordered w-full focus:border-[#7D2237] transition-all"
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        {/* পাসওয়ার্ড ফিল্ড */}
                        <div className="form-control relative">
                            <label className="label font-semibold text-zinc-700 text-sm">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={isShowPassword ? "text" : "password"}
                                    className="input input-bordered w-full pr-12 focus:border-[#7D2237]"
                                    placeholder="••••••••"
                                    required
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

                        {/* লগইন বাটন */}
                        <button
                            className="btn w-full bg-[#7D2237] hover:bg-zinc-900 text-white border-none rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 h-12"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="loading loading-spinner loading-sm"></span>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>

                        {/* ডিভাইডার */}
                        <div className="divider text-xs text-zinc-400 uppercase tracking-widest">Or continue with</div>

                        {/* গুগল বাটন */}
                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="btn btn-outline w-full rounded-xl border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900 transition-all"
                        >
                            <BsGoogle className="text-red-500" /> Google
                        </button>
                    </form>

                    {/* ফুটার লিঙ্ক */}
                    <p className="text-center mt-8 text-sm text-zinc-500">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-[#7D2237] font-bold hover:underline">
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;