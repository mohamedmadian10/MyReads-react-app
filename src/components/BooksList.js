import classes from './BooksList.module.css';
import BookItem from "./BookItem"

const BooksList = (props) => {
    return (
        <div className={classes['bookshelf-books']}>
        <ol className={classes['books-grid']}>
            {props.booksList.map(book => 
                <li key={book.id}>
                <BookItem 
                book={book}
                title={book.title}
                cover={book.imageLinks.thumbnail}
                authors={book.authors}
                moveBook={props.moveBook}
                />
                </li>
                
            )}
         
        </ol>
      </div>
    )
}

export default BooksList;