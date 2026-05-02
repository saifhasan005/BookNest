'use client'
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/'
    });
    if (!data) {
      toast.error('Login Failed Please Submit Valid Info');
      return;
    } else {
      toast.success('Login Successful');
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="flex mt-6 px-4 flex-col items-center">
      <form onSubmit={onSubmit} className="w-full max-w-lg">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full flex flex-col items-center border p-4 sm:p-6">
          <legend className="fieldset-legend">Login</legend>

          <label className="label w-full">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Enter Your Email" />

          <label className="label w-full">Password</label>
          <input name="password" type="password" className="input w-full" placeholder="Enter Your Password" />

          <button className="btn btn-info w-full mt-4">Login</button>

          <p className="mt-4 font-medium text-sm mb-4 text-gray-500">OR</p>

          <button type="button" onClick={handleGoogleLogin} className="flex items-center gap-2 btn w-full btn-info">
            <FaGoogle /> <span>Login With Google</span>
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;