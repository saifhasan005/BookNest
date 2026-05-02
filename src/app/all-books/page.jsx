import BookCard from "../Components/BookCard";
import CategorySidebar from "../Components/CategorySidebar";

const AllBooksPage = async () => {
    const res = await fetch('http://localhost:3000/data.json', { cache: 'no-store' })
    const books = await res.json();
    const response = await fetch('http://localhost:3000/category.json');
    const category = await response.json();

    return (
        <div className="container mx-auto p-6">
            
            <div className="flex lg:hidden gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                {category.map(singleCategory => (
                    <CategorySidebar 
                        singleCategory={singleCategory} 
                        key={singleCategory.id} 
                    />
                ))}
            </div>
            <div className="flex gap-6">
                <aside className="hidden lg:flex flex-col items-center gap-4 mt-[40px] shrink-0 w-36">
                    {category.map(singleCategory => (
                        <CategorySidebar 
                            singleCategory={singleCategory} 
                            key={singleCategory.id} 
                        />
                    ))}
                </aside>
                <main className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                        {books.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </main>

            </div>
        </div>
    );
};

export default AllBooksPage;