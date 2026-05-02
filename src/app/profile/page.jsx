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
        <div>
            <div className="max-w-96 mx-auto flex flex-col items-center mt-[45px] shadow p-6 border border-gray-300 rounded-2xl">
                {user?.image
                    ? <img src={user.image} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                    : 
                        <p>{user?.email[0].toUpperCase()}</p>
                }
                <p className="text-xl font-semibold mt-[10px]">{user?.name}</p>
                <p className="text-gray-500 text-sm">{user?.email}</p>
                <button onClick={() => setIsOpen(true)} className="btn btn-primary btn-sm mt-4">
                    Edit Profile
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-96 shadow-xl">
                        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

                        <label className="text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full mt-1 mb-3"
                        />

                        <label className="text-sm font-medium">Image URL</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="input input-bordered w-full mt-1 mb-4"/>
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