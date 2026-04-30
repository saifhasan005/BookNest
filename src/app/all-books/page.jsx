import Image from "next/image";
import BookCard from "../Components/BookCard";

const AllBooksPage = async () => {
    const res = await fetch('https://book-nest-rho-five.vercel.app/data.json',{cache: 'no-store'})
    const books = await res.json();
    console.log(books);
    return (
        <div className='grid container mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 items-stretch'>
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default AllBooksPage;