import classes from './BookItem.module.css';
import BookShelfChanger from './BookShelfChanger';

const BookItem = (props) => {
  return (
    <div className={classes.book}>
      <div className={classes['book-top']}>
        <div
          className={classes['book-cover']}
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.cover})`,
          }}
        ></div>
        <BookShelfChanger book={props.book} moveBook={props.moveBook} />
      </div>
      <div className={classes['book-title']}>{props.title}</div>
      <div className={classes['book-authors']}>
        {props.authors ? props.authors.map((author) => author) : ''}
      </div>
    </div>
  );
};

export default BookItem;
