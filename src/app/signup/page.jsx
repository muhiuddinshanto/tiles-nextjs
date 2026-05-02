'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";
import { toast } from "react-toastify";




const SignUpPage = () => {

    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(true);



    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;
        console.log(name, email, image, password);

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,

        });

        if (data) {
            toast.success("SignUp Succesfull!")
            router.push('/')
        }
        if (error) {
            toast.error(error.message)
        }




    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                autoComplete="on"
                onSubmit={onSubmit}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
            >

                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="input"
                        placeholder="Name"
                        required
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="input"
                        placeholder="Email"
                        required
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <label className="label">Image</label>
                    <input
                        name="image"
                        type="url"
                        autoComplete="url"
                        className="input"
                        placeholder="Image URL"
                        required
                    />
                </fieldset>

                <fieldset className="fieldset relative">
                    <label className="label">Password</label>

                    <input
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        autoComplete="new-password"
                        className="input pr-10"
                        placeholder="Password"
                        required
                    />

                    <span
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        className="absolute right-3 top-[40px] cursor-pointer"
                    >
                        {isShowPassword ? <FaEye /> : <LuEyeClosed />}
                    </span>
                </fieldset>

                <button className="btn btn-neutral mt-4 w-full" type="submit">
                    Sign Up
                </button>

                <button className="btn btn-ghost mt-1 w-full" type="reset">
                    Reset
                </button>

            </form>
        </div>
    );
};

export default SignUpPage;