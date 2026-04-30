import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    console.log(book);
    return (
        <div className='shadow p-7'>
            <Image
                src={book.image_url}
                alt={book.title}
                width={150}
                height={200}
                className='rounded-lg mb-3 object-cover'
            />
            <h1 className='text-lg font-semibold text-gray-800'>{book.title}</h1>
            <Link href={'/bookdetails'}>
                <button className='btn w-full btn-info rounded-xl text-gray-800'>View Details</button>
            </Link>
        </div>
    );
};

export default BookCard;