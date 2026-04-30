'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const BookCard = ({ book }) => {
    const [hovered, setHovered] = useState(false);

    const springs = useSpring({
        scale: hovered ? 1.04 : 1,
        boxShadow: hovered
            ? '0 20px 40px rgba(0,0,0,0.15)'
            : '0 2px 10px rgba(0,0,0,0.08)',
        config: { tension: 300, friction: 20 }
    });

    return (
        <animated.div
            style={springs}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
            className='p-7 flex flex-col h-full rounded-xl'
        >
            <div className='flex flex-col items-center flex-grow'>
                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={150}
                    height={200}
                    className='rounded-lg mb-3 object-cover'
                />
                <h1 className='dark:text-white text-lg font-semibold text-gray-800'>{book.title}</h1>
                <p className='font-bold text-xl'>${book.price}</p>
                <p className='font-semibold'>Quantity : {book.available_quantity} Pcs</p>
                <p className='text-gray-500 font-medium flex-grow'>{book.description}</p>
            </div>
            <Link href={`/all-books/${book.id}`}>
                <button className='mt-[15px] btn w-full btn-info rounded-xl text-gray-800'>View Details</button>
            </Link>
        </animated.div>
    );
};

export default BookCard;