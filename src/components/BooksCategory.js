import classes from './BooksCategory.module.css';
import BooksList from '../components/BooksList';
import { useSelector } from 'react-redux';

const BooksCategory = (props) => {
  const books = useSelector(state => state.books.books);
  return (
    <div>
      {props.categoryBooks.map((category) => {
        return (
          <div className={classes.bookshelf} key={category.key}>
            <h2 className={classes['bookshelf-title']}>{category.name}</h2>
            <BooksList
              booksList={books.filter(
                (book) => book.shelf === category.key
              )}
            
            />
          </div>
        );
      })}
    </div>
  );
};

export default BooksCategory;
