import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://rebakum.github.io/data-json/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="text-center my-20">
            <h1 className="text-5xl">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 my-20 px-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;