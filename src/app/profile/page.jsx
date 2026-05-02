// ProfilePage.jsx
'use client'
import { useState } from 'react';
import { authClient } from "../lib/auth-client";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [image, setImage] = useState(user?.image || '');

  const handleUpdate = async () => {
    await authClient.updateUser({ name, image });
    setIsOpen(false);
  };

  return (
    <div className="px-4">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center mt-10 shadow p-6 border border-gray-300 rounded-2xl">
        {user?.image ? (
          <img
            src={user.image}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-semibold">
            {user?.email?.[0]?.toUpperCase()}
          </div>
        )}
        <p className="text-xl font-semibold mt-3">{user?.name}</p>
        <p className="text-gray-500 text-sm">{user?.email}</p>
        <button onClick={() => setIsOpen(true)} className="btn btn-primary btn-sm mt-4">
          Edit Profile
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

            <label className="text-sm font-medium block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mb-3"
            />

            <label className="text-sm font-medium block mb-1">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="input input-bordered w-full mb-4"
            />

            <div className="flex justify-end gap-3">
              <button onClick={() => setIsOpen(false)} className="btn btn-sm">Cancel</button>
              <button onClick={handleUpdate} className="btn btn-primary btn-sm">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;