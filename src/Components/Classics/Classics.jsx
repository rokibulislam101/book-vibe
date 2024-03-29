import { useLoaderData } from "react-router-dom";
import ClassicsBook from "../ClassicsBook/ClassicsBook";


const Classics = () => {
    const books = useLoaderData();
    
    return (
        <div className="text-center my-20">
            <h1 className="text-5xl text-center bg-slate-200 font-bold mx-10 my-20 p-10 rounded-xl">Classics Book</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4  gap-10 my-20 px-10">
            {
                    books.map(book => <ClassicsBook key={book.booId} book={book}></ClassicsBook>)
                }
            </div>
        </div>
    );
};

export default Classics;