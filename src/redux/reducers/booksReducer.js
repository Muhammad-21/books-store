export const SET_BOOKS = 'SET_BOOKS';
export const SET_LOADING = 'SET_LOADING';

const initialState = {
  items: [],
  isLoading: false,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        items: action.payload,
        isLoading: true,
      }
      case SET_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        }
    default:
      return state;
  }
};

export default booksReducer;
