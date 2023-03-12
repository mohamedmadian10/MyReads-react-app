import { useState } from 'react';
import classes from './BookShelfChanger.module.css';

const BookShelfChanger = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const selectValueHandler = (event) => {
    setSelectedCategory(event.target.value);
    props.moveBook(props.book, event.target.value);
  };
  return (
    <div className={classes['book-shelf-changer']}>
      <select value={selectedCategory} onChange={selectValueHandler}>
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
