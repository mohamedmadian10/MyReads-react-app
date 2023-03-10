import classes from './BooksList.module.css';
import BookItem from "./BookItem"

const BooksList = (props) => {
    return (
        <div className={classes['bookshelf-books']}>
        <ol className={classes['books-grid']}>
            {props.booksList.map(book => 
                <li key={book.id}>
                <BookItem 
                title={book.title}
                cover={book.imageLinks.smallThumbnail}
                authors={book.authors}
                />
                </li>
                
            )}
         
        </ol>
      </div>
    )
}

export default BooksList;