import BooksList from "../Components/BookList";
import CategorySidebar from "../Components/CategorySidebar";

const AllBooksPage = async ({searchParams}) => {
    const {category} = await searchParams;
    const res = await fetch('https://book-nest-rho-five.vercel.app/data.json', { cache: 'no-store' })
    const books = await res.json();
    const filteredBooks = category 
        ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) 
        : books

    return (
        <div className="container mx-auto p-6">
            <div className="flex lg:hidden gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                <CategorySidebar />
            </div>
            <div className="flex gap-6">
                <aside className="hidden lg:flex flex-col items-center gap-4 mt-[40px] shrink-0 w-36">
                    <CategorySidebar />
                </aside>
                <main className="flex-1">
                    <BooksList books={filteredBooks} />
                </main>
            </div>
        </div>
    );
};

export default AllBooksPage;