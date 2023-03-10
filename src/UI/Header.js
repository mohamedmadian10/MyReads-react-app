import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes['list-books-title']}>
      <h1>MyReads</h1>
    </div>
  );
};

export default Header;