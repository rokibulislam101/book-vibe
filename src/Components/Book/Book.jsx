import { Link } from "react-router-dom";
import { FaRegStar } from 'react-icons/fa';




const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, rating, category, tags } = book;
    // console.log(book)

    return (
        <Link
        to={`/book/${bookId}`}
        className="p-6  rounded-md shadow-lg transition hover:scale-105 border hover:border hover:border-green-500">
            <div className="flex justify-center items-center bg-slate-100 p-5border-opacity-30 rounded-2xl">
                <img src={image} alt="" className="rounded-md h-72 p-10" />
            </div>
            <div className="mt-6 mb-2 *:my-3 flex lg:gap-5 items-center flex-col  lg:flex-row">

                <Link className="text-green-600 font-bold bg-slate-100  rounded-full p-2">{tags[0]}</Link>
                <Link className="text-green-600 font-bold bg-slate-100  rounded-full p-2"> {tags[1]}</Link>

            </div>
            <h2 className="text-2xl font-semibold text-center lg:text-left  ">{bookName}</h2>
            <p className="  mb-4 text-center lg:text-left">{author}.</p>
            <hr />
            <div className="flex flex-col lg:flex-row  justify-between my-4">
                <span>{category}</span>
                <span className="flex justify-center items-center flex-col lg:flex-row gap-2">{rating} <FaRegStar></FaRegStar> </span>
            </div>

        </Link>
    );
};

export default Book;