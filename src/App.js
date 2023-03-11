import "./App.css";
import { useState } from "react";
import MyReads from "./pages/MyReads";
import SearchBook from "./pages/SearchBook";

import { useEffect } from "react";

import { getAll, update } from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [httpError, setHttpError] = useState(null);

  const moveBookHandler = (selectedBook, selectedCategory) => {
    update(selectedBook, selectedCategory).then((res) => {
      console.log(res);
    });
    const updatedBooks = books.map(book => {
      if (book.id === selectedBook.id) {
        book.shelf = selectedCategory;
      }
      return book;
    });
    setBooks(updatedBooks);
    console.log(updatedBooks)
  };

  useEffect(() => {
    setIsLoading(true);
    const getBooks = async () => {
      const response = await getAll();
      console.log(response);
      setBooks(response);
      setIsLoading(false);
    };
    getBooks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
      console.log(error);
    });
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook />
      ) : (
        <MyReads
          books={books}
          isLoading={isLoading}
          httpError={httpError}
          moveBook={moveBookHandler}
        />
      )}
    </div>
  );
}

export default App;
