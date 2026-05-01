'use client'

import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

const LoginPage = () => {
     const onSubmit =async (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const {data, error} = await authClient.signIn.email({
          email,
          password,
          callbackURL: '/'
        });
        if(!data){
            toast.error('Login Failed Please Submit Valid Info')
            return;
        } else{
            toast.success('Login Successful')
        }
    }        
    return (
        <div className='flex mt-[25px] flex-col items-center'>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg flex flex-col items-center border p-4">
          <legend className="fieldset-legend">Login</legend>
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Enter Your Email" />


          <label  className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Enter Your Password" />
        
          <button className="btn btn-info w-full mt-4">Login</button>
        </fieldset>
      </form>
    </div>
    );
};

export default LoginPage;