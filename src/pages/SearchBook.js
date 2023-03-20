import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import BooksList from '../components/BooksList';
import ErrorWrapper from '../components/Helpers/ErrorWrapper';
import Loader from '../components/Helpers/Loader';
import SearchInput from '../components/SearchInput';
import { booksAction } from '../store/books-slice';
import classes from './SearchBooks.module.css';

const SearchBook = (props) => {
  const showLoading = useSelector(state => state.ui.isLoading);
  const searchedBooks = useSelector(state => state.books.searchedBooks);
  const dispatch = useDispatch();

  const resetSearch = () => {
    dispatch(booksAction.resetSearch());
  }
  return (
    <div className={classes['search-books']}>
      <div className={classes['search-books-bar']}>
        <Link to='/' >
          <button className={classes['close-search']} onClick={resetSearch} >
            Close
          </button>
        </Link>

        <SearchInput />
      </div>
      <div className={classes['search-books-results']}>
        {showLoading && <Loader />}
        {!showLoading && !props.httpError && (
          <ol className={classes['books-grid']}>
            <BooksList
              booksList={searchedBooks}
            />
          </ol>
        )}
        {!showLoading && props.httpError && (
          <ErrorWrapper httpError={props.httpError} />
        )}
      </div>
    </div>
  );
};

export default SearchBook;
