import { useEffect, useState } from "react";

import classes from "./MyReads.module.css";

import Header from "../UI/Header";
import { getAll } from "../BooksAPI";
import BooksCategory from "../components/BooksCategory";

const MyReads = (props) => {
  const categoryBooks = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];
  return (
    <div className="list-books">
      <Header />
      {props.isLoading && <p className={classes.loading}>Loading...</p>}
      {!props.isLoading && !props.httpError && (
        <div className={classes["list-books-content}"]}>
          <BooksCategory
            books={props.books}
            categoryBooks={categoryBooks}
            moveBook={props.moveBook}
          />
        </div>
      )}
      {!props.isLoading && props.httpError && (
        <p className={classes.error}>{props.httpError}</p>
      )}
      <div className="open-search">
        <a>Add a book</a>
      </div>
    </div>
  );
};

export default MyReads;
