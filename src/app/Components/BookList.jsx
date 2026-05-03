"use client"
import { useState } from 'react'
import BookCard from './BookCard'
import { FiSearch } from 'react-icons/fi'

const BooksList = ({ books }) => {
    const [search, setSearch] = useState('')

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <div className="flex gap-2 mb-6">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                    className="flex-1 shadow border border-gray-300 rounded-lg h-11 px-4 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    type="text"
                    placeholder="Search Books"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                {filteredBooks.length == 0 ?
                <p className="text-gray-500 text-lg col-span-4">No books found for {search}</p>
                :    
                filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))
            }
            </div>
        </div>
    )
}

export default BooksList