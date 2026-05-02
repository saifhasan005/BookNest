"use client"
import { useState } from 'react'
import BookCard from './BookCard'

const BooksList = ({ books }) => {
    const [search, setSearch] = useState('')

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <div className="flex gap-2 mb-6">
                <input
                    className="flex-1 shadow border border-gray-300 rounded-lg h-11 px-4 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    type="text"
                    placeholder="Search Books"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
                {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default BooksList