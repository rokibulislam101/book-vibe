import React from 'react';
import { Link } from 'react-router-dom';

const BestBook = ({ book }) => {
    const { bookId, bookName, author, image, review, rating, category, tags } = book;
    console.log(book)
    return (
      <div className="flex justify-center flex-col items-center p-10 gap-5   rounded-md shadow-lg transition hover:bg-green-100 border hover:border  hover:border-primary">
        <div className="flex justify-center items-center ">
          <img
            src={image}
            className=" w-[400px] h-[350px] object-cover"
            alt=""
          />
        </div>
        <h1 className="text-2xl">Book Name: {bookName}</h1>
        <p>By: {}author</p>
        <div>
          <p>
            {' '}
            <span className="text.xl font-bold">Title:</span> Unlock the power
            of the perfect pitch with our comprehensive guide to crafting
            irresistible book hooks! Delve into the world of literary allure as
            we dissect what makes a book hook stand out.
                    
            Through the wisdom of accomplished authors, editors, and literary agents, learn to transform your story into a magnetic force that draws readers in from the first line.
          </p>
        </div>
        <div>
          <Link to={`/book/${bookId}`} className="btn bg-green-500">
            Show Me
          </Link>
        </div>
      </div>
    );
};

export default BestBook;
