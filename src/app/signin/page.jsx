"use client"
import { authClient } from '@/lib/auth-client';
import { createAuthClient } from 'better-auth/react';
import { BsGoogle } from 'react-icons/bs';

const SignInPage = () => {


    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);



        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (data) {
            alert('SignIn Succesfull')
        } else {
            alert(error.message)
        }

    }
    const authClient = createAuthClient();

    const handleGoogleSignIn = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
        

        if (error) {
            alert(error.message);
        }
    };


    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <form onSubmit={onSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input validator" placeholder="Email" required />
                        <p className="validator-hint hidden">Required</p>
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label">Password</label>
                        <input name='password' type="Password" className="input validator" placeholder="Password" required />
                        <p className="validator-hint hidden">Required</p>
                    </fieldset>



                    <button className="btn btn-neutral mt-4 w-full" type="submit">
                        Login
                    </button>

                    <button onClick={handleGoogleSignIn } className="btn  mt-1 w-full" type="reset">
                        <BsGoogle /> Sign in Google
                    </button>

                </form>
            </div>
        </div>
    );
};

export default SignInPage;