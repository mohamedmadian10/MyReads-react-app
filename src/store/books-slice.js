import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    searchedBooks: [],

};
const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        replaceBooks(state, actions) {
            state.books = actions.payload.books;
        },
        moveBook(state, actions) {
            const selectedCategory = actions.payload.selectedCategory;
            const selectedBook = actions.payload.selectedBook;
            let updatedBooks = state.books.filter((book) => book.id !== selectedBook.id);
            if (selectedCategory !== "none") {
                updatedBooks = updatedBooks.concat({
                    ...selectedBook,
                    shelf: selectedCategory,
                });
                state.books = updatedBooks;
                state.selectedBook = selectedBook;
                state.selectedCategory = selectedCategory;
            }
        },
        searchBooks(state, actions) {
            state.searchedBooks = actions.payload.searchedBooks;
        },
        resetSearch(state, actions) {
            state.searchedBooks = [];
        }
    },
});

export const booksAction = booksSlice.actions;
export default booksSlice;
