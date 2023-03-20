import { getAll, update, search } from "../BooksAPI";
import { uiActions } from "./ui-slice";
import { booksAction } from "./books-slice";

/** Action creators */
export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch(uiActions.startLoading());
        try {
            const books = await getAll();
            dispatch(
                booksAction.replaceBooks({
                    books,
                })
            );
            dispatch(uiActions.endLoading());
        } catch (error) {
            dispatch(uiActions.endLoading());
        }
    };
};

export const updateBook = (selectedBook, selectedCategory) => {
    return async (dispatch) => {
        dispatch(uiActions.startLoading());
        try {
            const updatedBook = await update(selectedBook, selectedCategory);
            dispatch(booksAction.moveBook({ selectedBook, selectedCategory }));
            dispatch(uiActions.endLoading());
        } catch (error) {
            dispatch(uiActions.endLoading());
        }
    }
};

export const searchBook = (searchedBook) => {
    return async (dispatch) => {
        dispatch(uiActions.startLoading());
        if (searchBook.length > 0) {
            const searchedBooks = await search(searchedBook);
            dispatch(uiActions.endLoading());
            if (searchedBooks.error) {
                dispatch(booksAction.searchBooks({ searchedBooks: [] }));
            } else {
                dispatch(booksAction.searchBooks({ searchedBooks }));
            }
        } else {
            dispatch(booksAction.searchBooks([]));
            dispatch(uiActions.endLoading());
        }
    }

}
