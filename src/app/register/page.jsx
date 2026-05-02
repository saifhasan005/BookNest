// RegisterPage.jsx
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '../lib/auth-client';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.photo.value || `https://ui-avatars.com/api/?name=${email[0]}&background=random`;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({ email, password, name, image });

    if (data) {
      toast.success("Registration Successful");
      await authClient.signOut();
      router.push('/login');
    } else {
      toast.error("Registration Failed, Try Again");
    }
  };

  return (
    <div className="flex mt-6 px-4 flex-col items-center">
      <form onSubmit={onSubmit} className="w-full max-w-lg">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full flex flex-col items-center border p-4 sm:p-6">
          <legend className="fieldset-legend">Register</legend>

          <label className="label w-full">Name</label>
          <input name="name" type="text" className="input w-full" placeholder="Enter Your Name" />

          <label className="label w-full">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Enter Your Email" />

          <label className="label w-full">Image URL</label>
          <input name="photo" type="url" className="input w-full" placeholder="Enter Your Photo URL" />

          <label className="label w-full">Password</label>
          <input name="password" type="password" className="input w-full" placeholder="Enter Your Password" />

          <button className="btn w-full btn-info mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;