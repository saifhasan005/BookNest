import Image from 'next/image';
import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("http://localhost:3000/data.json");
    const books = await res.json();
    const book = books.find(b => b.id == id);
    return (
        <div className='flex justify-center'>
            <Image
                src={book.image_url}
                alt={book.title}
                width={200}
                height={200}
            />
            <div>
                <p>{book.title}</p>
                <p>{book.description}</p>
                <div className='flex'>
                    <p>{book.category}</p>
                    <p>{book.author}</p>
                </div>
                <p>${book.price}</p>
                <p>Quantity: {book.available_quantity} Pcs</p>
                <div className='flex gap-4'>
                    <button className='btn'>Add To Cart</button>
                    <button className='btn btn-primary'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;