import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MyReads from './pages/MyReads';
import SearchBook from './pages/SearchBook';

import { getAll, update, search } from './BooksAPI';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [httpError, setHttpError] = useState(null);

  const moveBookHandler = (selectedBook, selectedCategory) => {
    update(selectedBook, selectedCategory).then((res) => {
    });
    let updatedBooks = books.filter(book => book.id !== selectedBook.id);
    if (selectedCategory !== 'none') {
      selectedBook.shelf = selectedCategory;
      updatedBooks = updatedBooks.concat(selectedBook);
    }
    setBooks(updatedBooks);
  };

  useEffect(() => {
    setIsLoading(true);
    const getBooks = async () => {
      const response = await getAll();
      setBooks(response);
      setIsLoading(false);
    };
    getBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const searchHandler = (seachedBooks) => {
    setIsLoading(true);
    if (seachedBooks.length > 0) {
      search(seachedBooks).then((res) => {
        setIsLoading(false);
        if (res.error) {
          setSearchedBooks([]);
          setHttpError('No Results, Please Search another Book.');
        } else {
          setSearchedBooks(res);
          setHttpError(null);
        }
      });
    } else {
      setSearchedBooks([]);
      setIsLoading(false);
    }
  };

  const resetSearchHandler = () => {
    setSearchedBooks([]);
  }

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <MyReads
              books={books}
              isLoading={isLoading}
              httpError={httpError}
              moveBook={moveBookHandler}
            />
          }
        ></Route>
        <Route
          path='/search'
          element={
            <SearchBook
              searchedBooks={searchedBooks}
              isLoading={isLoading}
              httpError={httpError}
              moveBook={moveBookHandler}
              onSearch={searchHandler}
              onResetSearch={resetSearchHandler}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
