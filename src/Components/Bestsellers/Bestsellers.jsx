import { useLoaderData } from "react-router-dom";
import BestBook from "../BestBook/BestBook";


const Bestsellers = () => {
    const books = useLoaderData();
    // console.log(books);
    return (
        <div className="text-center my-20">
            <h1 className="text-5xl text-center bg-slate-200 font-bold mx-10 my-20 p-10 rounded-xl">Classics Book</h1>
            <div className=" flex flex-col justify-center items-center mx-10 my-20 p-10 gap-10 shadow-2xl ">
            {
                    books.map(book => <BestBook key={book.booId} book={book}></BestBook>)
                }
            </div>
        </div>
    );
};

export default Bestsellers;