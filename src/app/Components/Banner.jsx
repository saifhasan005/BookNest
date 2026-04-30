import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-blue-100 flex flex-col md:flex-row justify-around items-center p-8 container mx-auto mt-[60px] gap-8'>
            <div className='text-center md:text-left'>
                <h1 className='text-4xl md:text-6xl font-semibold'>Find Your <br /><span className='text-blue-500'>Next Read</span></h1>
                <p className='mt-[15px] font-medium text-lg md:text-xl'>Discover books from your <br className='hidden md:block' /> community and share the joy of reading.</p>
            </div>
            <div className='w-full md:w-auto flex justify-center'>
                <Image 
                src={'/heroImage.png'}
                alt={'bannerImage'}
                width={500}
                height={900}
                className='w-[300px] md:w-[500px] h-auto'
                />
            </div>
        </div>
    );
};

export default Banner;