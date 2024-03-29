import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { saveBookDetail } from "../../Utility/localStorage";


const BookDetail = () => {

    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId)

    const book = books.find(book => book.bookId === bookIdInt);
    // console.log(bookIdInt)
    const getReadDataFromLocalStorage = () => {
        if (localStorage.getItem('readId')) {
            return JSON.parse(localStorage.getItem('readId'))

        } else {
            return [];
        }
    }
    const getWishDataFromLocalStorage = () => {
        if (localStorage.getItem('WishId')) {
            return JSON.parse(localStorage.getItem('WishId'))

        } else {
            return [];
        }
    }

    const handleReadBook = (id) => {
        const reads = getReadDataFromLocalStorage()
    
        const readMore = reads.find(read => read == id)
        if (!readMore) {
            reads.push(id)

            toast('You have added successfully');
        }
        else{
            toast.warn('allrady added ');
        }
        localStorage.setItem("readId", JSON.stringify(reads));
        console.log(id)
        // saveBookDetail(bookIdInt);
    }
    const handleWishlistBook = (id) => {
        const  reads = getReadDataFromLocalStorage()
        const Wishlists =[...getWishDataFromLocalStorage()];
        const readMore = reads.find(read => read == id)
        if (!readMore) {
            Wishlists.push(id)

            toast('You have added successfully');
        }
        else{
            toast.warn('allrady added ');
        }
        localStorage.setItem("WishId", JSON.stringify(Wishlists));
    
        // saveBookDetail(bookIdInt);
        }


    return (


        <div className="hero min-h-screen my-20 ">

            <div className="flex justify-between items-center gap-10 flex-col lg:flex-row">
                <div className="flex-1  flex justify-center lg:w-[450px] items-center bg-slate-100 lg:h-[550px] p-10 rounded-md">
                    <img src={book.image} className="lg:w-full p-10 h-full object-cover rounded-lg " />
                </div>
                <div className="flex-1 p-10 *:my-3">
                    <h1 className="text-4xl font-bold">{book.bookName}</h1>
                    <p className="text-xl font-bold">By: {book.author}</p>
                    <hr className="border-b border-gray-100" />
                    <p className="text-xl font-bold">{book.category}</p>
                    <hr className="border-b border-gray-100" />
                    <p className="text-xl font-bold">Review:</p>
                    <span>{book.review}</span>

                    <hr className="border-b border-gray-100 " />
                    <div className="flex gap-5">
                    <h2 className="2xl font-bold">Tag:</h2>
                    <span className="text-green-500 font-bold bg-green-100  rounded-3xl py-1 px-4">{book.tags[0]}</span>
                    <span className="text-green-500 font-bold bg-green-100  rounded-3xl py-1 px-4"> {book.tags[1]}</span>
                </div>
                <div className="flex gap-16">
                    <p>Number of Pages:</p>
                    <p>{book.totalPages}</p>
                </div>
                <div className="flex gap-32">
                    <p>Publisher:</p>
                    <p>{book.publisher}</p>
                    
                </div>
                <div className="flex gap-16">
                        <p>Year of Publishiing:</p>
                        <p>{book.yearOfPublishing}</p>
                </div>
                <div className="flex gap-40">
                        <p>Rating:</p>
                        <p>{book.rating}</p>
                </div>
                        
                    <button onClick={() => handleReadBook(book.bookId)} className="btn bg-transparent hover:text-white hover:bg-green-500 font-bold border-neutral-800 mr-3 px-7">Read</button>
                    <button onClick={() => handleWishlistBook(book.bookId)} className="btn bg-teal-500 font-bold text-white hover:text-black hover:bg-transparent ">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetail;
