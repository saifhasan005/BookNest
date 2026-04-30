'use client'
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

const BookDetailsClient = ({ book }) => {
    const [bought, setBought] = useState(false);
    const [cart, setCart] = useState(false);

    const handleCart = () => {
        if (cart) {
            toast.error(`${book.title} is already added to cart`);
            return;
        }
        setCart(true);
        toast.success(`${book.title} Added to Cart`);
    };

    const handleBuy = () => {
        if (bought) {
            toast.error(`${book.title} is already bought`);
            return;
        }
        setBought(true);
        toast.success(`${book.title} Buy Successful`);
    };

    return (
        <div className='flex justify-center px-4 sm:px-6 py-8 mt-4 sm:mt-[35px]'>
            <div className='flex flex-col md:flex-row p-5 sm:p-7 w-full max-w-[850px] shadow-lg gap-6 sm:gap-10 rounded-xl'>
                <div className='flex justify-center md:justify-start flex-shrink-0'>
                    <Image
                        className='rounded-lg object-cover w-full max-w-[250px] sm:max-w-[300px] h-auto'
                        src={book.image_url}
                        alt={book.title}
                        width={300}
                        height={200}/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-bold text-2xl sm:text-3xl md:text-4xl leading-tight'>{book.title}</p>
                    <p className='text-gray-500 text-sm sm:text-base'>{book.description}</p>
                    <div className='flex flex-wrap gap-2 sm:gap-4'>
                        <p className='bg-red-300 px-3 py-1 sm:p-2 rounded-full text-sm'>
                            {book.category}
                        </p>
                        <p className='bg-red-300 px-3 py-1 sm:p-2 rounded-full text-sm'>
                            {book.author}
                        </p>
                    </div>

                    <p className='text-xl font-semibold'>${book.price}</p>
                    <p className='text-sm sm:text-base'>
                        Quantity: {book.available_quantity} Pcs
                    </p>
                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2'>
                        <button
                            onClick={handleCart}
                            className='btn w-full sm:w-auto'>Add To Cart</button>
                        <button
                            onClick={handleBuy}
                            className='btn btn-primary w-full sm:w-auto'>Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetailsClient;