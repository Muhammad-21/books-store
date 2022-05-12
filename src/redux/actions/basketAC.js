import { ADD_BOOK_TO_BASKET, CLEAR_BASKET, DELETE_BOOK_ITEM, PLUS_ITEM, MINUS_ITEM } from "../reducers/basketReducer";

export const addBookToBasket = (bookObj) => ({
  type: ADD_BOOK_TO_BASKET,
  payload: bookObj,
});

export const clearBasket = () => ({
  type: CLEAR_BASKET,
});

export const deleteBookItem = (id) => ({
  type: DELETE_BOOK_ITEM,
  payload: id,
});

export const plusItem = (id) => ({
  type: PLUS_ITEM,
  payload: id,
});

export const minusItem = (id) => ({
  type: MINUS_ITEM,
  payload: id,
});
