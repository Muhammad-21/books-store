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

export const fetchBooks = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(false));
  BooksService.getBooks()
  .then((data) => {
    dispatch(setBooks(data));
  })
  // axios
  // .get(`/pizzas?${
  //   category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
  //   .then(({ data }) => {
  //     dispatch(setPizzas(data));
  // })
};


