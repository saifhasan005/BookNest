'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '../lib/auth-client';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const router = useRouter()
  const onSubmit =async (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.photo.value;
    const password = e.target.password.value;
    const {data, error} = await authClient.signUp.email({
      email,
      password,
      name,
      image,
    });
      if (data) {
        toast.success("Registration Successful")
      router.push('/login');
    } else {
      toast.error("Registration Failed, Try Again");
      return;
    }
  }
  return (
    <div className='flex mt-[25px] flex-col items-center'>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg flex flex-col items-center border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label">Name</label>
          <input name='name' type="name" className="input" placeholder="Enter Your Name" />

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Enter Your Email" />

          <label className="label">Image URL</label>
          <input name='photo' type="photo" className="input" placeholder="Enter Your URL" />

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Enter Your Password" />

          <button className="btn w-full btn-info mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;