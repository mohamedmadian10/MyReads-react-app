import { Link } from 'react-router-dom';

import BooksList from '../components/BooksList';
import ErrorWrapper from '../components/Helpers/ErrorWrapper';
import Loader from '../components/Helpers/Loader';
import SearchInput from '../components/SearchInput';
import classes from './SearchBooks.module.css';

const SearchBook = (props) => {

  const resetSearch = () => {
    props.onResetSearch();
  }
  return (
    <div className={classes['search-books']}>
      <div className={classes['search-books-bar']}>
        <Link to='/' >
          <button className={classes['close-search']} onClick={resetSearch} >
            Close
          </button>
        </Link>

       <SearchInput onSearch={props.onSearch}/>
      </div>
      <div className={classes['search-books-results']}>
        {props.isLoading && <Loader />}
        {!props.isLoading && !props.httpError && (
          <ol className={classes['books-grid']}>
            <BooksList
              moveBook={props.moveBook}
              booksList={props.searchedBooks}
            />
          </ol>
        )}
        {!props.isLoading && props.httpError && (
          <ErrorWrapper httpError={props.httpError} />
        )}
      </div>
    </div>
  );
};

export default SearchBook;
