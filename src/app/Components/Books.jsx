import React from 'react';
import BookCard from './BookCard';

const Books = async () => {
    const res = await fetch('http://localhost:3000/data.json',{cache:'no-store'});
    const books = await res.json();
    const topBooks = books.slice(0, 4);
    return (
        <div className='container mx-auto mt-[40px]'>
            <h1 className='text-center font-semibold text-cyan-600 text-3xl'>Featured Books</h1>
            <div className='grid gap-10 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-[25px] '>
                {topBooks.map((book) => (
                    <BookCard book={book} key={book.id} />
                ))}
            </div>
        </div>
    );
};

export default Books;