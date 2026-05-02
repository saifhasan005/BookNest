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
      toast.error('Login Failed Please Submit Valid Info')
      return;
    } else {
      toast.success('Login Successful')
    }
  }
  const handleGoogleLogin = async() =>{
const data = await authClient.signIn.social({
  provider: "google",
})
  }
  return (
    <div className='flex mt-[25px] flex-col items-center'>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg flex flex-col items-center border p-4">
          <legend className="fieldset-legend">Login</legend>
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Enter Your Email" />


          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Enter Your Password" />

          <button className="btn btn-info w-full mt-4">Login</button>
          <p className="mt-[15px] font-medium text-sm mb-[15px] text-gray-500">OR</p>
        <button onClick={handleGoogleLogin} className="flex items-center gap-2 btn w-full btn-info"><FaGoogle /> <span>Login With Google</span></button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;