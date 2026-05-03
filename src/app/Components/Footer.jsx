import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-300 mt-16'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='col-span-1 sm:col-span-2 lg:col-span-1'>
                        <h2 className='text-2xl font-bold text-white mb-3'>📚 BookNest</h2>
                        <p className='text-sm text-gray-400 leading-relaxed'>Your cozy corner for discovering, collecting, and buying the books you love.</p>
                    </div>

                    <div>
                        <h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>Quick Links</h3>
                        <ul className='space-y-2 text-sm'>
                            <li><Link href='/' className='hover:text-white transition-colors'>Home</Link></li>
                            <li><Link href='/all-books' className='hover:text-white transition-colors'>All Books</Link></li>
                            <li><Link href='/my-profile' className='hover:text-white transition-colors'>My Profile</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>Categories</h3>
                        <ul className='space-y-2 text-sm'>
                            <li><span className='hover:text-white transition-colors cursor-pointer'>Fiction</span></li>
                            <li><span className='hover:text-white transition-colors cursor-pointer'>Classic</span></li>
                            <li><span className='hover:text-white transition-colors cursor-pointer'>Self-Help</span></li>
                            <li><span className='hover:text-white transition-colors cursor-pointer'>Non-Fiction</span></li>
                            <li><span className='hover:text-white transition-colors cursor-pointer'>Fantasy</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>Contact</h3>
                        <ul className='space-y-2 text-sm'>
                            <li className='flex items-center gap-2'>
                                📧 <span>support@booknest.com</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                📞 <span>+880 1234 567890</span>
                            </li>
                            <li className='flex items-center gap-2'>
                                📍 <span>Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                        <div className='flex gap-3 mt-5'>
                            <a href='#' className='bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors text-sm'>
                                𝕏
                            </a>
                            <a href='#' className='bg-gray-700 hover:bg-blue-700 p-2 rounded-full transition-colors text-sm'>
                                in
                            </a>
                            <a href='#' className='bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-colors text-sm'>
                                IG
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500'>
                    <p>© {new Date().getFullYear()} BookNest. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
                        <a href='#' className='hover:text-white transition-colors'>Terms of Service</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;