import classes from './BooksCategory.module.css';
import BooksList from '../components/BooksList';

const BooksCategory = (props) => {
  return (
    <div>
      {props.categoryBooks.map((category) => {
        return (
          <div className={classes.bookshelf} key={category.key}>
            <h2 className={classes['bookshelf-title']}>{category.name}</h2>
            <BooksList
              booksList={props.books.filter(
                (book) => book.shelf === category.key
              )}
              moveBook={props.moveBook}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BooksCategory;
