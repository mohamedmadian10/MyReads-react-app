import classes from './MyReads.module.css';
import Header from '../components/UI/Header';
import BooksCategory from '../components/BooksCategory';
import ErrorWrapper from '../components/Helpers/ErrorWrapper';
import Loader from '../components/Helpers/Loader';
import { Link } from 'react-router-dom';


const MyReads = (props) => {
  const categoryBooks = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ];
  return (
    <div className='list-books'>
      <Header />
      {props.isLoading && <Loader />}
      {!props.isLoading && !props.httpError && (
        <div className={classes['list-books-content}']}>
          <BooksCategory
            books={props.books}
            categoryBooks={categoryBooks}
            moveBook={props.moveBook}
          />
        </div>
      )}
      {!props.isLoading && props.httpError && (
        <ErrorWrapper httpError={props.httpError} />
      )}
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

export default MyReads;
