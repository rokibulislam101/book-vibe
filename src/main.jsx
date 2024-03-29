import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import Classics from './Components/Classics/Classics';
import Bestsellers from './Components/Bestsellers/Bestsellers';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetail from './Components/BookDetail/BookDetail';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () =>
          fetch(
            'https://rokibulislam101.github.io/A-Collection-of-Books-Reviews/allbooks.json'
          ),
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader: () =>
          fetch(
            'https://rokibulislam101.github.io/A-Collection-of-Books-Reviews/allbooks.json'
          ),
      },
      {
        path: '/classics',
        element: <Classics></Classics>,
        loader: () =>
          fetch(
            'https://rokibulislam101.github.io/A-Collection-of-Books-Reviews/allbooks.json'
          ),
      },
      {
        path: '/bestsellers',
        element: <Bestsellers></Bestsellers>,
        loader: () =>
          fetch(
            'https://rokibulislam101.github.io/A-Collection-of-Books-Reviews/allbooks.json'
          ),
      },
      {
        path: '/book/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () =>
          fetch(
            'https://rokibulislam101.github.io/A-Collection-of-Books-Reviews/allbooks.json'
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
