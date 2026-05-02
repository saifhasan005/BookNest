import BookDetailsClient from '@/app/Components/BookDetailsClient';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://book-nest-rho-five.vercel.app/data.json");
    const books = await res.json();
    const book = books.find(b => b.id == id);

    return <BookDetailsClient book={book} />;
};

export default BookDetailsPage;