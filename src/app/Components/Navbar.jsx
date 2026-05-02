'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { authClient } from '../lib/auth-client';

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/all-books', label: 'All Books' },
        { href: '/profile', label: 'My Profile' },
    ];

    return (
        <div className='shadow sticky bg-white top-0 z-50'>
            <div className='p-5 container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    <Link href={'/'}>
                        <p className="text-blue-500 font-bold text-3xl">BookNest</p>
                    </Link>
                    <ul className='hidden md:flex font-medium text-lg gap-3'>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                                className={`pb-1 dark:text-black ${pathname === link.href ? 'border-b-2 border-blue-500' : ''}`}>
                                <li>{link.label}</li>
                            </Link>
                        ))}
                    </ul>
                    {!user && (
                        <div className='hidden md:flex text-lg font-medium gap-3'>
                            <Link href={'/register'}>
                                <button className='btn btn-primary'>Register</button>
                            </Link>
                            <Link href={'/login'}>
                                <button className='btn'>Login</button>
                            </Link>
                        </div>
                    )}
                    {user && (
                        <div className='hidden md:flex items-center gap-3'>
                            <button
                                onClick={() => authClient.signOut()}
                                className='btn btn-error'>
                                Logout
                            </button>
                            {user?.image
                            ? <img
                                src={user?.image}
                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                            /> :
                             <p>{user?.email[0].toUpperCase()}</p>
                        }
                        </div>
                    )}
                    <button className='md:hidden text-2xl' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
                {isOpen && (
                    <div className='md:hidden flex flex-col gap-3 mt-4 pb-4'>
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`font-medium text-lg pb-1 ${pathname === link.href ? 'border-b-2 border-blue-500' : ''}`}>
                                {link.label}
                            </Link>
                        ))}
                        {!user && (
                            <div className='flex gap-3 mt-2'>
                                <Link href={'/register'}>
                                    <button className='btn btn-primary'>Register</button>
                                </Link>
                                <Link href={'/login'}>
                                    <button className='btn'>Login</button>
                                </Link>
                            </div>
                        )}

                        {user && (
                            <div className='flex items-center gap-3 mt-2'>
                                <button
                                    onClick={() => authClient.signOut()}
                                    className='btn btn-error btn-sm'>
                                    Logout
                                </button>
                                {user?.image
                            ? <img
                                src={user?.image}
                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                            /> :
                             <p>{user?.email[0].toUpperCase()}</p>
                        }
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;