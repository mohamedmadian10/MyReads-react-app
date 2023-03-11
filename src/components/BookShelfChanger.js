import { useEffect, useState } from 'react';
import classes from './BookShelfChanger.module.css';

import { update } from '../BooksAPI'

const BookShelfChanger = (props) => {
    const [selectedCategory, setSelectedCategory] = useState();

    const selectValueHandler = (event) => {
        console.log(event.target.value);
        setSelectedCategory(event.target.value);
        props.moveBook(props.book,event.target.value);
    }
    return (
        <div className={classes['book-shelf-changer']}>
        <select  onChange={selectValueHandler}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )

}

export default BookShelfChanger;