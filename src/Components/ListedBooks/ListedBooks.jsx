import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";




const ListedBooks = () => {
    const loader = useLoaderData();
    const [newState, setNewState] = useState([])
    const [displayBooks, setDisplayBooks] = useState([])
    const [handleTab, setHandleTab] = useState(true);
    // const [handleTab1, setHandleTab1] = useState(false);

    const readBookId = JSON.parse(localStorage.getItem('readId')) || []
    const readBooks = loader.filter(book => readBookId.includes(book.bookId))

    const wishlistBookId = JSON.parse(localStorage.getItem('WishId')) || []
    // console.log(wishlistBookId)
    const wishlistBooks = loader.filter(book => wishlistBookId.includes(book.bookId))
    // console.log(wishlistBooks)

    const handlDisplayTab = (user) => {

        if (user == 'read') {
            console.log('ani nai')
            setDisplayBooks(readBooks)


        } else if(user == 'whishlist') {
            setDisplayBooks(wishlistBooks)
        }
        else{
            setDisplayBooks(readBooks)
        }
        console.log(displayBooks)
    }
    useEffect(() => {
        setNewState(displayBooks)        
    }, [ displayBooks])



    useEffect(() => {
        setNewState(readBooks)
    }, [loader])


    const handleBooksFilter = shortBook => {
        if (shortBook === 'rating') {
            const ratingBook = newState.sort((a, b)=> b.rating - a.rating)
            setDisplayBooks(ratingBook);
        }
        else if (shortBook === 'totalPages') {
            const totalPagesbook = newState.sort((a, b)=> b.totalPages - a.totalPages)
            setDisplayBooks(totalPagesbook);
        }
        else if (shortBook === 'yearOfPublishing') {
            const yearOfPublishingbook = newState.sort((a, b)=> b.yearOfPublishing - a.yearOfPublishing)
            setDisplayBooks(yearOfPublishingbook)
            console.log('okk')
        }
    }

    return (
        <div>
            <h1 className="text-5xl text-center bg-slate-200 font-bold mx-10 my-20 p-10 rounded-xl">Listed books </h1>


            {/* short** */}
            <div className="dropdown flex justify-center items-center dropdown-bottom my-20">
                <div tabIndex={0} role="button" className="btn flex align-center m-1 bg-green-500 text-white font-bold">Short by <img className='w-4' src="./src/assets/angle-arrow-down.png" alt="" /> </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                    <li onClick={() => handleBooksFilter('totalPages')}><a>Number of Pages</a></li>
                    <li onClick={() => handleBooksFilter('yearOfPublishing')}><a>Publisher Year</a></li>
                </ul>
            </div>
            {/* tabs*** */}
            <div className="w-[300px]">

                <div role="tablist" className="tabs tabs-lifted">
                    <a onClick={() => { setHandleTab(true); handlDisplayTab("book") }} role="tab" className={`tab ${handleTab ? 'tab-active' : ''}`}>Read books</a>
                    <a onClick={() => { setHandleTab(false); handlDisplayTab("whishlist") }} role="tab" className={`tab ${!handleTab ? 'tab-active' : ''}`}>Wishlists</a>

                </div>
            </div>
            <div>
                {
                    newState.map(book => <BookCard key={book.bookId} book={book}>
                    
                    </BookCard>)
                }
                {/* {
                    displayBooks.map(book => <BookCard key={book.bookId} book={book}>
                        <span>{book.rating}{book.totalPages}{book.yearOfPublishing}</span>

                    </BookCard>)
                } */}
            </div>


        </div>


    );
};

export default ListedBooks;

