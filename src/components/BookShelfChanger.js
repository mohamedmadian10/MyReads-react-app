import { useDispatch } from 'react-redux';
import classes from './BookShelfChanger.module.css';
import { updateBook } from '../store/books-actions';


const BookShelfChanger = (props) => {
  const dispatch = useDispatch();

  const selectValueHandler = (event) => {
    dispatch(updateBook(props.book, event.target.value))
  };
  return (
    <div className={classes['book-shelf-changer']}>
      <select value='' onChange={selectValueHandler}>
        <option value='' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
