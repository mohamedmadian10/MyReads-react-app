import { useDispatch } from 'react-redux';
import { searchBook } from '../store/books-actions';
import classes from './SearchInput.module.css';
const SearchInput = (props) => {
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    dispatch(searchBook(event.target.value));
  };

  return (
    <div className={classes['search-books-input-wrapper']}>
      <input
        type='text'
        placeholder='Search by title, author, or ISBN'
        onChange={searchHandler}
      />
    </div>
  );
};

export default SearchInput;
