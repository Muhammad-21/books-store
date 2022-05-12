export const ADD_BOOK_TO_BASKET = 'ADD_BOOK_TO_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';
export const DELETE_BOOK_ITEM = 'DELETE_BOOK_ITEM';
export const PLUS_ITEM = 'PLUS_ITEM';
export const MINUS_ITEM = 'MINUS_ITEM';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_BOOK_TO_BASKET: {
      const currentBookItems = !state.items[action.payload.name]
        ? [action.payload]
        : [...state.items[action.payload.name].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.name]: {
          items: currentBookItems,
          totalCurrentPrice: getTotalPrice(currentBookItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalCurrentPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case CLEAR_BASKET:
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      }

    case DELETE_BOOK_ITEM: {
      const newItems = {
        ...state.items,
      }
      const currentTotalPrice = newItems[action.payload].totalCurrentPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      }
    }

    case PLUS_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalCurrentPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalCurrentPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case MINUS_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalCurrentPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalCurrentPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }


    default:
      return state;
  }
};

export default basketReducer;
