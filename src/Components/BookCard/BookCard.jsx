import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const {bookId, bookName, author, image, review, totalPages, rating,  tags, category, publisher, yearOfPublishing } = book;
    return (
        <div className="flex flex-col lg:flex-row p-10 gap-10 my-20 border-2 border-gray-100 mx-10 shadow-md  rounded-2xl">
            <div className=" flex justify-center items-center p-5 bg-slate-100 rounded-2xl ">
                <img src={image} className="h-72" alt="" />
            </div>
            <div className="*:my-4 p-10">
                <h2 className="text-3xl text-center lg:text-left font-bold">{bookName}</h2>
                <p className="text-center lg:text-left">By: {author}</p>
                <div className="flex gap-5  flex-col lg:flex-row items-center">
                    <h2 className="2xl font-bold">Tag:</h2>
                    <span className="text-green-500 font-bold bg-green-100  rounded-3xl py-1 px-4">{tags[0]}</span>
                    <span className="text-green-500 font-bold bg-green-100  rounded-3xl py-1 px-4"> {tags[1]}</span>
                    <div>
                    <span className="flex justify-center items-center"><CiLocationOn></CiLocationOn><span>Year of Publishing: {yearOfPublishing}</span> </span>

                    </div>
                </div>
                <div className="flex gap-5  flex-col lg:flex-row items-center">
                    <span className="flex justify-center items-center gap-3"> <HiOutlineUsers></HiOutlineUsers> <span>Publisher: {publisher}</span> </span>
                    <span className="flex justify-center items-center gap-3"> <MdOutlineContactPage></MdOutlineContactPage> <span>Pages: {totalPages}</span> </span>
                    
                </div>
                <hr className="border-b border-gray-100 " />
                
                <div className="*:mr-5 flex flex-col justify-center gap-5 items-center lg:flex-row ">
                    <button className="text-primary font-bold bg-sky-100  rounded-3xl py-1 px-4">Catagory: {category}</button>
                    <button className="text-orange-500 font-bold bg-orange-100  rounded-3xl p-1">Rating: {rating}</button>
                    <Link to={`/book/${bookId}`} className="text-green-500 font-bold bg-green-100 text-center rounded-3xl py-1 px-4">View Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BookCard;