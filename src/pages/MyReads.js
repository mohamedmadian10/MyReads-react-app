import { useEffect, useState } from 'react';

import classes from './MyReads.module.css';

import Header from '../UI/Header';
import { getAll } from '../BooksAPI'
import BookItem from '../components/BookItem';
import BookShelfChanger from '../components/BookShelfChanger';
import BooksList from '../components/BooksList';

const MyReads = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [read, setRead] = useState([]);
    const [httpError, setHttpError] = useState(null)

    useEffect(() => {
        setIsLoading(true);
        const getBooks = async () => {
            const response = await getAll();
            console.log(response);
            setCurrentlyReading(response.filter(book => book.shelf === 'currentlyReading'));
            setWantToRead(response.filter(book => book.shelf === 'wantToRead'));
            setRead(response.filter(book => book.shelf === 'read'));
            setIsLoading(false);
        }
        getBooks().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
            console.log(error);
        });
    }, [])
  return (
    <div className='list-books'>
     <Header />
     {isLoading && <p className= {classes.loading}>Loading...</p>}
     {!isLoading && !httpError &&
      <div className={classes['list-books-content}']}>
        <div>
          <div className={classes.bookshelf}>
            <h2 className={classes['bookshelf-title']}>Currently Reading</h2>
            <BooksList booksList={currentlyReading}/>
          </div>
          <div className={classes.bookshelf}>
            <h2 className={classes['bookshelf-title']}>Want to Read</h2>
           <BooksList booksList={wantToRead}/>
          </div>
          <div className={classes.bookshelf}>
            <h2 className={classes['bookshelf-title']}>Read</h2>
            <BooksList booksList={read}/>
          </div>
        </div>
      </div>     
     }
     {!isLoading && httpError && <p className={classes.error}>{httpError}</p>}
      <div className='open-search'>
        <a>Add a book</a>
      </div>
    </div>
  );
};

export default MyReads;
