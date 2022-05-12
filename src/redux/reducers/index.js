import { combineReducers } from "redux";

import filterReducer from "./filterReducer";
import booksReducer from "./booksReducer";
import basketReducer from "./basketReducer";
import balanceReducer from "./balanceReducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  books: booksReducer,
  basket: basketReducer,
  balance:balanceReducer,
})

export default rootReducer;
