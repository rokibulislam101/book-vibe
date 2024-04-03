

import { Link } from 'react-router-dom';

const ClassicsBook = ({book}) => {
    const { bookId, bookName, author, image, category } = book;

    return (
    
            <Link 
            to={`/book/${bookId}`}
            className='p-5 shadow-2xl rounded-2xl transition hover:scale-105 border hover:border hover:border-green-500'>
                <div className='flex justify-center items-center bg-slate-100 p-5 rounded-2xl'>
                    <img src={image} alt="" />
                </div>
                <div className='text-left p-5'>
                <h2 className='text-xl'>Book Name: <span>{bookName}</span></h2>
                <div className='flex gap-5'>
                <p> Author By: <small>{author}</small> </p>
                <p>Category: <small>{category}</small></p>
                </div>
                
                </div>

            </Link>
    
    );
};

export default ClassicsBook;