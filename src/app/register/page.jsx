import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const page = () => {
  return (
    <div className='flex mt-[25px] flex-col items-center'>
      <form >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg flex flex-col items-center border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Enter Your Name" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Enter Your Email" />

          <label className="label">Image URL</label>
          <input type="photo" className="input" placeholder="Enter Your URL" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Enter Your Password" />

          <button className="btn w-full btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default page