import classes from './SearchInput.module.css';
const SearchInput = (props) => {

  const searchHandler = (event) => {
    props.onSearch(event.target.value);
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
