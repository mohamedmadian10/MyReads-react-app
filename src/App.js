import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import MyReads from "./pages/MyReads";
import SearchBook from "./pages/SearchBook";

import { useDispatch } from "react-redux";

import { fetchBooks } from "./store/books-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MyReads />}></Route>
        <Route path="/search" element={<SearchBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
