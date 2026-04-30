import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className='shadow p-7 flex flex-col h-full'>
            <div className='flex flex-col items-center flex-grow'>
                <Image
                    src={book.image_url}
                    alt={book.title}
                    width={150}
                    height={200}
                    className='rounded-lg mb-3 object-cover'
                />
                <h1 className='text-lg font-semibold text-gray-800'>{book.title}</h1>
                <p className='font-bold text-xl'>${book.price}</p>
                <p className='font-semibold'>Quantity : {book.available_quantity} Pcs</p>
                <p className='text-gray-500 font-medium flex-grow'>{book.description}</p>
            </div>
            <Link href={`/all-books/${book.id}`}>
                <button className='mt-[15px] btn w-full btn-info rounded-xl text-gray-800'>View Details</button>
            </Link>
        </div>
    );
};

export default BookCard;