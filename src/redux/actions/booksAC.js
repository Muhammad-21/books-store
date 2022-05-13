// import axios from "axios";
import BooksService from "../../API/BooksService";
import { SET_LOADING, SET_BOOKS} from "../reducers/booksReducer";

export const setLoading = payload => ({
  type: SET_LOADING,
  payload,
});

export const setBooks = (items) => ({
  type: SET_BOOKS,
  payload: items,
});

export const fetchBooks = (categoryId,str,sortPrice) => (dispatch) => {
  dispatch(setLoading(false));
  BooksService.getBooks(categoryId,str,sortPrice)
  .then((data) => {
    dispatch(setBooks(data));
  })
};


