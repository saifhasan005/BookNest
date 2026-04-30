'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/all-books', label: 'All Books' },
        { href: '/profile', label: 'My Profile' },
    ];

    return (
        <div className='shadow sticky bg-white top-0 z-50'>
            <div className='p-5 ontainer mx-auto mt-[15px] px-4'>
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
                    <div className='hidden md:flex text-lg font-medium gap-3'>
                        <Link href={'/register'}>
                            <button className='btn btn-primary'>Register</button>
                        </Link>
                        <Link href={'/login'}>
                            <button className='btn'>Login</button>
                        </Link>
                    </div>
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
                        <div className='flex gap-3 mt-2'>
                            <Link href={'/register'}>
                                <button className='btn btn-primary'>Register</button>
                            </Link>
                            <Link href={'/login'}>
                                <button className='btn'>Login</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;