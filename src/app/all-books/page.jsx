import BookCard from "../Components/BookCard";
import CategorySidebar from "../Components/CategorySidebar";

const AllBooksPage = async ({searchParams}) => {
    const {category} = await searchParams;
    const res = await fetch('http://localhost:3000/data.json', { cache: 'no-store' })
    const books = await res.json();
    const filteredBooks = category ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) : books
    return (
        <div className="container mx-auto p-6">
            <div className="flex gap-2 mb-6">
                <input
                    className="flex-1 shadow border border-gray-300 rounded-lg h-11 px-4 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    type="text"
                    placeholder="Search Books"
                />
                <button
                    className="btn h-11 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Search
                </button>
            </div>
            <div className="flex lg:hidden gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                <CategorySidebar />
            </div>
            <div className="flex gap-6">
                <aside className="hidden lg:flex flex-col items-center gap-4 mt-[40px] shrink-0 w-36">
                    <CategorySidebar />
                </aside>
                <main className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                        {filteredBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </main>

            </div>
        </div>
    );
};

export default AllBooksPage;